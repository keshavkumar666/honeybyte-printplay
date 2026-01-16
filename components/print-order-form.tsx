"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NeonCard } from "@/components/neon-card"

const materials = ["PLA", "TPU", "Wood Fill", "Glow Filament"]
const deliveryMethods = ["Store Pickup", "Courier Delivery"]

export function PrintOrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Your print request has been submitted! We'll get back to you soon.")
  }

  return (
    <NeonCard variant="blue" className="p-8">
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
            <Label htmlFor="contact">Phone / WhatsApp *</Label>
            <Input
              id="contact"
              name="contact"
              type="tel"
              placeholder="+91 98765 43210"
              required
              className="border-border/50 bg-background/50"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="material">Material *</Label>
            <Select name="material" required>
              <SelectTrigger className="border-border/50 bg-background/50">
                <SelectValue placeholder="Select material" />
              </SelectTrigger>
              <SelectContent>
                {materials.map((material) => (
                  <SelectItem key={material} value={material.toLowerCase().replace(" ", "-")}>
                    {material}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="delivery">Delivery Method *</Label>
            <Select name="delivery" required>
              <SelectTrigger className="border-border/50 bg-background/50">
                <SelectValue placeholder="Select delivery" />
              </SelectTrigger>
              <SelectContent>
                {deliveryMethods.map((method) => (
                  <SelectItem key={method} value={method.toLowerCase().replace(" ", "-")}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="file">Upload STL File (Optional)</Label>
          <div className="relative">
            <input
              id="file"
              name="file"
              type="file"
              accept=".stl,.obj,.3mf"
              onChange={handleFileChange}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            />
            <div className="neon-border flex items-center justify-center gap-3 rounded-lg bg-background/50 p-6 text-center transition-all hover:bg-background/70">
              <Upload className="h-6 w-6 text-muted-foreground" />
              <div>
                {fileName ? (
                  <span className="font-medium text-foreground">{fileName}</span>
                ) : (
                  <>
                    <span className="font-medium text-foreground">Click to upload</span>
                    <span className="text-muted-foreground"> or drag and drop</span>
                  </>
                )}
                <p className="mt-1 text-xs text-muted-foreground">STL, OBJ, or 3MF files</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Project Description *</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Describe your project, include dimensions, colors, quantity, and any special requirements..."
            rows={4}
            required
            className="border-border/50 bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="deadline">Deadline (Optional)</Label>
          <Input id="deadline" name="deadline" type="date" className="border-border/50 bg-background/50" />
        </div>

        <Button
          type="submit"
          className="neon-glow-blue w-full bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Submit Print Request
            </>
          )}
        </Button>
      </form>
    </NeonCard>
  )
}
