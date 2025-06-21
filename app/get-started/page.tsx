import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video } from "lucide-react"

export default function GetStartedPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Get Started</h1>
      <p className="mb-4">Welcome! This page will guide you through the initial steps to use our platform.</p>

      <Card className="border-2 border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-blue-600" />
            Try Our Demo Session
          </CardTitle>
          <CardDescription>Experience our video calling system with a simulated practitioner session</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/video-session">Launch Demo Session</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
