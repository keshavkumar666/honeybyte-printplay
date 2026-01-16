import type { Metadata } from "next"
import { Printer, Package, Clock, Truck, MessageCircle } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { NeonCard } from "@/components/neon-card"
import { PrintOrderForm } from "@/components/print-order-form"

export const metadata: Metadata = {
  title: "3D Printing Services | Print & Play",
  description:
    "On-demand 3D printing for gifts, prototypes, cosplay accessories, spare parts, and anime models. PLA, TPU, Wood Fill, and Glow Filament available.",
}

const materials = [
  {
    name: "PLA",
    price: "₹20/gram",
    description: "Standard, durable prints. Perfect for figurines, prototypes, and functional parts.",
    color: "bg-green-500",
    available: true,
  },
  {
    name: "TPU",
    price: "₹35/gram",
    description: "Flexible, rubber-like material. Great for phone cases, gaskets, and wearables.",
    color: "bg-blue-500",
    available: true,
  },
  {
    name: "Wood Fill",
    price: "₹40/gram",
    description: "Wood texture finish with real wood particles. Ideal for decorative items.",
    color: "bg-amber-600",
    available: true,
  },
  {
    name: "Glow Filament",
    price: "₹40/gram",
    description: "Glows in the dark! Perfect for keychains, night lights, and kids' toys.",
    color: "bg-primary",
    available: true,
  },
  {
    name: "Resin",
    price: "Coming Soon",
    description: "High-detail prints with smooth finish. Best for miniatures and jewelry.",
    color: "bg-purple-400",
    available: false,
  },
]

const services = [
  {
    name: "Basic Design Service",
    price: "₹200 - ₹400",
    description: "Simple modifications, scaling, or basic 3D modeling from reference images.",
  },
  {
    name: "Advanced Design Service",
    price: "₹400 - ₹600",
    description: "Complex 3D modeling, custom designs from scratch, or detailed figurine creation.",
  },
]

const deliveryOptions = [
  {
    icon: Package,
    title: "Store Pickup",
    description: "Pick up your prints directly from our studio. Free of charge.",
  },
  {
    icon: Truck,
    title: "Courier Delivery",
    description: "We'll ship your prints to your doorstep. Charges apply based on location.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Updates",
    description: "Get real-time updates on your print status via WhatsApp.",
  },
]

const useCases = [
  "Prototype Development",
  "Cosplay Accessories",
  "Anime Figurines",
  "Custom Gifts",
  "Spare Parts",
  "Educational Models",
  "Architectural Models",
  "Personalized Keychains",
]

export default function PrintingPage() {
  return (
    <div className="led-grid min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[128px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
            <Printer className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">On-Demand 3D Printing</span>
          </div>

          <h1 className="font-heading neon-text-blue mb-6 text-4xl font-bold tracking-wider text-foreground md:text-5xl lg:text-6xl">
            3D Printing Services
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From custom gifts and prototypes to cosplay accessories, anime models, and spare parts — we bring your ideas
            to life with precision 3D printing.
          </p>
        </div>
      </section>

      {/* Materials & Pricing */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Materials & Pricing"
            subtitle="Choose from a variety of high-quality filaments for your project"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
              <NeonCard key={material.name} variant="blue" className={!material.available ? "opacity-60" : ""}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className={`mb-3 h-3 w-16 rounded-full ${material.color}`} />
                    <h3 className="font-heading text-2xl font-bold text-foreground">{material.name}</h3>
                    <p className={`mt-1 text-lg font-semibold ${material.available ? "text-accent" : "text-primary"}`}>
                      {material.price}
                    </p>
                  </div>
                  {!material.available && (
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{material.description}</p>
              </NeonCard>
            ))}

            {/* Design Services Card */}
            <NeonCard variant="purple" className="md:col-span-2 lg:col-span-1">
              <Clock className="mb-3 h-8 w-8 text-primary" />
              <h3 className="font-heading text-2xl font-bold text-foreground">Design Services</h3>
              <div className="mt-4 space-y-4">
                {services.map((service) => (
                  <div key={service.name} className="border-t border-border/50 pt-4 first:border-0 first:pt-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{service.name}</span>
                      <span className="text-primary">{service.price}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="What Can You Print?" subtitle="Popular use cases for our 3D printing services" />

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="neon-border rounded-full bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:neon-glow-purple"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Delivery Options" subtitle="Flexible pickup and delivery to suit your needs" />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {deliveryOptions.map((option) => (
              <NeonCard key={option.title} variant="blue">
                <option.icon className="mb-4 h-10 w-10 text-accent" />
                <h3 className="font-heading text-xl font-semibold text-foreground">{option.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{option.description}</p>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Request a Print"
            subtitle="Upload your STL file or describe your project and we'll get back to you with a quote"
          />

          <div className="mt-12">
            <PrintOrderForm />
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="border-t border-border/50 bg-card/30 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Have Questions?</h2>
          <p className="mt-4 text-muted-foreground">
            Chat with us on WhatsApp for quick quotes and project discussions.
          </p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-glow-blue mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-all hover:bg-accent/90"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
