import type { Metadata } from "next"
import { Phone, Mail, MapPin, MessageCircle, Instagram, Clock } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { NeonCard } from "@/components/neon-card"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Print & Play",
  description: "Get in touch with Print & Play. Visit our gaming lounge and 3D maker studio in Bihar, India.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919999999999",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@printandplay.in",
    href: "mailto:hello@printandplay.in",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Bihar, India",
    href: "#map",
  },
]

const hours = [
  { day: "Monday - Friday", time: "10:00 AM - 10:00 PM" },
  { day: "Saturday", time: "10:00 AM - 11:00 PM" },
  { day: "Sunday", time: "12:00 PM - 9:00 PM" },
]

export default function ContactPage() {
  return (
    <div className="led-grid min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-heading neon-text-purple mb-6 text-4xl font-bold tracking-wider text-foreground md:text-5xl lg:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions? Want to book a slot, discuss a custom print, or arrange a workshop? We'd love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <SectionHeading title="Get in Touch" align="left" />

              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <NeonCard variant="purple" className="h-full transition-all hover:scale-105">
                      <info.icon className="mb-3 h-8 w-8 text-primary" />
                      <h3 className="font-heading font-semibold text-foreground">{info.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{info.value}</p>
                    </NeonCard>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <NeonCard variant="blue">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                  <h3 className="font-heading text-lg font-semibold text-foreground">Opening Hours</h3>
                </div>
                <div className="space-y-2">
                  {hours.map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="text-foreground font-medium">{item.time}</span>
                    </div>
                  ))}
                </div>
              </NeonCard>

              {/* Social Links */}
              <div className="flex gap-4">
                <Button variant="outline" className="neon-border flex-1 bg-transparent" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </a>
                </Button>
                <Button variant="outline" className="neon-border flex-1 bg-transparent" asChild>
                  <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    Discord
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionHeading title="Send a Message" align="left" className="mb-8" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section id="map" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Find Us" subtitle="Visit our Gaming Lounge & 3D Maker Studio" />

          <div className="mt-12 neon-border overflow-hidden rounded-xl">
            <div className="aspect-video bg-card/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-16 w-16 text-primary mb-4" />
                <p className="text-muted-foreground">Map integration coming soon</p>
                <p className="text-sm text-muted-foreground mt-2">Bihar, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="border-t border-border/50 bg-card/30 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">Quick Actions</h2>
          <p className="mt-2 text-muted-foreground">Jump straight to what you need</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="neon-glow-purple" asChild>
              <a href="/gaming#booking">Book Gaming Slot</a>
            </Button>
            <Button className="neon-glow-blue bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a href="/printing#order">Order a Print</a>
            </Button>
            <Button variant="outline" className="neon-border bg-transparent" asChild>
              <a href="/workshops">Browse Workshops</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
