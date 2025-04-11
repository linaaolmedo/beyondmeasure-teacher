import Link from "next/link"
import Image from "next/image"
import { ChevronRight, BarChart3, BookOpen, Users, Calendar, Settings, Bell } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F7DBA7]/10">
      <aside className="hidden w-64 flex-col bg-[#0E5D7F] text-white md:flex">
        <div className="flex h-14 items-center border-b border-[#0E5D7F]/20 px-4">
          <Image
            src="/images/beyond-measure-logo.png"
            alt="BeyondMeasure Logo"
            width={140}
            height={40}
            className="h-auto w-auto brightness-0 invert"
          />
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#F7DBA7]">Dashboard</h2>
            <div className="space-y-1">
              <Link href="#" className="flex items-center rounded-md bg-[#0E5D7F]/20 px-3 py-2 text-sm font-medium">
                <BarChart3 className="mr-2 h-4 w-4 text-[#3AB5E9]" />
                <span>Overview</span>
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#0E5D7F]/20"
              >
                <BookOpen className="mr-2 h-4 w-4 text-[#3AB5E9]" />
                <span>Assignments</span>
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#0E5D7F]/20"
              >
                <Users className="mr-2 h-4 w-4 text-[#3AB5E9]" />
                <span>Students</span>
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#0E5D7F]/20"
              >
                <Calendar className="mr-2 h-4 w-4 text-[#3AB5E9]" />
                <span>Calendar</span>
              </Link>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#F7DBA7]">Settings</h2>
            <div className="space-y-1">
              <Link
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#0E5D7F]/20"
              >
                <Settings className="mr-2 h-4 w-4 text-[#3AB5E9]" />
                <span>Preferences</span>
              </Link>
            </div>
          </div>
        </nav>
        <div className="border-t border-[#0E5D7F]/20 p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Teacher" />
              <AvatarFallback className="bg-[#E96951]">MS</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Ms. Smith</p>
              <p className="text-xs text-[#3AB5E9]">Science Teacher</p>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-white px-4 md:px-6">
          <Button variant="outline" size="icon" className="md:hidden">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-[#3AB5E9]/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#0E5D7F]">Total Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#0E5D7F]">128</div>
                <p className="text-xs text-muted-foreground">+12 from last semester</p>
              </CardContent>
            </Card>
            <Card className="border-[#E96951]/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#0E5D7F]">Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#0E5D7F]">24</div>
                <p className="text-xs text-muted-foreground">8 pending review</p>
              </CardContent>
            </Card>
            <Card className="border-[#A8BF87]/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#0E5D7F]">Average Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#0E5D7F]">87%</div>
                <p className="text-xs text-muted-foreground">+3% from last month</p>
              </CardContent>
            </Card>
            <Card className="border-[#F7DBA7]/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#0E5D7F]">Upcoming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#0E5D7F]">5</div>
                <p className="text-xs text-muted-foreground">Events this week</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-[#0E5D7F]">Class Performance</CardTitle>
                <CardDescription>Average scores by subject area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Reading Comprehension</div>
                      <div className="text-[#3AB5E9]">82%</div>
                    </div>
                    <Progress value={82} className="h-2 bg-[#3AB5E9]/20" indicatorClassName="bg-[#3AB5E9]" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Mathematics</div>
                      <div className="text-[#E96951]">76%</div>
                    </div>
                    <Progress value={76} className="h-2 bg-[#E96951]/20" indicatorClassName="bg-[#E96951]" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Science</div>
                      <div className="text-[#A8BF87]">91%</div>
                    </div>
                    <Progress value={91} className="h-2 bg-[#A8BF87]/20" indicatorClassName="bg-[#A8BF87]" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Social Studies</div>
                      <div className="text-[#F7DBA7]">88%</div>
                    </div>
                    <Progress value={88} className="h-2 bg-[#F7DBA7]/20" indicatorClassName="bg-[#F7DBA7]" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0E5D7F]">Recent Activity</CardTitle>
                <CardDescription>Latest student submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Emma Johnson",
                      assignment: "Science Project",
                      time: "2 hours ago",
                      avatar: "EJ",
                      color: "bg-[#3AB5E9]",
                    },
                    {
                      name: "Liam Williams",
                      assignment: "Math Quiz",
                      time: "Yesterday",
                      avatar: "LW",
                      color: "bg-[#E96951]",
                    },
                    {
                      name: "Olivia Davis",
                      assignment: "Book Report",
                      time: "Yesterday",
                      avatar: "OD",
                      color: "bg-[#A8BF87]",
                    },
                    {
                      name: "Noah Martinez",
                      assignment: "History Essay",
                      time: "2 days ago",
                      avatar: "NM",
                      color: "bg-[#F7DBA7]",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className={item.color}>{item.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Submitted: {item.assignment}</p>
                      </div>
                      <div className="text-xs text-muted-foreground">{item.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-[#0E5D7F] hover:bg-[#3AB5E9]/10 hover:text-[#0E5D7F]">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0E5D7F]">Upcoming Assignments</CardTitle>
                <CardDescription>Due in the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Reading Response",
                      dueDate: "Tomorrow",
                      subject: "English",
                      color: "bg-[#3AB5E9]/20 text-[#3AB5E9]",
                    },
                    {
                      title: "Fractions Quiz",
                      dueDate: "Apr 9",
                      subject: "Math",
                      color: "bg-[#E96951]/20 text-[#E96951]",
                    },
                    {
                      title: "Ecosystem Project",
                      dueDate: "Apr 12",
                      subject: "Science",
                      color: "bg-[#A8BF87]/20 text-[#A8BF87]",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">Due: {item.dueDate}</p>
                      </div>
                      <div className={`rounded-full px-2 py-1 text-xs ${item.color}`}>{item.subject}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-[#0E5D7F] hover:bg-[#3AB5E9]/10 hover:text-[#0E5D7F]">
                  Create Assignment
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0E5D7F]">Students Needing Help</CardTitle>
                <CardDescription>Based on recent performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alex Thompson",
                      subject: "Math",
                      score: "62%",
                      avatar: "AT",
                      color: "bg-[#E96951]",
                    },
                    {
                      name: "Jamie Rodriguez",
                      subject: "Reading",
                      score: "68%",
                      avatar: "JR",
                      color: "bg-[#3AB5E9]",
                    },
                    {
                      name: "Taylor Wilson",
                      subject: "Science",
                      score: "65%",
                      avatar: "TW",
                      color: "bg-[#A8BF87]",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className={item.color}>{item.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.subject}: {item.score}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 text-[#0E5D7F]">
                        Contact
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-[#0E5D7F] hover:bg-[#3AB5E9]/10 hover:text-[#0E5D7F]">
                  View All Students
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0E5D7F]">Resources</CardTitle>
                <CardDescription>Teaching materials and guides</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Lesson Plan Templates",
                      type: "Document",
                      color: "bg-[#3AB5E9]/20 text-[#3AB5E9]",
                    },
                    {
                      title: "Assessment Rubrics",
                      type: "Spreadsheet",
                      color: "bg-[#E96951]/20 text-[#E96951]",
                    },
                    {
                      title: "Student Engagement Guide",
                      type: "PDF",
                      color: "bg-[#A8BF87]/20 text-[#A8BF87]",
                    },
                    {
                      title: "Parent Conference Tips",
                      type: "Video",
                      color: "bg-[#F7DBA7]/20 text-[#F7DBA7]",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.type}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 text-[#0E5D7F]">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-[#0E5D7F] hover:bg-[#3AB5E9]/10 hover:text-[#0E5D7F]">
                  Browse Library
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
