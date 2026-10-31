"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Play, 
  Search, 
  Filter, 
  Download, 
  Share2, 
  Headphones, 
  BookOpen, 
  Calendar, 
  User, 
  Tag, 
  ChevronRight,
  ExternalLink,
  SlidersHorizontal,
  Bookmark
} from "lucide-react";
import { CHURCH_SOCIAL } from "@/lib/constants";

// YouTube Icon Helper
function YoutubeIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

// Sample structured sermon data modelled like Nucleus Sermons Hub
interface Sermon {
  id: string;
  title: string;
  series: string;
  speaker: string;
  date: string;
  duration: string;
  scripture: string;
  topic: string;
  summary: string;
  youtubeId?: string;
  hasAudio: boolean;
  hasNotes: boolean;
}

const SERMONS_DATA: Sermon[] = [
  {
    id: "hand-of-god-blessings-pt1",
    title: "The Hand of God's Blessings — Part 1",
    series: "The Hand of God's Blessings",
    speaker: "Pastor Nijel Rawlins",
    date: "Sunday, October 2026",
    duration: "48 min",
    scripture: "1 Chronicles 4:10",
    topic: "Faith & Favor",
    summary: "Discover what happens when you invite the hand of the Lord to guide and enlarge your life, standing on His promises.",
    hasAudio: true,
    hasNotes: true,
  },
  {
    id: "discerning-gods-voice",
    title: "Hearing and Discerning God's Voice in Noise",
    series: "Walking in Wisdom",
    speaker: "Pastor Nijel Rawlins",
    date: "Sunday, October 2026",
    duration: "52 min",
    scripture: "John 10:27-28",
    topic: "Spiritual Growth",
    summary: "In a world of constant distractions, how do we tune our spiritual ears to the gentle guidance of the Holy Spirit?",
    hasAudio: true,
    hasNotes: true,
  },
  {
    id: "building-family-altar",
    title: "Building an Unshakeable Family Altar",
    series: "Strong Families",
    speaker: "Pastor Nijel Rawlins",
    date: "Sunday, September 2026",
    duration: "45 min",
    scripture: "Joshua 24:15",
    topic: "Family & Relationships",
    summary: "Practical biblical principles for nurturing faith, honor, and enduring love within the home.",
    hasAudio: true,
    hasNotes: false,
  },
  {
    id: "unwavering-hope",
    title: "Holding Fast to Unwavering Hope",
    series: "Faith That Stands",
    speaker: "Pastor Nijel Rawlins",
    date: "Sunday, September 2026",
    duration: "50 min",
    scripture: "Hebrews 10:23",
    topic: "Hope & Perseverance",
    summary: "When storms test our foundations, God's faithfulness remains our anchor. A message of courage and breakthrough.",
    hasAudio: true,
    hasNotes: true,
  },
];

const PLAYLISTS = [
  { name: "All Messages", count: SERMONS_DATA.length },
  { name: "The Hand of God's Blessings", count: 3 },
  { name: "Strong Families", count: 4 },
  { name: "Walking in Wisdom", count: 5 },
  { name: "Faith That Stands", count: 6 },
];

const TOPICS = ["All Topics", "Faith & Favor", "Spiritual Growth", "Family & Relationships", "Hope & Perseverance", "Prayer"];

