"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Users, Calendar, AlertTriangle, TrendingUp, MessageCircle, FileText, Video, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SupervisorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock supervisor data
  const supervisorData = {
    name: "Dr. Emma Wilson",
    role: "Clinical Supervisor",
    teamSize: 12,
    pendingSupervision: 3,
    completedThisWeek: 8,
    practitioners: [
      {
        id: "1",
        name: "Dr. Michael Chen",
        initials: "MC",
        caseload: 24,
        riskCases: 2,
        lastSupervision: "2025-01-15",
        nextSupervision: "2025-01-22",
        performance: "excellent",
        needsAttention: false,
      },
      {
        id: "2",
        name: "Sarah Williams",
        initials: "SW",
        caseload: 18,
        riskCases: 1,
        lastSupervision: "2025-01-14",
        nextSupervision: "2025-01-21",
        performance: "good",
        needsAttention: false,
      },
      {
        id: "3",
        name: "James Rodriguez",
        initials: "JR",
        caseload: 22,
        riskCases: 4,
        lastSupervision: "2025-01-10",
        nextSupervision: "2025-01-20",
        performance: "needs-support",
        needsAttention: true,
      },
    ],
    supervisionRequests: [
      {
        id: "1",
        practitioner: "Dr. Michael Chen",
        type: "immediate",
        reason: "High-risk client assessment needed",
        time: "5 min ago",
        priority: "urgent",
      },
      {
        id: "2",
        practitioner: "Sarah Williams",
        type: "scheduled",
        reason: "Weekly supervision session",
        time: "Today 3:00 PM",
        priority: "normal",
      },
      {
        id: "3",
        practitioner: "James Rodriguez",
        type: "case-review",
        reason: "Complex case discussion",
        time: "Tomorrow 10:00 AM",
        priority: "high",
      },
    ],
    qualityMetrics: {
      averageSessionRating: 4.7,
      clientSatisfaction: 92,
      riskAssessmentAccuracy: 96,
      treatmentAdherence: 89,
    },
  }

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case "excellent":
        return <Badge className="bg-green-500">Excellent</Badge>
      case "good":
        return <Badge className="bg-blue-500">Good</Badge>
      case "needs-support":
        return <Badge className="bg-orange-500">Needs Support</Badge>
      case "concerning":
        return <Badge variant="destructive">Concerning</Badge>
      default:
        return <Badge variant="outline">Not Assessed</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>
      case "high":
        return <Badge className="bg-orange-500">High</Badge>
      case "normal":
        return <Badge variant="secondary">Normal</Badge>
      default:
        return <Badge variant="outline">Low</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Clinical Supervision Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {supervisorData.name}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Team Size</p>
                  <p className="text-2xl font-bold">{supervisorData.teamSize}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Requests</p>
                  <p className="text-2xl font-bold">{supervisorData.pendingSupervision}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed This Week</p>
                  <p className="text-2xl font-bold">{supervisorData.completedThisWeek}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Rating</p>
                  <p className="text-2xl font-bold">{supervisorData.qualityMetrics.averageSessionRating}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="quality">Quality</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Urgent Supervision Requests */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Urgent Requests
                  </CardTitle>
                  <CardDescription>Practitioners needing immediate support</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {supervisorData.supervisionRequests
                      .filter((req) => req.priority === "urgent")
                      .map((request) => (
                        <div key={request.id} className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold text-red-800">{request.practitioner}</h4>
                              <p className="text-sm text-red-700">{request.reason}</p>
                            </div>
                            {getPriorityBadge(request.priority)}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-red-600">{request.time}</span>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                                <Video className="h-4 w-4 mr-2" />
                                Join Now
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

              {/* Team Performance Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Team Performance
                  </CardTitle>
                  <CardDescription>Overall team metrics and quality indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Client Satisfaction</span>
                        <span>{supervisorData.qualityMetrics.clientSatisfaction}%</span>
                      </div>
                      <Progress value={supervisorData.qualityMetrics.clientSatisfaction} />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Risk Assessment Accuracy</span>
                        <span>{supervisorData.qualityMetrics.riskAssessmentAccuracy}%</span>
                      </div>
                      <Progress value={supervisorData.qualityMetrics.riskAssessmentAccuracy} />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Treatment Adherence</span>
                        <span>{supervisorData.qualityMetrics.treatmentAdherence}%</span>
                      </div>
                      <Progress value={supervisorData.qualityMetrics.treatmentAdherence} />
                    </div>

                    <Button variant="outline" className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      View Detailed Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Practitioners Needing Attention */}
            <Card>
              <CardHeader>
                <CardTitle>Practitioners Requiring Attention</CardTitle>
                <CardDescription>Team members who may need additional support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supervisorData.practitioners
                    .filter((p) => p.needsAttention)
                    .map((practitioner) => (
                      <div key={practitioner.id} className="border rounded-lg p-4 bg-orange-50">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{practitioner.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{practitioner.name}</h3>
                              <p className="text-sm text-gray-600">Caseload: {practitioner.caseload} clients</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {getPerformanceBadge(practitioner.performance)}
                            <Badge variant="destructive">{practitioner.riskCases} High Risk</Badge>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Last Supervision:</span>
                            <p className="font-medium">{practitioner.lastSupervision}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Next Scheduled:</span>
                            <p className="font-medium">{practitioner.nextSupervision}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm">
                              <Video className="h-4 w-4 mr-2" />
                              Schedule
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

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>Overview of all practitioners under your supervision</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supervisorData.practitioners.map((practitioner) => (
                    <div key={practitioner.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{practitioner.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{practitioner.name}</h3>
                            <p className="text-sm text-gray-600">LiCBT Practitioner</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {getPerformanceBadge(practitioner.performance)}
                          {practitioner.riskCases > 0 && (
                            <Badge variant="outline">{practitioner.riskCases} Risk Cases</Badge>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Caseload:</span>
                          <p className="font-medium">{practitioner.caseload} clients</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Last Supervision:</span>
                          <p className="font-medium">{practitioner.lastSupervision}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Next Scheduled:</span>
                          <p className="font-medium">{practitioner.nextSupervision}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            Notes
                          </Button>
                          <Button size="sm" variant="outline">
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Supervision Requests</CardTitle>
                <CardDescription>Manage incoming supervision requests from your team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supervisorData.supervisionRequests.map((request) => (
                    <div
                      key={request.id}
                      className={`border rounded-lg p-4 ${
                        request.priority === "urgent"
                          ? "bg-red-50 border-red-200"
                          : request.priority === "high"
                            ? "bg-orange-50 border-orange-200"
                            : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{request.practitioner}</h3>
                          <p className="text-sm text-gray-600">{request.reason}</p>
                        </div>
                        <div className="flex gap-2">
                          {getPriorityBadge(request.priority)}
                          <Badge variant="outline">{request.type}</Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{request.time}</span>
                        <div className="flex gap-2">
                          {request.priority === "urgent" ? (
                            <Button size="sm" className="bg-red-600 hover:bg-red-700">
                              <Video className="h-4 w-4 mr-2" />
                              Join Now
                            </Button>
                          ) : (
                            <Button size="sm">
                              <Calendar className="h-4 w-4 mr-2" />
                              Schedule
                            </Button>
                          )}
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

          <TabsContent value="quality" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quality Metrics</CardTitle>
                  <CardDescription>Key performance indicators for your team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Average Session Rating</span>
                        <span className="text-2xl font-bold">
                          {supervisorData.qualityMetrics.averageSessionRating}/5
                        </span>
                      </div>
                      <Progress value={(supervisorData.qualityMetrics.averageSessionRating / 5) * 100} />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Client Satisfaction</span>
                        <span className="text-2xl font-bold">{supervisorData.qualityMetrics.clientSatisfaction}%</span>
                      </div>
                      <Progress value={supervisorData.qualityMetrics.clientSatisfaction} />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Risk Assessment Accuracy</span>
                        <span className="text-2xl font-bold">
                          {supervisorData.qualityMetrics.riskAssessmentAccuracy}%
                        </span>
                      </div>
                      <Progress value={supervisorData.qualityMetrics.riskAssessmentAccuracy} />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Treatment Adherence</span>
                        <span className="text-2xl font-bold">{supervisorData.qualityMetrics.treatmentAdherence}%</span>
                      </div>
                      <Progress value={supervisorData.qualityMetrics.treatmentAdherence} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality Assurance Actions</CardTitle>
                  <CardDescription>Tools for maintaining service quality</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Review Session Notes
                    </Button>
                    <Button className="w-full" variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Outcome Analysis
                    </Button>
                    <Button className="w-full" variant="outline">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Risk Case Review
                    </Button>
                    <Button className="w-full" variant="outline">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Competency Assessment
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Team Performance Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Training Programs</CardTitle>
                  <CardDescription>Ongoing development for your team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-semibold">LiCBT Advanced Techniques</h4>
                      <p className="text-sm text-gray-600">Next session: January 25, 2025</p>
                      <div className="flex justify-between items-center mt-2">
                        <Badge variant="secondary">8/12 enrolled</Badge>
                        <Button size="sm" variant="outline">
                          Manage
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-3">
                      <h4 className="font-semibold">Risk Assessment Refresher</h4>
                      <p className="text-sm text-gray-600">Next session: February 1, 2025</p>
                      <div className="flex justify-between items-center mt-2">
                        <Badge variant="secondary">12/12 enrolled</Badge>
                        <Button size="sm" variant="outline">
                          Manage
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-3">
                      <h4 className="font-semibold">Cultural Competency</h4>
                      <p className="text-sm text-gray-600">Next session: February 8, 2025</p>
                      <div className="flex justify-between items-center mt-2">
                        <Badge variant="secondary">6/12 enrolled</Badge>
                        <Button size="sm" variant="outline">
                          Manage
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Training Actions</CardTitle>
                  <CardDescription>Manage team development and competencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Training Session
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Training Records
                    </Button>
                    <Button className="w-full" variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Competency Tracking
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Team Skills Matrix
                    </Button>
                    <Button className="w-full" variant="outline">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Certification Management
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
