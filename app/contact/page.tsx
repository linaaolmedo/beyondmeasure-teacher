"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Add this useEffect to handle client-side mounting
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  // If not mounted yet (server-side), render a minimal version or loading state
  if (!isMounted) {
    return (
      <>
        {/* Hero Section */}
        <section className="bg-[#E96951] py-16 text-white md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                  We'd love to hear from you. Reach out with questions, feedback, or to schedule a demo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Loading state for contact form */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3AB5E9]"></div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#E96951] py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                We'd love to hear from you. Reach out with questions, feedback, or to schedule a demo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0E5D7F]">Get in Touch</h2>
                <p className="mt-2 text-muted-foreground">
                  Have questions about BeyondMeasure? Our team is here to help. Fill out the form and we'll get back to
                  you as soon as possible.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-[#3AB5E9]" />
                  <div>
                    <h3 className="font-semibold text-[#0E5D7F]">Email Us</h3>
                    <p className="text-sm text-muted-foreground">For general inquiries: info@beyondmeasure.edu</p>
                    <p className="text-sm text-muted-foreground">For support: support@beyondmeasure.edu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-[#E96951]" />
                  <div>
                    <h3 className="font-semibold text-[#0E5D7F]">Call Us</h3>
                    <p className="text-sm text-muted-foreground">Main Office: (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Support Line: (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-[#A8BF87]" />
                  <div>
                    <h3 className="font-semibold text-[#0E5D7F]">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">123 Education Lane</p>
                    <p className="text-sm text-muted-foreground">Learning City, ED 12345</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-[#F7DBA7]/20 p-6">
                <h3 className="font-semibold text-[#0E5D7F]">Schedule a Demo</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Want to see BeyondMeasure in action? Schedule a personalized demo with one of our education
                  specialists.
                </p>
                <Button className="mt-4 bg-[#3AB5E9] hover:bg-[#3AB5E9]/90">Book a Demo</Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0E5D7F]">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                    <div className="rounded-full bg-[#A8BF87]/20 p-3">
                      <svg
                        className="h-6 w-6 text-[#A8BF87]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0E5D7F]">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
                    <Button variant="outline" className="mt-2" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#0E5D7F] hover:bg-[#0E5D7F]/90" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
