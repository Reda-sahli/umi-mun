"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "./language-provider"

const Footer = () => {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Part 1: Logo and Description */}
          <div className="col-span-1">
            <Link href="/">
              <Image
                src="/LOGO MUN UMI.png?height=80&width=190"
                alt=""
                width={190}
                height={80}
                className="h-13 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
              Model United Nations – Moulay Ismail University
            </p>
          </div>

          {/* Part 2: Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {language === "en" ? "Quick Links" : language === "fr" ? "Liens Rapides" : "روابط سريعة"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {t("nav.partners")}
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {t("nav.events")}
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {t("nav.videos")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Part 3: Contact Information */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t("contact.info.title")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{t("contact.info.email")}:</span>{" "}
                    <a
                      href="umimun2024@gmail.com"
                      className="hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      umimun2024@gmail.com
                    </a>
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{t("contact.info.phone")}:</span>{" "}
                    <a
                      href="tel:+212622608828"
                      className="hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      +212 622-608828
                    </a>
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{t("footer.location")}:</span> <span>{t("footer.address")}</span>
                  </span>
                  <div>
                    <a
                      href="https://maps.app.goo.gl/Mk8oyntV9PbB3goT9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mt-1 inline-block"
                    >
                      {t("footer.viewMap")}
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Part 4: Follow Us */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t("contact.info.social")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61573010323312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center"
                >
                  <Facebook size={18} className="mr-2" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/umi_mun_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center"
                >
                  <Instagram size={18} className="mr-2" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/umi-mun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center"
                >
                  <Linkedin size={18} className="mr-2" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@UMIMUN1989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center"
                >
                  <Youtube size={18} className="mr-2" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
