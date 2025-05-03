"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VideosPage() {
  const { t } = useLanguage()
  const [activeLanguage, setActiveLanguage] = useState<string>("all")

  const videos = [
    {
      id: "video1",
      title: "Mastering the MUN Debate Structure: A Step-by-Step Guide",
      description: "In this video, we'll be breaking down the typical structure of a MUN debate—from the opening of the session to the final vote—with practical tips to help you excel as a delegate..",
      embedId: "flIGKTdSlgw", 
      language: "en",
    },
    {
      id: "video2",
      title: "MUN Rules of Procedure: The Ultimate Beginner's Guide",
      description: "Discover in this fourth episode the essential rules that govern MUN simulations, presented by your MUN UMI team! Learn how to navigate diplomatic debates like a pro.",
      embedId: "UYBYdY5wOP8", 
      language: "en",
    },
    {
      id: "video3",
      title: "How to Write a Winning MUN Position Paper - The Complete Guide",
      description: "Today, we’ll teach you how to write a compelling Position Paper that will impress your chairs and fellow delegates..",
      embedId: "Q5e96zzG2W8", 
      language: "en",
    },
    {
      id: "video4",
      title: "What is MUN? The Ultimate Introduction to Model United Nations",
      description: "Discover Model United Nations (MUN) in this first episode of our educational series.",
      embedId: "KfHR3Vpcz7k", 
      language: "en",
    },
    {
      id: "video5",
      title: "MUN Terminology Explained: Master Key Terms for Your First Conference!",
      description: "In this video, we’ll break down the essential terms used in Model UN (MUN) in a simple way, so you can feel confident in your first simulation.",
      embedId: "HnrRVcRu8yY", 
      language: "en",
    },
 



    
    {
      id: "video8",
      title: "Introduction au MUN : Le Guide Complet pour Débutants",
      description: "Découvrez le Modèle des Nations Unies (MUN) dans cette première vidéo de notre série éducative !",
      embedId: "98hDeuHgIhE", // Example YouTube ID
      language: "fr",
    },
    {
      id: "video9",
      title: "Règles de Procédure MUN - Le Guide Ultime pour les Débutants",
      description: "Découvrez dans ce quatrième épisode les règles essentielles qui régissent les simulations MUN, présenté par votre équipe MUN UMI ! Apprenez à naviguer comme un pro dans les débats diplomatiques.",
      embedId: "qjQ5aT6a5BI", // Example YouTube ID
      language: "fr",
    },
    {
      id: "video10",
      title: "Déroulement des débats MUN - Le Guide Complet du Débutant à l'Expert",
      description: "Dans cette vidéo, nous allons décortiquer le déroulement type d'un débat MUN, de l'ouverture de la session jusqu'au vote final, avec des conseils pratiques pour exceller en tant que délégué.",
      embedId: "vCEMCi2NUdI", // Example YouTube ID
      language: "fr",
    },
    {
      id: "video11",
      title: "Lexique MUN : Termes Clés à Maîtriser",
      description: "Aujourd'hui, on décrypte ensemble les termes clés à connaître absolument pour vos premières simulations.",
      embedId: "Z0HhaoCWbLA", // Example YouTube ID
      language: "fr",
    },
 
    {
      id: "video7",
      title: "Rédiger une Résolution MUN Parfaite - Guide Complet.",
      description: "Aujourd'hui, nous allons apprendre ensemble à rédiger une Résolution MUN (Resolution Paper), le document le plus important d'une simulation des Nations Unies, qui transforme vos idées en solutions concrètes..",
      embedId: "mFiecJ5S94I", 
      language: "fr",
    },
    {
      id: "vide13",
      title: "Rédiger un Position Paper Gagnant - Le Guide Complet",
      description: "Aujourd'hui, nous allons vous apprendre à rédiger un Position Paper convaincant qui impressionnera les chairs et vos collègues délégués..",
      embedId: "98hDeuHgIhE", 
      language: "fr",
    },
    {
      id: "vide14",
      title: "تعريف MUN : منظمة الأمم المتحدة النموذجية – دليلك الأول!",
      description: "أهلاً بكم في الحلقة الأولى من سلسلتنا التعليمية حول MUN (منظمة الأمم المتحدة النموذجية)!.",
      embedId: "HItiVnCU_mQ", 
      language: "ar",
    },
    {
      id: "vide15",
      title: "مصطلحات MUN الأساسية – دليلك الشامل للمبتدئين!",
      description: "ورشة عمل حول مهارات الخطابة والإقناع في نموذج الأمم المتحدة.",
      embedId: "RAi2BfstFUE", 
      language: "ar",
    },
    {
      id: "vide16",
      title: "قواعد MUN الرسمية - كيف تتفوق في المحاكاة الدبلوماسية؟",
      description: "مرحبًا بكم في الحلقة الرابعة من سلسلة MUN UMI التعليمية! في هذا الفيديو، سنكشف لكم أسرار قواعد وإجراءات نموذج الأمم المتحدة التي تميز المندوب المحترف عن المبتدئ.",
      embedId: "I9ieWHE7HzM", // Example YouTube ID
      language: "ar",
    },
    {
      id: "vide17",
      title: "مهارات الخطابة والإقناع",
      description: "في هذا الفيديو، سنتعلم معًا كيفية كتابة ورقة الموقف (Position Paper)، المستند الأساسي الذي يعكس موقف الدولة التي تمثلها في نموذج الأمم المتحدة.",
      embedId: "5kCTMwJKSgI", 
      language: "ar",
    },
    {
      id: "vide18",
      title: "كيفية إدارة النقاش في MUN – دليل خطوة بخطوة!",
      description: "مرحبًا بكم في الحلقة الثالثة من سلسلة MUN بالعربية من فريق MUN UMI! 🎤 في هذا الفيديو، سنشرح كيفية سير النقاش في نموذج الأمم المتحدة (MUN)، من بداية الجلسة حتى التصويت النهائي، مع نصائح عملية لتحقيق النجاح كمندوب",
      embedId: "61QSkNpsdY0", // Example YouTube ID
      language: "ar",
    }, 
  ]

  const filteredVideos = activeLanguage === "all" ? videos : videos.filter((video) => video.language === activeLanguage)

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">{t("videos.title")}</h1>

        <div className="flex justify-center mb-12">
          <Tabs defaultValue="all" onValueChange={setActiveLanguage}>
            <TabsList className="grid grid-cols-4 w-[400px]">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="en">🇬🇧 {t("videos.english")}</TabsTrigger>
              <TabsTrigger value="fr">🇫🇷 {t("videos.french")}</TabsTrigger>
              <TabsTrigger value="ar">🇸🇦 {t("videos.arabic")}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No videos available in this language.</p>
          </div>
        )}
      </div>
    </div>
  )
}
