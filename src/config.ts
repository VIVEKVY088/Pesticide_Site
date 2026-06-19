// ============================================================
// CONFIGURATION — Change numbers here to update across the site
// ============================================================

/** Primary phone number for calls */
export const PHONE_PRIMARY = "+91 70111 16113";
export const PHONE_PRIMARY_LINK = "+917011116113";

/** Secondary phone number for calls */
export const PHONE_SECONDARY = "+91 86501 13744";
export const PHONE_SECONDARY_LINK = "+918650113744";

/**
 * WhatsApp number for contact.
 * To swap to the secondary number, change this to PHONE_SECONDARY_LINK.
 */
export const WHATSAPP_NUMBER = "917011116113";

/** Company details */
export const COMPANY_NAME = "Urban Pest Dial Services";
export const COMPANY_TAGLINE = "Safe, Trusted & Professional Pest Control in Delhi NCR";
export const COMPANY_ADDRESS = "D 8/87, gali no. 8 Mahavir Enclave, New Delhi-110045";
export const COMPANY_EMAIL = "info@urbanpestdial.in";
export const COMPANY_WEBSITE = "https://urbanpestdial.in";

/** Google Maps embed URL (generated from address) */
export const GOOGLE_MAPS_EMBED = "https://maps.google.com/maps?q=RZD1%2F204%2C+KH+No-91%2C+Gali+No-5%2C+Mahavir+Enclave%2C+New+Delhi-45&output=embed";

/** Social media links */
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/#",    // TODO: Update with real Facebook URL
  instagram: "https://instagram.com/#",  // TODO: Update with real Instagram URL
  twitter: "https://twitter.com/#",      // TODO: Update with real Twitter/X URL
};

/** Services list */
export const SERVICES = [
  "Anti-Termite Treatment",
  "Cockroach Control",
  "Bed Bugs Control",
  "Rodent Control",
  "Ants Control",
  "Lizard Control",
  "Mosquito Control",
] as const;

export type Service = (typeof SERVICES)[number];

/** Property types */
export const PROPERTY_TYPES = [
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK",
  "5 BHK",
  "Bungalow",
  "Office",
] as const;

export type PropertyType = (typeof PROPERTY_TYPES)[number];