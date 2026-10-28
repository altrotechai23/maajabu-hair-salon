// lib/config/business.ts

export const businessConfig = {
  name: "MAAJABU",

  address: {
    street: "67 Long Street",
    city: "Cape Town City Centre",
    province: "Western Cape",
    country: "South Africa",
  },

  // Add these when the real business details are confirmed.
  phone: "+277777777",
  whatsapp: "+277777777",
  email: "melove@gmail.com",

  social: {
    tiktok: "https://www.tiktok.com/@maajabu12",
    googleBusinessProfile:
      "https://share.google/hOY2Y5kNhJ9hRIkOY",
  },

  copyrightYear: 2026,
} as const;

/**
 * Creates a WhatsApp click-to-chat URL.
 *
 * Leave businessConfig.whatsapp empty until the
 * real MAAJABU WhatsApp number is confirmed.
 */
export function getWhatsAppHref(message?: string): string | null {
  const number = businessConfig.whatsapp.replace(/\D/g, "");

  if (!number) {
    return null;
  }

  const encodedMessage = encodeURIComponent(
    message ?? "Hi MAAJABU, I'd like to book an appointment."
  );

  return `https://wa.me/${number}?text=${encodedMessage}`;
}