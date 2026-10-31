"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  Search, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  User, 
  X,
  Sparkles
} from "lucide-react";
import { CHURCH_SOCIAL } from "@/lib/constants";

// Sample structured sermon data modelled exactly from Nucleus references
interface Sermon {
  id: string;
  title: string;
  series: string;
  speaker: string;
  date: string;
  thumbnail: string;
  duration?: string;
  scripture?: string;
  topic?: string;
  summary: string;
  youtubeUrl?: string;
}

const ALL_SERMONS: Sermon[] = [
  {
    id: "hurt-by-community",
    title: "Hurt By Community",
    series: "Wounded",
    speaker: "Pastor Nijel Rawlins",
    date: "6/4/2026",
    thumbnail: "/images/worship-community.jpg",
    scripture: "Psalm 147:3",
    topic: "Healing & Forgiveness",
    summary: "Have you been hurt by community? How do you respond when you're wounded by the people closest to you? How can you begin the path toward genuine freedom and forgiveness?",
  },
  {
    id: "hurt-by-authority",
    title: "Hurt By Authority",
    series: "Wounded",
    speaker: "Pastor Nijel Rawlins",
    date: "5/28/2026",
    thumbnail: "/images/community-gathering.jpg",
    scripture: "Romans 13:1-2",
    topic: "Spiritual Health",
    summary: "Navigating the deep friction of broken trust with leadership while keeping your heart soft and aligned with God's peace.",
  },
  {
    id: "hurt-by-a-friend",
    title: "Hurt By A Friend",
    series: "Wounded",
    speaker: "Pastor Nijel Rawlins",
    date: "5/21/2026",
    thumbnail: "/images/faith-peace.jpg",
    scripture: "Proverbs 18:24",
    topic: "Relationships",
    summary: "Reconciling the sting of betrayal with Christ's unconditional love and establishing healthy boundaries.",
  },
  {
    id: "hurt-by-enemies",
    title: "Hurt By Enemies",
    series: "Wounded",
    speaker: "Pastor Nijel Rawlins",
    date: "5/14/2026",
    thumbnail: "/images/cross-sky.jpg",
    scripture: "Matthew 5:44",
    topic: "Spiritual Warfare",
    summary: "How to pray for and bless those who oppose you, unleashing supernatural breakthrough in your spirit.",
  },
  {
    id: "re-evaluate",
    title: "Re–Evaluate",
    series: "Reset",
    speaker: "Pastor Nijel Rawlins",
    date: "3/19/2026",
    thumbnail: "/images/worship-community.jpg",
    scripture: "Lamentations 3:40",
    topic: "Spiritual Growth",
    summary: "Taking an honest personal inventory of our spiritual foundations and realigning our daily walk with God's priorities.",
  },
  {
    id: "re-claim",
    title: "Re–Claim",
    series: "Reset",
    speaker: "Pastor Nijel Rawlins",
    date: "3/26/2026",
    thumbnail: "/images/cross-sky.jpg",
    scripture: "Joel 2:25",
    topic: "Faith & Restoration",
    summary: "Reclaiming the ground the enemy tried to steal: your peace, your family altar, and your joy in the Lord.",
  },
  {
    id: "re-engage",
    title: "Re–Engage",
    series: "Reset",
    speaker: "Pastor Nijel Rawlins",
    date: "4/2/2026",
    thumbnail: "/images/community-gathering.jpg",
    scripture: "Hebrews 10:24-25",
    topic: "Community & Fellowship",
    summary: "Stepping out of isolation and back into the vibrancy of gathering, serving, and spurring one another on.",
  },
  {
    id: "rejuvenate",
    title: "Rejuvenate",
    series: "Reset",
    speaker: "Pastor Nijel Rawlins",
    date: "4/9/2026",
    thumbnail: "/images/faith-peace.jpg",
    scripture: "Isaiah 40:31",
    topic: "Rest & Renewal",
    summary: "Those who wait on the Lord shall renew their strength. Discover true sabbath rest for your spirit and mind.",
  },
];

type NavTab = "home" | "playlists" | "scripture" | "speakers" | "topics";

