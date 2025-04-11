"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, Save, User, School, MapPin, BookOpen, GraduationCap, Quote, Star } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function AccountPage() {
  const [formState, setFormState] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@school.edu",
    school: "Lincoln Elementary School",
    region: "Midwest",
    gradeLevel: "3-5",
    subjects: "Science, Mathematics",
    bio: "I've been teaching elementary science and math for 8 years. I'm passionate about hands-on learning and making STEM accessible to all students.",
    profileImage: "",
    testimonial: {
      text: "BeyondMeasure has completely changed how I assess student learning. I now have a much clearer picture of each student's growth.",
      role: "5th Grade Teacher",
      yearsExperience: "8",
      isPublic: true,
    },
  })

  // Determine if subjects field should be shown based on grade level
  const [showSubjectsField, setShowSubjectsField] = useState(false)

  // Update showSubjectsField whenever gradeLevel changes
  useEffect(() => {
    // Show subjects field only for grades 6-8 and 9-12
    setShowSubjectsField(formState.gradeLevel === "6-8" || formState.gradeLevel === "9-12")
  }, [formState.gradeLevel])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleTestimonialChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      testimonial: {
        ...prev.testimonial,
        [name]: value,
      },
    }))
  }

  const handleTestimonialToggle = () => {
    setFormState((prev) => ({
      ...prev,
      testimonial: {
        ...prev.testimonial,
        isPublic: !prev.testimonial.isPublic,
      },
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save the user profile
    console.log("Saving profile:", formState)
    // Show success message or redirect
  }

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save the testimonial
    console.log("Saving testimonial:", formState.testimonial)
    // Show success message
  }

  return (
    <div className="container py-10">
      <div className="mb-6 flex items-center">
        <Link href="/" className="mr-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#0E5D7F]">My Account</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                  <AvatarFallback className="bg-[#3AB5E9] text-xl">SJ</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-[#0E5D7F]">{formState.name}</h2>
                  <p className="text-sm text-muted-foreground">{formState.email}</p>
                </div>
                <div className="w-full space-y-2 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <School className="h-4 w-4 text-[#3AB5E9]" />
                    <span>{formState.school}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-[#E96951]" />
                    <span>{formState.region}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-[#A8BF87]" />
                    <span>Grades {formState.gradeLevel}</span>
                  </div>
                  {showSubjectsField && (
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="h-4 w-4 text-[#F7DBA7]" />
                      <span>{formState.subjects}</span>
                    </div>
                  )}
                  {formState.testimonial.isPublic && (
                    <div className="flex items-center gap-2 text-sm">
                      <Quote className="h-4 w-4 text-[#3AB5E9]" />
                      <span>Testimonial Published</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t p-4">
              <div className="flex flex-col gap-2 w-full">
                <Link href="/account">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-navy/10 border-navy text-navy hover:bg-navy/20"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-navy/10 border-navy text-navy hover:bg-navy/20"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    My Projects
                  </Button>
                </Link>
                <Link href="/projects/create">
                  <Button variant="salmon" className="w-full justify-start">
                    Create a Project
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0E5D7F]">Edit Profile</CardTitle>
                  <CardDescription>Update your personal information and teaching details.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="school">School</Label>
                      <Input
                        id="school"
                        name="school"
                        value={formState.school}
                        onChange={handleChange}
                        placeholder="Your school name"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="region">Region</Label>
                        <Select value={formState.region} onValueChange={(value) => handleSelectChange("region", value)}>
                          <SelectTrigger id="region">
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Northeast">Northeast</SelectItem>
                            <SelectItem value="Southeast">Southeast</SelectItem>
                            <SelectItem value="Midwest">Midwest</SelectItem>
                            <SelectItem value="Southwest">Southwest</SelectItem>
                            <SelectItem value="West">West</SelectItem>
                            <SelectItem value="Northwest">Northwest</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="gradeLevel">Grade Level</Label>
                        <Select
                          value={formState.gradeLevel}
                          onValueChange={(value) => handleSelectChange("gradeLevel", value)}
                        >
                          <SelectTrigger id="gradeLevel">
                            <SelectValue placeholder="Select grade level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="K-2">K-2</SelectItem>
                            <SelectItem value="3-5">3-5</SelectItem>
                            <SelectItem value="6-8">6-8</SelectItem>
                            <SelectItem value="9-12">9-12</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Conditionally render subjects field based on grade level */}
                    {showSubjectsField && (
                      <div className="grid gap-2">
                        <Label htmlFor="subjects">Subjects Taught</Label>
                        <Input
                          id="subjects"
                          name="subjects"
                          value={formState.subjects}
                          onChange={handleChange}
                          placeholder="e.g., Mathematics, Science, English"
                        />
                      </div>
                    )}

                    <div className="grid gap-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formState.bio}
                        onChange={handleChange}
                        placeholder="Tell us about yourself and your teaching experience"
                        rows={4}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" type="button">
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-[#3AB5E9] hover:bg-[#3AB5E9]/90">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="testimonial">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0E5D7F]">Your Testimonial</CardTitle>
                  <CardDescription>Share your experience with BeyondMeasure to help other educators.</CardDescription>
                </CardHeader>
                <form onSubmit={handleTestimonialSubmit}>
                  <CardContent className="space-y-6">
                    <div className="grid gap-2">
                      <Label htmlFor="testimonial-text">Your Testimonial</Label>
                      <Textarea
                        id="testimonial-text"
                        name="text"
                        value={formState.testimonial.text}
                        onChange={handleTestimonialChange}
                        placeholder="Share how BeyondMeasure has impacted your teaching and student learning..."
                        rows={5}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="role">Your Role</Label>
                        <Input
                          id="role"
                          name="role"
                          value={formState.testimonial.role}
                          onChange={handleTestimonialChange}
                          placeholder="e.g., 5th Grade Teacher"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="yearsExperience">Years of Experience</Label>
                        <Input
                          id="yearsExperience"
                          name="yearsExperience"
                          type="number"
                          value={formState.testimonial.yearsExperience}
                          onChange={handleTestimonialChange}
                          placeholder="e.g., 8"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="isPublic"
                        checked={formState.testimonial.isPublic}
                        onChange={handleTestimonialToggle}
                        className="h-4 w-4 rounded border-gray-300 text-[#3AB5E9] focus:ring-[#3AB5E9]"
                      />
                      <Label htmlFor="isPublic" className="text-sm font-medium">
                        Make my testimonial public on the BeyondMeasure website
                      </Label>
                    </div>

                    {/* Testimonial Preview */}
                    <div className="rounded-lg border p-6 bg-[#F7DBA7]/10">
                      <h3 className="text-sm font-semibold text-[#0E5D7F] mb-2">Preview</h3>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Avatar className="h-12 w-12">
                              <AvatarFallback className="bg-[#3AB5E9]">
                                {formState.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <div className="flex text-yellow-400">
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                              </div>
                            </div>
                            <p className="italic text-sm text-gray-700 mb-2">"{formState.testimonial.text}"</p>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-[#0E5D7F]">{formState.name}</p>
                                <p className="text-xs text-[#3AB5E9]">{formState.testimonial.role}</p>
                              </div>
                              {formState.testimonial.isPublic ? (
                                <Badge className="bg-[#A8BF87]">Public</Badge>
                              ) : (
                                <Badge variant="outline" className="text-muted-foreground">
                                  Private
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" type="button">
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-[#3AB5E9] hover:bg-[#3AB5E9]/90">
                      <Save className="mr-2 h-4 w-4" />
                      Save Testimonial
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0E5D7F]">Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences and security.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-[#3AB5E9] hover:bg-[#3AB5E9]/90">Update Password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
