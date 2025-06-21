"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Video, Globe, Phone, MessageCircle, Clock, Users, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function GetStartedPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: "Choose Your Support Type",
      description: "Select the type of mental health support that's right for you",
      completed: false,
    },
    {
      id: 2,
      title: "Complete Assessment",
      description: "Quick assessment to ensure NEIS is suitable for your needs",
      completed: false,
    },
    {
      id: 3,
      title: "Create Account",
      description: "Set up your secure NEIS account",
      completed: false,
    },
    {
      id: 4,
      title: "Start Your Journey",
      description: "Begin your mental health support journey",
      completed: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Started with NEIS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards better mental wellbeing. Our free, evidence-based support is designed to help
            you manage mild mental health concerns and build resilience.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep > step.id
                      ? "bg-green-500 border-green-500 text-white"
                      : currentStep === step.id
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "bg-white border-gray-300 text-gray-500"
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <span className="text-sm font-semibold">{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-24 h-1 mx-4 ${currentStep > step.id ? "bg-green-500" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">{steps[currentStep - 1]?.title}</h2>
            <p className="text-gray-600">{steps[currentStep - 1]?.description}</p>
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Choose Your Support Type</h3>
                <p className="text-gray-600">
                  NEIS offers two types of support. You can use one or both depending on your needs and preferences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Guided LiCBT */}
                <Card className="border-2 hover:border-blue-300 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Video className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className="text-xl">Guided LiCBT</CardTitle>
                        <Badge variant="secondary">Recommended for first-time users</Badge>
                      </div>
                    </div>
                    <CardDescription>
                      Work one-on-one with a trained mental health practitioner via video or phone calls
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">What's included:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            6-8 structured therapy sessions
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Personalized treatment plan
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Professional support throughout
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Flexible scheduling (including evenings/weekends)
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Progress tracking and outcomes measurement
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Best for:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• People new to mental health support</li>
                          <li>• Those who prefer professional guidance</li>
                          <li>• Complex or persistent concerns</li>
                          <li>• People who benefit from accountability</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="font-medium">Time commitment:</span>
                          <span>45 min initial session, 30 min follow-ups</span>
                        </div>
                      </div>

                      <Button className="w-full" onClick={() => setCurrentStep(2)}>
                        Choose Guided Support
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Self-Guided LiCBT */}
                <Card className="border-2 hover:border-green-300 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="h-8 w-8 text-green-600" />
                      <div>
                        <CardTitle className="text-xl">Self-Guided LiCBT</CardTitle>
                        <Badge variant="secondary">Available 24/7</Badge>
                      </div>
                    </div>
                    <CardDescription>
                      Access interactive modules and resources at your own pace, whenever you need them
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">What's included:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            12+ interactive modules
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Downloadable worksheets and resources
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Progress tracking tools
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            24/7 access from any device
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Self-paced learning
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Best for:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Self-motivated learners</li>
                          <li>• People with busy schedules</li>
                          <li>• Those who prefer privacy</li>
                          <li>• Mild, recent concerns</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-green-600" />
                          <span className="font-medium">Time commitment:</span>
                          <span>15-30 min per module, at your pace</span>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full" onClick={() => setCurrentStep(2)}>
                        Choose Self-Guided
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Both Options */}
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Want Both?</h3>
                    <p className="text-gray-600 mb-4">
                      Many people find combining guided and self-guided support most effective. You can start with one
                      and add the other anytime.
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setCurrentStep(2)}>
                      Get Both Types of Support
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Demo Session Option */}
              <Card className="border-2 border-orange-200 bg-orange-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Try a Demo First?</h3>
                    <p className="text-gray-600 mb-4">
                      Experience our video calling system with a simulated practitioner session before signing up.
                    </p>
                    <Button variant="outline" className="bg-white" asChild>
                      <Link href="/video-session">
                        <Video className="h-4 w-4 mr-2" />
                        Launch Demo Session
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Quick Suitability Assessment</h3>
                <p className="text-gray-600">
                  This brief assessment helps us ensure NEIS is the right fit for your current needs.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Assessment Questions</CardTitle>
                  <CardDescription>
                    Please answer these questions honestly. This information is confidential and helps us provide the
                    best support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Sample assessment questions */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">
                          1. How would you describe your current mental health concerns?
                        </h4>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="concern-level" value="mild" className="text-blue-600" />
                            <span>Mild - occasional worry, stress, or low mood</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="concern-level" value="moderate" className="text-blue-600" />
                            <span>Moderate - regular impact on daily activities</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="concern-level" value="severe" className="text-blue-600" />
                            <span>Severe - significant impact on most areas of life</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          2. Are you currently receiving mental health treatment elsewhere?
                        </h4>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="current-treatment" value="no" className="text-blue-600" />
                            <span>No, I'm not receiving any treatment</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="current-treatment" value="gp" className="text-blue-600" />
                            <span>Only from my GP</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="current-treatment" value="other" className="text-blue-600" />
                            <span>Yes, from a psychologist, psychiatrist, or counsellor</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">3. How long have you been experiencing these concerns?</h4>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="duration" value="recent" className="text-blue-600" />
                            <span>Less than 3 months</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="duration" value="moderate" className="text-blue-600" />
                            <span>3-12 months</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="duration" value="long" className="text-blue-600" />
                            <span>More than 12 months</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">4. Have you had thoughts of harming yourself or others?</h4>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="self-harm" value="no" className="text-blue-600" />
                            <span>No</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="self-harm" value="yes" className="text-blue-600" />
                            <span>Yes</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        Back
                      </Button>
                      <Button className="flex-1" onClick={() => setCurrentStep(3)}>
                        Continue to Account Setup
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Create Your NEIS Account</h3>
                <p className="text-gray-600">
                  You're almost ready to start! Create your secure account to access NEIS services.
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-green-800 mb-2">Assessment Complete!</h4>
                      <p className="text-green-700">
                        Based on your responses, NEIS appears to be a good fit for your current needs.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Ready to create your account and start your mental health journey?
                      </p>

                      <div className="flex gap-4">
                        <Button variant="outline" onClick={() => setCurrentStep(2)}>
                          Back to Assessment
                        </Button>
                        <Button className="flex-1" asChild>
                          <Link href="/register">
                            Create Account
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>

                      <div className="text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                          Sign in here
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Support Information */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Your Privacy & Safety
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Secure & Confidential</h4>
                  <p className="text-sm text-gray-600">Your information is protected with enterprise-grade security</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Professional Support</h4>
                  <p className="text-sm text-gray-600">All practitioners are qualified and supervised</p>
                </div>
                <div className="text-center">
                  <Phone className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Crisis Support Available</h4>
                  <p className="text-sm text-gray-600">24/7 crisis support numbers provided throughout</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Need Help */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Need Help Getting Started?</h3>
              <p className="text-gray-600 mb-4">
                Our support team is here to help you navigate the process and answer any questions.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support
                </Button>
                <Button variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Live Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
