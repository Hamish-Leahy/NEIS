import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Shield, Heart, Globe, Award, Target } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Australian Government Initiative
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About NEIS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The National Early Intervention Service (NEIS) is Australia's free digital mental health platform, providing
            evidence-based Low-intensity Cognitive Behavioural Therapy (LiCBT) to support Australians experiencing mild
            mental ill-health or transient distress.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To provide accessible, evidence-based mental health support that helps Australians manage their mental
                wellbeing and prevent problems from escalating, ensuring everyone has the tools they need to thrive.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-green-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A mentally healthier Australia where early intervention and support are accessible to all, reducing the
                burden on higher acuity services and empowering individuals to take control of their mental health
                journey.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes NEIS Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Evidence-Based</h3>
              <p className="text-gray-600">
                All our interventions are based on proven Low-intensity Cognitive Behavioural Therapy (LiCBT) techniques
                with demonstrated effectiveness for mild mental health concerns.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessible to All</h3>
              <p className="text-gray-600">
                Free services with no referral required, available 24/7 online, with support for people from diverse
                backgrounds and those with accessibility needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Your privacy is protected with enterprise-grade security, strict confidentiality protocols, and
                compliance with Australian privacy laws.
              </p>
            </div>
          </div>
        </section>

        {/* Service Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Model</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      Guided LiCBT
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        One-on-one sessions with qualified practitioners
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        6-8 structured therapy sessions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Flexible scheduling including evenings and weekends
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Video, phone, or text-based delivery options
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-blue-500" />
                      Self-Guided LiCBT
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Interactive online modules available 24/7
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Self-paced learning with progress tracking
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Downloadable resources and worksheets
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Mobile-friendly design for access anywhere
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Target Population */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Who We Support</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>NEIS is designed for Australians experiencing:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Suitable for NEIS:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Mild to moderate anxiety or depression
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Stress related to life changes or challenges
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Difficulty coping with daily activities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Sleep problems or low mood
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Social anxiety or relationship concerns
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">May need additional support:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500">•</span>
                        Severe mental health conditions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500">•</span>
                        Active suicidal thoughts or self-harm
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500">•</span>
                        Substance use disorders
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500">•</span>
                        Psychosis or bipolar disorder
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500">•</span>
                        Complex trauma or PTSD
                      </li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-3">
                      We provide appropriate referrals to higher acuity services when needed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Goals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact Goals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">170,000+</div>
                  <div className="text-lg">Australians Supported</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  By 2029, we aim to support over 170,000 Australians annually with evidence-based mental health
                  interventions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-lg">Access</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Round-the-clock access to self-guided resources and crisis support information for all Australians.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Free</div>
                  <div className="text-lg">No Barriers</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Completely free services with no referral required, removing financial and administrative barriers to
                  care.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quality & Safety */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Quality & Safety</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-500" />
                      Clinical Excellence
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• All practitioners are qualified mental health professionals</li>
                      <li>• Regular clinical supervision and support</li>
                      <li>• Evidence-based treatment protocols</li>
                      <li>• Continuous quality improvement processes</li>
                      <li>• Outcome measurement and evaluation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      Safety & Privacy
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Enterprise-grade security and encryption</li>
                      <li>• Compliance with Australian privacy laws</li>
                      <li>• Risk assessment and safety protocols</li>
                      <li>• Crisis support pathways</li>
                      <li>• Regular security audits and updates</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Government Partnership */}
        <section className="mb-16">
          <Card className="bg-blue-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Australian Government Initiative</h2>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                NEIS is delivered by the Australian Government Department of Health, Disability and Ageing as part of
                the national commitment to improving mental health outcomes for all Australians. This service represents
                a significant investment in early intervention and prevention.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild>
                  <Link href="/get-started">Start Your Journey</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
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
