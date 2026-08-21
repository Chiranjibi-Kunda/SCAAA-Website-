import type { Locale } from "../types/content";

export const locales: { code: Locale; label: string; nativeName: string }[] = [
  { code: "en", label: "English", nativeName: "English" },
  { code: "or", label: "Odia", nativeName: "ଓଡ଼ିଆ" },
  { code: "hi", label: "Hindi", nativeName: "हिन्दी" },
];

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    eyebrow: "Established 1993 · Bhubaneswar, Odisha",
    heroTitle: "Bringing the Universe Closer to Everyone",
    heroCopy:
      "Samanta Chandra Shekhar Amateur Astronomers' Association (SCAAA) popularizes astronomy and scientific curiosity through public observations, learning programs, outreach and community science.",
    exploreEvents: "Explore Events",
    joinScaaa: "Join SCAAA",
  },
  or: {
    eyebrow: "୧୯୯୩ ରୁ · ଭୁବନେଶ୍ୱର, ଓଡ଼ିଶା",
    heroTitle: "ବ୍ରହ୍ମାଣ୍ଡକୁ ସମସ୍ତଙ୍କ ନିକଟକୁ ଆଣୁଛୁ",
    heroCopy:
      "Samanta Chandra Shekhar Amateur Astronomers' Association (SCAAA) ସାର୍ବଜନୀନ ଆକାଶ ନିରୀକ୍ଷଣ, ଶିକ୍ଷା, outreach ଓ community science ମାଧ୍ୟମରେ ଜ୍ୟୋତିର୍ବିଜ୍ଞାନ ଓ ବୈଜ୍ଞାନିକ ଚିନ୍ତାଧାରାକୁ ଲୋକପ୍ରିୟ କରେ।",
    exploreEvents: "କାର୍ଯ୍ୟକ୍ରମ ଦେଖନ୍ତୁ",
    joinScaaa: "SCAAA ସହ ଯୋଗ ଦିଅନ୍ତୁ",
  },
  hi: {
    eyebrow: "1993 से · भुवनेश्वर, ओडिशा",
    heroTitle: "ब्रह्मांड को सबके करीब लाना",
    heroCopy:
      "Samanta Chandra Shekhar Amateur Astronomers' Association (SCAAA) सार्वजनिक अवलोकन, शिक्षा, outreach और community science के माध्यम से खगोल विज्ञान और वैज्ञानिक सोच को लोकप्रिय बनाता है।",
    exploreEvents: "कार्यक्रम देखें",
    joinScaaa: "SCAAA से जुड़ें",
  },
};

export function t(locale: Locale, key: string) {
  return translations[locale][key] ?? translations.en[key] ?? key;
}
