"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  MessageCircle,
  Share,
  Settings,
  Users,
  Clock,
  Wifi,
  WifiOff,
} from "lucide-react"
import Link from "next/link"

interface ChatMessage {
  id: string
  sender: string
  message: string
  timestamp: Date
  isSystem?: boolean
}

export default function VideoSessionPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<"connecting" | "connected" | "disconnected">("connecting")
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [showChat, setShowChat] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [sessionTime, setSessionTime] = useState(0)
  const [practitionerJoined, setPractitionerJoined] = useState(false)

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "System",
      message: "Welcome to your NEIS session. Your practitioner will join shortly.",
      timestamp: new Date(),
      isSystem: true,
    },
  ])

  const videoRef = useRef<HTMLVideoElement>(null)
  const practitionerVideoRef = useRef<HTMLVideoElement>(null)

  // Simulate connection process
  useEffect(() => {
    const timer = setTimeout(() => {
      setConnectionStatus("connected")
      setIsConnected(true)

      // Simulate practitioner joining after 3 seconds
      setTimeout(() => {
        setPractitionerJoined(true)
        setChatMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: "System",
            message: "Dr. Sarah Mitchell has joined the session.",
            timestamp: new Date(),
            isSystem: true,
          },
        ])
      }, 3000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Session timer
  useEffect(() => {
    if (isConnected) {
      const interval = setInterval(() => {
        setSessionTime((prev) => prev + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isConnected])

  // Mock video stream
  useEffect(() => {
    if (videoRef.current && isConnected) {
      // In a real implementation, this would be getUserMedia()
      videoRef.current.src = "/placeholder.svg?height=300&width=400"
    }
  }, [isConnected, isVideoOn])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const sendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "You",
          message: chatMessage,
          timestamp: new Date(),
        },
      ])
      setChatMessage("")

      // Simulate practitioner response
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "Dr. Mitchell",
            message: "Thank you for sharing that. How are you feeling about what we discussed?",
            timestamp: new Date(),
          },
        ])
      }, 2000)
    }
  }

  const endSession = () => {
    setConnectionStatus("disconnected")
    setIsConnected(false)
    // In a real app, this would redirect or show end session summary
  }

  if (connectionStatus === "disconnected") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Session Ended</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">Your session has ended. Session duration: {formatTime(sessionTime)}</p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/user-dashboard">Return to Dashboard</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/">Go to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <img src="/images/australian-coat-of-arms.png" alt="NEIS Logo" className="h-8 w-auto" />
            <div>
              <h1 className="font-semibold">NEIS Video Session</h1>
              <p className="text-sm text-gray-600">Secure & Confidential</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {connectionStatus === "connected" ? (
                <Wifi className="h-4 w-4 text-green-500" />
              ) : (
                <WifiOff className="h-4 w-4 text-red-500" />
              )}
              <span className="text-sm capitalize">{connectionStatus}</span>
            </div>

            {isConnected && (
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-mono">{formatTime(sessionTime)}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Video Area */}
      <div className="flex-1 p-4">
        <div className="max-w-7xl mx-auto">
          {connectionStatus === "connecting" ? (
            <div className="flex items-center justify-center h-96">
              <Card className="p-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <h2 className="text-xl font-semibold mb-2">Connecting to your session...</h2>
                <p className="text-gray-600">Please wait while we establish a secure connection.</p>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[calc(100vh-200px)]">
              {/* Main Video Area */}
              <div className="lg:col-span-3 space-y-4">
                {/* Practitioner Video */}
                <Card className="relative h-2/3">
                  <CardContent className="p-0 h-full">
                    {practitionerJoined ? (
                      <div className="relative h-full bg-gray-800 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl font-bold">SM</span>
                            </div>
                            <h3 className="text-lg font-semibold">Dr. Sarah Mitchell</h3>
                            <p className="text-sm text-gray-300">Licensed Clinical Psychologist</p>
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">Practitioner</Badge>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white">
                          <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                          <p>Waiting for practitioner to join...</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* User Video (Picture-in-Picture style) */}
                <Card className="relative h-1/3">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full bg-gray-800 rounded-lg overflow-hidden">
                      {isVideoOn ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-lg font-bold">You</span>
                            </div>
                            <p className="text-sm">Your Video</p>
                          </div>
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center text-white">
                          <div className="text-center">
                            <VideoOff className="h-8 w-8 mx-auto mb-2" />
                            <p className="text-sm">Camera Off</p>
                          </div>
                        </div>
                      )}
                      <div className="absolute top-2 left-2">
                        <Badge variant="outline" className="text-white border-white">
                          You
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Chat Sidebar */}
              <div className="lg:col-span-1">
                <Card className="h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Session Chat
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col p-2">
                    <ScrollArea className="flex-1 mb-4">
                      <div className="space-y-2">
                        {chatMessages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`p-2 rounded text-xs ${
                              msg.isSystem
                                ? "bg-blue-50 text-blue-800"
                                : msg.sender === "You"
                                  ? "bg-green-50 text-green-800 ml-4"
                                  : "bg-gray-50 text-gray-800 mr-4"
                            }`}
                          >
                            <div className="font-semibold">{msg.sender}</div>
                            <div>{msg.message}</div>
                            <div className="text-xs opacity-60 mt-1">{msg.timestamp.toLocaleTimeString()}</div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>

                    <div className="flex space-x-2">
                      <Input
                        placeholder="Type a message..."
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                        className="text-sm"
                      />
                      <Button size="sm" onClick={sendMessage}>
                        Send
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Controls Bar */}
      {isConnected && (
        <div className="bg-white border-t p-4">
          <div className="flex items-center justify-center space-x-4 max-w-md mx-auto">
            <Button variant={isAudioOn ? "default" : "destructive"} size="sm" onClick={() => setIsAudioOn(!isAudioOn)}>
              {isAudioOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
            </Button>

            <Button variant={isVideoOn ? "default" : "destructive"} size="sm" onClick={() => setIsVideoOn(!isVideoOn)}>
              {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
            </Button>

            <Button variant="outline" size="sm">
              <Share className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>

            <Button variant="destructive" size="sm" onClick={endSession}>
              <PhoneOff className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
