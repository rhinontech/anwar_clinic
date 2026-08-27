"use client";

import React, { useState } from "react";
import { COUNTRY_CODES } from "@/data/qhtData";
import { Download, CheckCircle, BookOpen } from "lucide-react";

export default function EbookCatalogueForm() {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.length < 7) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDownloadSuccess(true);
    }, 700);
  };

  return (
    <section className="py-16 bg-[#1b392b] text-white">
      <div className="qht-large-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Thumbnail & Guide Highlights */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-48 sm:w-56 flex-shrink-0">
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/10/hp-catalogue-thumb.webp"
                alt="Hair Transplant Guide"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b1fc85] text-[#162418] text-xs font-bold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5" /> Free Patient Guide
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Thinking about Hair Transplant? Read this First.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">
                A free expert-curated guide that clears all doubts about Costs, Results, Pain, Recovery and how to avoid botched transplants.
              </p>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="lg:col-span-6 bg-white text-gray-900 p-6 sm:p-8 rounded-3xl shadow-xl">
            {downloadSuccess ? (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-[#00d084]" />
                </div>
                <h4 className="text-lg font-bold text-[#162418]">
                  Guide Ready For Download!
                </h4>
                <p className="text-xs text-gray-600">
                  Thank you, <strong>{name}</strong>! Your comprehensive guide has been generated.
                </p>
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Download started: QHT-Hair-Transplant-Guide.pdf");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1b392b] text-white rounded-full text-xs font-bold hover:bg-[#284c3b] transition-colors"
                >
                  <Download className="w-4 h-4" /> Download PDF Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-base font-bold text-[#162418]">
                  Get Instant Free Access
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#1b392b]"
                  />

                  <div className="flex gap-1.5">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-24 px-2 py-2.5 rounded-xl border border-gray-300 text-xs bg-gray-50 focus:outline-none"
                    >
                      {COUNTRY_CODES.map((c, idx) => (
                        <option key={idx} value={c.code}>
                          {c.code}
                        </option>
                      ))}
                    </select>

                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="Mobile Number"
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value.replace(/\D/g, ""))
                      }
                      className="flex-1 px-3 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#1b392b]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#1b392b] text-white rounded-full text-xs font-bold hover:bg-[#284c3b] transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#b1fc85]" />
                  <span>
                    {isSubmitting ? "Processing..." : "Download Free E-Book"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
