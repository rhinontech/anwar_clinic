"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_RESULTS_MENU, NAV_ABOUT_LIST } from "@/data/qhtData";
import { useConsultation } from "@/context/ConsultationContext";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

const SERVICES_COL_1 = [
  { label: "Hair Transplant For Men", href: "/services/hair-transplant-for-men/" },
  { label: "Bad Hair Transplant Correction", href: "/services/bad-hair-transplant-correction/" },
  { label: "Beard Hair Transplant", href: "/services/beard-hair-transplant-in-india/" },
  { label: "QHT Hair Transplant", href: "/services/quick-hair-transplant-in-india/" },
  { label: "Moustache Hair Transplant", href: "/services/moustache-hair-transplant-in-india/" },
  { label: "Female Hair Transplant", href: "/services/female-hair-transplantation/" },
  { label: "Caucasian Patients Hair Transplant", href: "/services/caucasian-patients-hair-transplant/" },
  { label: "Custom Hairline Transplant", href: "/services/custom-hairline-transplant/" },
  { label: "Hairline Reconstruction", href: "/services/hairline-reconstruction/" },
  { label: "Social Media Influencer Hair", href: "/services/social-media-influencer-hair-transplant/" },
  { label: "FUT Hair Transplant", href: "/services/fut-hair-transplant/" },
];

const SERVICES_COL_2 = [
  { label: "Hair Transplant Repair", href: "/services/failed-hair-transplant-repair/" },
  { label: "Unshaven Hair Transplant", href: "/services/unshaven-hair-transplant/" },
  { label: "Ultra-Dense Hair Transplant", href: "/services/ultra-dense-hair-transplant/" },
  { label: "FUE Hair Transplant", href: "/services/best-fue-hair-transplant-in-india/" },
  { label: "Afro Hair Transplant", href: "/services/afro-hair-transplant-in-india/" },
  { label: "Burn Hair Transplant", href: "/services/burn-hair-transplant/" },
  { label: "Crown Hair Transplant", href: "/services/crown-hair-transplant/" },
  { label: "Eyebrow Reconstruction", href: "/services/eyebrow-reconstruction-in-india/" },
  { label: "Natural Look Hair Restoration", href: "/services/natural-look-hair-restoration/" },
  { label: "Temple Hair Transplant", href: "/services/temple-hair-transplant/" },
];

