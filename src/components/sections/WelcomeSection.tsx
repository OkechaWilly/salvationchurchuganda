import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function WelcomeSection() {
  return (
    <section
      className="section-padding bg-[#FAF9F6] border-b border-[#E8E7E1]"
      aria-labelledby="house-statement-heading"
    >
      <div className="container-content">
        
        {/* Passion City Big Statement Callout Block */}
        <div className="max-w-4xl mx-auto text-center space-y-6 pb-14 border-b border-[#E8E7E1]">
          <p className="eyebrow tracking-[0.22em] text-[#CC1120]">Our Heart &amp; House</p>
          
          <h2
            id="house-statement-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1A1917] font-semibold leading-[1.14] tracking-tight"
          >
            &ldquo;We exist to be a community where anyone can experience the grace, truth, and transforming presence of Jesus.&rdquo;
          </h2>

          <p className="font-sans text-base md:text-lg text-[#6B6A65] max-w-2xl mx-auto leading-relaxed">
            Led by Pastor Nijel Rawlins, Salvation Church Uganda is built on deep worship, 
            practical gospel teaching, and a genuine family culture that welcomes you as you are.
          </p>
        </div>

        {/* Feature Grid with User's Uploaded Authentic Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          
          {/* Card 1: Authentic Worship */}
          <div className="rounded-2xl bg-white border border-[#E8E7E1] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#CC1120]/40 transition-all flex flex-col justify-between group">
            <div className="relative h-52 w-full bg-[#1A1917] overflow-hidden">
              <Image
                src="/images/worship-community.jpg"
                alt="Authentic Worship"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute bottom-3 left-4 text-xs font-mono font-bold text-white bg-[#CC1120] px-2.5 py-0.5 rounded">
                01
              </span>
            </div>
            
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-semibold text-[#1A1917] group-hover:text-[#CC1120] transition-colors">
                  Authentic Worship
                </h3>
                <p className="text-sm text-[#6B6A65] leading-relaxed">
                  Passionate, contemporary praise and worship centered on God&apos;s character and His promises for our families and nation.
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2F1EB]">
                <Link
                  href="/watch"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#CC1120] hover:underline"
                >
                  Experience a service <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Next Generation & Children (Using user's child prayer image) */}
          <div className="rounded-2xl bg-white border border-[#E8E7E1] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#CC1120]/40 transition-all flex flex-col justify-between group">
            <div className="relative h-52 w-full bg-[#1A1917] overflow-hidden">
              <Image
                src="/images/child-prayer.jpg"
                alt="Children and Next Generation at Salvation Church Uganda"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute bottom-3 left-4 text-xs font-mono font-bold text-white bg-[#CC1120] px-2.5 py-0.5 rounded">
                02
              </span>
            </div>
            
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-semibold text-[#1A1917] group-hover:text-[#CC1120] transition-colors">
                  Next Generation &amp; Families
                </h3>
                <p className="text-sm text-[#6B6A65] leading-relaxed">
                  Nurturing young hearts in faith, biblical wisdom, and a safe environment where children discover their identity in Christ.
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2F1EB]">
                <Link
                  href="/visit#kids"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#CC1120] hover:underline"
                >
                  For Children &amp; Families <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Deep Word & Prayer (Using user's hands-bible-prayer image) */}
          <div className="rounded-2xl bg-white border border-[#E8E7E1] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#CC1120]/40 transition-all flex flex-col justify-between group">
            <div className="relative h-52 w-full bg-[#1A1917] overflow-hidden">
              <Image
                src="/images/hands-bible-prayer.jpg"
                alt="Prayer and Word of God"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute bottom-3 left-4 text-xs font-mono font-bold text-white bg-[#CC1120] px-2.5 py-0.5 rounded">
                03
              </span>
            </div>
            
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-semibold text-[#1A1917] group-hover:text-[#CC1120] transition-colors">
                  The Word &amp; Prayer
                </h3>
                <p className="text-sm text-[#6B6A65] leading-relaxed">
                  Grounded in Scripture and fervent prayer. We believe God speaks, transforms lives, and answers prayers today.
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2F1EB]">
                <Link
                  href="/connect#prayer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#CC1120] hover:underline"
                >
                  Submit Prayer Request <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
