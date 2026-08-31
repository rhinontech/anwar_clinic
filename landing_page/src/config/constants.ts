export const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || "QHT";
export const CLINIC_URL = process.env.NEXT_PUBLIC_CLINIC_URL || "http://localhost:3300";
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5050";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";
export const WHATSAPP_DEFAULT_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  `Hello ${COMPANY_NAME} Clinic, I would like to know more about your hair transplant services.`;
