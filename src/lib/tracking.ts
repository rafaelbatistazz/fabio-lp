declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const WHATSAPP_NUMBER = "5511984370811";
const WHATSAPP_MESSAGE = "Preciso de um criminalista, vim do Google";
const PHONE_NUMBER = "+5511984370811";
const PHONE_DISPLAY = "(11) 98437-0811";

export const getWhatsAppUrl = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const getPhoneUrl = () => `tel:${PHONE_NUMBER}`;

export const PHONE_DISPLAY_TEXT = PHONE_DISPLAY;

export const trackWhatsAppConversion = () => {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-11111983031/HskoCISCsJAYELfPzbIp",
    });
  }
  if (window.fbq) {
    window.fbq("track", "Contact");
  }
};

export const trackCallConversion = () => {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-11111983031/HskoCISCsJAYELfPzbIp",
      value: 1.0,
      currency: "BRL",
    });
  }
  if (window.fbq) {
    window.fbq("track", "Contact");
  }
};

export const handleWhatsAppClick = () => {
  trackWhatsAppConversion();
  window.open(getWhatsAppUrl(), "_blank");
};

export const handleCallClick = () => {
  trackCallConversion();
  window.location.href = getPhoneUrl();
};
