"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export function PrayerRequestForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    // TODO: Wire up to a real form endpoint (e.g. Resend, Formspree, or a
    // Next.js API route) once decided by leadership.
    // For now, simulate a successful submission after a brief delay.
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
        <CheckCircle size={48} className="text-[#CC1120]" aria-hidden="true" />
        <h2 className="font-display text-display-sm text-[#1A1917]">
          Thank you for reaching out.
        </h2>
        <p className="text-[#6B6A65] text-sm max-w-sm font-sans">
          Your prayer request has been received. Our team will be praying with you.
          We may follow up to walk alongside you.
        </p>
        <button
          type="button"
          onClick={() => setFormState("idle")}
          className="text-sm text-[#CC1120] hover:underline font-medium font-sans"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="eyebrow mb-2">Prayer &amp; Contact</p>
        <h2 className="font-display text-display-md text-[#1A1917]">
          How can we pray for you?
        </h2>
        <p className="text-[#6B6A65] text-sm mt-2 font-sans leading-relaxed">
          Your request is private. It will be seen only by our pastoral team and
          kept confidential.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="first-name"
              className="block text-xs font-semibold text-[#44433F] font-sans uppercase tracking-wide"
            >
              First name <span className="text-[#CC1120]" aria-hidden="true">*</span>
            </label>
            <input
              id="first-name"
              type="text"
              name="firstName"
              required
              autoComplete="given-name"
              className="w-full px-4 py-3 text-sm bg-[#FAF9F6] border border-[#E8E7E1] rounded focus:outline-none focus:border-[#CC1120] focus:ring-1 focus:ring-[#CC1120] transition-colors placeholder:text-[#B0AFA9]"
              placeholder="Your first name"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="last-name"
              className="block text-xs font-semibold text-[#44433F] font-sans uppercase tracking-wide"
            >
              Last name
            </label>
            <input
              id="last-name"
              type="text"
              name="lastName"
              autoComplete="family-name"
              className="w-full px-4 py-3 text-sm bg-[#FAF9F6] border border-[#E8E7E1] rounded focus:outline-none focus:border-[#CC1120] focus:ring-1 focus:ring-[#CC1120] transition-colors placeholder:text-[#B0AFA9]"
              placeholder="Your last name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-[#44433F] font-sans uppercase tracking-wide"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            className="w-full px-4 py-3 text-sm bg-[#FAF9F6] border border-[#E8E7E1] rounded focus:outline-none focus:border-[#CC1120] focus:ring-1 focus:ring-[#CC1120] transition-colors placeholder:text-[#B0AFA9]"
            placeholder="your@email.com (optional)"
          />
        </div>

        {/* Request type */}
        <div className="space-y-1.5">
          <label
            htmlFor="request-type"
            className="block text-xs font-semibold text-[#44433F] font-sans uppercase tracking-wide"
          >
            How can we help?
          </label>
          <select
            id="request-type"
            name="requestType"
            className="w-full px-4 py-3 text-sm bg-[#FAF9F6] border border-[#E8E7E1] rounded focus:outline-none focus:border-[#CC1120] focus:ring-1 focus:ring-[#CC1120] transition-colors text-[#44433F]"
          >
            <option value="prayer">Prayer request</option>
            <option value="question">General question</option>
            <option value="visit">Question about visiting</option>
            <option value="pastoral">Pastoral care</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-[#44433F] font-sans uppercase tracking-wide"
          >
            Your request <span className="text-[#CC1120]" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 text-sm bg-[#FAF9F6] border border-[#E8E7E1] rounded focus:outline-none focus:border-[#CC1120] focus:ring-1 focus:ring-[#CC1120] transition-colors resize-none placeholder:text-[#B0AFA9]"
            placeholder="Share what's on your heart…"
          />
        </div>

        {/* Privacy note */}
        <p className="text-xs text-[#8C8B85] leading-relaxed font-sans">
          🔒 Your request is confidential and will only be seen by the
          Salvation Church Uganda pastoral team. We will never share your
          personal information.
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={formState === "submitting"}
          className="flex items-center gap-2 bg-[#CC1120] hover:bg-[#A50E1A] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 rounded transition-colors text-sm"
          aria-busy={formState === "submitting"}
        >
          {formState === "submitting" ? (
            <>
              <span
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                aria-hidden="true"
              />
              Sending…
            </>
          ) : (
            <>
              <Send size={14} aria-hidden="true" />
              Submit Request
            </>
          )}
        </button>
      </form>
    </div>
  );
}

