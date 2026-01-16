import Link from "next/link"
import { ArrowRight, Gamepad2, Printer, GraduationCap, ShoppingBag, Zap, Cpu, Monitor, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { NeonCard } from "@/components/neon-card"

const features = [
  {
    icon: Gamepad2,
    title: "Esports Gaming",
    description: "PS5, Xbox Series X, high-refresh displays, and fiber internet for the ultimate gaming experience.",
    variant: "purple" as const,
  },
  {
    icon: Printer,
    title: "3D Printing",
    description: "On-demand printing for prototypes, cosplay, anime models, spare parts, and custom gifts.",
    variant: "blue" as const,
  },
  {
    icon: GraduationCap,
    title: "STEM Workshops",
    description: "Learn CAD, robotics, Arduino programming, and maker skills with certified instructors.",
    variant: "purple" as const,
  },
  {
    icon: ShoppingBag,
    title: "Custom Merch",
    description: "Controller stands, anime figurines, LED signs, keychains, and cosplay accessories.",
    variant: "blue" as const,
  },
]

const gamingRigs = [
  {
    name: "PlayStation 5",
    image: "/playstation-5-console-with-neon-rgb-lighting.jpg",
  },
  {
    name: "Xbox Series X",
    image: "/xbox-series-x-console-with-rgb-gaming-setup.jpg",
  },
  {
    name: "Gaming PC",
    image: "/rgb-gaming-pc-setup-with-ultrawide-monitor.jpg",
  },
]

const printingMaterials = [
  { name: "PLA", color: "bg-green-500", description: "Standard, durable prints" },
  { name: "TPU", color: "bg-blue-500", description: "Flexible, rubber-like" },
  { name: "Wood Fill", color: "bg-amber-600", description: "Wood texture finish" },
  { name: "Glow Filament", color: "bg-primary", description: "Glows in the dark" },
]

const upcomingWorkshops = [
  {
    title: "Intro to 3D Design",
    date: "Jan 25, 2026",
    time: "2:00 PM",
    spots: 8,
  },
  {
    title: "Print Your Anime Figurine",
    date: "Feb 1, 2026",
    time: "3:00 PM",
    spots: 6,
  },
  {
    title: "Robotics with Arduino",
    date: "Feb 8, 2026",
    time: "11:00 AM",
    spots: 10,
  },
]

export default function HomePage() {
  return (
    <div className="led-grid min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
        {/* Background glow effects */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[128px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Now Open in Bihar</span>
          </div>

          <h1 className="font-heading neon-text-purple mb-6 text-4xl font-bold tracking-wider text-foreground md:text-6xl lg:text-7xl">
            Gaming Lounge
            <br />
            <span className="text-accent">+ 3D Maker Studio</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Where digital battles meet physical creations. Experience esports gaming, on-demand 3D printing, STEM
            workshops, and custom merchandise all under one roof.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="neon-glow-purple min-w-[180px]" asChild>
              <Link href="/gaming#booking">
                Book a Game Slot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="neon-border-blue min-w-[180px] bg-transparent" asChild>
              <Link href="/printing#order">
                Order a Print
                <Printer className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="min-w-[180px] text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="/workshops">
                Join Workshop
                <GraduationCap className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border-2 border-primary/50 p-1">
            <div className="h-2 w-1 rounded-full bg-primary mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="What We Offer"
            subtitle="A complete ecosystem for gamers, makers, students, and hobbyists"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <NeonCard key={feature.title} variant={feature.variant}>
                <feature.icon
                  className={`mb-4 h-10 w-10 ${feature.variant === "purple" ? "text-primary" : "text-accent"}`}
                />
                <h3 className="font-heading mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gaming Rigs Section */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Featured Gaming Rigs"
            subtitle="Top-tier consoles and PCs with high-refresh displays and fiber internet"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {gamingRigs.map((rig) => (
              <div
                key={rig.name}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/50"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={rig.image || "/placeholder.svg"}
                    alt={rig.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-primary" />
                    <h3 className="font-heading text-lg font-semibold text-foreground">{rig.name}</h3>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">120-144Hz Display • Noise-isolated headset</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="neon-glow-purple" asChild>
              <Link href="/gaming">
                Explore Gaming Lounge
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Printing Materials Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Printing Materials"
            subtitle="From standard PLA to glow-in-the-dark filaments, we've got you covered"
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {printingMaterials.map((material) => (
              <NeonCard key={material.name} variant="blue">
                <div className={`mb-4 h-3 w-20 rounded-full ${material.color}`} />
                <h3 className="font-heading text-xl font-semibold text-foreground">{material.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{material.description}</p>
              </NeonCard>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="outline" className="neon-border-blue bg-transparent" asChild>
              <Link href="/printing">View All Materials</Link>
            </Button>
            <Button className="neon-glow-blue bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/printing#order">
                Start Your Print
                <Printer className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Upcoming Workshops"
            subtitle="Learn new skills with our hands-on STEM and maker workshops"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {upcomingWorkshops.map((workshop) => (
              <NeonCard key={workshop.title} variant="purple">
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {workshop.date} • {workshop.time}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{workshop.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{workshop.spots} spots available</p>
                <Button className="mt-4 w-full bg-transparent" variant="outline" asChild>
                  <Link href="/workshops">Register Now</Link>
                </Button>
              </NeonCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="neon-glow-purple" asChild>
              <Link href="/workshops">
                View All Workshops
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Merch Teaser */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="neon-border relative overflow-hidden rounded-2xl bg-card/50 p-8 md:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Custom Merch & Prints</h2>
                <p className="mt-4 text-muted-foreground">
                  Anime figurines, controller stands, LED acrylic signs, personalized keychains, cosplay parts, and
                  more. All made with precision 3D printing.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="neon-glow-purple" asChild>
                  <Link href="/store">
                    Browse Store
                    <ShoppingBag className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="neon-border bg-transparent" asChild>
                  <Link href="/printing#order">Custom Order</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Cpu className="mx-auto mb-6 h-16 w-16 text-primary" />
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Ready to Level Up?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you're here to game, create, or learn — Print & Play has something for everyone.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="neon-glow-purple min-w-[180px]" asChild>
              <Link href="/gaming#booking">Book Gaming Slot</Link>
            </Button>
            <Button
              size="lg"
              className="neon-glow-blue min-w-[180px] bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <Link href="/printing#order">Order a Print</Link>
            </Button>
            <Button size="lg" variant="outline" className="neon-border min-w-[180px] bg-transparent" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
