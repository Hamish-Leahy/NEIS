import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Clock, Phone, Video, MessageCircle, Globe, Accessibility, Languages } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Free • Confidential • No Referral Required
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get mental health support when you need it
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            NEIS provides free, evidence-based Low-intensity Cognitive Behavioural Therapy (LiCBT) for Australians
            experiencing mild mental ill-health or transient distress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/get-started">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resources">Browse Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Crisis Support Banner */}
      <section className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 text-red-400 mr-2" />
              <strong className="text-red-700">Crisis Support:</strong>
            </div>
            <p className="text-sm text-red-700">
              If you're in immediate danger, call 000. For mental health crisis support, call Lifeline 13 11 14 or text
              0477 13 11 14.
            </p>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How NEIS Can Help You</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 hover:border-blue-300 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Video className="h-6 w-6 text-blue-600" />
                <CardTitle>Guided LiCBT</CardTitle>
              </div>
              <CardDescription>Work one-on-one with a trained practitioner via video or phone</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• 6-8 structured sessions</li>
                <li>• Personalized treatment plan</li>
                <li>• Professional support throughout</li>
                <li>• Flexible scheduling</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/video-session">Start Demo Session</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-green-300 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-green-600" />
                <CardTitle>Self-Guided LiCBT</CardTitle>
              </div>
              <CardDescription>Access interactive modules and resources at your own pace</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Available 24/7</li>
                <li>• Interactive modules</li>
                <li>• Track your progress</li>
                <li>• Download resources</li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/self-guided">Start Self-Guided</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NEIS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Evidence-Based</h3>
              <p className="text-gray-600">
                Our LiCBT approach is backed by extensive research and proven effective for mild to moderate mental
                health concerns.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Your privacy is protected with enterprise-grade security and strict confidentiality protocols.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Culturally Safe</h3>
              <p className="text-gray-600">
                Services designed to be inclusive and respectful of diverse backgrounds and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Accessible to Everyone</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <Accessibility className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">WCAG 2.1 Compliant</h3>
            <p className="text-sm text-gray-600">Designed for users with disabilities</p>
          </div>

          <div className="text-center">
            <Languages className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Multi-Language</h3>
            <p className="text-sm text-gray-600">Available in 10+ languages</p>
          </div>

          <div className="text-center">
            <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Interpreter Support</h3>
            <p className="text-sm text-gray-600">Professional interpreters available</p>
          </div>

          <div className="text-center">
            <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Extended Hours</h3>
            <p className="text-sm text-gray-600">Support beyond 9-5, including weekends</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Making a Difference</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">170,000+</div>
              <div className="text-blue-100">Australians to be supported annually by 2029</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Access to self-guided resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Free</div>
              <div className="text-blue-100">No cost, no referral required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Mental Health Journey?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Take the first step towards better mental wellbeing. Our services are free, confidential, and available when
          you need them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/get-started">Get Started Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/about">Learn More About NEIS</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
