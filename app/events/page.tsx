"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function EventsPage() {
  const { t } = useLanguage()

  const events = [
    {
      title: "UMI-MUN Annual Conference 2025",
      date: "Mai 16-17, 2025",
      location: "Moulay Ismail University, Meknes",
      time: "9:00 AM - 6:00 PM",
      description:
        "Les 16 & 17 mai , l’Université Moulay Ismaïl accueille la UMI-MUN Conference 2025 , une plateforme unique où étudiants, jeunes leaders et passionnés de relations internationales se rencontrent pour explorer les grands enjeux mondiaux.",
      image: "/MUN - mai.png?height=400&width=600",
      registrationLink: "https://forms.gle/9HyXTQUUep4JYS1W9 ",
    },
   

  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("events.title")}</h1>

        <div className="space-y-12">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-64 md:h-auto">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <div className="col-span-2 p-6">
                    <h2 className="text-2xl font-bold mb-3">{event.title}</h2>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">{event.description}</p>

                    <Button asChild>
                      <a href={event.registrationLink}>Register Now</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
