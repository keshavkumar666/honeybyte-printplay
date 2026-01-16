import type { Metadata } from "next"
import Link from "next/link"
import {
  Target,
  Eye,
  Users,
  Gamepad2,
  GraduationCap,
  Sparkles,
  Wrench,
  Building,
  ArrowRight,
  TrendingUp,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { NeonCard } from "@/components/neon-card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us | Print & Play",
  description:
    "Our mission is to blend esports, maker culture, and learning. Making Bihar a hub for esports, prototyping, and STEM education.",
}

const audiences = [
  {
    icon: Gamepad2,
    title: "Gamers",
    description: "Competitive and casual gamers looking for premium setups and tournaments",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description: "Engineering, design, and tech students seeking practical skills",
  },
  {
    icon: Sparkles,
    title: "Cosplayers",
    description: "Creators needing custom props, accessories, and figurines",
  },
  {
    icon: Wrench,
    title: "Hobbyists",
    description: "DIY enthusiasts exploring 3D printing and maker projects",
  },
  {
    icon: Building,
    title: "Engineers",
    description: "Professionals prototyping ideas and creating functional parts",
  },
  {
    icon: Users,
    title: "Colleges",
    description: "Institutions seeking workshops and training for students",
  },
]

const milestones = [
  { year: "2025", title: "Launch", description: "Opening our doors in Bihar" },
  { year: "2025", title: "Community", description: "Building the gamer-maker community" },
  { year: "2026", title: "Expansion", description: "Adding more printers and gaming rigs" },
  { year: "2027", title: "Franchise", description: "Scaling to new cities" },
]

export default function AboutPage() {
  return (
    <div className="led-grid min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-heading neon-text-purple mb-6 text-4xl font-bold tracking-wider text-foreground md:text-5xl lg:text-6xl">
            About Print & Play
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're building a space where digital battles meet physical creations — a hybrid Gaming Lounge and 3D Maker
            Studio that brings together gamers, makers, students, and creators.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <NeonCard variant="purple" className="p-8">
              <Target className="mb-4 h-12 w-12 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To blend esports, maker culture, and learning into one cohesive experience. We believe that gaming and
                creating go hand in hand — both require creativity, precision, and passion.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Print & Play provides the tools, space, and community for anyone to level up their skills, whether
                they're competing in tournaments, designing their first 3D model, or learning robotics.
              </p>
            </NeonCard>

            <NeonCard variant="blue" className="p-8">
              <Eye className="mb-4 h-12 w-12 text-accent" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To make Bihar a recognized hub for esports, prototyping, and STEM education. We envision a future where
                every student has access to maker tools, every gamer has a premium setup to compete on, and every
                creator can bring their ideas to life.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We're not just building a business — we're building a movement that empowers the next generation of
                innovators.
              </p>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Who We Serve"
            subtitle="Our space is designed for a diverse community of creators and competitors"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <NeonCard key={audience.title} variant="purple">
                <audience.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="font-heading text-xl font-semibold text-foreground">{audience.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{audience.description}</p>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Our Journey" subtitle="Where we've been and where we're headed" />

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/50 md:left-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.title}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1 md:text-right pl-12 md:pl-0">
                    {index % 2 === 0 && (
                      <NeonCard variant="purple" className="inline-block">
                        <span className="text-sm font-bold text-primary">{milestone.year}</span>
                        <h3 className="font-heading text-lg font-semibold text-foreground">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </NeonCard>
                    )}
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary neon-glow-purple" />

                  <div className="flex-1 pl-12 md:pl-0">
                    {index % 2 !== 0 && (
                      <NeonCard variant="blue" className="inline-block">
                        <span className="text-sm font-bold text-accent">{milestone.year}</span>
                        <h3 className="font-heading text-lg font-semibold text-foreground">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </NeonCard>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <NeonCard variant="purple" className="p-8 md:p-12 text-center">
            <TrendingUp className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h2 className="font-heading text-3xl font-bold text-foreground">Investor-Ready</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Print & Play represents a unique opportunity in the emerging gaming and maker economy. With the esports
              industry growing rapidly in India and increasing demand for maker spaces and STEM education, we're
              positioned at the intersection of multiple high-growth sectors.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="neon-glow-purple" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="neon-border bg-transparent">
                Request Pitch Deck
              </Button>
            </div>
          </NeonCard>
        </div>
      </section>
    </div>
  )
}
