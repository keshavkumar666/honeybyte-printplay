"use client"

import type React from "react"
import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NeonCard } from "@/components/neon-card"

const subjects = [
  "General Inquiry",
  "Gaming Slot Booking",
  "3D Printing Quote",
  "Workshop Registration",
  "Partnership / Investment",
  "Feedback",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || "Not provided"
    const subject = subjects.find(s => s.toLowerCase().includes(selectedSubject.replace(/-/g, " "))) || selectedSubject
    const message = formData.get("message") as string

    const waMsg = `
Hello! I sent a message via the website 📨

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
    `.trim()

    const waUrl = `https://wa.me/919142713879?text=${encodeURIComponent(waMsg)}`

    // Simulate delay for button loader
    await new Promise((resolve) => setTimeout(resolve, 600))

    window.open(waUrl, "_blank")

    setIsSubmitting(false)
  }

  return (
    <NeonCard variant="purple" className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              required
              className="border-border/50 bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="border-border/50 bg-background/50"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              className="border-border/50 bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Select required onValueChange={setSelectedSubject}>
              <SelectTrigger className="border-border/50 bg-background/50">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject.toLowerCase().replace(/ /g, "-")}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us how we can help you..."
            rows={5}
            required
            className="border-border/50 bg-background/50"
          />
        </div>

        <Button type="submit" className="neon-glow-purple w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Redirecting to WhatsApp...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send via WhatsApp
            </>
          )}
        </Button>
      </form>
    </NeonCard>
  )
}