export function NucleusSermonsReference() {
  const [activeTab, setActiveTab] = useState<NavTab>("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"new-to-old" | "old-to-new">("new-to-old");
  const [activeModalSermon, setActiveModalSermon] = useState<Sermon | null>(null);

  // Featured sermon (Top hero of Nucleus)
  const featured = ALL_SERMONS[0];

  // Filtering
  const filteredSermons = ALL_SERMONS.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.speaker.toLowerCase().includes(q) ||
      s.series.toLowerCase().includes(q) ||
      s.topic?.toLowerCase().includes(q) ||
      s.scripture?.toLowerCase().includes(q)
    );
  });

  // Grouped by Playlist/Series (for the Playlists view)
  const seriesGroups = [
    {
      name: "Reset",
      sermons: ALL_SERMONS.filter((s) => s.series === "Reset"),
    },
    {
      name: "Wounded",
      sermons: ALL_SERMONS.filter((s) => s.series === "Wounded"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#111827] font-sans antialiased selection:bg-black selection:text-white">
      
      {/* ── TOP HEADER (Faithful to LA / Nucleus Reference) ── */}
      <header className="px-6 py-5 sm:px-12 flex items-center justify-between max-w-7xl mx-auto">
        {/* Church / Platform Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-color.jpg"
            alt="Salvation Church Uganda"
            width={150}
            height={50}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Minimal Toggle / Menu Icon like reference */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-xs font-semibold text-gray-500 hover:text-black uppercase tracking-wider hidden sm:inline-block"
          >
            ← Back to Church Home
          </Link>
          <div className="flex items-center gap-2 text-xs font-medium text-gray-800 bg-white border border-gray-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
            <span>Menu</span>
            <div className="w-7 h-4 bg-black rounded-full relative cursor-pointer flex items-center px-0.5">
              <div className="w-3 h-3 bg-white rounded-full ml-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* ── FEATURED HERO STAGE (Exact Nucleus Reference file-p6vimNV4lr.jpg) ── */}
      <section className="px-4 sm:px-8 py-8 sm:py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Featured Video Player Box (Rounded, Soft Elevation Glow) */}
          <div className="lg:col-span-7">
            <div 
              onClick={() => setActiveModalSermon(featured)}
              className="relative aspect-[16/9.5] w-full bg-black rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] cursor-pointer group"
            >
              <Image
                src={featured.thumbnail}
                alt={featured.title}
                fill
                priority
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />

              {/* Big Circular Play Button (Identical to Nucleus) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/90 bg-black/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-black/40 transition-all shadow-lg">
                  <Play size={26} fill="white" className="ml-1 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Featured Content Right Panel */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Featured
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-black leading-[1.1]">
              {featured.title}
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md line-clamp-3">
              {featured.summary}
            </p>
            <p className="text-xs text-gray-500 font-medium">
              <span className="underline cursor-pointer">{featured.speaker}</span> · {featured.date}
            </p>

            {/* View Media Button (Solid Pill/Rounded Black Button) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveModalSermon(featured)}
                className="bg-black hover:bg-neutral-800 text-white font-medium text-sm px-7 py-3 rounded-xl transition-all shadow-sm active:scale-98"
              >
                View Media
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── WHITE BACKGROUND LOWER CANVAS (Matches Nucleus Sub-Nav & Grid) ── */}
      <main className="bg-white border-t border-gray-100 min-h-[600px] pt-8 pb-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* ── NUCLEUS PILL NAVIGATION BAR ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Left Pill Group: Home | Playlists | Scripture | Speakers | Topics */}
            <div className="inline-flex items-center bg-[#F3F4F6] p-1 rounded-xl text-xs font-semibold text-gray-600">
              <button
                type="button"
                onClick={() => setActiveTab("home")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "home" 
                    ? "bg-black text-white shadow-xs" 
                    : "hover:text-black"
                }`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("playlists")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "playlists" 
                    ? "bg-black text-white shadow-xs" 
                    : "hover:text-black"
                }`}
              >
                Playlists
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("scripture")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "scripture" 
                    ? "bg-black text-white shadow-xs" 
                    : "hover:text-black"
                }`}
              >
                Scripture
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("speakers")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "speakers" 
                    ? "bg-black text-white shadow-xs" 
                    : "hover:text-black"
                }`}
              >
                Speakers
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("topics")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "topics" 
                    ? "bg-black text-white shadow-xs" 
                    : "hover:text-black"
                }`}
              >
                Topics
              </button>
            </div>

            {/* Right Controls: Sort Dropdown + Search Button */}
            <div className="flex items-center gap-3">
              {/* Sort Pill */}
              <div className="flex items-center gap-1.5 bg-[#F3F4F6] px-3.5 py-2 rounded-xl text-xs font-medium text-gray-700">
                <span>Sort:</span>
                <button
                  type="button"
                  onClick={() => setSortOrder(sortOrder === "new-to-old" ? "old-to-new" : "new-to-old")}
                  className="font-semibold text-black flex items-center gap-1"
                >
                  {sortOrder === "new-to-old" ? "Date (New > Old)" : "Date (Old > New)"}
                  <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                    <ChevronDown size={10} />
                  </div>
                </button>
              </div>

              {/* Search Toggle Pill */}
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  searchOpen ? "bg-black text-white" : "bg-[#F3F4F6] text-gray-700 hover:text-black"
                }`}
              >
                <Search size={13} />
                <span>Search</span>
              </button>
            </div>

          </div>

          {/* Expandable Search Input */}
          {searchOpen && (
            <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
              <input
                type="text"
                autoFocus
                placeholder="Type to filter by title, speaker, series, or Scripture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-3.5 text-xs text-gray-400 hover:text-black"
                >
                  Clear
                </button>
              )}
            </div>
          )}

          {/* ── TAB 1: HOME GRID (file-S7hKejUdnC.png layout) ── */}
          {activeTab === "home" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredSermons.map((sermon) => (
                  <article
                    key={sermon.id}
                    onClick={() => setActiveModalSermon(sermon)}
                    className="cursor-pointer group flex flex-col space-y-2.5"
                  >
                    {/* 16:9 Thumbnail Box with Rounded-xl (Nucleus style) */}
                    <div className="relative aspect-[16/10] w-full bg-black rounded-xl overflow-hidden shadow-xs">
                      <Image
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        fill
                        className="object-cover group-hover:scale-104 transition-transform duration-400"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    </div>

                    {/* Metadata line directly below thumbnail */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <h3 className="font-bold text-sm text-black group-hover:text-[#CC1120] transition-colors leading-snug">
                          {sermon.title}
                        </h3>
                        <p className="text-[11px] text-gray-500 font-medium">
                          {sermon.speaker} · {sermon.date}
                        </p>
                      </div>

                      {/* Small Circular Down Arrow / Action Icon (Identical to Nucleus) */}
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-black group-hover:text-white transition-colors flex-shrink-0">
                        <ChevronDown size={12} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB 2: PLAYLISTS HORIZONTAL CAROUSEL BARS (file-pTP0lizvXT.jpg layout) ── */}
          {activeTab === "playlists" && (
            <div className="space-y-12">
              {seriesGroups.map((group) => (
                <section
                  key={group.name}
                  className="bg-[#FAF9F6] border border-gray-200/70 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs"
                >
                  {/* Playlist Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-gray-200 flex items-center justify-center text-gray-700">
                        <div className="w-3.5 h-2.5 border-t-2 border-b-2 border-current" />
                      </div>
                      <h2 className="text-2xl font-bold tracking-tight text-black">
                        {group.name}
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={() => { setActiveTab("home"); setSearchQuery(group.name); }}
                      className="bg-white hover:bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-800 px-4 py-2 rounded-lg transition-colors shadow-xs"
                    >
                      View Playlist
                    </button>
                  </div>

                  {/* 4-Column Card Row like Screenshot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {group.sermons.map((sermon) => (
                      <div
                        key={sermon.id}
                        onClick={() => setActiveModalSermon(sermon)}
                        className="cursor-pointer group space-y-2"
                      >
                        <div className="relative aspect-[16/10] bg-black rounded-lg overflow-hidden shadow-xs">
                          <Image
                            src={sermon.thumbnail}
                            alt={sermon.title}
                            fill
                            className="object-cover group-hover:scale-104 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-xs text-black group-hover:text-[#CC1120] transition-colors truncate max-w-[170px]">
                              {sermon.title}
                            </h4>
                            <p className="text-[10px] text-gray-500">
                              {sermon.speaker} · {sermon.date}
                            </p>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-black group-hover:text-white transition-colors">
                            <ChevronDown size={10} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Carousel Prev/Next Buttons (Bottom-left like Nucleus screenshot) */}
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-100"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      type="button"
                      className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center hover:bg-neutral-800"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* ── TAB 3: SCRIPTURE & TOPICS (Clean Light Table/Pill Directory) ── */}
          {(activeTab === "scripture" || activeTab === "topics" || activeTab === "speakers") && (
            <div className="py-8 text-center max-w-xl mx-auto space-y-4">
              <h3 className="text-xl font-bold text-black capitalize">
                Browse by {activeTab}
              </h3>
              <p className="text-xs text-gray-500">
                Select any {activeTab.slice(0, -1)} below to instantly filter all associated sermons:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {Array.from(new Set(ALL_SERMONS.map((s) => activeTab === "scripture" ? s.scripture : activeTab === "speakers" ? s.speaker : s.topic))).map((item) => (
                  item && (
                    <button
                      key={item}
                      type="button"
                      onClick={() => { setActiveTab("home"); setSearchQuery(item); }}
                      className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-black hover:text-white text-xs font-medium text-gray-800 transition-colors"
                    >
                      {item}
                    </button>
                  )
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* ── NUCLEUS "NEXT STEPS" FLOATING DOCK BUTTON (as seen bottom-right in screenshot) ── */}
      <Link
        href="/visit"
        className="fixed bottom-6 right-6 z-40 bg-[#1F2937] hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all text-center leading-tight"
      >
        <span>Next</span>
        <span>Steps</span>
      </Link>

      {/* ── ACTIVE SERMON MODAL / MEDIA VIEWER ── */}
      {activeModalSermon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl space-y-4 border border-gray-100">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#CC1120]">
                  {activeModalSermon.series}
                </span>
                <h3 className="text-lg font-bold text-black">
                  {activeModalSermon.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalSermon(null)}
                className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Video Viewport */}
            <div className="aspect-video bg-black relative flex items-center justify-center text-white">
              <div className="text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#CC1120] text-white flex items-center justify-center mx-auto shadow-md">
                  <Play size={24} fill="white" className="ml-1" />
                </div>
                <p className="text-sm font-semibold">Streaming Player</p>
                <a
                  href={CHURCH_SOCIAL.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Watch on YouTube Channel →
                </a>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-3 text-sm text-gray-600">
              <p className="text-xs text-gray-500 font-medium">
                Speaker: <strong className="text-black">{activeModalSermon.speaker}</strong> · Date: {activeModalSermon.date} · Scripture: <strong className="text-black">{activeModalSermon.scripture}</strong>
              </p>
              <p className="leading-relaxed">
                {activeModalSermon.summary}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

