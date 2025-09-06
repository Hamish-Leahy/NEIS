import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  Phone, 
  Video, 
  MessageCircle, 
  Globe, 
  Accessibility, 
  Languages,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Zap
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border border-blue-200">
                <Shield className="h-4 w-4 mr-2 text-blue-600" />
                Free • Confidential • No Referral Required
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Mental health support
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                when you need it
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              NEIS provides free, evidence-based Low-intensity Cognitive Behavioural Therapy (LiCBT) 
              for Australians experiencing mild mental ill-health or transient distress.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/get-started" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 hover:bg-white/80 backdrop-blur-sm transition-all duration-300">
                <Link href="/resources">Browse Resources</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Government Funded</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-purple-600" />
                <span>Evidence-Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Support Banner */}
      <section className="relative bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-6 mb-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-0">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <strong className="text-red-800 text-lg">Crisis Support Available</strong>
                <p className="text-sm text-red-700">If you're in immediate danger, call 000. For mental health crisis support, call Lifeline 13 11 14</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-50">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How NEIS Can Help You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the support option that works best for your needs and schedule
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Guided LiCBT</CardTitle>
                  <CardDescription className="text-lg">Work one-on-one with a trained practitioner</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>6-8 structured sessions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Personalized treatment plan</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Professional support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Flexible scheduling</span>
                </div>
              </div>
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3">
                <Link href="/video-session" className="flex items-center justify-center">
                  Start Demo Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-xl">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Self-Guided LiCBT</CardTitle>
                  <CardDescription className="text-lg">Access resources at your own pace</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Interactive modules</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Track your progress</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Download resources</span>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold py-3">
                <Link href="/self-guided" className="flex items-center justify-center">
                  Start Self-Guided
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose NEIS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach combines evidence-based therapy with modern technology to provide accessible mental health support
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Evidence-Based</h3>
              <p className="text-gray-600 leading-relaxed">
                Our LiCBT approach is backed by extensive research and proven effective for mild to moderate mental health concerns.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Safe & Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is protected with enterprise-grade security and strict confidentiality protocols.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Culturally Safe</h3>
              <p className="text-gray-600 leading-relaxed">
                Services designed to be inclusive and respectful of diverse backgrounds and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Accessible to Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to making mental health support available to all Australians
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Accessibility className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">WCAG 2.1 Compliant</h3>
            <p className="text-sm text-gray-600">Designed for users with disabilities</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Languages className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">Multi-Language</h3>
            <p className="text-sm text-gray-600">Available in 10+ languages</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">Interpreter Support</h3>
            <p className="text-sm text-gray-600">Professional interpreters available</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">Extended Hours</h3>
            <p className="text-sm text-gray-600">Support beyond 9-5, including weekends</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Making a Difference</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of Australians who have already benefited from NEIS services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6 group-hover:bg-white/20 transition-all duration-300">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <div className="text-5xl font-bold mb-2">170,000+</div>
                <div className="text-blue-100 text-lg">Australians to be supported annually by 2029</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6 group-hover:bg-white/20 transition-all duration-300">
                <Zap className="h-12 w-12 mx-auto mb-4 text-purple-200" />
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-blue-100 text-lg">Access to self-guided resources</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6 group-hover:bg-white/20 transition-all duration-300">
                <Star className="h-12 w-12 mx-auto mb-4 text-indigo-200" />
                <div className="text-5xl font-bold mb-2">Free</div>
                <div className="text-blue-100 text-lg">No cost, no referral required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-xl border border-blue-100">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your Mental Health Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards better mental wellbeing. Our services are free, confidential, 
              and available when you need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/get-started" className="flex items-center">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 hover:bg-white/80 backdrop-blur-sm transition-all duration-300">
                <Link href="/about">Learn More About NEIS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
