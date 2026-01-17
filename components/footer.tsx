import Link from "next/link"
import { Gamepad2, Printer, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const waMsg = encodeURIComponent(
`Hello! I found your website and want to know more 😊

Details:
- Name:
- Inquiry:
`
)

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Gamepad2 className="h-5 w-5 text-primary" />
                <span className="text-xl text-primary">+</span>
                <Printer className="h-5 w-5 text-accent" />
              </div>
              <span className="font-heading text-lg font-bold tracking-wider text-foreground">
                Print<span className="text-primary">&</span>Play
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Where digital battles meet physical creations. Gaming, 3D printing, and STEM workshops under one roof.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/gaming", label: "Gaming Lounge" },
                { href: "/printing", label: "3D Printing" },
                { href: "/workshops", label: "Workshops" },
                { href: "/store", label: "Store" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Services</h3>
            <ul className="space-y-2">
              {["Console Gaming", "Custom 3D Prints", "STEM Workshops", "Robotics Classes", "Esports Tournaments"].map(
                (service) => (
                  <li key={service} className="text-sm text-muted-foreground">
                    {service}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Connect</h3>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="neon-border bg-transparent" asChild>
                <a href="https://www.instagram.com/honeybyte_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" size="icon" className="neon-border bg-transparent" asChild>
                <a href="https://discord.gg/kcVrh4rm" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074..." />
                  </svg>
                </a>
              </Button>

              <Button variant="outline" size="icon" className="neon-border-blue bg-transparent" asChild>
                <a href={`https://wa.me/919142713879?text=${waMsg}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Lakhisarai, Bihar, India</p>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Print & Play. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
