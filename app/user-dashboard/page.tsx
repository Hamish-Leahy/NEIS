"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Video, BookOpen, TrendingUp, MessageCircle, Phone, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock user data
  const userData = {
    name: "Sarah Johnson",
    nextAppointment: {
      date: "2025-01-22",
      time: "2:00 PM",
      practitioner: "Dr. Michael Chen",
      type: "Guided LiCBT Session 3",
    },
    progress: {
      sessionsCompleted: 2,
      totalSessions: 6,
      modulesCompleted: 8,
      totalModules: 12,
    },
    recentActivity: [
      { type: "session", title: "Guided LiCBT Session 2", date: "2025-01-15", status: "completed" },
      { type: "module", title: "Understanding Anxiety", date: "2025-01-14", status: "completed" },
      { type: "assessment", title: "Weekly Check-in", date: "2025-01-13", status: "completed" },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {userData.name}</h1>
          <p className="text-gray-600 mt-2">Here's your mental health journey progress</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Next Session</p>
                  <p className="font-semibold">{userData.nextAppointment.date}</p>
                </div>
                <Video className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Sessions Complete</p>
                  <p className="font-semibold">
                    {userData.progress.sessionsCompleted}/{userData.progress.totalSessions}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Modules Complete</p>
                  <p className="font-semibold">
                    {userData.progress.modulesCompleted}/{userData.progress.totalModules}
                  </p>
                </div>
                <BookOpen className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Crisis Support</p>
                  <p className="font-semibold">13 11 14</p>
                </div>
                <Phone className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Next Appointment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Next Appointment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{userData.nextAppointment.type}</h3>
                          <p className="text-sm text-gray-600">with {userData.nextAppointment.practitioner}</p>
                        </div>
                        <Badge variant="secondary">Upcoming</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {userData.nextAppointment.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {userData.nextAppointment.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Video className="h-4 w-4 mr-2" />
                        Join Session
                      </Button>
                      <Button variant="outline">Reschedule</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Your Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Guided Sessions</span>
                        <span>
                          {userData.progress.sessionsCompleted}/{userData.progress.totalSessions}
                        </span>
                      </div>
                      <Progress value={(userData.progress.sessionsCompleted / userData.progress.totalSessions) * 100} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Self-Guided Modules</span>
                        <span>
                          {userData.progress.modulesCompleted}/{userData.progress.totalModules}
                        </span>
                      </div>
                      <Progress value={(userData.progress.modulesCompleted / userData.progress.totalModules) * 100} />
                    </div>
                    <Button variant="outline" className="w-full">
                      View Detailed Progress
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest sessions and completed modules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {activity.type === "session" && <Video className="h-5 w-5 text-blue-500" />}
                        {activity.type === "module" && <BookOpen className="h-5 w-5 text-green-500" />}
                        {activity.type === "assessment" && <MessageCircle className="h-5 w-5 text-purple-500" />}
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-gray-600">{activity.date}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Guided LiCBT Sessions</CardTitle>
                <CardDescription>Your one-on-one sessions with mental health practitioners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Upcoming Session */}
                  <div className="border-l-4 border-l-blue-500 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Session 3: Cognitive Restructuring</h3>
                        <p className="text-sm text-gray-600">with Dr. Michael Chen</p>
                        <p className="text-sm text-gray-500">January 22, 2025 at 2:00 PM</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Video className="h-4 w-4 mr-2" />
                          Join
                        </Button>
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Completed Sessions */}
                  <div className="border-l-4 border-l-green-500 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Session 2: Behavioral Activation</h3>
                        <p className="text-sm text-gray-600">with Dr. Michael Chen</p>
                        <p className="text-sm text-gray-500">January 15, 2025</p>
                      </div>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                  </div>

                  <div className="border-l-4 border-l-green-500 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Session 1: Introduction to LiCBT</h3>
                        <p className="text-sm text-gray-600">with Dr. Michael Chen</p>
                        <p className="text-sm text-gray-500">January 8, 2025</p>
                      </div>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Next Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modules" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Self-Guided LiCBT Modules</CardTitle>
                <CardDescription>Interactive modules you can complete at your own pace</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Completed Modules */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-green-600">Completed Modules</h3>
                    {[
                      "Understanding Mental Health",
                      "Recognizing Thought Patterns",
                      "Introduction to CBT",
                      "Managing Anxiety",
                      "Behavioral Activation",
                      "Mindfulness Basics",
                      "Sleep Hygiene",
                      "Stress Management",
                    ].map((module, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm">{module}</span>
                        <Badge variant="secondary">✓</Badge>
                      </div>
                    ))}
                  </div>

                  {/* Available Modules */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-blue-600">Available Modules</h3>
                    {["Cognitive Restructuring", "Problem Solving", "Relapse Prevention", "Building Resilience"].map(
                      (module, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="text-sm">{module}</span>
                          <Button size="sm" variant="outline">
                            Start
                          </Button>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Outcome Measures</CardTitle>
                  <CardDescription>Track your mental health progress over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Depression (PHQ-9)</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Latest Score: 8</span>
                        <Badge variant="secondary">Mild</Badge>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">Improvement from initial score of 14</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Anxiety (GAD-7)</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Latest Score: 6</span>
                        <Badge variant="secondary">Mild</Badge>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">Improvement from initial score of 12</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Wellbeing (K10)</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Latest Score: 18</span>
                        <Badge variant="secondary">Low</Badge>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">Improvement from initial score of 28</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Goals & Achievements</CardTitle>
                  <CardDescription>Your personal goals and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-l-green-500 pl-4">
                      <h4 className="font-semibold">Completed Goals</h4>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>✓ Complete intake assessment</li>
                        <li>✓ Attend first 2 sessions</li>
                        <li>✓ Complete 5 self-guided modules</li>
                        <li>✓ Practice daily mindfulness for 1 week</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-blue-500 pl-4">
                      <h4 className="font-semibold">Current Goals</h4>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Complete remaining LiCBT sessions</li>
                        <li>• Practice cognitive restructuring techniques</li>
                        <li>• Maintain sleep schedule for 2 weeks</li>
                        <li>• Complete all self-guided modules</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    Crisis Support
                  </CardTitle>
                  <CardDescription>Immediate help when you need it most</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Emergency Services</h4>
                      <p className="text-sm text-red-700 mb-2">If you're in immediate danger</p>
                      <Button className="bg-red-600 hover:bg-red-700">
                        <Phone className="h-4 w-4 mr-2" />
                        Call 000
                      </Button>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">Lifeline</h4>
                      <p className="text-sm text-orange-700 mb-2">24/7 crisis support and suicide prevention</p>
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        <Phone className="h-4 w-4 mr-2" />
                        Call 13 11 14
                      </Button>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Beyond Blue</h4>
                      <p className="text-sm text-blue-700 mb-2">Mental health support and information</p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Phone className="h-4 w-4 mr-2" />
                        Call 1300 22 4636
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Your Care Team</CardTitle>
                  <CardDescription>Get in touch with your NEIS support team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Dr. Michael Chen</h4>
                      <p className="text-sm text-gray-600 mb-2">Your LiCBT Practitioner</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Session
                        </Button>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">NEIS Support Team</h4>
                      <p className="text-sm text-gray-600 mb-2">Technical and general support</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Support
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Live Chat
                        </Button>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Resources & Information</h4>
                      <p className="text-sm text-gray-600 mb-2">Additional mental health resources</p>
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/resources">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Browse Resources
                        </Link>
                      </Button>
                    </div>
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
