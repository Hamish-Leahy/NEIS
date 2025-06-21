"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Video,
  FileText,
  Clock,
  User,
  AlertTriangle,
  CheckCircle,
  Camera,
  Shield,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"
import { Header } from "@/components/header"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ChecklistItem {
  id: string
  label: string
  description: string
  required: boolean
  checked: boolean
  category: "technical" | "clinical" | "safety" | "preparation"
}

export default function PreSessionPage() {
  const router = useRouter()
  const [sessionNotes, setSessionNotes] = useState("")
  const [sessionGoals, setSessionGoals] = useState("")
  const [estimatedDuration, setEstimatedDuration] = useState("45")

  // Mock client data - in real app this would come from URL params or API
  const clientData = {
    name: "Sarah J.",
    sessionNumber: 3,
    lastSession: "January 15, 2025",
    riskLevel: "low",
    nextGoals: "Continue CBT techniques for anxiety management",
    previousNotes: "Client showed good progress with breathing exercises. Homework completed successfully.",
  }

  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    // Technical Checks
    {
      id: "camera-test",
      label: "Camera Test",
      description: "Verify camera is working and positioned correctly",
      required: true,
      checked: false,
      category: "technical",
    },
    {
      id: "microphone-test",
      label: "Microphone Test",
      description: "Test audio input and output quality",
      required: true,
      checked: false,
      category: "technical",
    },
    {
      id: "internet-connection",
      label: "Internet Connection",
      description: "Ensure stable internet connection (minimum 5 Mbps)",
      required: true,
      checked: false,
      category: "technical",
    },
    {
      id: "backup-device",
      label: "Backup Device Ready",
      description: "Secondary device available if needed",
      required: false,
      checked: false,
      category: "technical",
    },

    // Clinical Preparation
    {
      id: "client-file-review",
      label: "Client File Review",
      description: "Review previous session notes and treatment plan",
      required: true,
      checked: false,
      category: "clinical",
    },
    {
      id: "session-plan",
      label: "Session Plan Prepared",
      description: "Agenda and goals for today's session ready",
      required: true,
      checked: false,
      category: "clinical",
    },
    {
      id: "assessment-tools",
      label: "Assessment Tools",
      description: "Required forms and assessment materials accessible",
      required: false,
      checked: false,
      category: "clinical",
    },
    {
      id: "homework-review",
      label: "Homework Review",
      description: "Previous session homework and assignments reviewed",
      required: true,
      checked: false,
      category: "clinical",
    },

    // Safety & Privacy
    {
      id: "private-space",
      label: "Private Space Secured",
      description: "Ensure confidential environment with no interruptions",
      required: true,
      checked: false,
      category: "safety",
    },
    {
      id: "emergency-contacts",
      label: "Emergency Contacts Available",
      description: "Crisis support numbers and local emergency services ready",
      required: true,
      checked: false,
      category: "safety",
    },
    {
      id: "risk-assessment",
      label: "Risk Assessment Current",
      description: "Latest risk assessment reviewed and up to date",
      required: true,
      checked: false,
      category: "safety",
    },

    // General Preparation
    {
      id: "materials-ready",
      label: "Session Materials",
      description: "Worksheets, resources, and handouts prepared",
      required: false,
      checked: false,
      category: "preparation",
    },
    {
      id: "time-buffer",
      label: "Time Buffer",
      description: "5-10 minutes buffer before and after session",
      required: true,
      checked: false,
      category: "preparation",
    },
    {
      id: "notification-silence",
      label: "Notifications Silenced",
      description: "Phone and computer notifications turned off",
      required: true,
      checked: false,
      category: "preparation",
    },
  ])

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) => prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  const getCompletionStats = () => {
    const total = checklist.length
    const completed = checklist.filter((item) => item.checked).length
    const requiredTotal = checklist.filter((item) => item.required).length
    const requiredCompleted = checklist.filter((item) => item.required && item.checked).length

    return {
      total,
      completed,
      requiredTotal,
      requiredCompleted,
      percentage: Math.round((completed / total) * 100),
      requiredPercentage: Math.round((requiredCompleted / requiredTotal) * 100),
    }
  }

  const stats = getCompletionStats()
  const canStartSession = stats.requiredCompleted === stats.requiredTotal

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "technical":
        return <Camera className="h-4 w-4" />
      case "clinical":
        return <FileText className="h-4 w-4" />
      case "safety":
        return <Shield className="h-4 w-4" />
      case "preparation":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <CheckCircle className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "technical":
        return "text-blue-600 bg-blue-50"
      case "clinical":
        return "text-green-600 bg-green-50"
      case "safety":
        return "text-red-600 bg-red-50"
      case "preparation":
        return "text-purple-600 bg-purple-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const groupedChecklist = checklist.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, ChecklistItem[]>,
  )

  const startSession = () => {
    if (canStartSession) {
      router.push("/video-session")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Pre-Session Checklist</h1>
              <p className="text-gray-600 mt-2">Prepare for your session with {clientData.name}</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/practitioner-dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
          </div>

          {/* Progress Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Overall Progress</p>
                    <p className="text-2xl font-bold">{stats.percentage}%</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Required Items</p>
                    <p className="text-2xl font-bold">
                      {stats.requiredCompleted}/{stats.requiredTotal}
                    </p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Session</p>
                    <p className="text-2xl font-bold">#{clientData.sessionNumber}</p>
                  </div>
                  <User className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="text-2xl font-bold">{estimatedDuration}m</p>
                  </div>
                  <Clock className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Checklist */}
          <div className="lg:col-span-2 space-y-6">
            {Object.entries(groupedChecklist).map(([category, items]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 capitalize">
                    {getCategoryIcon(category)}
                    {category} Checks
                  </CardTitle>
                  <CardDescription>
                    {items.filter((item) => item.checked).length} of {items.length} completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                        <Checkbox
                          id={item.id}
                          checked={item.checked}
                          onCheckedChange={() => toggleChecklistItem(item.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Label htmlFor={item.id} className="font-medium cursor-pointer">
                              {item.label}
                            </Label>
                            {item.required && (
                              <Badge variant="destructive" className="text-xs">
                                Required
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Session Information & Notes */}
          <div className="space-y-6">
            {/* Client Information */}
            <Card>
              <CardHeader>
                <CardTitle>Client Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Client Name</Label>
                  <p className="text-lg font-semibold">{clientData.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Session Number</Label>
                  <p>Session {clientData.sessionNumber}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Last Session</Label>
                  <p>{clientData.lastSession}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Risk Level</Label>
                  <Badge variant="secondary" className="mt-1">
                    {clientData.riskLevel} Risk
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Previous Session Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Previous Session</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium">Previous Notes</Label>
                    <p className="text-sm text-gray-600 mt-1">{clientData.previousNotes}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Planned Goals</Label>
                    <p className="text-sm text-gray-600 mt-1">{clientData.nextGoals}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Session Planning */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="duration">Estimated Duration (minutes)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={estimatedDuration}
                    onChange={(e) => setEstimatedDuration(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="goals">Session Goals</Label>
                  <Textarea
                    id="goals"
                    placeholder="What do you hope to achieve in today's session?"
                    value={sessionGoals}
                    onChange={(e) => setSessionGoals(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Pre-Session Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any additional notes or observations..."
                    value={sessionNotes}
                    onChange={(e) => setSessionNotes(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Start Session */}
            <Card>
              <CardContent className="p-6">
                {canStartSession ? (
                  <Button onClick={startSession} className="w-full" size="lg">
                    <Video className="h-5 w-5 mr-2" />
                    Start Session
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                ) : (
                  <div className="text-center">
                    <Button disabled className="w-full" size="lg">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Complete Required Items
                    </Button>
                    <p className="text-sm text-gray-600 mt-2">
                      Please complete all required checklist items before starting the session.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
