import type { Metadata } from "next";
import { WatchSermonLibrary } from "@/components/sections/WatchSermonLibrary";

export const metadata: Metadata = {
  title: "Watch & Listen",
  description: "Watch recent messages and sermons from Salvation Church Uganda, directly on our website.",
};

export default function WatchPage() {
  return <WatchSermonLibrary />;
}
