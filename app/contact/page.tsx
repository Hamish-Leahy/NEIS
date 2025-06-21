"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  Users,
  HelpCircle,
  Shield,
  Globe,
  Mic,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SpeechTranscription } from "@/components/speech-transcription"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
    urgency: "normal",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedLanguage, setSelectedLanguage] = useState("en-AU")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleVoiceTranscript = (field: string) => (transcript: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] ? `${prev[field]} ${transcript}` : transcript,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: "",
        urgency: "normal",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      details: "1800 NEIS (1800 6347)",
      hours: "Mon-Fri 8:00 AM - 8:00 PM AEST",
      color: "blue",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      details: "support@neis.gov.au",
      hours: "Response within 24 hours",
      color: "green",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      details: "Available on this website",
      hours: "Mon-Fri 9:00 AM - 5:00 PM AEST",
      color: "purple",
    },
  ]

  const emergencyContacts = [
    {
      service: "Emergency Services",
      number: "000",
      description: "For life-threatening emergencies",
      available: "24/7",
      color: "red",
    },
    {
      service: "Lifeline",
      number: "13 11 14",
      description: "Crisis support and suicide prevention",
      available: "24/7",
      color: "orange",
    },
    {
      service: "Beyond Blue",
      number: "1300 22 4636",
      description: "Mental health support and information",
      available: "24/7",
      color: "blue",
    },
    {
      service: "Kids Helpline",
      number: "1800 55 1800",
      description: "For young people aged 5-25",
      available: "24/7",
      color: "green",
    },
  ]

  const faqCategories = [
    {
      title: "Getting Started",
      icon: Users,
      questions: [
        "How do I register for NEIS?",
        "What services are available?",
        "Is NEIS really free?",
        "Do I need a referral?",
      ],
    },
    {
      title: "Technical Support",
      icon: HelpCircle,
      questions: [
        "I can't log into my account",
        "The video call isn't working",
        "How do I reset my password?",
        "Mobile app issues",
      ],
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      questions: [
        "How is my data protected?",
        "Who can see my information?",
        "Can I delete my account?",
        "Privacy policy questions",
      ],
    },
    {
      title: "Service Information",
      icon: Globe,
      questions: [
        "What is LiCBT?",
        "How long does treatment take?",
        "Can I use both guided and self-guided?",
        "What if NEIS isn't right for me?",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact NEIS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you with any questions about NEIS services, technical support, or general inquiries.
            Choose the contact method that works best for you.
          </p>
        </div>

        {/* Language & Accessibility Notice */}
        <div className="mb-8">
          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Multilingual Support Available</h3>
                  <p className="text-gray-600 mb-4">
                    NEIS provides support in multiple languages. Use the language selector above or request an
                    interpreter when contacting us.
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">
                      <Mic className="h-3 w-3 mr-1" />
                      Voice Input Available
                    </Badge>
                    <Badge variant="secondary">Professional Interpreters</Badge>
                    <Badge variant="secondary">Written Translation</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Support Banner */}
        <div className="mb-12">
          <Alert className="border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Crisis Support:</strong> If you're in immediate danger or having thoughts of self-harm, please
              contact emergency services (000) or Lifeline (13 11 14) immediately. NEIS support is not for crisis
              situations.
            </AlertDescription>
          </Alert>
        </div>

        {/* Contact Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-lg ${
                        method.color === "blue"
                          ? "bg-blue-100"
                          : method.color === "green"
                            ? "bg-green-100"
                            : "bg-purple-100"
                      }`}
                    >
                      <method.icon
                        className={`h-6 w-6 ${
                          method.color === "blue"
                            ? "text-blue-600"
                            : method.color === "green"
                              ? "text-green-600"
                              : "text-purple-600"
                        }`}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-lg">{method.details}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      {method.hours}
                    </div>
                    <div className="text-xs text-gray-500">Interpreter services available in 10+ languages</div>
                    <Button
                      className={`w-full mt-4 ${
                        method.color === "blue"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : method.color === "green"
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-purple-600 hover:bg-purple-700"
                      }`}
                    >
                      {method.title === "Phone Support" && <Phone className="h-4 w-4 mr-2" />}
                      {method.title === "Email Support" && <Mail className="h-4 w-4 mr-2" />}
                      {method.title === "Live Chat" && <MessageCircle className="h-4 w-4 mr-2" />}
                      Contact Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form with Voice Input */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  Send Us a Message
                  <Badge variant="secondary" className="ml-2">
                    <Mic className="h-3 w-3 mr-1" />
                    Voice Input Enabled
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible. You can use voice input for any
                  text field. For urgent matters, please use phone or live chat.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Thank you for your message! We've received your inquiry and will respond within 24 hours. If this
                      is urgent, please call our support line at 1800 NEIS (1800 6347).
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === "error" && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      Sorry, there was an error sending your message. Please try again or contact us directly at
                      support@neis.gov.au.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="Enter your full name"
                      />
                      <SpeechTranscription
                        onTranscript={handleVoiceTranscript("name")}
                        language={selectedLanguage}
                        placeholder="Click microphone to speak your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - General inquiry</SelectItem>
                          <SelectItem value="normal">Normal - Standard support</SelectItem>
                          <SelectItem value="high">High - Urgent but not crisis</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Account & Registration</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="services">Service Information</SelectItem>
                        <SelectItem value="booking">Appointment Booking</SelectItem>
                        <SelectItem value="privacy">Privacy & Security</SelectItem>
                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      placeholder="Brief description of your inquiry"
                    />
                    <SpeechTranscription
                      onTranscript={handleVoiceTranscript("subject")}
                      language={selectedLanguage}
                      placeholder="Click microphone to speak your subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                    />
                    <SpeechTranscription
                      onTranscript={handleVoiceTranscript("message")}
                      language={selectedLanguage}
                      placeholder="Click microphone to speak your message"
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Privacy Notice</h4>
                    <p className="text-sm text-gray-600">
                      Your personal information will be handled in accordance with our Privacy Policy. We will only use
                      your contact details to respond to your inquiry and will not share them with third parties without
                      your consent.
                    </p>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Crisis & Emergency Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="border-l-4 border-l-red-500">
                <CardContent className="p-4">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-1">{contact.service}</h3>
                    <div className="text-2xl font-bold text-red-600 mb-2">{contact.number}</div>
                    <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {contact.available}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <category.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.questions.map((question, qIndex) => (
                      <li key={qIndex} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        • {question}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    View All FAQs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Office Information */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  NEIS Program Office
                </CardTitle>
                <CardDescription>
                  NEIS is administered by the Australian Government Department of Health, Disability and Ageing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Postal Address</h4>
                    <div className="text-gray-600 space-y-1">
                      <div>NEIS Program Office</div>
                      <div>Department of Health, Disability and Ageing</div>
                      <div>GPO Box 9848</div>
                      <div>Canberra ACT 2601</div>
                      <div>Australia</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 8:00 PM AEST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 5:00 PM AEST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="text-sm text-blue-600 mt-2">*Self-guided resources available 24/7</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Support */}
        <section>
          <Card className="bg-blue-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Immediate Support?</h2>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                If you're experiencing a mental health crisis or need immediate support, please don't wait for a
                response to your message. Contact our crisis support partners directly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-red-600 hover:bg-red-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Lifeline: 13 11 14
                </Button>
                <Button variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Text Lifeline: 0477 13 11 14
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}
