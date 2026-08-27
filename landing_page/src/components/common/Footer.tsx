"use client";

import React from "react";
import Link from "next/link";

interface FooterProps {
  onOpenConsultation?: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3b493a] text-white pt-16 pb-14">
      <div className="qht-large-container">
        {/* Main Grid: Sticky Left Branch Info + Right Links Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Sticky on Scroll, Logo, Branch Addresses, Contact & Book Surgery */}
          <div className="lg:col-span-4 space-y-5 text-sm sm:text-[15px] text-[#cdd7cb] lg:sticky lg:top-24 lg:self-start">
            {/* Logo */}
            <Link href="/" className="inline-block mb-3">
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/08/header-logo.webp"
                alt="QHT Clinic Logo"
                className="h-11 w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* North India Branch */}
            <div className="pt-1">
              <span className="inline-block bg-white/10 text-white font-semibold text-xs px-3 py-1 rounded border border-white/15 mb-3">
                North India Branch
              </span>
              <p className="leading-relaxed">
                QHT Clinic,521, Model Colony, Haridwar, Uttarakhand
              </p>
            </div>

            <div className="border-b border-white/10 pb-4">
              <p className="leading-relaxed">
                D -15, Outer Ring Rd, Opp. Prashant Vihar Metro Station, Sector 14, Rohini, New Delhi, Delhi, 110085
              </p>
            </div>

            <div className="border-b border-white/10 pb-4">
              <p className="leading-relaxed">
                Plot No. 3, opposite Huda Market, Sector 46, Gurugram, Haryana 122022
              </p>
            </div>

            {/* South India Branch */}
            <div className="border-b border-white/10 pb-4 pt-1">
              <span className="inline-block bg-white/10 text-white font-semibold text-xs px-3 py-1 rounded border border-white/15 mb-3">
                South India Branch
              </span>
              <p className="leading-relaxed">
                QHT Clinic Opposite Hotel Park HyattRoad No. 2 Banjara Hills, Hyderabad, Telangana
              </p>
            </div>

            {/* Consultation Office */}
            <div className="border-b border-white/10 pb-4 pt-1">
              <span className="inline-block bg-white/10 text-white font-semibold text-xs px-3 py-1 rounded border border-white/15 mb-3">
                Consultation Office
              </span>
              <p className="leading-relaxed">
                5th Floor, Prasad House, 16 Sudder Street, Kolkata, West Bengal 700016
              </p>
            </div>

            {/* Phone & Email Row */}
            <div className="flex items-center justify-between pt-2 text-sm sm:text-[15px] font-medium text-white">
              <a
                href="tel:+919084726916"
                className="hover:text-[#baf788] transition-colors"
              >
                +91-9084726916
              </a>
              <a
                href="mailto:care@qhtclinic.com"
                className="hover:text-[#baf788] transition-colors"
              >
                care@qhtclinic.com
              </a>
            </div>

            {/* Book Your Surgery Button */}
            <div className="pt-2">
              <a
                href="https://pages.razorpay.com/pl_R9xTz14IIPBGyE/view"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#596d53] hover:bg-[#495c44] text-white font-semibold text-sm py-2.5 px-7 rounded-full shadow-sm transition-colors"
              >
                Book your Surgery
              </a>
            </div>
          </div>

          {/* Right Column: Company Links, Our Services, In Your City */}
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Company Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 tracking-tight">
                Company Links
              </h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:text-[15px] text-[#cdd7cb]">
                <div className="space-y-3">
                  <p><a href="/about/" className="hover:text-white transition-colors">About us</a></p>
                  <p><a href="/results/" className="hover:text-white transition-colors">Results</a></p>
                  <p><a href="/medical-tourism/" className="hover:text-white transition-colors">Medical Tourism</a></p>
                  <p><a href="/faq/" className="hover:text-white transition-colors">FAQ</a></p>
                </div>
                <div className="space-y-3">
                  <p><a href="/hair-transplant-cost-in-india/" className="hover:text-white transition-colors">Hair Transplant Cost</a></p>
                  <p><a href="/contact-us/" className="hover:text-white transition-colors">Contact Us</a></p>
                  <p><a href="/blogs/" className="hover:text-white transition-colors">Blogs</a></p>
                  <p><a href="/career/" className="hover:text-white transition-colors">Career</a></p>
                </div>
              </div>
            </div>

            <div className="border-b border-white/15" />

            {/* 2. Our Services */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 tracking-tight">
                Our Services
              </h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:text-[15px] text-[#cdd7cb]">
                <div className="space-y-3">
                  <p><a href="/services/afro-hair-transplant-in-india/" className="hover:text-white transition-colors">Afro Hair Transplant</a></p>
                  <p><a href="/services/beard-hair-transplant-in-india/" className="hover:text-white transition-colors">Beard Hair Transplant</a></p>
                  <p><a href="/services/caucasian-patients-hair-transplant/" className="hover:text-white transition-colors">Caucasian Patients Hair Transplant</a></p>
                  <p><a href="/services/custom-hairline-transplant/" className="hover:text-white transition-colors">Custom Hairline Transplant</a></p>
                  <p><a href="/services/female-hair-transplantation/" className="hover:text-white transition-colors">Female Hair Transplant</a></p>
                  <p><a href="/services/hair-transplant-for-men/" className="hover:text-white transition-colors">Hair Transplant For Men</a></p>
                  <p><a href="/services/hairline-reconstruction/" className="hover:text-white transition-colors">Hairline Reconstruction</a></p>
                  <p><a href="/services/natural-look-hair-restoration/" className="hover:text-white transition-colors">Natural Look Hair Restoration</a></p>
                  <p><a href="/services/fut-hair-transplant/" className="hover:text-white transition-colors">FUT Hair Transplant</a></p>
                  <p><a href="/services/temple-hair-transplant/" className="hover:text-white transition-colors">Temple Hair Transplant</a></p>
                  <p><a href="/services/unshaven-hair-transplant/" className="hover:text-white transition-colors">Unshaven Hair Transplant</a></p>
                </div>
                <div className="space-y-3">
                  <p><a href="/services/bad-hair-transplant-correction/" className="hover:text-white transition-colors">Bad Hair Transplant Correction</a></p>
                  <p><a href="/services/burn-hair-transplant/" className="hover:text-white transition-colors">Burn Hair Transplant</a></p>
                  <p><a href="/services/crown-hair-transplant/" className="hover:text-white transition-colors">Crown Hair Transplant</a></p>
                  <p><a href="/services/eyebrow-reconstruction-in-india/" className="hover:text-white transition-colors">Eyebrow Reconstruction</a></p>
                  <p><a href="/services/best-fue-hair-transplant-in-india/" className="hover:text-white transition-colors">FUE Hair Transplant</a></p>
                  <p><a href="/services/failed-hair-transplant-repair/" className="hover:text-white transition-colors">Hair Transplant Repair</a></p>
                  <p><a href="/services/moustache-hair-transplant-in-india/" className="hover:text-white transition-colors">Moustache Hair Transplant</a></p>
                  <p><a href="/services/quick-hair-transplant-in-india/" className="hover:text-white transition-colors">QHT Hair Transplant</a></p>
                  <p><a href="/services/social-media-influencer-hair-transplant/" className="hover:text-white transition-colors">Social Media Influencer Hair</a></p>
                  <p><a href="/services/ultra-dense-hair-transplant/" className="hover:text-white transition-colors">Ultra-Dense Hair Transplant</a></p>
                </div>
              </div>
            </div>

            <div className="border-b border-white/15" />

            {/* 3. In Your City */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 tracking-tight">
                In Your City
              </h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:text-[15px] text-[#cdd7cb]">
                <div className="space-y-3">
                  <p><a href="/delhi/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Delhi</a></p>
                  <p><a href="/bangalore/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Bangalore</a></p>
                  <p><a href="/chennai/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Chennai</a></p>
                  <p><a href="/ghaziabad/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Ghaziabad</a></p>
                  <p><a href="/guwahati/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Guwahati</a></p>
                  <p><a href="/hyderabad/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Hyderabad</a></p>
                  <p><a href="/jaipur/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Jaipur</a></p>
                  <p><a href="/kolkata/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Kolkata</a></p>
                  <p><a href="/mumbai/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Mumbai</a></p>
                  <p><a href="/noida/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Noida</a></p>
                  <p><a href="/pune/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Pune</a></p>
                </div>
                <div className="space-y-3">
                  <p><a href="/ahmedabad/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Ahmedabad</a></p>
                  <p><a href="/chandigarh/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Chandigarh</a></p>
                  <p><a href="/dehradun/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Dehradun</a></p>
                  <p><a href="/gurgaon/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Gurgaon</a></p>
                  <p><a href="/haridwar/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Haridwar</a></p>
                  <p><a href="/indore/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Indore</a></p>
                  <p><a href="/kochi/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Kochi</a></p>
                  <p><a href="/lucknow/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Lucknow</a></p>
                  <p><a href="/nagpur/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Nagpur</a></p>
                  <p><a href="/patna/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Patna</a></p>
                  <p><a href="/surat/hair-transplant/" className="hover:text-white transition-colors">Hair Transplant in Surat</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Line + Copyright & Appointment CTA */}
        <div className="border-t border-white/15 pt-8 mt-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#cdd7cb] font-normal">
            © {currentYear} QHT Regrow Hair |{" "}
            <a href="/privacy-policy/" className="hover:text-white underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms-conditions/" className="hover:text-white underline">
              Terms & Conditions
            </a>
          </p>

          <button
            onClick={onOpenConsultation}
            className="bg-[#596d53] hover:bg-[#495c44] text-white font-semibold text-sm py-3 px-8 rounded-full shadow-sm transition-colors"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </footer>
  );
}
