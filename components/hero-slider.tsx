"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Import Swiper and required modules
import { register } from "swiper/element/bundle"

export default function HeroSlider() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    register()

    // Add custom styles for navigation buttons
    const style = document.createElement("style")
    style.textContent = `
      .swiper-button-next,
      .swiper-button-prev {
        opacity: 0.7;
        transition: opacity 0.3s;
      }
      .swiper-button-next:hover,
      .swiper-button-prev:hover {
        opacity: 1;
      }
    `
    document.head.append(style)

    setMounted(true)
  }, [])

  const slides = [
    {
      image: "/MUN photo.png?height=800&width=1600",
      alt: "UMI-MUN Conference",
    },
    {
      image: "/MUN cart.png?height=800&width=1600",
      alt: "UMI-MUN Delegates",
    },
    {
      image: "/MUN - mai.png?height=800&width=1600",
      alt: "UMI-MUN Event",
    },
    {
      image: "/MUNFSM.jpg?height=800&width=1600",
      alt: "UMI-MUN Workshop",
    },
    {
      image: "/drari.png?height=800&width=1600",
      alt: "UMI-MUN Workshop",
    },
    {
      image: "/drari.png?height=800&width=1600",
      alt: "UMI-MUN Workshop",
    },
    {
      image: "/drari.png?height=800&width=1600",
      alt: "UMI-MUN Workshop",
    },
    {
      image: "/drari.png?height=800&width=1600",
      alt: "UMI-MUN Workshop",
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="relative h-[600px] w-full">
      <swiper-container
        slides-per-view="1"
        loop="true"
        autoplay-delay="2000"
        autoplay-disable-on-interaction="false"
        navigation="true"
        pagination="true"
        effect="fade"
        class="h-full w-full"
      >
        {slides.map((slide, index) => (
          <swiper-slide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mb-6">{t("home.hero")}</h1>
                <Button size="lg" asChild>
                  <Link href="/events">{t("nav.events")}</Link>
                </Button>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>

      {/* Custom navigation buttons */}
 
    </div>
  )
}
