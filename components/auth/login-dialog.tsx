"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface LoginDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onDemoLogin?: () => void
}

export function LoginDialog({ open, onOpenChange, onDemoLogin }: LoginDialogProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would authenticate the user
    console.log("Login attempted with:", { email, password, rememberMe })

    // Set login state in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "true")
    }

    // Call the onDemoLogin callback if provided
    if (onDemoLogin) {
      onDemoLogin()
    }

    onOpenChange(false)
  }

  const handleDemoLogin = () => {
    // Simulate login with demo credentials
    console.log("Demo login")

    // Set login state in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "true")
    }

    // Call the onDemoLogin callback if provided
    if (onDemoLogin) {
      onDemoLogin()
    }

    // Navigate to landing page after "login" instead of dashboard
    router.push("/")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-[#0E5D7F]">Log in to your account</DialogTitle>
          <DialogDescription>Enter your email and password to access your BeyondMeasure account.</DialogDescription>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <form onSubmit={handleLogin} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="teacher@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-sm text-[#3AB5E9] hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label htmlFor="remember" className="text-sm font-normal">
              Remember me
            </Label>
          </div>

          <Button type="submit" className="w-full bg-navy/10 border border-navy text-navy hover:bg-navy/20">
            Log In
          </Button>

          <Button type="button" variant="salmon" className="w-full" onClick={handleDemoLogin}>
            Demo Log In
          </Button>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Ready to make a difference in your classroom?{" "}
              <Link href="#" className="text-[#3AB5E9] hover:underline">
                Register now!
              </Link>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
