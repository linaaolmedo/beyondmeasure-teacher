"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { LoginDialog } from "@/components/auth/login-dialog"
import { UserDropdown } from "@/components/user-dropdown"
import { LogIn } from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Define sections for navigation
  const sections = [
    { id: "hero", label: "Home" },
    { id: "features", label: "Features" },
    { id: "how-it-works", label: "How It Works" },
    { id: "testimonials", label: "Testimonials" },
    { id: "about", label: "About Us" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ]

  // Check for login status on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if user is logged in from localStorage
      const loggedInStatus = localStorage.getItem("isLoggedIn")
      if (loggedInStatus === "true") {
        setIsLoggedIn(true)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return

      // Show the header background after scrolling down
      setIsScrolled(window.scrollY > 50)

      // Get the "how-it-works" section
      const howItWorksSection = document.getElementById("how-it-works")

      if (howItWorksSection) {
        // Get the position of the section relative to the viewport
        const howItWorksSectionRect = howItWorksSection.getBoundingClientRect()

        // Show navigation when the top of the section is at or above the top of the viewport
        // This means the user has scrolled to or past the beginning of the section
        setShowNavigation(howItWorksSectionRect.top <= 0)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)

      // Initial check in case the page loads already scrolled
      setTimeout(() => {
        handleScroll()
      }, 100)

      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Custom button styles for navigation
  const navButtonStyles = {
    active: "border border-salmon bg-salmon/10 text-salmon hover:bg-salmon/20",
    inactive: "border border-navy bg-navy/10 text-navy hover:bg-navy/20",
  }

  // Handle demo login
  const handleDemoLogin = () => {
    setIsLoggedIn(true)
    // Store login state in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "true")
    }
    setLoginOpen(false)
  }

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false)
    // Remove login state from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLoggedIn")
    }
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white shadow-soft border-b border-gray-100" : "bg-transparent"
        }`}
      >
        <div className="container relative flex h-16 items-center px-4 justify-between">
          <Link
            href="/"
            className="flex items-center mr-6"
            onClick={(e) => {
              // If we're already on the home page, prevent default navigation
              // and just scroll to top
              if (window.location.pathname === "/") {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              } else {
                // If we're on another page, we'll navigate to home
                // and then scroll to top after the page loads
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }, 100)
              }
            }}
          >
            <div className="h-16 w-32 overflow-hidden">
              <Image
                src="/images/beyond-measure-logo.png"
                alt="BeyondMeasure Logo"
                width={120}
                height={40}
                className="h-auto w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Only visible after scrolling to how-it-works */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div
              className={`flex flex-wrap justify-center gap-2 transition-all duration-300 ${
                showNavigation ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
              }`}
            >
              {sections
                .filter((section) => section.id !== "hero" && section.id !== "features" && section.id !== "about") // Filter out Home, Features, and About Us buttons
                .map((section) => {
                  const isActive = typeof window !== "undefined" ? section.id === window.location.hash.substring(1) : false
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={cn(
                        "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors px-4 py-2",
                        isActive ? navButtonStyles.active : navButtonStyles.inactive,
                      )}
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById(section.id)
                        if (element) element.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      {section.label}
                    </a>
                  )
                })}
            </div>
          </div>

          <div className="ml-auto flex items-center justify-end space-x-4">
            <a
              href="#about"
              className="hidden md:inline-block text-navy font-medium text-sm hover:text-sky cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById("about")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              About Us
            </a>

            {isLoggedIn ? (
              <UserDropdown isLoggedIn={true} onLogout={handleLogout} userName="TEACHER NAME" />
            ) : (
              <div className="hidden md:flex">
                <button
                  onClick={() => setLoginOpen(true)}
                  className="inline-flex items-center rounded-full border border-grass bg-grass/10 px-3 py-1 text-sm text-grass hover:bg-grass/20 transition-colors"
                >
                  <LogIn className="mr-1 h-3.5 w-3.5" />
                  Log In
                </button>
              </div>
            )}

            <MobileNav sections={sections} />
          </div>
        </div>
      </header>

      {/* Login Dialog */}
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} onDemoLogin={handleDemoLogin} />
    </>
  )
}
