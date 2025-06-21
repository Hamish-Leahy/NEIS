"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  Users,
  Calendar,
  TrendingUp,
  AlertTriangle,
  Settings,
  FileText,
  Database,
  Shield,
  Activity,
  Clock,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock admin data
  const systemStats = {
    totalUsers: 15420,
    activeUsers: 8934,
    totalPractitioners: 156,
    activePractitioners: 142,
    sessionsToday: 234,
    systemUptime: 99.97,
    avgResponseTime: 1.2,
  }

  const monthlyData = [
    { month: "Jul", users: 8500, sessions: 12400 },
    { month: "Aug", users: 9200, sessions: 13800 },
    { month: "Sep", users: 10100, sessions: 15200 },
    { month: "Oct", users: 11800, sessions: 17600 },
    { month: "Nov", users: 13200, sessions: 19800 },
    { month: "Dec", users: 14100, sessions: 21200 },
    { month: "Jan", users: 15420, sessions: 23400 },
  ]

  const userTypeData = [
    { name: "Self-Guided Only", value: 8234, color: "#3b82f6" },
    { name: "Guided LiCBT", value: 5186, color: "#10b981" },
    { name: "Both Services", value: 2000, color: "#8b5cf6" },
  ]

  const riskLevelData = [
    { level: "Low", count: 12340, color: "#10b981" },
    { level: "Medium", count: 2680, color: "#f59e0b" },
    { level: "High", count: 400, color: "#ef4444" },
  ]

  const recentAlerts = [
    {
      id: 1,
      type: "high-risk",
      message: "High-risk client flagged for immediate attention",
      time: "2 min ago",
      severity: "critical",
    },
    {
      id: 2,
      type: "system",
      message: "Server response time increased to 2.1s",
      time: "15 min ago",
      severity: "warning",
    },
    {
      id: 3,
      type: "capacity",
      message: "Practitioner capacity at 95% for this week",
      time: "1 hour ago",
      severity: "info",
    },
    {
      id: 4,
      type: "compliance",
      message: "Monthly data backup completed successfully",
      time: "2 hours ago",
      severity: "success",
    },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge variant="destructive">Critical</Badge>
      case "warning":
        return <Badge className="bg-orange-500">Warning</Badge>
      case "info":
        return <Badge variant="secondary">Info</Badge>
      case "success":
        return <Badge className="bg-green-500">Success</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">System Administration</h1>
          <p className="text-gray-600 mt-2">NEIS Platform Overview and Management</p>
        </div>

        {/* System Health Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">System Uptime</p>
                  <p className="text-2xl font-bold">{systemStats.systemUptime}%</p>
                </div>
                <Activity className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold">{systemStats.activeUsers.toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Sessions Today</p>
                  <p className="text-2xl font-bold">{systemStats.sessionsToday}</p>
                </div>
                <Calendar className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Response</p>
                  <p className="text-2xl font-bold">{systemStats.avgResponseTime}s</p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="practitioners">Practitioners</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Growth Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Growth</CardTitle>
                  <CardDescription>User registrations and session volume over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} name="Users" />
                      <Line type="monotone" dataKey="sessions" stroke="#10b981" strokeWidth={2} name="Sessions" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* User Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Usage Distribution</CardTitle>
                  <CardDescription>How users are engaging with NEIS services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={userTypeData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {userTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  System Alerts
                </CardTitle>
                <CardDescription>Recent system notifications and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <AlertTriangle
                          className={`h-5 w-5 ${
                            alert.severity === "critical"
                              ? "text-red-500"
                              : alert.severity === "warning"
                                ? "text-orange-500"
                                : alert.severity === "success"
                                  ? "text-green-500"
                                  : "text-blue-500"
                          }`}
                        />
                        <div>
                          <p className="font-medium">{alert.message}</p>
                          <p className="text-sm text-gray-600">{alert.time}</p>
                        </div>
                      </div>
                      {getSeverityBadge(alert.severity)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Registered</span>
                      <span className="font-bold">{systemStats.totalUsers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active (30 days)</span>
                      <span className="font-bold">{systemStats.activeUsers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>New This Month</span>
                      <span className="font-bold">1,320</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completion Rate</span>
                      <span className="font-bold">73%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskLevelData.map((risk) => (
                      <div key={risk.level} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{risk.level} Risk</span>
                          <span className="font-bold">{risk.count.toLocaleString()}</span>
                        </div>
                        <Progress value={(risk.count / systemStats.totalUsers) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      View All Users
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Export User Data
                    </Button>
                    <Button className="w-full" variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      User Analytics
                    </Button>
                    <Button className="w-full" variant="outline">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      High-Risk Users
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="practitioners" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Practitioner Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{systemStats.totalPractitioners}</div>
                        <div className="text-sm text-gray-600">Total Practitioners</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{systemStats.activePractitioners}</div>
                        <div className="text-sm text-gray-600">Active This Week</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>LiCBT Practitioners</span>
                        <span className="font-bold">128</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team Leaders</span>
                        <span className="font-bold">18</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Clinical Supervisors</span>
                        <span className="font-bold">10</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Avg Caseload</span>
                        <span className="font-bold">24 clients</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Workforce Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Manage Practitioners
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Overview
                    </Button>
                    <Button className="w-full" variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Performance Metrics
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Training Records
                    </Button>
                    <Button className="w-full" variant="outline">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Supervision Requests
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Server Uptime</span>
                        <span className="font-bold text-green-600">{systemStats.systemUptime}%</span>
                      </div>
                      <Progress value={systemStats.systemUptime} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Response Time</span>
                        <span className="font-bold">{systemStats.avgResponseTime}s</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Database Health</span>
                        <span className="font-bold text-green-600">Excellent</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Security Score</span>
                        <span className="font-bold text-green-600">98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      <Activity className="h-4 w-4 mr-2" />
                      System Health Check
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Database className="h-4 w-4 mr-2" />
                      Database Backup
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Security Audit
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      System Configuration
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      System Logs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
                <CardDescription>Create comprehensive reports for stakeholders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Operational Reports</h3>
                    <div className="space-y-2">
                      <Button className="w-full" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Monthly Service Report
                      </Button>
                      <Button className="w-full" variant="outline">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        User Engagement Analytics
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        Practitioner Performance
                      </Button>
                      <Button className="w-full" variant="outline">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Risk Assessment Summary
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Compliance Reports</h3>
                    <div className="space-y-2">
                      <Button className="w-full" variant="outline">
                        <Shield className="h-4 w-4 mr-2" />
                        Privacy Compliance Report
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Database className="h-4 w-4 mr-2" />
                        Data Quality Report
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Activity className="h-4 w-4 mr-2" />
                        System Availability Report
                      </Button>
                      <Button className="w-full" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Audit Trail Report
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      General Settings
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      User Management
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Security Settings
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Database className="h-4 w-4 mr-2" />
                      Data Management
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Content Management
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Service Scheduling
                    </Button>
                    <Button className="w-full" variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Analytics Configuration
                    </Button>
                    <Button className="w-full" variant="outline">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Alert Management
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
