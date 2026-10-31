import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Salvation Church Uganda — our story, our beliefs, and the team leading our community.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-[#1A1917] pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="container-content text-center space-y-4">
          <p className="eyebrow text-[#CC1120]">Our Story</p>
          <h1 className="font-display text-display-xl text-[#FAF9F6]">
            About Salvation Church Uganda
          </h1>
        </div>
      </div>

      {/* Mission / Vision */}
      <section className="section-padding bg-[#FAF9F6]" aria-labelledby="mission-heading">
        <div className="container-content">
          <div className="max-w-3xl space-y-8">
            <div>
              <p className="eyebrow mb-3">Who We Are</p>
              <h2 id="mission-heading" className="font-display text-display-md text-[#1A1917] mb-4">
                Our Mission &amp; Vision
              </h2>
              <div className="space-y-4 text-[#44433F] text-base leading-relaxed">
                <p>
                  Salvation Church Uganda is a vibrant community of believers in
                  Namulanda, along the Entebbe Road, committed to building strong
                  families, growing in biblical truth, and serving our city and
                  nation.
                </p>
                <p className="text-[#8C8B85] text-sm border-l-2 border-[#E8E7E1] pl-4">
                  [Official mission and vision statement — pending leadership
                  approval. Please provide the approved wording before this
                  section goes live.]
                </p>
              </div>
            </div>

            {/* Beliefs placeholder */}
            <div className="bg-[#F2F1EB] rounded-sm p-6 border border-[#E8E7E1]">
              <h3 className="font-sans font-semibold text-[#1A1917] text-sm mb-2">
                What We Believe
              </h3>
              <p className="text-sm text-[#8C8B85]">
                [Statement of beliefs / doctrine — pending leadership confirmation.
                This section will detail the core theological convictions of
                Salvation Church Uganda.]
              </p>
            </div>

            {/* Leadership placeholder */}
            <div>
              <h3 className="font-display text-display-sm text-[#1A1917] mb-6">
                Our Leadership
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Pastor card — placeholder */}
                <div className="flex items-start gap-4 p-5 bg-[#F2F1EB] rounded-sm border border-[#E8E7E1]">
                  <div className="w-14 h-14 rounded-full bg-[#E8E7E1] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#B0AFA9]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm text-[#1A1917]">
                      Pastor Nijel Rawlins
                    </p>
                    <p className="text-xs text-[#CC1120] mb-2">Lead Pastor</p>
                    <p className="text-xs text-[#8C8B85]">
                      [Bio — awaiting pastor&apos;s approved biography and headshot]
                    </p>
                  </div>
                </div>
                {/* Additional staff placeholder */}
                <div className="flex items-center justify-center p-5 bg-[#F2F1EB] rounded-sm border border-[#E8E7E1] border-dashed">
                  <p className="text-xs text-[#B0AFA9] text-center">
                    [Additional leadership — pending confirmation]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

