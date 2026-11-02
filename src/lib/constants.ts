// ============================================================
// SALVATION CHURCH UGANDA — Brand constants
// ============================================================

export const CHURCH_NAME = "Salvation Church Uganda";
export const CHURCH_TAGLINE = "A community of believers, rooted in faith, serving Uganda.";

export const CHURCH_LOCATION = {
  address: "Namulanda, Entebbe Road",
  city: "Uganda",
  googleMapsUrl:
    "https://maps.google.com/?q=Namulanda+Entebbe+Road+Uganda",
  embedUrl:
    "https://maps.google.com/maps?q=Namulanda+Entebbe+Road+Uganda&output=embed",
};

export const CHURCH_CONTACT = {
  phone: "+256 774 707220",
  phoneTel: "+256774707220",
  alternatePhone: "+256 780 936550",
  alternatePhoneTel: "+256780936550",
  // email: "[PENDING — awaiting leadership confirmation]",
};

export const CHURCH_SOCIAL = {
  youtube: "https://www.youtube.com/@salvationchurchug",
  // facebook: "[PENDING]",
  // tiktok: "[PENDING]",
};

// Service times — PLACEHOLDER: must be confirmed by leadership
export const SERVICE_TIMES: { day: string; time: string; label: string }[] = [
  // { day: "Sunday", time: "TBD", label: "Main Service" },
];

export const SERMON_YOUTUBE_CHANNEL_ID = ""; // Fill in after confirmation

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Watch & Listen", href: "/watch" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Connect", href: "/connect" },
] as const;

