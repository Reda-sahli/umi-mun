"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Globe, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="w-full">
        <HeroSlider />
      </section>

      {/* What is MUN Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t("home.whatIsMun.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t("home.whatIsMun.p1")}</p>
              <p className="text-gray-700 dark:text-gray-300">{t("home.whatIsMun.p2")}</p>
              <Button className="mt-6" asChild>
                <Link href="/events">{t("nav.events")}</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/MUN cart.png?height=400&width=600" alt="UMI-MUN Event" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            {t("home.benefits.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Mic className="h-10 w-10 text-primary" />}
              title={t("home.benefits.speaking.title")}
              description={t("home.benefits.speaking.desc")}
            />
            <BenefitCard
              icon={<Globe className="h-10 w-10 text-primary" />}
              title={t("home.benefits.diplomacy.title")}
              description={t("home.benefits.diplomacy.desc")}
            />
            <BenefitCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title={t("home.benefits.networking.title")}
              description={t("home.benefits.networking.desc")}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
