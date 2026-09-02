"use client";

import React, { useState } from "react";
import { EXPERT_STAGES } from "@/data/qhtData";
import { Users, CheckCircle2, Shield } from "lucide-react";
import { COMPANY_NAME } from "@/config/constants";

export default function ExpertsJourney() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = EXPERT_STAGES[activeStageIndex];

  return (
    <section className="py-20 bg-white">
      <div className="qht-container">
        {/* Heading */}
        <div className="text-center max-w-7xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-[500] text-[#162418]">
            A Dedicated Medical Team at Every Step
          </h2>
          <p className="mt-2 text-sm sm:text-lg text-gray-600">
            At {COMPANY_NAME}, hair restoration{" "}
            <strong className="text-gray-900">
              is a meticulous, multidisciplinary discipline.
            </strong>{" "}
            Our specialists collaborate to design a natural, safe, and enduring hairline with zero compromise on quality.
          </p>
        </div>

        {/* 4-Stage Stepper Header */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 relative">
            {EXPERT_STAGES.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStageIndex(idx)}
                className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl transition-all duration-300 relative ${activeStageIndex === idx
                  ? "bg-[#1b392b] text-white shadow-lg scale-105 z-10"
                  : "bg-[#f8faf8] text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <span
                  className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full mb-1.5 ${activeStageIndex === idx
                    ? "bg-[#b1fc85] text-[#162418]"
                    : "bg-gray-200 text-gray-700"
                    }`}
                >
                  {stage.percentage}
                </span>
                <span className="text-xs sm:text-sm font-bold">
                  {stage.title}
                </span>
              </button>
            ))}
          </div>

          {/* Progress Line */}
          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-6 overflow-hidden">
            <div
              className="bg-[#00d084] h-full transition-all duration-500 rounded-full"
              style={{
                width: `${activeStageIndex === 0
                  ? 25
                  : activeStageIndex === 1
                    ? 50
                    : activeStageIndex === 2
                      ? 75
                      : 100
                  }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Dual Panel Stage Content Card */}
        <div className="max-w-5xl mx-auto bg-[#f8faf8] rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Panel 1: Who's With You */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b392b] mb-4">
                <Users className="w-4 h-4 text-[#00d084]" />
                <span>Who’s With You in {currentStage.title}</span>
              </div>

              <ul className="space-y-3">
                {currentStage.whoWithYou.map((member, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#f8faf8] border border-gray-100"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-[#162418]">
                      {member.role}
                    </span>
                    <img
                      src={member.icon}
                      alt={member.role}
                      className="w-7 h-7 object-contain rounded-full bg-white p-1 shadow-sm"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Panel 2: How They Support You */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b392b] mb-4">
                <Shield className="w-4 h-4 text-[#00d084]" />
                <span>How They Support You</span>
              </div>

              <ul className="space-y-3">
                {currentStage.howTheySupport.map((support, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00d084] flex-shrink-0 mt-0.5" />
                    <span>{support}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
