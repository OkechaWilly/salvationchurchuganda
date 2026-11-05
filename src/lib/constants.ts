// ============================================================
// SALVATION CHURCH UGANDA — Brand constants
// ============================================================

export const CHURCH_NAME = "Salvation Church Uganda";
export const CHURCH_TAGLINE = "A community of believers, rooted in faith, serving Uganda.";

export const CHURCH_LOCATION = {
  address: "Namulanda, near Kajjansi / Entebbe Road",
  city: "Wakiso District, Uganda",
  googleMapsUrl: "https://maps.app.goo.gl/VqWqWTp2c9S4AYq89",
  embedUrl:
    "https://maps.google.com/maps?q=Namulanda+near+Kajjansi+Entebbe+Road+Uganda&output=embed",
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
  youtubeVideos: "https://www.youtube.com/@salvationchurchug/videos",
  // facebook: "[PENDING]",
  // tiktok: "[PENDING]",
};

// Confirmed recurring church gatherings
export const WEEKLY_GATHERINGS = [
  { day: "Sunday", name: "Sunday Service", time: "10:00 AM – 1:00 PM" },
  { day: "Wednesday", name: "Bible Study", time: "6:00 PM – 8:00 PM" },
  { day: "Thursday", name: "Intercession Prayer", time: "6:00 PM – 8:00 PM" },
  { day: "Friday", name: "Corporate Prayer", time: "6:00 PM – 7:00 PM" },
] as const;

export const MONTHLY_GATHERINGS = [
  { frequency: "Every first Saturday", name: "Evangelism" },
  { frequency: "Every second Saturday", name: "Baptism" },
  { frequency: "Every second Sunday", name: "Membership" },
  { frequency: "Every last Friday", name: "Overnight" },
] as const;

export const SERMON_YOUTUBE_CHANNEL_ID = ""; // Fill in after confirmation

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Watch & Listen", href: "/watch" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Connect", href: "/connect" },
] as const;