interface HeaderBarProps {
  isSticky?: boolean;
  activeDropdown: string | null;
  onMouseEnter: (menu: string) => void;
  onMouseLeave: () => void;
  onOpenConsultation: () => void;
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

function HeaderBar({
  isSticky = false,
  activeDropdown,
  onMouseEnter,
  onMouseLeave,
  onOpenConsultation,
  onToggleMobileMenu,
  isMobileMenuOpen,
}: HeaderBarProps) {
  return (
    <div className="w-full relative">
      <div className="qht-large-container flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-10 flex-shrink-0">
          <img
            src="https://www.qhtclinic.com/wp-content/uploads/2025/08/header-logo.webp"
            alt="QHT Clinic Logo"
            className={`${isSticky ? "h-8 md:h-10" : "h-9 md:h-11"} w-auto object-contain transition-all duration-200`}
          />
        </Link>

        {/* Desktop Navigation Floating White Pill */}
        <div className="hidden lg:flex items-center bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100/90 pl-6 pr-2 py-1.5 gap-4 xl:gap-6">
          <nav className="flex items-center gap-4 xl:gap-6">
            {/* Home */}
            <Link
              href="/"
              className="text-sm font-semibold text-[#627566] hover:text-[#384c3c] transition-colors"
            >
              Home
            </Link>

            {/* Results */}
            <div
              className="relative"
              onMouseEnter={() => onMouseEnter("results")}
              onMouseLeave={onMouseLeave}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-[#2b302c] hover:text-[#627566] transition-colors py-1">
                <span>Results</span>
              </button>

              {activeDropdown === "results" && (
                <div
                  onMouseEnter={() => onMouseEnter("results")}
                  onMouseLeave={onMouseLeave}
                  className="absolute top-full -left-20 w-[820px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200 mt-2"
                >
                  {/* By Baldness Grade */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b392b] pb-2 border-b border-gray-100 mb-3">
                      By Baldness Grade
                    </h4>
                    <ul className="space-y-1.5 max-h-60 overflow-y-auto pr-2 text-xs text-gray-700">
                      {NAV_RESULTS_MENU.baldnessGrades.map((grade, idx) => (
                        <li key={idx}>
                          <a
                            href={grade.href}
                            className="block py-1 hover:text-[#1b392b] hover:font-medium transition-colors"
                          >
                            {grade.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* By Patient Type */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b392b] pb-2 border-b border-gray-100 mb-3">
                      By Patient Type
                    </h4>
                    <ul className="space-y-1.5 text-xs text-gray-700 mb-6">
                      {NAV_RESULTS_MENU.patientTypes.map((type, idx) => (
                        <li key={idx}>
                          <a
                            href={type.href}
                            className="block py-1 hover:text-[#1b392b] hover:font-medium transition-colors"
                          >
                            {type.label}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b392b] pb-2 border-b border-gray-100 mb-3">
                      By Grafts Range
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-700 max-h-32 overflow-y-auto">
                      {NAV_RESULTS_MENU.graftRanges.slice(0, 4).map((range, idx) => (
                        <li key={idx}>
                          <a
                            href={range.href}
                            className="block py-1 hover:text-[#1b392b] hover:font-medium transition-colors"
                          >
                            {range.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* By Area Treated */}
                  <div className="bg-[#f8faf8] p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b392b] mb-3">
                        By Area Treated
                      </h4>
                      <ul className="space-y-2 text-xs">
                        {NAV_RESULTS_MENU.areasTreated.map((area, idx) => (
                          <li key={idx}>
                            <a
                              href={area.href}
                              className="flex items-center gap-2 p-2 rounded-lg bg-white border border-gray-100 hover:border-[#1b392b] text-gray-800 hover:text-[#1b392b] transition-all"
                            >
                              <img
                                src={area.icon}
                                alt={area.label}
                                className="w-5 h-5 object-contain"
                              />
                              <span className="font-medium text-[11px] leading-tight">
                                {area.label}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={onOpenConsultation}
                      className="mt-4 w-full py-2 bg-[#1b392b] text-white rounded-lg text-xs font-semibold hover:bg-[#284c3b] transition-colors"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => onMouseEnter("services")}
              onMouseLeave={onMouseLeave}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 text-sm font-medium text-[#2b302c] hover:text-[#627566] transition-colors py-1"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-[#627566]" : ""
                    }`}
                />
              </Link>
            </div>

            {/* Hair Transplant Cost */}
            <a
              href="/hair-transplant-cost-in-india/"
              className="text-sm font-medium text-[#2b302c] hover:text-[#627566] transition-colors whitespace-nowrap"
            >
              Hair Transplant Cost
            </a>

            {/* Medicines */}
            <a
              href="https://theuroots.com/collections/all"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[#2b302c] hover:text-[#627566] transition-colors"
            >
              Medicines
            </a>

            {/* About us */}
            <div
              className="relative"
              onMouseEnter={() => onMouseEnter("about")}
              onMouseLeave={onMouseLeave}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-[#2b302c] hover:text-[#627566] transition-colors py-1">
                <span>About us</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180 text-[#627566]" : ""
                    }`}
                />
              </button>
            </div>

            {/* Our Clinic */}
            <a
              href="/our-clinic/"
              className="text-sm font-medium text-[#2b302c] hover:text-[#627566] transition-colors whitespace-nowrap"
            >
              Our Clinic
            </a>
          </nav>

          {/* CTA Button: Book your surgery */}
          <a
            href="https://pages.razorpay.com/pl_R9xTz14IIPBGyE/view"
            target="_blank"
            rel="noreferrer"
            className="bg-[#596d53] hover:bg-[#495c44] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-sm whitespace-nowrap"
          >
            Book your surgery
          </a>
        </div>

        {/* Mobile Actions & Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="https://pages.razorpay.com/pl_R9xTz14IIPBGyE/view"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 bg-[#596d53] text-white text-xs font-semibold rounded-lg"
          >
            Book Surgery
          </a>

          <button
            onClick={onToggleMobileMenu}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Full-Width Animated Services Mega Dropdown */}
      <div
        onMouseEnter={() => onMouseEnter("services")}
        onMouseLeave={onMouseLeave}
        className={`absolute left-0 right-0 top-full transition-all duration-300 ease-out origin-top overflow-hidden z-50 px-4 md:px-6 lg:px-8 ${activeDropdown === "services"
            ? "max-h-[700px] opacity-100 pointer-events-auto pt-2 pb-6"
            : "max-h-0 opacity-0 pointer-events-none p-0"
          }`}
      >
        <div className="qht-large-container">
          <div className="bg-[#243527] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#344b38]">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Services
              </h3>
              <div className="flex-1 h-[1px] bg-white/15"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-8 bg-[#586d52] rounded-2xl p-6 sm:p-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
                  <div className="space-y-3.5">
                    {SERVICES_COL_1.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-2 text-[13.5px] font-medium text-white/95 hover:text-[#d7fbd0] hover:translate-x-1 transition-all duration-150 leading-tight group"
                      >
                        <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>

                  <div className="space-y-3.5">
                    {SERVICES_COL_2.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-2 text-[13.5px] font-medium text-white/95 hover:text-[#d7fbd0] hover:translate-x-1 transition-all duration-150 leading-tight group"
                      >
                        <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-between p-7 bg-black shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                  alt="OT Hair Surgery"
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 opacity-40 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>

                <div className="relative z-10">
                  <h4 className="text-2xl sm:text-[28px] font-bold text-white leading-tight tracking-tight">
                    let’s Start Your
                    <br />
                    Journey Today
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-4 leading-relaxed font-normal">
                    Restore your confidence with our expert-led hair transplant solutions.
                  </p>
                </div>

                <div className="relative z-10 pt-6">
                  <button
                    onClick={onOpenConsultation}
                    className="bg-white hover:bg-gray-100 text-gray-900 font-bold text-sm py-2.5 px-7 rounded-full shadow-lg transition-transform active:scale-95 duration-150 inline-block text-center"
                  >
                    Start Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Animated About Us Mega Dropdown */}
      <div
        onMouseEnter={() => onMouseEnter("about")}
        onMouseLeave={onMouseLeave}
        className={`absolute left-0 right-0 top-full transition-all duration-300 ease-out origin-top overflow-hidden z-50 px-4 md:px-6 lg:px-8 ${activeDropdown === "about"
            ? "max-h-[700px] opacity-100 pointer-events-auto pt-2 pb-6"
            : "max-h-0 opacity-0 pointer-events-none p-0"
          }`}
      >
        <div className="qht-large-container">
          <div className="bg-[#243527] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#344b38]">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                About Us
              </h3>
              <div className="flex-1 h-[1px] bg-white/15"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {NAV_ABOUT_LIST.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group relative rounded-2xl overflow-hidden h-[260px] flex flex-col justify-between p-5 bg-black shadow-md border border-white/5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

                  <div className="relative z-10">
                    <h4 className="text-base sm:text-[17px] font-bold text-white leading-snug">
                      {item.label}
                    </h4>
                  </div>

                  <div className="relative z-10">
                    <div className="w-full bg-white group-hover:bg-gray-100 text-gray-900 font-semibold text-xs py-2 px-3.5 rounded-full flex items-center justify-between shadow-md transition-colors">
                      <span>Know More</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl font-normal leading-relaxed text-center sm:text-left">
                Regain your hair, rebuild confidence, and transform your life with expert hair restoration solutions tailored to your unique needs.
              </p>

              <button
                onClick={onOpenConsultation}
                className="bg-[#566c50] hover:bg-[#465b41] text-white text-sm font-semibold px-7 py-2.5 rounded-full shadow-md transition-all active:scale-95 whitespace-nowrap flex-shrink-0"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const { openConsultation } = useConsultation();
  const handleOpenConsultation = onOpenConsultation || openConsultation;

  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY >= 320);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      {/* 1. Static Initial Header - Transparent overlay on every page */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-transparent py-4">
        <HeaderBar
          isSticky={false}
          activeDropdown={!isStickyVisible ? activeDropdown : null}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onOpenConsultation={handleOpenConsultation}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </header>

      {/* 2. Floating Sticky Header - Slides in smoothly from top on hero scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#f4f7f4]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-[#e5ebe5] py-2.5 transition-all duration-300 ease-out ${isStickyVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <HeaderBar
          isSticky={true}
          activeDropdown={isStickyVisible ? activeDropdown : null}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onOpenConsultation={handleOpenConsultation}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/08/header-logo.webp"
                alt="Logo"
                className="h-9 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <div className="py-6 space-y-4 flex-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-semibold text-[#627566]"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() =>
                    setMobileSubmenu(
                      mobileSubmenu === "results" ? null : "results"
                    )
                  }
                  className="w-full flex items-center justify-between text-base font-semibold text-gray-800 py-1"
                >
                  <span>Results</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${mobileSubmenu === "results" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {mobileSubmenu === "results" && (
                  <div className="pl-4 pt-2 space-y-2 text-sm text-gray-600">
                    <a href="/results/?patient-type=celebrity" className="block py-1">
                      Celebrity Results
                    </a>
                    <a href="/results/?baldness-grade=grade-02" className="block py-1">
                      By Baldness Grade
                    </a>
                    <a href="/results/?area-treated=frontal" className="block py-1">
                      By Area Treated
                    </a>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() =>
                    setMobileSubmenu(
                      mobileSubmenu === "services" ? null : "services"
                    )
                  }
                  className="w-full flex items-center justify-between text-base font-semibold text-gray-800 py-1"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${mobileSubmenu === "services" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {mobileSubmenu === "services" && (
                  <div className="pl-4 pt-2 space-y-2 text-sm text-gray-600 max-h-48 overflow-y-auto">
                    <Link
                      href="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 font-semibold text-[#1b392b]"
                    >
                      View All Services →
                    </Link>
                    {SERVICES_COL_1.concat(SERVICES_COL_2).map((srv, idx) => (
                      <a key={idx} href={srv.href} className="block py-1">
                        {srv.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/hair-transplant-cost-in-india/"
                className="block text-base font-semibold text-gray-800"
              >
                Hair Transplant Cost
              </a>

              <a
                href="https://theuroots.com/collections/all"
                target="_blank"
                rel="noreferrer"
                className="block text-base font-semibold text-gray-800"
              >
                Medicines
              </a>

              <div>
                <button
                  onClick={() =>
                    setMobileSubmenu(
                      mobileSubmenu === "about" ? null : "about"
                    )
                  }
                  className="w-full flex items-center justify-between text-base font-semibold text-gray-800 py-1"
                >
                  <span>About us</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${mobileSubmenu === "about" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {mobileSubmenu === "about" && (
                  <div className="pl-4 pt-2 space-y-2 text-sm text-gray-600">
                    {NAV_ABOUT_LIST.map((ab, idx) => (
                      <a key={idx} href={ab.href} className="block py-1">
                        {ab.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/our-clinic/"
                className="block text-base font-semibold text-gray-800"
              >
                Our Clinic
              </a>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href="https://pages.razorpay.com/pl_R9xTz14IIPBGyE/view"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 block text-center bg-[#596d53] text-white rounded-xl font-bold text-sm"
              >
                Book your surgery
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleOpenConsultation();
                }}
                className="w-full py-2.5 border border-[#1b392b] text-[#1b392b] rounded-xl font-bold text-sm"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
