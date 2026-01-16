"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Gamepad2, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/printing", label: "3D Printing" },
  { href: "/gaming", label: "Gaming Lounge" },
  { href: "/workshops", label: "Workshops" },
  { href: "/about", label: "About" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex items-center gap-1">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="text-2xl text-primary">+</span>
            <Printer className="h-6 w-6 text-accent" />
          </div>
          <span className="font-heading text-xl font-bold tracking-wider text-foreground">
            Print<span className="text-primary">&</span>Play
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" className="neon-border bg-transparent" asChild>
            <Link href="/gaming#booking">Book a Slot</Link>
          </Button>
          <Button className="neon-glow-purple" asChild>
            <Link href="/printing#order">Order Print</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "border-b border-border/50 bg-background/95 backdrop-blur-xl lg:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-4">
            <Button variant="outline" className="neon-border w-full bg-transparent" asChild>
              <Link href="/gaming#booking">Book a Slot</Link>
            </Button>
            <Button className="neon-glow-purple w-full" asChild>
              <Link href="/printing#order">Order Print</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
