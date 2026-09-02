"use client";

import React, { useState } from "react";
import { Mail, MapPin, CheckCircle2, ChevronDown } from "lucide-react";
import { COUNTRY_CODES } from "@/data/qhtData";
import { COMPANY_NAME } from "@/config/constants";
import { submitLead } from "@/lib/leads";

interface ClinicLocation {
  city: string;
  address: string;
  mapLink?: string;
}

const DEFAULT_CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    city: "Haridwar",
    address: `${COMPANY_NAME}, 521, Model Colony, Ranipur More, Haridwar, Uttarakhand.`,
    mapLink: "https://maps.app.goo.gl/BtDzrvdu7hEDbBoJ9",
  },
  {
    city: "Delhi",
    address: "D -15, Outer Ring Rd, Prashant Vihar, Sector 14, Rohini, New Delhi, Delhi, 110085",
    mapLink: "https://maps.app.goo.gl/mnvSFb9vCh5QGe7A8",
  },
  {
    city: "Hyderabad",
    address: `${COMPANY_NAME}, Road No. 2, Banjara Hills, Hyderabad, Telangana`,
    mapLink: "https://maps.app.goo.gl/NcNQH3MtLWponejy8",
  },
  {
    city: "Gurugram",
    address: "Plot No 3, Sector 46, Gurugram, Haryana 122022",
    mapLink: "https://maps.app.goo.gl/kbHcpPe1jS8xJHMD9",
  },
];

interface ContactSectionProps {
  className?: string;
  showLocations?: boolean;
  locations?: ClinicLocation[];
}

export default function ContactSection({
  className = "",
  showLocations = true,
  locations = DEFAULT_CLINIC_LOCATIONS,
}: ContactSectionProps) {
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);
  const [privacyAgreed, setPrivacyAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || phone.length < 7) return;

    setIsSubmitting(true);
    setError(null);
    try {
      await submitLead({
        fullName,
        countryCode,
        phone,
        email,
        city,
        whatsappOptIn,
        source: "contact_form",
      });
      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setCity("");
    setIsSubmitted(false);
    setError(null);
  };

  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-[#eff5f1] overflow-hidden ${className}`}>
      <div className="qht-large-container">

        {/* Top Half: Contact Info (Left) + Lead Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading, Info, Email */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-[#1b221d] leading-[1.18] tracking-tight">
              Connect with Our Specialists
              <br />
              or Visit Our Centers.
            </h2>

            <p className="text-sm sm:text-base text-[#5c685f] leading-relaxed max-w-md font-normal">
              Reach out directly for a comprehensive graft assessment, surgeon consultation, and tailored treatment roadmap.
            </p>

            {/* Email link */}
            <div className="pt-2">
              <a
                href={`mailto:care@${COMPANY_NAME.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`}
                className="text-base sm:text-lg font-bold text-[#1b221d] hover:text-[#596d53] transition-colors"
              >
                care@{COMPANY_NAME.toLowerCase().replace(/[^a-z0-9]/g, "")}.com
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6">
            <div className="w-full">
              <h3 className="text-2xl sm:text-[28px] font-[500] text-[#596d53] mb-6">
                Schedule a Consultation
              </h3>

              {isSubmitted ? (
                <div className="bg-white rounded-3xl p-8 text-center space-y-4 shadow-sm border border-gray-100">
                  <div className="w-14 h-14 bg-[#596d53]/10 text-[#596d53] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1b221d]">
                    Thank You, {fullName}!
                  </h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Your request has been received. Our senior hair transplant specialist will connect with you on <strong>{countryCode} {phone}</strong> shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 bg-[#596d53] text-white rounded-xl text-xs font-semibold hover:bg-[#495b44] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-transparent focus:border-[#596d53] text-sm text-gray-800 placeholder-gray-400 focus:outline-none shadow-xs transition-all"
                    />
                  </div>

                  {/* Phone with Country Code */}
                  <div className="flex gap-2">
                    <div className="relative">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="h-full appearance-none pl-3 pr-7 py-3 bg-white rounded-lg border border-transparent focus:border-[#596d53] text-xs sm:text-sm font-medium text-gray-700 focus:outline-none shadow-xs cursor-pointer"
                      >
                        {COUNTRY_CODES.map((c, idx) => (
                          <option key={idx} value={c.code}>
                            {c.code} {c.country === "India" ? "IN" : c.country.slice(0, 2).toUpperCase()}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <input
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      className="flex-1 px-4 py-3 bg-white rounded-lg border border-transparent focus:border-[#596d53] text-sm text-gray-800 placeholder-gray-400 focus:outline-none shadow-xs transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-transparent focus:border-[#596d53] text-sm text-gray-800 placeholder-gray-400 focus:outline-none shadow-xs transition-all"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <input
                      type="text"
                      placeholder="Enter City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-transparent focus:border-[#596d53] text-sm text-gray-800 placeholder-gray-400 focus:outline-none shadow-xs transition-all"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="pt-1.5 space-y-2 text-xs text-[#5c685f]">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={whatsappOptIn}
                        onChange={(e) => setWhatsappOptIn(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-[#596d53] focus:ring-[#596d53] accent-[#596d53] cursor-pointer"
                      />
                      <span>Opt-in for WhatsApp updates</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={privacyAgreed}
                        onChange={(e) => setPrivacyAgreed(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-[#596d53] focus:ring-[#596d53] accent-[#596d53] cursor-pointer"
                      />
                      <span>You authorise {COMPANY_NAME} as per Privacy Policy</span>
                    </label>
                  </div>

                  {error && (
                    <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
                      {error}
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#596d53] hover:bg-[#495b44] text-white rounded-xl font-bold text-sm sm:text-base shadow-sm transition-all duration-200 active:scale-[0.99] disabled:opacity-70"
                    >
                      {isSubmitting ? "Scheduling..." : "Schedule a Consultation"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Half: 4 Clinic Location Cards */}
        {showLocations && (
          <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {locations.map((loc, idx) => (
              <a
                key={idx}
                href={loc.mapLink || "#"}
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-start shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              >
                {/* Location Icon */}
                <div className="w-8 h-8 flex items-center justify-center text-[#596d53] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 stroke-[2.2] fill-[#596d53]/15" />
                </div>

                {/* City Name */}
                <h4 className="text-lg sm:text-xl font-[500] text-[#1b221d] mt-4 tracking-tight leading-snug">
                  {loc.city}
                </h4>

                {/* Address */}
                <p className="text-xs sm:text-[13px] text-[#5c685f] mt-2.5 leading-relaxed font-normal">
                  {loc.address}
                </p>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
