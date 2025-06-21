import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <img
                  src="/images/australian-coat-of-arms.png"
                  alt="Australian Government Coat of Arms"
                  className="h-10 w-auto"
                />
              </div>
              <div>
                <div className="font-bold text-xl">NEIS</div>
                <div className="text-xs text-gray-400">National Early Intervention Service</div>
                <div className="text-xs text-gray-500">Australian Government</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">Free, evidence-based mental health support for all Australians.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/get-started" className="text-gray-400 hover:text-white">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="/guided-licbt" className="text-gray-400 hover:text-white">
                  Guided LiCBT
                </Link>
              </li>
              <li>
                <Link href="/self-guided" className="text-gray-400 hover:text-white">
                  Self-Guided
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About NEIS
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-gray-400 hover:text-white">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Crisis Support */}
          <div>
            <h3 className="font-semibold mb-4">Crisis Support</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <div>
                  <div className="font-medium">Lifeline</div>
                  <div className="text-gray-400">13 11 14</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <div>
                  <div className="font-medium">Emergency</div>
                  <div className="text-gray-400">000</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <div>
                  <div className="font-medium">Support Email</div>
                  <div className="text-gray-400">support@neis.gov.au</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2025 National Early Intervention Service. A service of the Australian Government Department of Health,
            Disability and Ageing.
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>Australia-wide service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
