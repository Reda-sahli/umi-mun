"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr" | "ar"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.partners": "Partners",
    "nav.events": "Event Info",
    "nav.videos": "Videos",
    "nav.contact": "Contact",
    "nav.contactUs": "Contact Us",

    // Home page
    "home.hero": "MODEL UNITED NATIONS"
    
    ,
   
    "home.whatIsMun.title": "What is MUN?",
    "home.whatIsMun.p1":
      "Model United Nations (MUN) is an educational simulation where students learn about diplomacy, international relations, and the United Nations.",
    "home.whatIsMun.p2":
      "UMI-MUN is the Model United Nations chapter at Moulay Ismail University, providing students with opportunities to develop critical thinking, public speaking, and negotiation skills.",
    "home.benefits.title": "Benefits of Joining",
    "home.benefits.speaking.title": "Public Speaking",
    "home.benefits.speaking.desc":
      "Gain confidence and improve your public speaking skills through debates and presentations.",
    "home.benefits.diplomacy.title": "Diplomacy Skills",
    "home.benefits.diplomacy.desc":
      "Learn negotiation, conflict resolution, and international diplomacy through simulated UN sessions.",
    "home.benefits.networking.title": "Global Networking",
    "home.benefits.networking.desc":
      "Connect with students and professionals from around the world who share your interests.",

    // Partners page
    "partners.title": "Our Partners",

    // Events page
    "events.title": "UMI-MUN Events",

    // Videos page
    "videos.title": "Watch UMI-MUN in Action",
    "videos.english": "English",
    "videos.french": "Français",
    "videos.arabic": "العربية",

    // Contact page
    "contact.title": "Contact Us",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.social": "Follow Us",

    // Footer
    "footer.rights": "© 2025 UMI-MUN. All rights reserved To Sahli Reda.",
    "footer.location": "Location",
    "footer.address": "Moulay Ismail University, Marjane 2, BP 298, Meknes, Morocco",
    "footer.viewMap": "View on Map",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.partners": "Partenaires",
    "nav.events": "Événements",
    "nav.videos": "Vidéos",
    "nav.contact": "Contact",
    "nav.contactUs": "Contactez-nous",

    // Home page
    "home.hero": "Expérimentez la diplomatie. Façonnez l'avenir. Rejoignez UMI-MUN.",
    "home.whatIsMun.title": "Qu'est-ce que le MUN ?",
    "home.whatIsMun.p1":
      "Le Model United Nations (MUN) est une simulation éducative où les étudiants apprennent la diplomatie, les relations internationales et les Nations Unies.",
    "home.whatIsMun.p2":
      "UMI-MUN est le chapitre Model United Nations de l'Université Moulay Ismail, offrant aux étudiants des opportunités de développer leur pensée critique, leur expression orale et leurs compétences en négociation.",
    "home.benefits.title": "Avantages de rejoindre",
    "home.benefits.speaking.title": "Expression orale",
    "home.benefits.speaking.desc":
      "Gagnez en confiance et améliorez vos compétences en expression orale grâce aux débats et présentations.",
    "home.benefits.diplomacy.title": "Compétences diplomatiques",
    "home.benefits.diplomacy.desc":
      "Apprenez la négociation, la résolution de conflits et la diplomatie internationale à travers des sessions simulées de l'ONU.",
    "home.benefits.networking.title": "Réseau mondial",
    "home.benefits.networking.desc":
      "Connectez-vous avec des étudiants et des professionnels du monde entier qui partagent vos intérêts.",

    // Partners page
    "partners.title": "Nos Partenaires",

    // Events page
    "events.title": "Événements UMI-MUN",

    // Videos page
    "videos.title": "Regardez UMI-MUN en action",
    "videos.english": "English",
    "videos.french": "Français",
    "videos.arabic": "العربية",

    // Contact page
    "contact.title": "Contactez-nous",
    "contact.form.name": "Nom complet",
    "contact.form.email": "Email",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le message",
    "contact.info.title": "Informations de contact",
    "contact.info.email": "Email",
    "contact.info.phone": "Téléphone",
    "contact.info.social": "Suivez-nous",

    // Footer
    "footer.rights": "© 2025 UMI-MUN. Tous droits réservés.",
    "footer.location": "Emplacement",
    "footer.address": "Université Moulay Ismail, Marjane 2, BP 298, Meknès, Maroc",
    "footer.viewMap": "Voir sur la carte",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.partners": "الشركاء",
    "nav.events": "الفعاليات",
    "nav.videos": "الفيديوهات",
    "nav.contact": "اتصل بنا",
    "nav.contactUs": "تواصل معنا",

    // Home page
    "home.hero": "اختبر الدبلوماسية. شكل المستقبل. انضم إلى UMI-MUN.",
    "home.whatIsMun.title": "ما هو نموذج الأمم المتحدة؟",
    "home.whatIsMun.p1":
      "نموذج الأمم المتحدة (MUN) هو محاكاة تعليمية حيث يتعلم الطلاب عن الدبلوماسية والعلاقات الدولية والأمم المتحدة.",
    "home.whatIsMun.p2":
      "UMI-MUN هو فرع نموذج الأمم المتحدة في جامعة مولاي إسماعيل، يوفر للطلاب فرصًا لتطوير التفكير النقدي ومهارات الخطابة والتفاوض.",
    "home.benefits.title": "فوائد الانضمام",
    "home.benefits.speaking.title": "الخطابة العامة",
    "home.benefits.speaking.desc": "اكتسب الثقة وحسّن مهارات الخطابة من خلال المناقشات والعروض التقديمية.",
    "home.benefits.diplomacy.title": "المهارات الدبلوماسية",
    "home.benefits.diplomacy.desc":
      "تعلم التفاوض وحل النزاعات والدبلوماسية الدولية من خلال جلسات الأمم المتحدة المحاكاة.",
    "home.benefits.networking.title": "التواصل العالمي",
    "home.benefits.networking.desc": "تواصل مع الطلاب والمهنيين من جميع أنحاء العالم الذين يشاركونك اهتماماتك.",

    // Partners page
    "partners.title": "شركاؤنا",

    // Events page
    "events.title": "فعاليات UMI-MUN",

    // Videos page
    "videos.title": "شاهد UMI-MUN في العمل",
    "videos.english": "English",
    "videos.french": "Français",
    "videos.arabic": "العربية",

    // Contact page
    "contact.title": "اتصل بنا",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.subject": "الموضوع",
    "contact.form.message": "الرسالة",
    "contact.form.send": "إرسال الرسالة",
    "contact.info.title": "معلومات الاتصال",
    "contact.info.email": "البريد الإلكتروني",
    "contact.info.phone": "الهاتف",
    "contact.info.social": "تابعنا",

    // Footer
    "footer.rights": "© 2025 UMI-MUN. جميع الحقوق محفوظة.",
    "footer.location": "الموقع",
    "footer.address": "جامعة مولاي إسماعيل، مرجان 2، صندوق بريد 298، مكناس، المغرب",
    "footer.viewMap": "عرض على الخريطة",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Set RTL direction for Arabic
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"

    // Set lang attribute
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
