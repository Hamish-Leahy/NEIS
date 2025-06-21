"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Accessibility } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { LanguageSelector } from "@/components/language-selector"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Get Started", href: "/get-started" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Accessibility Bar */}
      <div className="bg-blue-50 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <Accessibility className="h-4 w-4" />
              <span>WCAG 2.1 AA Compliant</span>
            </div>
            <div className="hidden sm:block">
              <LanguageSelector compact={true} />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span>Crisis Support: 13 11 14</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/images/australian-coat-of-arms.png"
                alt="Australian Government Coat of Arms"
                className="h-12 w-auto"
              />
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">NEIS</div>
              <div className="text-xs text-gray-600">National Early Intervention Service</div>
              <div className="text-xs text-gray-500">Australian Government</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href={`/${user.role}-dashboard`}>
                  <Button variant="outline">Dashboard</Button>
                </Link>
                <Button onClick={logout} variant="ghost">
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/register">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {/* Mobile Language Selector */}
                <div className="sm:hidden border-b pb-4">
                  <h3 className="font-semibold mb-2">Language / 语言</h3>
                  <LanguageSelector compact={false} showSpeechDemo={true} />
                </div>

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t pt-4 space-y-2">
                  {user ? (
                    <>
                      <Link href={`/${user.role}-dashboard`}>
                        <Button variant="outline" className="w-full">
                          Dashboard
                        </Button>
                      </Link>
                      <Button onClick={logout} variant="ghost" className="w-full">
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/login">
                        <Button variant="ghost" className="w-full">
                          Login
                        </Button>
                      </Link>
                      <Link href="/register">
                        <Button className="w-full">Sign Up</Button>
                      </Link>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
