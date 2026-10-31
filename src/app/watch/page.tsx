import type { Metadata } from "next";
import { NucleusSermonsReference } from "@/components/sections/NucleusSermonsReference";

export const metadata: Metadata = {
  title: "Watch & Listen | Sermon Hub",
  description:
    "Explore Sunday sermons, message series, scripture notes and video archives from Salvation Church Uganda in our modern sermon hub.",
};

export default function WatchPage() {
  return <NucleusSermonsReference />;
}
