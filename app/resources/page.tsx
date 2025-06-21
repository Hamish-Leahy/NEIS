"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  BookOpen,
  Video,
  Headphones,
  Download,
  Clock,
  Star,
  Filter,
  Heart,
  Brain,
  Moon,
  Zap,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  // Mock resources data
  const resources = [
    {
      id: 1,
      title: "Understanding Anxiety: A Beginner's Guide",
      description: "Learn about anxiety symptoms, causes, and effective coping strategies",
      type: "article",
      category: "anxiety",
      duration: "10 min read",
      rating: 4.8,
      downloads: 1250,
      featured: true,
      tags: ["anxiety", "coping", "beginner"],
    },
    {
      id: 2,
      title: "Progressive Muscle Relaxation",
      description: "Guided audio session to help you relax and reduce tension",
      type: "audio",
      category: "stress",
      duration: "15 min",
      rating: 4.9,
      downloads: 890,
      featured: true,
      tags: ["relaxation", "stress", "guided"],
    },
    {
      id: 3,
      title: "Cognitive Restructuring Techniques",
      description: "Interactive module teaching how to identify and challenge negative thoughts",
      type: "interactive",
      category: "depression",
      duration: "25 min",
      rating: 4.7,
      downloads: 2100,
      featured: false,
      tags: ["CBT", "thoughts", "depression"],
    },
    {
      id: 4,
      title: "Sleep Hygiene Essentials",
      description: "Video guide to improving your sleep quality and establishing healthy sleep habits",
      type: "video",
      category: "sleep",
      duration: "12 min",
      rating: 4.6,
      downloads: 1680,
      featured: true,
      tags: ["sleep", "habits", "wellness"],
    },
    {
      id: 5,
      title: "Mindfulness for Daily Life",
      description: "Practical mindfulness exercises you can do anywhere, anytime",
      type: "article",
      category: "mindfulness",
      duration: "8 min read",
      rating: 4.8,
      downloads: 1420,
      featured: false,
      tags: ["mindfulness", "meditation", "daily"],
    },
    {
      id: 6,
      title: "Building Resilience Workbook",
      description: "Comprehensive workbook with exercises to strengthen your mental resilience",
      type: "workbook",
      category: "resilience",
      duration: "45 min",
      rating: 4.9,
      downloads: 980,
      featured: true,
      tags: ["resilience", "workbook", "exercises"],
    },
  ]

  const categories = [
    { value: "all", label: "All Categories", icon: BookOpen },
    { value: "anxiety", label: "Anxiety", icon: Zap },
    { value: "depression", label: "Depression", icon: Heart },
    { value: "stress", label: "Stress Management", icon: Brain },
    { value: "sleep", label: "Sleep", icon: Moon },
    { value: "mindfulness", label: "Mindfulness", icon: Brain },
    { value: "resilience", label: "Resilience", icon: Heart },
  ]

  const resourceTypes = [
    { value: "all", label: "All Types" },
    { value: "article", label: "Articles" },
    { value: "video", label: "Videos" },
    { value: "audio", label: "Audio" },
    { value: "interactive", label: "Interactive" },
    { value: "workbook", label: "Workbooks" },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "audio":
        return <Headphones className="h-4 w-4" />
      case "interactive":
        return <Zap className="h-4 w-4" />
      case "workbook":
        return <BookOpen className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-red-100 text-red-800"
      case "audio":
        return "bg-purple-100 text-purple-800"
      case "interactive":
        return "bg-blue-100 text-blue-800"
      case "workbook":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    const matchesType = selectedType === "all" || resource.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  const featuredResources = resources.filter((resource) => resource.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mental Health Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access evidence-based resources, tools, and information to support your mental health journey. All resources
            are free and available 24/7.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search resources, topics, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            <div className="flex items-center gap-2">
                              <category.icon className="h-4 w-4" />
                              {category.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex-1">
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {resourceTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="categories">By Category</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">All Resources</h2>
              <p className="text-gray-600">{filteredResources.length} resources found</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">{resource.description}</CardDescription>
                      </div>
                      {resource.featured && (
                        <Badge variant="secondary" className="ml-2">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge className={getTypeColor(resource.type)}>
                          <div className="flex items-center gap-1">
                            {getTypeIcon(resource.type)}
                            <span className="capitalize">{resource.type}</span>
                          </div>
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          {resource.duration}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{resource.rating}</span>
                          <span className="text-sm text-gray-600">({resource.downloads})</span>
                        </div>
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Access
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {resource.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Featured Resources</h2>
              <p className="text-gray-600">Our most popular and effective resources</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{resource.title}</CardTitle>
                        <CardDescription className="mt-2">{resource.description}</CardDescription>
                      </div>
                      <Badge className="bg-blue-500">Featured</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Badge className={getTypeColor(resource.type)}>
                          <div className="flex items-center gap-1">
                            {getTypeIcon(resource.type)}
                            <span className="capitalize">{resource.type}</span>
                          </div>
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          {resource.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{resource.rating}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {resource.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Access Resource
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Browse by Category</h2>
              <p className="text-gray-600">Find resources by topic area</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(1).map((category) => {
                const categoryResources = resources.filter((r) => r.category === category.value)
                return (
                  <Card key={category.value} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <category.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.label}</CardTitle>
                          <CardDescription>{categoryResources.length} resources available</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {categoryResources.slice(0, 3).map((resource) => (
                          <div key={resource.id} className="text-sm text-gray-600 truncate">
                            • {resource.title}
                          </div>
                        ))}
                        {categoryResources.length > 3 && (
                          <div className="text-sm text-blue-600">+{categoryResources.length - 3} more resources</div>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-4"
                        onClick={() => setSelectedCategory(category.value)}
                      >
                        View All {category.label} Resources
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Help Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-blue-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Help Finding the Right Resource?</h3>
              <p className="text-gray-600 mb-6">
                Our support team can help you find resources that match your specific needs and situation.
              </p>
              <div className="flex justify-center gap-4">
                <Button>
                  <BookOpen className="h-4 w-4 mr-2" />
                  Get Personalized Recommendations
                </Button>
                <Button variant="outline">Contact Support</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
