"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mic, MicOff, Volume2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface SpeechTranscriptionProps {
  onTranscript: (text: string) => void
  language?: string
  placeholder?: string
  className?: string
}

export function SpeechTranscription({
  onTranscript,
  language = "en-AU",
  placeholder = "Click the microphone to start speaking...",
  className = "",
}: SpeechTranscriptionProps) {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [isSupported, setIsSupported] = useState(false)
  const [error, setError] = useState("")
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    // Check if speech recognition is supported
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

    if (SpeechRecognition) {
      setIsSupported(true)
      recognitionRef.current = new SpeechRecognition()

      const recognition = recognitionRef.current
      recognition.continuous = true
      recognition.interimResults = true
      recognition.lang = language

      recognition.onstart = () => {
        setIsListening(true)
        setError("")
      }

      recognition.onresult = (event: any) => {
        let finalTranscript = ""
        let interimTranscript = ""

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            finalTranscript += transcript
          } else {
            interimTranscript += transcript
          }
        }

        const fullTranscript = finalTranscript || interimTranscript
        setTranscript(fullTranscript)

        if (finalTranscript) {
          onTranscript(finalTranscript)
        }
      }

      recognition.onerror = (event: any) => {
        setError(`Speech recognition error: ${event.error}`)
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }
    } else {
      setIsSupported(false)
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [language, onTranscript])

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setTranscript("")
      setError("")
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
    }
  }

  const speakText = (text: string) => {
    if ("speechSynthesis" in window && text) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = language
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  if (!isSupported) {
    return (
      <Alert className="mb-4">
        <AlertDescription>
          Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari for voice input.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant={isListening ? "destructive" : "outline"}
          size="sm"
          onClick={isListening ? stopListening : startListening}
          className="flex items-center gap-2"
        >
          {isListening ? (
            <>
              <MicOff className="h-4 w-4" />
              Stop Recording
            </>
          ) : (
            <>
              <Mic className="h-4 w-4" />
              Start Voice Input
            </>
          )}
        </Button>

        {transcript && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => speakText(transcript)}
            className="flex items-center gap-2"
          >
            <Volume2 className="h-4 w-4" />
            Play Back
          </Button>
        )}

        {isListening && (
          <Badge variant="secondary" className="animate-pulse">
            Listening...
          </Badge>
        )}
      </div>

      {transcript && (
        <div className="p-3 bg-blue-50 rounded-lg border">
          <p className="text-sm text-gray-700">
            <strong>Transcribed:</strong> {transcript}
          </p>
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {!transcript && !isListening && <p className="text-sm text-gray-500">{placeholder}</p>}
    </div>
  )
}
