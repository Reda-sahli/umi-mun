"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PartnersPage() {
  const { t } = useLanguage()

  // Template for partners data (commented out)
  /*
  const partners = [
    {
      name: "United Nations",
      logo: "/logo-ar.svg?height=200&width=200",
      description: "Global international organization promoting peace and cooperation.",
      website: "https://www.un.org",
    },
  ]
  */

  // Empty partners array for now
  const partners = []

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("partners.title")}</h1>

        {partners.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-6">
                    <div className="relative h-32 w-32">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">{partner.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-4">{partner.description}</p>
                  <div className="text-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("") || "Our partners will be listed here soon."}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}