"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import ConsultationModal from "@/components/common/ConsultationModal";

interface ConsultationContextType {
  isConsultationOpen: boolean;
  openConsultation: () => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  // Auto-open on initial website load and recurring every 1 minute (60 seconds)
  useEffect(() => {
    // 1. Open on website initial load (slight delay for hydration smoothness)
    const initialLoadTimer = setTimeout(() => {
      setIsConsultationOpen(true);
    }, 1000);

    // 2. Open recurringly every 1 minute
    const intervalTimer = setInterval(() => {
      setIsConsultationOpen(true);
    }, 60000); // 60,000ms = 1 min

    return () => {
      clearTimeout(initialLoadTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  return (
    <ConsultationContext.Provider
      value={{
        isConsultationOpen,
        openConsultation,
        closeConsultation,
      }}
    >
      {children}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={closeConsultation}
      />
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    return {
      isConsultationOpen: false,
      openConsultation: () => { },
      closeConsultation: () => { },
    };
  }
  return context;
}
