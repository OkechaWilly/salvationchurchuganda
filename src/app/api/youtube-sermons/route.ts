import { NextResponse } from "next/server";

const CHANNEL_ID = "UCR0LiLT-5NUp4OM5xL2I7ig";

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

export async function GET() {
  try {
    const url = "https://www.youtube.com/feeds/videos.xml?channel_id=" + CHANNEL_ID;
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; SalvationChurchUganda/1.0)" },
    });
    if (!response.ok) throw new Error("YouTube channel feed unavailable");

    const videos = parseFeed(await response.text())
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
