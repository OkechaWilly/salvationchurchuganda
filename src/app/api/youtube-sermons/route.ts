import { NextResponse } from "next/server";

const CHANNEL_ID = "UCR0LiLT-5NUp4OM5xL2I7ig";
const MIN_SERMON_DURATION_SECONDS = 180;

// Add confirmed Shorts here if any pass the duration rule.
const EXCLUDED_VIDEO_IDS = new Set<string>([]);

type Sermon = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  channelTitle: string;
  durationSeconds?: number;
};

function decodeXml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function readTag(source: string, tag: string) {
  const opening = "<" + tag;
  const start = source.indexOf(">", source.indexOf(opening));
  const end = source.indexOf("</" + tag + ">", start + 1);
  if (start < 0 || end < 0) return "";
  return source.slice(start + 1, end).trim();
}

function parseFeed(xml: string): Sermon[] {
  const entries = xml.split("<entry>").slice(1);
  return entries
    .map((entry) => {
      const id = readTag(entry, "yt:videoId");
      const title = decodeXml(readTag(entry, "title"));
      const publishedAt = readTag(entry, "published");
      const channelTitle = decodeXml(readTag(entry, "name")) || "Salvation Church Uganda";

      if (!id || !title || !publishedAt) return null;
      return {
        id,
        title,
        publishedAt,
        thumbnail: "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg",
        channelTitle,
      };
    })
    .filter((video): video is Sermon => video !== null);
}

function parseIsoDuration(value: string) {
  const match = value.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!match) return 0;
  return Number(match[1] ?? 0) * 3600
    + Number(match[2] ?? 0) * 60
    + Number(match[3] ?? 0);
}

async function addDurations(videos: Sermon[], apiKey: string) {
  const ids = videos.map((video) => video.id);
  const url = new URL("https://www.googleapis.com/youtube/v3/videos");
  url.searchParams.set("part", "contentDetails");
  url.searchParams.set("id", ids.join(","));
  url.searchParams.set("key", apiKey);

  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) throw new Error("YouTube duration lookup failed");

  const data = (await response.json()) as {
    items?: Array<{ id: string; contentDetails?: { duration?: string } }>;
  };
  const durations = new Map(
    (data.items ?? []).map((item) => [
      item.id,
      parseIsoDuration(item.contentDetails?.duration ?? ""),
    ])
  );

  return videos
    .map((video) => ({
      ...video,
      durationSeconds: durations.get(video.id) ?? 0,
    }))
    .filter((video) =>
      video.durationSeconds > MIN_SERMON_DURATION_SECONDS
      && !EXCLUDED_VIDEO_IDS.has(video.id)
    );
}

export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "The sermon library needs its YouTube API key configured before videos can be filtered by duration." },
        { status: 503 }
      );
    }

    const url = "https://www.youtube.com/feeds/videos.xml?channel_id=" + CHANNEL_ID;
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; SalvationChurchUganda/1.0)" },
    });
    if (!response.ok) throw new Error("YouTube channel feed unavailable");

    const recentVideos = parseFeed(await response.text())
      .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
      .slice(0, 15);

    const videos = await addDurations(recentVideos, apiKey);

    return NextResponse.json(
      { videos },
      { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } }
    );
  } catch {
    return NextResponse.json(
      { error: "We couldn't load the church's sermon feed just now. Please try again shortly." },
      { status: 502 }
    );
  }
}
