"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("contact.title")}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for contacting us. We will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form 
                  className="space-y-6" 
                  action="https://api.web3forms.com/submit" 
                  method="POST">
               <input type="hidden" name="access_key" value="b419b1e1-4205-4887-bff6-48a8c8802510" />
       
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t("contact.form.name")}
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t("contact.form.email")}
                      </label> 
                        
                      <Input
                      
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        {t("contact.form.subject")}
                      </label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t("contact.form.message")}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : t("contact.form.send")}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information with Location */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">{t("contact.info.title")}</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">{t("contact.info.email")}</h3>
                      <a
                        href="mailto:umimun2024@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary"
                      >
                        umimun2024@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">{t("contact.info.phone")}</h3>
                      <a href="tel:+212 622-608828" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                      +212 622-608828
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">{t("footer.location")}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">{t("footer.address")}</p>
                      <a
                        href="https://maps.app.goo.gl/Mk8oyntV9PbB3goT9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center"
                      >
                        {t("footer.viewMap")}
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">{t("contact.info.social")}</h3>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.facebook.com/profile.php?id=61573010323312"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary p-3 rounded-full transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/umi_mun_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary p-3 rounded-full transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/umi-mun/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary p-3 rounded-full transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.youtube.com/@UMIMUN1989"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary p-3 rounded-full transition-colors"
                        aria-label="YouTube"
                      >
                        <Youtube className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <div className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium mb-3">Map</h3>
                  <div className="aspect-video w-full rounded-md overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5099.262317712109!2d-5.5769708!3d33.8580589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda05aa58f684fa5%3A0xf0fb1148b3d459d!2sUniversit%C3%A9%20Moulay%20Ismail%20-%20Pr%C3%A9sidence!5e1!3m2!1sfr!2sma!4v1746361803989!5m2!1sfr!2sma"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="UMI-MUN Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
