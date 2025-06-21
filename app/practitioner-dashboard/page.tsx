"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Calendar,
  Clock,
  Video,
  Users,
  TrendingUp,
  MessageCircle,
  AlertTriangle,
  FileText,
  Settings,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PractitionerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock practitioner data
  const practitionerData = {
    name: "Dr. Michael Chen",
    role: "LiCBT Practitioner",
    caseload: 24,
    todaysSessions: 6,
    upcomingSession: {
      time: "2:00 PM",
      client: "Sarah J.",
      type: "Session 3",
      duration: "45 min",
    },
    clients: [
      {
        id: "1",
        name: "Sarah J.",
        initials: "SJ",
        nextSession: "Today 2:00 PM",
        sessionNumber: 3,
        riskLevel: "low",
        progress: "good",
        lastContact: "2025-01-15",
      },
      {
        id: "2",
        name: "David M.",
        initials: "DM",
        nextSession: "Tomorrow 10:00 AM",
        sessionNumber: 5,
        riskLevel: "medium",
        progress: "excellent",
        lastContact: "2025-01-14",
      },
      {
        id: "3",
        name: "Emma K.",
        initials: "EK",
        nextSession: "Jan 23 3:00 PM",
        sessionNumber: 2,
        riskLevel: "low",
        progress: "good",
        lastContact: "2025-01-12",
      },
    ],
    todaysSchedule: [
      { time: "9:00 AM", client: "John D.", type: "Initial Assessment", status: "completed" },
      { time: "10:00 AM", client: "Lisa R.", type: "Session 4", status: "completed" },
      { time: "11:30 AM", client: "Mark T.", type: "Session 2", status: "completed" },
      { time: "2:00 PM", client: "Sarah J.", type: "Session 3", status: "upcoming" },
      { time: "3:30 PM", client: "Anna P.", type: "Session 6", status: "upcoming" },
      { time: "4:30 PM", client: "Robert L.", type: "Session 1", status: "upcoming" },
    ],
  }

  const getRiskBadge = (level: string) => {
    switch (level) {
      case "high":
        return <Badge variant="destructive">High Risk</Badge>
      case "medium":
        return <Badge className="bg-orange-500">Medium Risk</Badge>
      case "low":
        return <Badge variant="secondary">Low Risk</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getProgressBadge = (progress: string) => {
    switch (progress) {
      case "excellent":
        return <Badge className="bg-green-500">Excellent</Badge>
      case "good":
        return <Badge className="bg-blue-500">Good</Badge>
      case "fair":
        return <Badge className="bg-yellow-500">Fair</Badge>
      case "poor":
        return <Badge variant="destructive">Needs Attention</Badge>
      default:
        return <Badge variant="outline">Not Assessed</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Practitioner Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {practitionerData.name}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Caseload</p>
                  <p className="text-2xl font-bold">{practitionerData.caseload}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Sessions</p>
                  <p className="text-2xl font-bold">{practitionerData.todaysSessions}</p>
                </div>
                <Calendar className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Next Session</p>
                  <p className="text-2xl font-bold">{practitionerData.upcomingSession.time}</p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Supervision</p>
                  <p className="text-2xl font-bold">Available</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="supervision">Supervision</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Next Session */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Next Session
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{practitionerData.upcomingSession.client}</h3>
                        <p className="text-sm text-gray-600">{practitionerData.upcomingSession.type}</p>
                      </div>
                      <Badge variant="secondary">Upcoming</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {practitionerData.upcomingSession.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {practitionerData.upcomingSession.duration}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1" asChild>
                        <Link href="/video-session">
                          <Video className="h-4 w-4 mr-2" />
                          Start Session
                        </Link>
                      </Button>
                      <Button variant="outline">View Notes</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* High Priority Clients */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Priority Clients
                  </CardTitle>
                  <CardDescription>Clients requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {practitionerData.clients
                      .filter((client) => client.riskLevel === "medium" || client.riskLevel === "high")
                      .map((client) => (
                        <div key={client.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{client.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{client.name}</p>
                              <p className="text-sm text-gray-600">Session {client.sessionNumber}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            {getRiskBadge(client.riskLevel)}
                            <p className="text-xs text-gray-500 mt-1">{client.nextSession}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Schedule Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Your sessions for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {practitionerData.todaysSchedule.map((session, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        session.status === "completed"
                          ? "bg-green-50"
                          : session.status === "upcoming"
                            ? "bg-blue-50"
                            : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-sm font-medium w-20">{session.time}</div>
                        <div>
                          <p className="font-medium">{session.client}</p>
                          <p className="text-sm text-gray-600">{session.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {session.status === "completed" && <Badge variant="secondary">Completed</Badge>}
                        {session.status === "upcoming" && (
                          <Button size="sm" asChild>
                            <Link href="/video-session">
                              <Video className="h-4 w-4 mr-2" />
                              Join
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Manage your appointments and availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">This Week</h3>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Settings className="h-4 w-4 mr-2" />
                        Set Availability
                      </Button>
                      <Button>
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Session
                      </Button>
                    </div>
                  </div>

                  {/* Calendar view would go here - simplified for demo */}
                  <div className="grid grid-cols-7 gap-2 text-center">
                    <div className="font-semibold p-2">Mon</div>
                    <div className="font-semibold p-2">Tue</div>
                    <div className="font-semibold p-2">Wed</div>
                    <div className="font-semibold p-2">Thu</div>
                    <div className="font-semibold p-2">Fri</div>
                    <div className="font-semibold p-2">Sat</div>
                    <div className="font-semibold p-2">Sun</div>

                    {Array.from({ length: 7 }, (_, i) => (
                      <div key={i} className="border rounded p-4 h-24 text-sm">
                        <div className="font-medium">{20 + i}</div>
                        {i === 1 && <div className="text-xs bg-blue-100 rounded px-1 mt-1">6 sessions</div>}
                        {i === 2 && <div className="text-xs bg-blue-100 rounded px-1 mt-1">4 sessions</div>}
                        {i === 3 && <div className="text-xs bg-blue-100 rounded px-1 mt-1">5 sessions</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Caseload</CardTitle>
                <CardDescription>Manage your active clients and their progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {practitionerData.clients.map((client) => (
                    <div key={client.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{client.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{client.name}</h3>
                            <p className="text-sm text-gray-600">Session {client.sessionNumber} of 6-8</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {getRiskBadge(client.riskLevel)}
                          {getProgressBadge(client.progress)}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Next Session:</span>
                          <p className="font-medium">{client.nextSession}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Last Contact:</span>
                          <p className="font-medium">{client.lastContact}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            Notes
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="supervision" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Request Supervision</CardTitle>
                  <CardDescription>Get support from clinical supervisors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Request Immediate Support
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Supervision Session
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message Supervisor
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Supervision History</CardTitle>
                  <CardDescription>Your recent supervision sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-green-500 pl-4">
                      <h4 className="font-semibold">Case Review Session</h4>
                      <p className="text-sm text-gray-600">with Dr. Emma Wilson</p>
                      <p className="text-xs text-gray-500">January 15, 2025</p>
                    </div>
                    <div className="border-l-4 border-l-blue-500 pl-4">
                      <h4 className="font-semibold">Clinical Skills Development</h4>
                      <p className="text-sm text-gray-600">with Dr. Emma Wilson</p>
                      <p className="text-xs text-gray-500">January 8, 2025</p>
                    </div>
                    <div className="border-l-4 border-l-purple-500 pl-4">
                      <h4 className="font-semibold">Risk Assessment Training</h4>
                      <p className="text-sm text-gray-600">with Dr. Emma Wilson</p>
                      <p className="text-xs text-gray-500">January 1, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Resources</CardTitle>
                  <CardDescription>Tools and materials for LiCBT delivery</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      LiCBT Session Templates
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Risk Assessment Tools
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Outcome Measurement Forms
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Referral Pathways Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Training & Development</CardTitle>
                  <CardDescription>Continuing education and skill building</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      LiCBT Competency Assessment
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Cultural Competency Training
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Crisis Intervention Training
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Service Manual
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
