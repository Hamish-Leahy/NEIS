"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe, Volume2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Language {
  code: string
  name: string
  nativeName: string
  speechCode: string
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", speechCode: "en-AU" },
  { code: "zh", name: "Chinese (Mandarin)", nativeName: "中文", speechCode: "zh-CN" },
  { code: "ar", name: "Arabic", nativeName: "العربية", speechCode: "ar-SA" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", speechCode: "vi-VN" },
  { code: "it", name: "Italian", nativeName: "Italiano", speechCode: "it-IT" },
  { code: "gr", name: "Greek", nativeName: "Ελληνικά", speechCode: "el-GR" },
  { code: "es", name: "Spanish", nativeName: "Español", speechCode: "es-ES" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", speechCode: "hi-IN" },
  { code: "ko", name: "Korean", nativeName: "한국어", speechCode: "ko-KR" },
  { code: "th", name: "Thai", nativeName: "ไทย", speechCode: "th-TH" },
  { code: "tl", name: "Filipino", nativeName: "Filipino", speechCode: "tl-PH" },
]

interface LanguageSelectorProps {
  onLanguageChange?: (language: Language) => void
  showSpeechDemo?: boolean
  compact?: boolean
}

export function LanguageSelector({ onLanguageChange, showSpeechDemo = false, compact = false }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0])

  const handleLanguageChange = (languageCode: string) => {
    const language = languages.find((lang) => lang.code === languageCode)
    if (language) {
      setSelectedLanguage(language)
      onLanguageChange?.(language)

      // Store in localStorage for persistence
      localStorage.setItem("neis-language", languageCode)
    }
  }

  const speakWelcome = () => {
    if ("speechSynthesis" in window) {
      const welcomeMessages: Record<string, string> = {
        en: "Welcome to NEIS. We're here to support your mental health journey.",
        zh: "欢迎来到NEIS。我们在这里支持您的心理健康之旅。",
        ar: "مرحباً بكم في NEIS. نحن هنا لدعم رحلتكم في الصحة النفسية.",
        vi: "Chào mừng đến với NEIS. Chúng tôi ở đây để hỗ trợ hành trình sức khỏe tâm thần của bạn.",
        it: "Benvenuti a NEIS. Siamo qui per supportare il vostro percorso di salute mentale.",
        gr: "Καλώς ήρθατε στο NEIS. Είμαστε εδώ για να υποστηρίξουμε το ταξίδι της ψυχικής σας υγείας.",
        es: "Bienvenidos a NEIS. Estamos aquí para apoyar su viaje de salud mental.",
        hi: "NEIS में आपका स्वागत है। हम आपकी मानसिक स्वास्थ्य यात्रा का समर्थन करने के लिए यहाँ हैं।",
        ko: "NEIS에 오신 것을 환영합니다. 우리는 당신의 정신 건강 여정을 지원하기 위해 여기 있습니다.",
        th: "ยินดีต้อนรับสู่ NEIS เราอยู่ที่นี่เพื่อสนับสนุนการเดินทางด้านสุขภาพจิตของคุณ",
        tl: "Maligayang pagdating sa NEIS. Nandito kami upang suportahan ang inyong mental health journey.",
      }

      const message = welcomeMessages[selectedLanguage.code] || welcomeMessages["en"]
      const utterance = new SpeechSynthesisUtterance(message)
      utterance.lang = selectedLanguage.speechCode
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 text-gray-600" />
        <Select value={selectedLanguage.code} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-auto border-none shadow-none p-0 h-auto">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languages.map((language) => (
              <SelectItem key={language.code} value={language.code}>
                <div className="flex items-center gap-2">
                  <span>{language.nativeName}</span>
                  <span className="text-gray-500 text-sm">({language.name})</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Globe className="h-5 w-5 text-blue-600" />
        <div className="flex-1">
          <Select value={selectedLanguage.code} onValueChange={handleLanguageChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language.code} value={language.code}>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{language.nativeName}</span>
                    <span className="text-gray-500">({language.name})</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {showSpeechDemo && (
          <Button variant="outline" size="sm" onClick={speakWelcome} className="flex items-center gap-2">
            <Volume2 className="h-4 w-4" />
            Test Voice
          </Button>
        )}
      </div>

      <div className="text-sm text-gray-600">
        <p>
          Selected: <strong>{selectedLanguage.nativeName}</strong> ({selectedLanguage.name})
        </p>
        {showSpeechDemo && (
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="secondary">Voice Support Available</Badge>
            <span className="text-xs">Speech recognition and text-to-speech enabled</span>
          </div>
        )}
      </div>
    </div>
  )
}
