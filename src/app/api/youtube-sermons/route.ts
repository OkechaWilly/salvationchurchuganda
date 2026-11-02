import { NextResponse } from "next/server";

const CHANNEL_HANDLE = "salvationchurchug";
const YOUTUBE_API = "https://www.googleapis.com/youtube/v3";

type YouTubePlaylistItem = {
  snippet?: {
    title?: string;
    publishedAt?: string;
    channelTitle?: string;
    resourceId?: { videoId?: string };
    thumbnails?: {
      high?: { url?: string };
      medium?: { url?: string };
      default?: { url?: string };
    };
  };
};

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "The church video feed is not connected yet. Add YOUTUBE_API_KEY to the Vercel project environment variables." },
      { status: 503 }
    );
  }

  try {
    const channelUrl = new URL(`${YOUTUBE_API}/channels`);
    channelUrl.search = new URLSearchParams({
      part: "contentDetails",
      forHandle: CHANNEL_HANDLE,
      key: apiKey,
    }).toString();

    const channelResponse = await fetch(channelUrl, { next: { revalidate: 3600 } });
    if (!channelResponse.ok) throw new Error("YouTube channel lookup failed.");
    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsPlaylistId) throw new Error("Could not find the church channel's uploads playlist.");

    const playlistUrl = new URL(`${YOUTUBE_API}/playlistItems`);
    playlistUrl.search = new URLSearchParams({
      part: "snippet",
      playlistId: uploadsPlaylistId,
      maxResults: "13",
      key: apiKey,
    }).toString();

    const playlistResponse = await fetch(playlistUrl, { next: { revalidate: 900 } });
    if (!playlistResponse.ok) throw new Error("Could not retrieve recent church videos.");
    const playlistData = await playlistResponse.json();

    const videos = ((playlistData.items ?? []) as YouTubePlaylistItem[])
      .map((item) => {
        const snippet = item.snippet;
        const id = snippet?.resourceId?.videoId;
        const thumbnail =
          snippet?.thumbnails?.high?.url ??
          snippet?.thumbnails?.medium?.url ??
          snippet?.thumbnails?.default?.url;
        if (!id || !thumbnail || !snippet?.title || !snippet.publishedAt) return null;
        return {
          id,
          title: snippet.title,
          publishedAt: snippet.publishedAt,
          thumbnail,
          channelTitle: snippet.channelTitle ?? "Salvation Church Uganda",
        };
      })
      .filter((video): video is NonNullable<typeof video> => video !== null);

    return NextResponse.json({ videos }, {
      headers: { "Cache-Control": "s-maxage=900, stale-while-revalidate=3600" },
    });
  } catch {
    return NextResponse.json(
      { error: "We couldn't load the church's recent videos just now. Please try again later." },
      { status: 502 }
    );
  }
}
