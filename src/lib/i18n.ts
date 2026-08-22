import { createContext, useContext } from "react";
import type { Locale } from "../types/content";

export const LocaleContext = createContext<Locale>("en");
export const useLocale = () => useContext(LocaleContext);

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

const interfaceTranslations: Partial<Record<Locale, Record<string, string>>> = {
  or: {
    Home: "ମୁଖ୍ୟ ପୃଷ୍ଠା", "About Us": "ଆମ ବିଷୟରେ", "Events & Activities": "କାର୍ଯ୍ୟକ୍ରମ ଓ କାର୍ଯ୍ୟକଳାପ", "Learn Astronomy": "ଜ୍ୟୋତିର୍ବିଜ୍ଞାନ ଶିଖନ୍ତୁ", "Outreach Programs": "ଜନସମ୍ପର୍କ କାର୍ଯ୍ୟକ୍ରମ", Astrophotography: "ଆଷ୍ଟ୍ରୋଫଟୋଗ୍ରାଫି", Membership: "ସଦସ୍ୟତା", Publications: "ପ୍ରକାଶନ", "Media Center": "ମିଡିଆ କେନ୍ଦ୍ର", "Support Us": "ଆମକୁ ସହଯୋଗ କରନ୍ତୁ", More: "ଅଧିକ", "Join SCAAA": "SCAAA ସହ ଯୋଗ ଦିଅନ୍ତୁ", "Explore": "ଅନୁସନ୍ଧାନ", "Participate": "ଅଂଶଗ୍ରହଣ", Contact: "ଯୋଗାଯୋଗ", "Stay Connected": "ଯୋଡ଼ି ହୋଇ ରୁହନ୍ତୁ", Subscribe: "ସଦସ୍ୟ ହୁଅନ୍ତୁ", "Email address": "ଇମେଲ ଠିକଣା", Search: "ଖୋଜନ୍ତୁ", "Close menu": "ମେନୁ ବନ୍ଦ କରନ୍ତୁ", "Open menu": "ମେନୁ ଖୋଲନ୍ତୁ", "Sky Tonight": "ଆଜିର ଆକାଶ", "Upcoming Programs": "ଆସନ୍ତା କାର୍ଯ୍ୟକ୍ରମ", "About SCAAA": "SCAAA ବିଷୟରେ", "Discover Our Story": "ଆମ କାହାଣୀ ଜାଣନ୍ତୁ", "Image of the Month": "ମାସର ଛବି", "Explore Gallery": "ଗ୍ୟାଲେରି ଦେଖନ୍ତୁ", Outreach: "ଜନସମ୍ପର୍କ", "Request an Outreach Program": "ଜନସମ୍ପର୍କ କାର୍ଯ୍ୟକ୍ରମ ଅନୁରୋଧ କରନ୍ତୁ", "Be Part of the Journey": "ଯାତ୍ରାର ଅଂଶ ହୁଅନ୍ତୁ", "Become a Member": "ସଦସ୍ୟ ହୁଅନ୍ତୁ", "Latest News & Articles": "ସଦ୍ୟତମ ଖବର ଓ ଲେଖା", "Editorial Updates": "ସମ୍ପାଦକୀୟ ଅପଡେଟ", "Stay Connected With the Night Sky": "ରାତି ଆକାଶ ସହ ଯୋଡ଼ି ହୋଇ ରୁହନ୍ତୁ", "View details": "ବିବରଣୀ ଦେଖନ୍ତୁ", Placeholder: "ସ୍ଥାନଧାରକ", Draft: "ଖସଡ଼ା", "Our Story": "ଆମ କାହାଣୀ", People: "ଲୋକମାନେ", "Committee, Advisors and Volunteers": "କମିଟି, ପରାମର୍ଶଦାତା ଓ ସ୍ୱେଚ୍ଛାସେବୀ", "Find Your Next Observing Opportunity": "ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ଆକାଶ ନିରୀକ୍ଷଣ ସୁଯୋଗ ଖୋଜନ୍ତୁ", Category: "ବର୍ଗ", Date: "ତାରିଖ", "Search events": "କାର୍ଯ୍ୟକ୍ରମ ଖୋଜନ୍ତୁ", "Featured Lessons": "ବିଶେଷ ପାଠ", "A Practical Astronomy Learning Hub": "ଏକ ବ୍ୟବହାରିକ ଜ୍ୟୋତିର୍ବିଜ୍ଞାନ ଶିକ୍ଷା କେନ୍ଦ୍ର", "Astronomy Beyond the City": "ସହର ବାହାରେ ଜ୍ୟୋତିର୍ବିଜ୍ଞାନ", "Request an Outreach Event": "ଜନସମ୍ପର୍କ କାର୍ଯ୍ୟକ୍ରମ ଅନୁରୋଧ କରନ୍ତୁ", "Why Join SCAAA?": "SCAAA ରେ କାହିଁକି ଯୋଗ ଦେବେ?", "Newsletter, Articles and Archives": "ସମ୍ବାଦପତ୍ର, ଲେଖା ଓ ଅଭିଲେଖ", "Help Astronomy Reach More People": "ଜ୍ୟୋତିର୍ବିଜ୍ଞାନକୁ ଅଧିକ ଲୋକଙ୍କ ପାଖରେ ପହଞ୍ଚାନ୍ତୁ", "Connect With SCAAA": "SCAAA ସହ ଯୋଡ଼ି ହୁଅନ୍ତୁ", "Contact Form": "ଯୋଗାଯୋଗ ଫର୍ମ", "Send Message": "ବାର୍ତ୍ତା ପଠାନ୍ତୁ", "Member Gallery and Image of the Month": "ସଦସ୍ୟ ଗ୍ୟାଲେରି ଓ ମାସର ଛବି", Gallery: "ଗ୍ୟାଲେରି", "SCAAA in Images, Video and Press": "ଛବି, ଭିଡିଓ ଓ ପ୍ରେସରେ SCAAA", "Media Library": "ମିଡିଆ ପୁସ୍ତକାଳୟ",
  },
  hi: {
    Home: "होम", "About Us": "हमारे बारे में", "Events & Activities": "कार्यक्रम और गतिविधियाँ", "Learn Astronomy": "खगोल विज्ञान सीखें", "Outreach Programs": "जनसंपर्क कार्यक्रम", Astrophotography: "खगोलीय फोटोग्राफी", Membership: "सदस्यता", Publications: "प्रकाशन", "Media Center": "मीडिया केंद्र", "Support Us": "हमारा सहयोग करें", More: "और", "Join SCAAA": "SCAAA से जुड़ें", Explore: "जानें", Participate: "भाग लें", Contact: "संपर्क", "Stay Connected": "जुड़े रहें", Subscribe: "सदस्य बनें", "Email address": "ईमेल पता", Search: "खोजें", "Close menu": "मेनू बंद करें", "Open menu": "मेनू खोलें", "Sky Tonight": "आज का आकाश", "Upcoming Programs": "आगामी कार्यक्रम", "About SCAAA": "SCAAA के बारे में", "Discover Our Story": "हमारी कहानी जानें", "Image of the Month": "महीने की छवि", "Explore Gallery": "गैलरी देखें", Outreach: "जनसंपर्क", "Request an Outreach Program": "जनसंपर्क कार्यक्रम का अनुरोध करें", "Be Part of the Journey": "यात्रा का हिस्सा बनें", "Become a Member": "सदस्य बनें", "Latest News & Articles": "नवीनतम समाचार और लेख", "Editorial Updates": "संपादकीय अपडेट", "Stay Connected With the Night Sky": "रात्रि आकाश से जुड़े रहें", "View details": "विवरण देखें", Placeholder: "प्लेसहोल्डर", Draft: "प्रारूप", "Our Story": "हमारी कहानी", People: "लोग", "Committee, Advisors and Volunteers": "समिति, सलाहकार और स्वयंसेवक", "Find Your Next Observing Opportunity": "अपना अगला अवलोकन अवसर खोजें", Category: "श्रेणी", Date: "तारीख", "Search events": "कार्यक्रम खोजें", "Featured Lessons": "चुनिंदा पाठ", "A Practical Astronomy Learning Hub": "व्यावहारिक खगोल विज्ञान शिक्षण केंद्र", "Astronomy Beyond the City": "शहर से आगे खगोल विज्ञान", "Request an Outreach Event": "जनसंपर्क कार्यक्रम का अनुरोध करें", "Why Join SCAAA?": "SCAAA से क्यों जुड़ें?", "Newsletter, Articles and Archives": "न्यूज़लेटर, लेख और अभिलेख", "Help Astronomy Reach More People": "खगोल विज्ञान को अधिक लोगों तक पहुँचाएँ", "Connect With SCAAA": "SCAAA से जुड़ें", "Contact Form": "संपर्क फ़ॉर्म", "Send Message": "संदेश भेजें", "Member Gallery and Image of the Month": "सदस्य गैलरी और महीने की छवि", Gallery: "गैलरी", "SCAAA in Images, Video and Press": "छवियों, वीडियो और प्रेस में SCAAA", "Media Library": "मीडिया पुस्तकालय",
  },
};

export function tr(locale: Locale, value: string) {
  return interfaceTranslations[locale]?.[value] ?? value;
}
