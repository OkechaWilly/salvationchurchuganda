import Link from "next/link";
import { ArrowUpRight, Phone, ShieldCheck } from "lucide-react";
import { CHURCH_CONTACT } from "@/lib/constants";

export function PrayerRequestForm() {
  return (
    <div className="space-y-7">
      <div>
        <p className="eyebrow mb-2">Prayer &amp; Contact</p>
        <h2 className="font-display text-3xl sm:text-4xl text-[#1A1917] leading-tight">
          How can we pray for you?
        </h2>
        <p className="text-[#6B6A65] text-sm mt-3 leading-relaxed">
          We would be glad to hear from you. You can speak with the church team directly by phone.
        </p>
      </div>

      <div className="border border-[#E8E7E1] bg-white p-6 sm:p-8 space-y-5">
        <div className="flex items-start gap-3">
          <ShieldCheck size={19} className="text-[#CC1120] mt-0.5 shrink-0" aria-hidden="true" />
          <p className="text-xs text-[#6B6A65] leading-relaxed">
            For your privacy, please do not send sensitive personal or prayer details through an online form until the church has confirmed a secure way to receive and manage them.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C8B85]">Call the church</p>
          <a href={`tel:${CHURCH_CONTACT.phoneTel}`} className="font-display text-2xl sm:text-3xl text-[#1A1917] hover:text-[#CC1120] transition-colors mt-2 inline-block">
            {CHURCH_CONTACT.phone}
          </a>
        </div>
        <a href={`tel:${CHURCH_CONTACT.phoneTel}`} className="inline-flex items-center gap-2 bg-[#CC1120] hover:bg-[#A50E1A] text-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] transition-colors">
          <Phone size={14} aria-hidden="true" /> Call the church
        </a>
      </div>
      <p className="text-xs text-[#8C8B85]">
        Prefer to ask a general question? <Link href="/visit" className="text-[#CC1120] underline underline-offset-2">Plan your visit</Link> or call the team.
      </p>
    </div>
  );
}
