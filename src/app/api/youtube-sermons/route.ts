import { NextResponse } from "next/server";

// Public RSS feeds: no YouTube API key or exposed credentials required.
const PLAYLIST_IDS = [
  "PLSB9Ow_MK0JM", // Marriage Sermon Series
  "PLpuONVkZDjiF2EVgKsKPcEGy-rJe9z6fv", // Sunday Service Sermons
];

type Sermon = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  channelTitle: string;
};

function decodeXml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function parseFeed(xml: string): Sermon[] {
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
    .map(([_, entry]) => {
      const read = (tag: string) =>
        entry.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))?.[1]?.trim() ?? "";
      const id = read("yt:videoId");
      const title = decodeXml(read("title"));
      const publishedAt = read("published");
      const channelTitle = decodeXml(read("name")) || "Salvation Church Uganda";

      if (!id || !title || !publishedAt) return null;
      return {
        id,
        title,
        publishedAt,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        channelTitle,
      };
    })
    .filter((video): video is Sermon => video !== null);
}

export async function GET() {
  try {
    const feeds = await Promise.all(
      PLAYLIST_IDS.map(async (playlistId) => {
        const url = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
        const response = await fetch(url, {
          next: { revalidate: 3600 },
          headers: { "User-Agent": "Mozilla/5.0 (compatible; SalvationChurchUganda/1.0)" },
        });
        if (!response.ok) throw new Error("YouTube feed unavailable");
        return parseFeed(await response.text());
      })
    );

    const unique = new Map<string, Sermon>();
    for (const video of feeds.flat()) {
      if (!unique.has(video.id)) unique.set(video.id, video);
    }

    const videos = [...unique.values()]
      .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
      .slice(0, 13);

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
