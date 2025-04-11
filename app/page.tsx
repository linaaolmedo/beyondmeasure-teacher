"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, DollarSign, Package, Mail, Phone } from "lucide-react"
import { ScrollToSection } from "@/components/scroll-to-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LoginDialog } from "@/components/auth/login-dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Add this useEffect to handle client-side mounting
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Define all sections for navigation
  const sections = [
    { id: "hero", label: "Home" },
    { id: "features", label: "Features" },
    { id: "how-it-works", label: "How It Works" },
    { id: "testimonials", label: "Testimonials" },
    { id: "about", label: "About Us" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ]

  // If not mounted yet (server-side), render a simplified version
  if (!isMounted) {
    return (
      <>
        {/* Hero Section - Simplified for SSR */}
        <section
          id="hero"
          className="bg-gradient-to-b from-sun-light to-white py-12 md:py-16 min-h-[70vh] flex items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-3">
                  <h1 className="text-3xl font-normal tracking-tight text-navy sm:text-5xl xl:text-6xl">
                    Give without bounds.
                    <br />
                    Give with purpose.
                  </h1>
                  <p className="max-w-[600px] text-navy md:text-xl font-light leading-relaxed opacity-80">
                    A crowdsourcing platform where passionate donors come together to support private school teachers
                    and students, creating a ripple effect of positive change in education.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="animate-pulse bg-gray-200 rounded-2xl h-[550px] w-[550px]"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="bg-gradient-to-b from-sun-light to-white py-12 md:py-16 min-h-[70vh] flex items-center"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-3">
                <h1 className="text-3xl font-normal tracking-tight text-navy sm:text-5xl xl:text-6xl">
                  Give without bounds.
                  <br />
                  Give with purpose.
                </h1>
                <p className="max-w-[600px] text-navy md:text-xl font-light leading-relaxed opacity-80">
                  A crowdsourcing platform where passionate donors come together to support private school teachers and
                  students, creating a ripple effect of positive change in education.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button variant="sky" className="rounded-full" onClick={() => setLoginOpen(true)}>
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-salmon text-salmon hover:bg-salmon-light hover:text-salmon"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="mt-8 md:mt-10">
            <ScrollToSection sections={sections} />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="bg-gradient-to-b from-white to-sky-light py-24 min-h-screen flex items-center"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-normal tracking-tight text-navy sm:text-4xl md:text-5xl">How it Works</h2>
              <p className="max-w-[900px] text-navy md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light opacity-80">
                You know what your students need. We're here to help you measure what matters.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 py-16 md:grid-cols-3">
            {[
              {
                number: "1",
                title: "Create Your Project",
                description:
                  "Design authentic assessments that capture meaningful learning and growth in your classroom.",
                icon: <FileText className="h-12 w-12 text-sky" />,
                color: "bg-sky-light border-sky",
                numberColor: "text-sun",
                iconBg: "bg-sky/10",
              },
              {
                number: "2",
                title: "Implement & Collect Data",
                description: "Put your assessments into practice and gather rich data about student learning.",
                icon: <DollarSign className="h-12 w-12 text-salmon" />,
                color: "bg-salmon-light border-salmon",
                numberColor: "text-sun",
                iconBg: "bg-salmon/10",
              },
              {
                number: "3",
                title: "Analyze & Adapt",
                description: "Gain insights from your data and refine your teaching to meet student needs.",
                icon: <Package className="h-12 w-12 text-grass" />,
                color: "bg-grass-light border-grass",
                numberColor: "text-sun",
                iconBg: "bg-grass/10",
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className={`flex h-48 w-48 items-center justify-center rounded-full ${step.iconBg} p-4`}>
                    <div className="absolute -left-4 -top-4 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-gray-100 shadow-soft">
                      <span className={`text-3xl font-serif ${step.numberColor}`}>{step.number}</span>
                    </div>
                    {step.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-normal text-navy">{step.title}</h3>
                <p className="text-navy font-light opacity-80 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="sky" className="rounded-full px-8">
              Get Started
            </Button>
          </div>
          <p className="text-center text-navy font-light opacity-70 mt-6">
            If you can envision it, you can measure it.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-navy py-24 text-white min-h-screen flex items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl">Trusted by Educators</h2>
              <p className="max-w-[900px] text-sun md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light opacity-90">
                Hear from teachers who have transformed their assessment practices with BeyondMeasure.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "BeyondMeasure has completely changed how I assess student learning. I now have a much clearer picture of each student's growth.",
                author: "Sarah Johnson",
                role: "5th Grade Teacher",
              },
              {
                quote:
                  "The insights I get from BeyondMeasure help me tailor my instruction to meet the needs of every student in my classroom.",
                author: "Michael Rodriguez",
                role: "High School Science",
              },
              {
                quote:
                  "Parents love the detailed feedback they receive about their child's progress. It's opened up meaningful conversations about learning.",
                author: "Emily Chen",
                role: "Middle School English",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-navy/80 border-sky/20 text-white shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sun font-normal">
                    <CheckCircle className="h-5 w-5" />
                    Testimonial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic font-light">&ldquo;{testimonial.quote}&rdquo;</p>
                </CardContent>
                <CardFooter>
                  <div>
                    <p className="font-normal">{testimonial.author}</p>
                    <p className="text-sm text-sky">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white py-24 min-h-screen flex items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-[#3AB5E9] bg-[#3AB5E9]/10 px-3 py-1 text-sm text-[#3AB5E9]">
                About Us
              </div>
              <h2 className="text-3xl font-normal tracking-tight text-[#0E5D7F] sm:text-4xl md:text-5xl">Our Story</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Founded by educators, for educators.
              </p>
            </div>
          </div>

          <div className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter text-[#0E5D7F]">
                  Founded by Educators, for Educators
                </h3>
                <p className="text-muted-foreground">
                  BeyondMeasure was born from a simple observation: traditional assessment methods often fail to capture
                  the depth and breadth of student learning. Founded in 2018 by a team of passionate educators and
                  technologists, we set out to create tools that would help teachers measure what truly matters.
                </p>
                <p className="text-muted-foreground">
                  Our platform has evolved through close collaboration with teachers across grade levels and subject
                  areas. Every feature is designed to support authentic assessment practices that honor the complexity
                  of learning and the uniqueness of each student.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Team of educators collaborating"
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="mt-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-[#A8BF87] bg-[#A8BF87]/10 px-3 py-1 text-sm text-[#A8BF87]">
                  Our Values
                </div>
                <h3 className="text-2xl font-bold tracking-tighter text-[#0E5D7F]">What We Stand For</h3>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Our core values guide everything we do at BeyondMeasure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Student-Centered",
                  description: "We believe assessment should serve student learning, not the other way around.",
                  color: "border-[#3AB5E9]/20 bg-[#3AB5E9]/5",
                },
                {
                  title: "Equity & Inclusion",
                  description:
                    "We're committed to assessment practices that recognize and value diverse ways of knowing and demonstrating learning.",
                  color: "border-[#E96951]/20 bg-[#E96951]/5",
                },
                {
                  title: "Teacher Empowerment",
                  description:
                    "We trust teachers as professionals and design tools that enhance their expertise rather than replace it.",
                  color: "border-[#A8BF87]/20 bg-[#A8BF87]/5",
                },
              ].map((value, index) => (
                <Card key={index} className={`${value.color}`}>
                  <CardHeader>
                    <CardTitle className="text-[#0E5D7F]">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#F7DBA7]/10 py-24 min-h-screen flex items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-[#E96951] bg-[#E96951]/10 px-3 py-1 text-sm text-[#E96951]">
                FAQ
              </div>
              <h2 className="text-3xl font-normal tracking-tight text-[#0E5D7F] sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about BeyondMeasure.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-8 py-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0E5D7F]">General Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What is BeyondMeasure?",
                    answer:
                      "BeyondMeasure is an educational assessment platform designed to help teachers create, implement, and analyze authentic assessments that capture meaningful student learning and growth. Our tools go beyond traditional testing to measure what truly matters in education.",
                  },
                  {
                    question: "Who can use BeyondMeasure?",
                    answer:
                      "BeyondMeasure is designed for K-12 educators, including classroom teachers, instructional coaches, curriculum specialists, and school administrators. Our platform is adaptable for all grade levels and subject areas.",
                  },
                  {
                    question: "Is BeyondMeasure aligned with educational standards?",
                    answer:
                      "Yes, BeyondMeasure allows teachers to align assessments with state and national standards while also measuring deeper learning outcomes that may not be captured in standardized tests.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-[#0E5D7F]">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0E5D7F]">Getting Started</h3>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How do I create an account?",
                    answer:
                      "You can sign up for BeyondMeasure by clicking the 'Sign Up' button on our homepage. You'll need to provide your name, email address, and create a password. School and district administrators can also contact us directly to set up accounts for their staff.",
                  },
                  {
                    question: "Is there training available for new users?",
                    answer:
                      "Yes! We offer comprehensive onboarding resources including video tutorials, live webinars, and a knowledge base. New users also receive a guided tour of the platform when they first log in.",
                  },
                  {
                    question: "Can I try BeyondMeasure before purchasing?",
                    answer:
                      "Absolutely. We offer a 30-day free trial that gives you full access to all features. No credit card is required to start your trial.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 5}`}>
                    <AccordionTrigger className="text-left text-[#0E5D7F]">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-[#0E5D7F]">Still have questions?</h3>
              <p className="mt-2 text-muted-foreground">
                If you couldn't find the answer you were looking for, please reach out to our support team.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Button variant="sky" className="rounded-full">
                  Contact Support
                </Button>
                <Button variant="outline" className="rounded-full border-sky text-sky hover:bg-sky/10">
                  Browse Knowledge Base
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-24 min-h-screen flex items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-[#3AB5E9] bg-[#3AB5E9]/10 px-3 py-1 text-sm text-[#3AB5E9]">
                Contact Us
              </div>
              <h2 className="text-3xl font-normal tracking-tight text-[#0E5D7F] sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We'd love to hear from you. Reach out with questions, feedback, or to schedule a demo.
              </p>
            </div>
          </div>

          <div className="grid gap-10 py-12 lg:grid-cols-2">
            <div className="space-y-6">
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
              </div>
            </div>
            <div className="rounded-lg border p-6 shadow-soft">
              <h3 className="mb-4 text-xl font-semibold text-[#0E5D7F]">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
                <Button variant="navy" className="w-full rounded-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Login Dialog */}
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
}
