"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AboutInteractiveElements } from "@/components/about/interactive-elements"

export function AboutClientContent() {
  // Add state to track client-side mounting
  const [isMounted, setIsMounted] = useState(false)

  // Set isMounted to true after component mounts on the client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // If not mounted yet, show a loading state
  if (!isMounted) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3AB5E9]"></div>
      </div>
    )
  }

  // Full component rendered only on the client
  return (
    <>
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-[#3AB5E9] bg-[#3AB5E9]/10 px-3 py-1 text-sm text-[#3AB5E9]">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-[#0E5D7F] sm:text-4xl">
                  Founded by Educators, for Educators
                </h2>
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
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#F7DBA7]/10 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-[#A8BF87] bg-[#A8BF87]/10 px-3 py-1 text-sm text-[#A8BF87]">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#0E5D7F] sm:text-4xl">What We Stand For</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our core values guide everything we do at BeyondMeasure.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
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
              {
                title: "Continuous Growth",
                description: "We believe in focusing on growth over time rather than single-point measurements.",
                color: "border-[#F7DBA7]/20 bg-[#F7DBA7]/5",
              },
              {
                title: "Research-Based",
                description: "Our approach is grounded in educational research and best practices in assessment.",
                color: "border-[#0E5D7F]/20 bg-[#0E5D7F]/5",
              },
              {
                title: "Transparency",
                description:
                  "We believe in clear, honest communication with all stakeholders in the educational process.",
                color: "border-[#3AB5E9]/20 bg-[#3AB5E9]/5",
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
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-[#E96951] bg-[#E96951]/10 px-3 py-1 text-sm text-[#E96951]">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#0E5D7F] sm:text-4xl">
                Meet the People Behind BeyondMeasure
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our diverse team brings together expertise in education, technology, and design.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "Dr. Elena Rodriguez",
                role: "Founder & CEO",
                bio: "Former teacher and educational researcher with 15 years of classroom experience.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Marcus Chen",
                role: "Chief Technology Officer",
                bio: "Educational technologist passionate about creating tools that enhance teaching and learning.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Aisha Johnson",
                role: "Head of Curriculum",
                bio: "Curriculum specialist with expertise in authentic assessment and project-based learning.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Park",
                role: "Director of Teacher Success",
                bio: "Former principal dedicated to supporting teachers in implementing meaningful assessment practices.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    width={300}
                    height={300}
                    alt={member.name}
                    className="mx-auto aspect-square rounded-full object-cover"
                  />
                  <CardHeader className="p-0 pt-4 text-center">
                    <CardTitle className="text-lg text-[#0E5D7F]">{member.name}</CardTitle>
                    <CardDescription className="text-[#E96951]">{member.role}</CardDescription>
                  </CardHeader>
                  <p className="mt-2 text-center text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <AboutInteractiveElements />
    </>
  )
}
