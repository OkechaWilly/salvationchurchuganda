import Link from "next/link";
import { ArrowUpRight, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { CHURCH_CONTACT } from "@/lib/constants";

function WhatsAppIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.886-9.888 9.886m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

export function PrayerRequestForm() {
  const whatsappUrl = `https://wa.me/256774707220?text=${encodeURIComponent(
    "Hello Salvation Church Uganda, I would like to connect and request prayer."
  )}`;

  return (
    <div className="space-y-7">
      <div>
        <p className="eyebrow mb-2">Prayer &amp; Pastoral Care</p>
        <h2 className="font-display text-3xl sm:text-4xl text-[#1A1917] leading-tight">
          How can we pray for you?
        </h2>
        <p className="text-[#6B6A65] text-sm mt-3 leading-relaxed">
          Our pastoral team is here to stand with you in faith. You can reach us directly by phone or message us on WhatsApp.
        </p>
      </div>

      <div className="border border-[#E8E7E1] bg-white p-6 sm:p-8 space-y-6">
        <div className="flex items-start gap-3 pb-5 border-b border-stone-200">
          <ShieldCheck size={19} className="text-[#CC1120] mt-0.5 shrink-0" aria-hidden="true" />
          <p className="text-xs text-[#6B6A65] leading-relaxed">
            Your prayer requests and personal conversations are handled with pastoral care, dignity, and confidence.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C8B85]">Church Contact Numbers</p>
          <div className="mt-2 space-y-1">
            <a
              href={`tel:${CHURCH_CONTACT.phoneTel}`}
              className="font-display text-2xl sm:text-3xl text-[#1A1917] hover:text-[#CC1120] transition-colors block"
            >
              {CHURCH_CONTACT.phone}
            </a>
            {CHURCH_CONTACT.alternatePhone && (
              <a
                href={`tel:${CHURCH_CONTACT.alternatePhoneTel}`}
                className="font-display text-lg sm:text-xl text-stone-600 hover:text-[#CC1120] transition-colors block"
              >
                {CHURCH_CONTACT.alternatePhone} <span className="text-xs font-sans text-stone-400 font-normal">(Alternate)</span>
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
          >
            <WhatsAppIcon size={16} /> Chat on WhatsApp
          </a>

          <a
            href={`tel:${CHURCH_CONTACT.phoneTel}`}
            className="inline-flex items-center gap-2 bg-[#1A1917] hover:bg-[#CC1120] text-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
          >
            <Phone size={14} aria-hidden="true" /> Call Direct
          </a>
        </div>
      </div>

      <p className="text-xs text-[#8C8B85]">
        Planning to visit this Sunday? <Link href="/visit" className="text-[#CC1120] underline underline-offset-2">Plan your visit</Link> to Namulanda or get in touch.
      </p>
    </div>
  );
}
