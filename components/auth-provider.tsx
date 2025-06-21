"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  name: string
  role: "user" | "practitioner" | "admin" | "supervisor"
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (email: string, password: string, name: string, role?: string) => Promise<boolean>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("neis-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Demo login logic - in real app this would call an API
    const demoUsers = [
      { id: "1", email: "user@demo.com", password: "demo123", name: "Sarah Johnson", role: "user" as const },
      {
        id: "2",
        email: "practitioner@demo.com",
        password: "demo123",
        name: "Dr. Michael Chen",
        role: "practitioner" as const,
      },
      { id: "3", email: "admin@demo.com", password: "demo123", name: "Admin User", role: "admin" as const },
      {
        id: "4",
        email: "supervisor@demo.com",
        password: "demo123",
        name: "Dr. Emma Wilson",
        role: "supervisor" as const,
      },
    ]

    const foundUser = demoUsers.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("neis-user", JSON.stringify(userWithoutPassword))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const register = async (email: string, password: string, name: string, role = "user"): Promise<boolean> => {
    setIsLoading(true)

    // Demo registration logic
    const newUser = {
      id: Date.now().toString(),
      email,
      name,
      role: role as "user" | "practitioner" | "admin" | "supervisor",
    }

    setUser(newUser)
    localStorage.setItem("neis-user", JSON.stringify(newUser))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("neis-user")
    // Redirect to home page after logout
    window.location.href = "/"
  }

  return <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
