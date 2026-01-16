"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NeonCard } from "@/components/neon-card"

const consoles = ["PlayStation 5", "Xbox Series X", "Gaming PC"]
const timeSlots = [
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
  "8:00 PM - 10:00 PM",
]

export function SlotBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Your slot has been booked! We'll confirm via WhatsApp.")
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
            <Label htmlFor="phone">Phone / WhatsApp *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              required
              className="border-border/50 bg-background/50"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="console">Console *</Label>
            <Select name="console" required>
              <SelectTrigger className="border-border/50 bg-background/50">
                <SelectValue placeholder="Select console" />
              </SelectTrigger>
              <SelectContent>
                {consoles.map((console) => (
                  <SelectItem key={console} value={console.toLowerCase().replace(/ /g, "-")}>
                    {console}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date *</Label>
            <Input id="date" name="date" type="date" required className="border-border/50 bg-background/50" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="slot">Time Slot *</Label>
          <Select name="slot" required>
            <SelectTrigger className="border-border/50 bg-background/50">
              <SelectValue placeholder="Select time slot" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="players">Number of Players</Label>
          <Select name="players" defaultValue="1">
            <SelectTrigger className="border-border/50 bg-background/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Player" : "Players"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="neon-glow-purple w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Booking...
            </>
          ) : (
            <>
              <Calendar className="mr-2 h-4 w-4" />
              Book Slot
            </>
          )}
        </Button>
      </form>
    </NeonCard>
  )
}
