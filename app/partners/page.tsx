"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PartnersPage() {
  const { t } = useLanguage()

  const partners = [
    {
      name: "United Nations",
      logo: "/un-logo.png?height=200&width=200",
      description: "Global international organization promoting peace and cooperation.",
      website: "https://www.un.org",
    },
    {
      name: "ECLLE",
      logo: "/ECLEE.png?height=200&width=200",
      description: "European Center for Leadership, Entrepreneurship and Education.",
      website: "https://eclee.eu/",
    },
    {
      name: "Moulay Ismail University",
      logo: "/UMI.png?height=200&width=200",
      description: " l'Université moulay Ismaïl in Meknes, Morocco.",
      website: "https://www.umi.ac.ma",
    },
    {
      name: "Jagora University is a Cameroonian ",
      logo: "/jagoraLogo.png?height=200&width=200",
      description: "Jagora University is a Cameroonian Government accredited Higher Learning Institution. It operates under the Orders establishing.",
      website: "https://www.jagora.org/",
    },
    {
      name: "IVR CLUB FSM",
      logo: "/ivrrrr.png?height=200&width=200",
      description: "IVR CLUB FSM | Innovation Visionnary Robotic Club.",
      website: "https://ivrclubfs.com/",
    },
    {
      name: "Photography Club FSM ",
      logo: "/photograpy.png?height=200&width=200",
      description:
        "Le Club Photography FSM vous ouvre ses portes pour explorer l’art de la photographie, du cadrage parfait à la retouche professionnelle !.",
      website: "https://www.instagram.com/photographyfsm.pro/",
    },
    {
      name: "A.U.R.A",
      logo: "/ora.png?height=200&width=200",
      description:
        "A.U.R.A is the Public Speaking and Debating Club at ENS Meknès. We help students build confidence, think critically, and grow as eloquent arguers .",
      website: "https://www.instagram.com/aura_ens_meknes/",
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("partners.title")}</h1>

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
      </div>
    </div>
  )
}