export function NucleusSermonHub() {
  const [selectedPlaylist, setSelectedPlaylist] = useState("All Messages");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"video" | "notes" | "scripture">("video");

  // Filtering
  const filteredSermons = SERMONS_DATA.filter((sermon) => {
    const matchesSearch = 
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.scripture.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlaylist = selectedPlaylist === "All Messages" || sermon.series === selectedPlaylist;
    const matchesTopic = selectedTopic === "All Topics" || sermon.topic === selectedTopic;
    return matchesSearch && matchesPlaylist && matchesTopic;
  });

  const featuredSermon = SERMONS_DATA[0];

  return (
    <div className="bg-[#FAF9F6] text-[#1A1917] min-h-screen">
      
      {/* ── 1. NUCLEUS-STYLE HERO / INFORMATION SECTION ── */}
      <section className="bg-[#1A1917] text-white pt-28 pb-14 md:pt-36 md:pb-16 border-b border-[#2C2B28] relative overflow-hidden">
        {/* Subtle accent glow */}
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#CC1120]/15 blur-[120px] pointer-events-none rounded-full"
          aria-hidden="true" 
        />
        
        <div className="container-content relative z-10 space-y-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CC1120]/15 border border-[#CC1120]/30 text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#CC1120] animate-pulse" />
            Nucleus Sermon Hub · Salvation Church Uganda
          </div>

          <h1 className="font-display text-display-xl text-white tracking-tight">
            Watch, Listen &amp; Grow in God&apos;s Word
          </h1>

          <p className="text-[#B0AFA9] text-base md:text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            Access our complete library of messages, sermon series, scripture references,
            and companion study notes.
          </p>

          {/* Quick Podcast / Distribution Pills (Nucleus Pattern) */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <a
              href={CHURCH_SOCIAL.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C2B28] hover:bg-[#CC1120] text-white text-xs font-medium transition-all duration-200 border border-[#44433F]"
            >
              <YoutubeIcon size={14} />
              Subscribe on YouTube
            </a>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C2B28]/70 text-[#8C8B85] text-xs font-medium border border-[#3A3935]">
              <Headphones size={13} />
              Audio Podcast Coming Soon
            </span>
          </div>

          {/* ── NUCLEUS SEARCH BAR ── */}
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="relative flex items-center shadow-lg rounded-xl overflow-hidden border border-[#44433F] bg-[#111110] focus-within:border-[#CC1120] transition-colors">
              <Search className="absolute left-4 text-[#8C8B85]" size={18} aria-hidden="true" />
              <input
                type="text"
                placeholder="Search by scripture, speaker, series, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-transparent text-sm text-white placeholder:text-[#6B6A65] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mr-4 text-xs text-[#8C8B85] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FEATURED SERMON "ROOM" (Hero Presentation Layout) ── */}
      <section className="container-content py-10 md:py-14">
        <div className="bg-[#1A1917] text-white rounded-2xl overflow-hidden shadow-xl border border-[#2C2B28]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Player Viewport (16:9 Aspect Embed) */}
            <div className="lg:col-span-7 bg-black flex flex-col justify-center relative aspect-video lg:aspect-auto">
              {/* Replace with real YouTube iframe when video ID is available */}
              <div className="relative w-full h-full min-h-[320px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-t from-black/80 to-transparent">
                <div className="w-16 h-16 rounded-full bg-[#CC1120] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer mb-3">
                  <Play size={24} className="ml-1" fill="currentColor" />
                </div>
                <p className="text-xs uppercase tracking-widest text-[#B0AFA9] font-medium">Click to Play Message</p>
                <p className="text-sm font-semibold text-white mt-1">{featuredSermon.title}</p>
                
                {/* External YouTube link badge */}
                <a
                  href={CHURCH_SOCIAL.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white bg-black/60 px-3 py-1.5 rounded-md backdrop-blur-sm"
                >
                  <YoutubeIcon size={14} />
                  Open in YouTube <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Nucleus Sermon Room Meta & Companion Drawer */}
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-[#161514]">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#CC1120] text-white text-[11px] font-bold uppercase tracking-wider">
                    Latest Sunday Message
                  </span>
                  <span className="text-xs text-[#8C8B85]">{featuredSermon.duration}</span>
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-semibold leading-snug text-white">
                  {featuredSermon.title}
                </h2>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#B0AFA9]">
                  <span className="flex items-center gap-1.5">
                    <User size={13} className="text-[#CC1120]" />
                    {featuredSermon.speaker}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#CC1120]" />
                    {featuredSermon.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen size={13} className="text-[#CC1120]" />
                    {featuredSermon.scripture}
                  </span>
                </div>

                <p className="text-sm text-[#D1D0CA] leading-relaxed">
                  {featuredSermon.summary}
                </p>

                {/* Nucleus Modular Tabs: Video | Notes | Scripture */}
                <div className="pt-2 border-t border-[#2C2B28]">
                  <div className="flex items-center gap-2 border-b border-[#2C2B28] pb-2 text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => setActiveTab("video")}
                      className={`pb-1 px-1 transition-colors ${activeTab === "video" ? "text-[#CC1120] border-b-2 border-[#CC1120] font-semibold" : "text-[#8C8B85] hover:text-white"}`}
                    >
                      Overview
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("scripture")}
                      className={`pb-1 px-1 transition-colors ${activeTab === "scripture" ? "text-[#CC1120] border-b-2 border-[#CC1120] font-semibold" : "text-[#8C8B85] hover:text-white"}`}
                    >
                      Scripture Reference
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("notes")}
                      className={`pb-1 px-1 transition-colors ${activeTab === "notes" ? "text-[#CC1120] border-b-2 border-[#CC1120] font-semibold" : "text-[#8C8B85] hover:text-white"}`}
                    >
                      Study Notes
                    </button>
                  </div>

                  <div className="pt-3 text-xs text-[#B0AFA9] min-h-[60px]">
                    {activeTab === "video" && (
                      <p>Series: <span className="text-white font-medium">{featuredSermon.series}</span> · Topic: <span className="text-white font-medium">{featuredSermon.topic}</span></p>
                    )}
                    {activeTab === "scripture" && (
                      <p className="italic text-[#FAF9F6]">
                        &ldquo;Jabez cried out to the God of Israel, &lsquo;Oh, that you would bless me and enlarge my territory! Let your hand be with me...&rsquo;&rdquo; — {featuredSermon.scripture}
                      </p>
                    )}
                    {activeTab === "notes" && (
                      <p>Sermon study outlines, key points, and group reflection questions can be downloaded or reviewed here.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons (Nucleus Pattern) */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#2C2B28]">
                <a
                  href={CHURCH_SOCIAL.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 bg-[#CC1120] hover:bg-[#A50E1A] text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors"
                >
                  <Play size={14} />
                  Watch Video
                </a>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-[#44433F] text-xs font-medium text-[#FAF9F6] hover:bg-[#2C2B28] transition-colors"
                  onClick={() => alert("Sermon audio will be available once podcast feeds are linked!")}
                >
                  <Headphones size={13} />
                  Listen
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-[#44433F] text-xs font-medium text-[#FAF9F6] hover:bg-[#2C2B28] transition-colors"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: featuredSermon.title, url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }
                  }}
                >
                  <Share2 size={13} />
                  Share
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FILTER & BROWSE ARCHIVE (Nucleus Playlists & Topics Architecture) ── */}
      <section className="container-content pb-20">
        
        {/* Filter bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 border-b border-[#E8E7E1]">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-[#CC1120]" />
            <h3 className="font-sans font-bold text-base text-[#1A1917]">
              Browse Library ({filteredSermons.length} Messages)
            </h3>
          </div>

          {/* Pill selector for Topics */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 max-w-2xl">
            {TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedTopic === topic
                    ? "bg-[#1A1917] text-white shadow-sm"
                    : "bg-[#F2F1EB] text-[#6B6A65] hover:bg-[#E8E7E1] hover:text-[#1A1917]"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Layout: Sidebar Playlists + Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Nucleus "Floors" Playlist Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-[#FAF9F6] p-5 rounded-xl border border-[#E8E7E1] space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C8B85] flex items-center gap-2">
                <Bookmark size={13} className="text-[#CC1120]" />
                Sermon Playlists
              </h4>
              <ul className="space-y-1.5" role="list">
                {PLAYLISTS.map((pl) => (
                  <li key={pl.name}>
                    <button
                      type="button"
                      onClick={() => setSelectedPlaylist(pl.name)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                        selectedPlaylist === pl.name
                          ? "bg-[#F5E5E7] text-[#CC1120] font-semibold"
                          : "text-[#44433F] hover:bg-[#F2F1EB] hover:text-[#1A1917]"
                      }`}
                    >
                      <span className="truncate pr-2">{pl.name}</span>
                      <span className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#E8E7E1] text-[#8C8B85]">
                        {pl.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need prayer or question box */}
            <div className="bg-[#F2F1EB] p-5 rounded-xl border border-[#E8E7E1] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1917]">
                Have Questions?
              </h4>
              <p className="text-xs text-[#6B6A65] leading-relaxed">
                Need prayer or want to talk to one of our pastors about this week&apos;s message?
              </p>
              <Link
                href="/connect"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CC1120] hover:underline"
              >
                Connect with our team <ChevronRight size={12} />
              </Link>
            </div>
          </aside>

          {/* Main Sermon Cards Grid */}
          <main className="lg:col-span-9">
            {filteredSermons.length === 0 ? (
              <div className="text-center py-16 bg-[#F2F1EB] rounded-2xl border border-dashed border-[#D1D0CA] space-y-3">
                <p className="text-sm font-semibold text-[#44433F]">No messages match your search.</p>
                <p className="text-xs text-[#8C8B85]">Try adjusting your search terms or clearing the topic filter.</p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(""); setSelectedTopic("All Topics"); setSelectedPlaylist("All Messages"); }}
                  className="mt-2 text-xs font-medium text-[#CC1120] hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSermons.map((sermon) => (
                  <article
                    key={sermon.id}
                    className="group bg-white rounded-xl overflow-hidden border border-[#E8E7E1] hover:border-[#CC1120]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Video Thumbnail Preview */}
                      <div className="relative aspect-video bg-[#1A1917] overflow-hidden flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 text-[#CC1120] flex items-center justify-center shadow group-hover:scale-110 group-hover:bg-[#CC1120] group-hover:text-white transition-all">
                          <Play size={18} className="ml-0.5" fill="currentColor" />
                        </div>
                        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-white text-[10px] font-medium font-sans">
                          {sermon.duration}
                        </span>
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#CC1120] text-white text-[10px] font-semibold uppercase tracking-wider">
                          {sermon.series}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 space-y-2.5">
                        <div className="flex items-center gap-2 text-[11px] text-[#8C8B85]">
                          <span>{sermon.date}</span>
                          <span>•</span>
                          <span className="text-[#CC1120] font-medium">{sermon.scripture}</span>
                        </div>

                        <h3 className="font-sans font-bold text-base text-[#1A1917] group-hover:text-[#CC1120] transition-colors leading-snug">
                          {sermon.title}
                        </h3>

                        <p className="text-xs text-[#6B6A65] line-clamp-2 leading-relaxed">
                          {sermon.summary}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-5 py-3 border-t border-[#E8E7E1] bg-[#FAF9F6] flex items-center justify-between text-xs text-[#8C8B85]">
                      <span className="font-medium text-[#44433F]">{sermon.speaker}</span>
                      <div className="flex items-center gap-2">
                        {sermon.hasAudio && (
                          <span title="Audio available" className="p-1 text-[#8C8B85] hover:text-[#1A1917]">
                            <Headphones size={13} />
                          </span>
                        )}
                        {sermon.hasNotes && (
                          <span title="Study notes available" className="p-1 text-[#8C8B85] hover:text-[#1A1917]">
                            <BookOpen size={13} />
                          </span>
                        )}
                        <span className="text-[#CC1120] font-semibold group-hover:translate-x-0.5 transition-transform">
                          Watch →
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>

    </div>
  );
}
