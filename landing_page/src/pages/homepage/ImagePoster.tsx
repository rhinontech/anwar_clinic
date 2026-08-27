"use client";

import React from "react";

export default function ImagePoster() {
  return (
    <section className="bg-white py-6 overflow-hidden">
      <div className="qht-large-container">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="https://www.qhtclinic.com/wp-content/uploads/2025/11/Mobile-Banner-Homepage-1.webp"
            />
            <img
              src="https://www.qhtclinic.com/wp-content/uploads/2025/11/Banner-Homepage.webp"
              alt="QHT Clinic Excellence Poster"
              className="w-full h-auto object-cover block"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
