"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "./language-provider"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/partners", label: t("nav.partners") },
    { href: "/events", label: t("nav.events") },
    { href: "/videos", label: t("nav.videos") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/LOGO MUN UMI.png"
              alt="UMI-MUN Logo"
              width={150}
              height={40}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">{t("nav.contactUs")}</Link>
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            <button onClick={toggleMenu} className="p-2 ml-2 text-gray-700 dark:text-gray-200" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-base font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-gray-700 dark:text-gray-200"
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="/contact" onClick={closeMenu}>
                {t("nav.contactUs")}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>🇬🇧 English {language === "en" && "✓"}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fr")}>🇫🇷 Français {language === "fr" && "✓"}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ar")}>🇸🇦 العربية {language === "ar" && "✓"}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Navbar
