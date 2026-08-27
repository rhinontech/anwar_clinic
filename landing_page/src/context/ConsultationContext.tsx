"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
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
      openConsultation: () => {},
      closeConsultation: () => {},
    };
  }
  return context;
}
