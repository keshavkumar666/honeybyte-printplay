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

const topics = ["3D Design & Printing", "Robotics & Arduino", "CAD for Engineering", "Maker Skills", "Custom Topic"]

export function WorkshopInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Your inquiry has been submitted! We'll get back to you soon.")
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
            <Label htmlFor="topic">Interested Topic *</Label>
            <Select name="topic" required>
              <SelectTrigger className="border-border/50 bg-background/50">
                <SelectValue placeholder="Select topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((topic) => (
                  <SelectItem key={topic} value={topic.toLowerCase().replace(/ /g, "-")}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Experience Level *</Label>
          <Select name="experience" required>
            <SelectTrigger className="border-border/50 bg-background/50">
              <SelectValue placeholder="Select your level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner - No prior experience</SelectItem>
              <SelectItem value="intermediate">Intermediate - Some experience</SelectItem>
              <SelectItem value="advanced">Advanced - Looking to specialize</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message / Questions *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us what you'd like to learn, your goals, preferred schedule, group size, etc."
            rows={4}
            required
            className="border-border/50 bg-background/50"
          />
        </div>

        <Button type="submit" className="neon-glow-purple w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Submit Inquiry
            </>
          )}
        </Button>
      </form>
    </NeonCard>
  )
}
