import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Plus, Eye, Pencil } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#A8BF87] py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Projects</h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                Browse and manage your assessment projects or create new ones.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/projects/create">
                <Button className="bg-white text-[#0E5D7F] hover:bg-white/90">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search projects..." className="w-full rounded-md pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <select className="rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                <option value="recent">Most Recent</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="subject">By Subject</option>
              </select>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Reading Comprehension Assessment",
                    description:
                      "A multi-part assessment to measure reading comprehension skills across different text types.",
                    subject: "English",
                    grade: "6-8",
                    lastUpdated: "2 days ago",
                    status: "Active",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Ecosystem Project",
                    description: "Students create models of ecosystems and explain interactions between organisms.",
                    subject: "Science",
                    grade: "4-5",
                    lastUpdated: "1 week ago",
                    status: "Draft",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Historical Perspectives Portfolio",
                    description:
                      "Students analyze historical events from multiple perspectives through research and reflection.",
                    subject: "Social Studies",
                    grade: "9-12",
                    lastUpdated: "3 weeks ago",
                    status: "Active",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Mathematical Modeling Challenge",
                    description: "Real-world problem solving using mathematical models and data analysis.",
                    subject: "Math",
                    grade: "7-9",
                    lastUpdated: "1 month ago",
                    status: "Archived",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Creative Writing Workshop",
                    description:
                      "A series of writing prompts and peer feedback sessions to develop creative writing skills.",
                    subject: "English",
                    grade: "3-5",
                    lastUpdated: "2 months ago",
                    status: "Active",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Digital Citizenship Project",
                    description:
                      "Students explore responsible technology use through research and creative presentations.",
                    subject: "Technology",
                    grade: "6-8",
                    lastUpdated: "3 months ago",
                    status: "Draft",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute right-2 top-2">
                        <Badge
                          className={`${
                            project.status === "Active"
                              ? "bg-[#A8BF87]"
                              : project.status === "Draft"
                                ? "bg-[#F7DBA7]"
                                : "bg-gray-400"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-[#3AB5E9]">
                          {project.subject}
                        </Badge>
                        <span className="text-xs text-muted-foreground">Grades {project.grade}</span>
                      </div>
                      <CardTitle className="text-[#0E5D7F]">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between border-t p-4">
                      <span className="text-xs text-muted-foreground">Updated {project.lastUpdated}</span>
                      <div className="flex gap-2">
                        {project.status === "Draft" ? (
                          <Button variant="outline" size="sm" className="text-[#E96951]">
                            <Pencil className="mr-1 h-3.5 w-3.5" />
                            Edit
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" className="text-[#0E5D7F]">
                            <Eye className="mr-1 h-3.5 w-3.5" />
                            View
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="drafts">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Ecosystem Project",
                    description: "Students create models of ecosystems and explain interactions between organisms.",
                    subject: "Science",
                    grade: "4-5",
                    lastUpdated: "1 week ago",
                    status: "Draft",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Digital Citizenship Project",
                    description:
                      "Students explore responsible technology use through research and creative presentations.",
                    subject: "Technology",
                    grade: "6-8",
                    lastUpdated: "3 months ago",
                    status: "Draft",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute right-2 top-2">
                        <Badge className="bg-[#F7DBA7]">Draft</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-[#3AB5E9]">
                          {project.subject}
                        </Badge>
                        <span className="text-xs text-muted-foreground">Grades {project.grade}</span>
                      </div>
                      <CardTitle className="text-[#0E5D7F]">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between border-t p-4">
                      <span className="text-xs text-muted-foreground">Updated {project.lastUpdated}</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-[#E96951]">
                          <Pencil className="mr-1 h-3.5 w-3.5" />
                          Edit
                        </Button>
                        <Button variant="sky" size="sm">
                          Publish
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              {/* Empty state for drafts */}
              {false && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-[#F7DBA7]/20 p-6">
                    <Pencil className="h-8 w-8 text-[#E96951]" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[#0E5D7F]">No Draft Projects</h3>
                  <p className="mt-2 max-w-md text-muted-foreground">
                    You don't have any projects in draft status. Create a new project to get started.
                  </p>
                  <Link href="/projects/create" className="mt-4">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Create New Project
                    </Button>
                  </Link>
                </div>
              )}
            </TabsContent>

            <TabsContent value="published">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Reading Comprehension Assessment",
                    description:
                      "A multi-part assessment to measure reading comprehension skills across different text types.",
                    subject: "English",
                    grade: "6-8",
                    lastUpdated: "2 days ago",
                    status: "Active",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Historical Perspectives Portfolio",
                    description:
                      "Students analyze historical events from multiple perspectives through research and reflection.",
                    subject: "Social Studies",
                    grade: "9-12",
                    lastUpdated: "3 weeks ago",
                    status: "Active",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Creative Writing Workshop",
                    description:
                      "A series of writing prompts and peer feedback sessions to develop creative writing skills.",
                    subject: "English",
                    grade: "3-5",
                    lastUpdated: "2 months ago",
                    status: "Active",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute right-2 top-2">
                        <Badge className="bg-[#A8BF87]">Active</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-[#3AB5E9]">
                          {project.subject}
                        </Badge>
                        <span className="text-xs text-muted-foreground">Grades {project.grade}</span>
                      </div>
                      <CardTitle className="text-[#0E5D7F]">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between border-t p-4">
                      <span className="text-xs text-muted-foreground">Updated {project.lastUpdated}</span>
                      <Button variant="outline" size="sm" className="text-[#0E5D7F]">
                        <Eye className="mr-1 h-3.5 w-3.5" />
                        View
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="text-[#0E5D7F]">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
