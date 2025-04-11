"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Save, Share2, Twitter, Facebook, Linkedin, Mail, FileText } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

export default function CreateProjectPage() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    subject: "",
    gradeLevel: "",
    standards: [],
    status: "draft", // Default status is draft
  })

  const [showShareDialog, setShowShareDialog] = useState(false)
  const [projectSaved, setProjectSaved] = useState(false)
  const [shareOptions, setShareOptions] = useState({
    twitter: true,
    facebook: true,
    linkedin: false,
    email: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleShareOptionChange = (platform: keyof typeof shareOptions) => {
    setShareOptions((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }))
  }

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save the project to the database as a draft
    console.log("Saving project as draft:", formState)

    // Simulate successful save
    setProjectSaved(true)

    // Show share dialog
    setShowShareDialog(true)
  }

  const handleShare = () => {
    // In a real app, this would trigger sharing to the selected platforms
    console.log(
      "Sharing to:",
      Object.entries(shareOptions)
        .filter(([_, isSelected]) => isSelected)
        .map(([platform]) => platform),
    )

    // Close dialog and redirect to projects page
    setShowShareDialog(false)
    router.push("/projects")
  }

  const getShareUrl = () => {
    // In a real app, this would be the actual URL to the project
    return `https://beyondmeasure.edu/projects/${encodeURIComponent(formState.title.toLowerCase().replace(/\s+/g, "-"))}`
  }

  const getShareText = () => {
    return `Check out my new educational project "${formState.title}" on BeyondMeasure!`
  }

  return (
    <div className="container py-10">
      <div className="mb-6 flex items-center">
        <Link href="/projects" className="mr-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#0E5D7F]">Create New Project</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-[#0E5D7F]">Project Details</CardTitle>
              <CardDescription>Provide basic information about your assessment project.</CardDescription>
            </div>
            <Badge variant="outline" className="bg-[#F7DBA7]/20 text-[#E96951] border-[#F7DBA7]">
              Draft
            </Badge>
          </div>
        </CardHeader>
        <form onSubmit={handleSaveProject}>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter a descriptive title"
                value={formState.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe the purpose and scope of this assessment"
                rows={4}
                value={formState.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject Area</Label>
                <Select
                  value={formState.subject}
                  onValueChange={(value) => handleSelectChange("subject", value)}
                  required
                >
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English Language Arts</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="social-studies">Social Studies</SelectItem>
                    <SelectItem value="arts">Arts</SelectItem>
                    <SelectItem value="pe">Physical Education</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="gradeLevel">Grade Level</Label>
                <Select
                  value={formState.gradeLevel}
                  onValueChange={(value) => handleSelectChange("gradeLevel", value)}
                  required
                >
                  <SelectTrigger id="gradeLevel">
                    <SelectValue placeholder="Select grade level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="k-2">K-2</SelectItem>
                    <SelectItem value="3-5">3-5</SelectItem>
                    <SelectItem value="6-8">6-8</SelectItem>
                    <SelectItem value="9-12">9-12</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="rounded-md bg-[#F7DBA7]/10 p-4 text-sm">
              <div className="flex items-start gap-2">
                <FileText className="h-5 w-5 text-[#E96951] mt-0.5" />
                <div>
                  <p className="font-medium text-[#0E5D7F]">Draft Mode</p>
                  <p className="text-muted-foreground">
                    Your project will be saved as a draft. You can review and publish it later from your Projects
                    dashboard.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" asChild>
              <Link href="/projects">Cancel</Link>
            </Button>
            <Button type="submit" className="bg-[#0E5D7F] hover:bg-[#0E5D7F]/90">
              <Save className="mr-2 h-4 w-4" />
              Save as Draft
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* Share Dialog */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[#0E5D7F]">Project Saved as Draft</DialogTitle>
            <DialogDescription>
              Your project has been saved as a draft. You can share it with colleagues for feedback or continue to your
              projects dashboard.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                <Label htmlFor="twitter" className="text-sm font-medium">
                  Twitter/X
                </Label>
              </div>
              <Switch
                id="twitter"
                checked={shareOptions.twitter}
                onCheckedChange={() => handleShareOptionChange("twitter")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Facebook className="h-5 w-5 text-[#4267B2]" />
                <Label htmlFor="facebook" className="text-sm font-medium">
                  Facebook
                </Label>
              </div>
              <Switch
                id="facebook"
                checked={shareOptions.facebook}
                onCheckedChange={() => handleShareOptionChange("facebook")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5 text-[#0077B5]" />
                <Label htmlFor="linkedin" className="text-sm font-medium">
                  LinkedIn
                </Label>
              </div>
              <Switch
                id="linkedin"
                checked={shareOptions.linkedin}
                onCheckedChange={() => handleShareOptionChange("linkedin")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#E96951]" />
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
              </div>
              <Switch
                id="email"
                checked={shareOptions.email}
                onCheckedChange={() => handleShareOptionChange("email")}
              />
            </div>

            <div className="mt-4 rounded-md bg-muted p-3">
              <div className="text-xs font-medium">Draft link (only visible to you)</div>
              <div className="mt-1 flex items-center gap-2">
                <Input className="h-8" value={getShareUrl()} readOnly onClick={(e) => e.currentTarget.select()} />
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-2"
                  onClick={() => {
                    navigator.clipboard.writeText(getShareUrl())
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
          </div>
          <DialogFooter className="sm:justify-between">
            <Button variant="outline" onClick={() => router.push("/projects")}>
              Go to Projects
            </Button>
            <Button type="button" className="bg-[#3AB5E9] hover:bg-[#3AB5E9]/90" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share Draft
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
