import type { Metadata } from "next"
import { GraduationCap, Calendar, Clock, Users, Award, BookOpen, Cpu, Cog, Boxes, Wrench } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { NeonCard } from "@/components/neon-card"
import { Button } from "@/components/ui/button"
import { WorkshopInquiryForm } from "@/components/workshop-inquiry-form"

export const metadata: Metadata = {
  title: "Workshops & Learning | Print & Play",
  description:
    "STEM, robotics, CAD, and anime-print workshops. Learn 3D design, Arduino programming, and maker skills with certified instructors.",
}

const workshopCategories = [
  {
    icon: Boxes,
    title: "3D Design & Printing",
    description: "Learn CAD software and bring your designs to life",
    color: "text-accent",
  },
  {
    icon: Cpu,
    title: "Robotics & Arduino",
    description: "Build and program your own robots and electronics",
    color: "text-primary",
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    description: "CAD for engineering students and professionals",
    color: "text-accent",
  },
  {
    icon: Wrench,
    title: "Maker Skills",
    description: "Hands-on skills for building and prototyping",
    color: "text-primary",
  },
]

const upcomingWorkshops = [
  {
    title: "Intro to 3D Design",
    description: "Learn the basics of TinkerCAD and 3D modeling. Perfect for beginners with no prior experience.",
    date: "Jan 25, 2026",
    time: "2:00 PM - 5:00 PM",
    duration: "3 hours",
    price: "₹500",
    spots: 8,
    level: "Beginner",
    certified: false,
  },
  {
    title: "Print Your Own Anime Figurine",
    description: "Design and print a custom anime character. Learn sculpting techniques and post-processing.",
    date: "Feb 1, 2026",
    time: "3:00 PM - 7:00 PM",
    duration: "4 hours",
    price: "₹800",
    spots: 6,
    level: "Intermediate",
    certified: false,
  },
  {
    title: "Robotics with Arduino",
    description: "Build a line-following robot from scratch. Learn programming, sensors, and motor control.",
    date: "Feb 8, 2026",
    time: "11:00 AM - 4:00 PM",
    duration: "5 hours",
    price: "₹1,200",
    spots: 10,
    level: "Beginner",
    certified: true,
  },
  {
    title: "CAD for Mechanical Students",
    description: "Master Fusion 360 for engineering projects. Create assemblies, drawings, and simulations.",
    date: "Feb 15, 2026",
    time: "10:00 AM - 3:00 PM",
    duration: "5 hours",
    price: "₹1,000",
    spots: 12,
    level: "Intermediate",
    certified: true,
  },
  {
    title: "2-Day Makers Bootcamp",
    description: "Comprehensive maker skills: 3D printing, laser cutting, basic electronics, and project management.",
    date: "Feb 22-23, 2026",
    time: "10:00 AM - 5:00 PM",
    duration: "2 days",
    price: "₹2,500",
    spots: 15,
    level: "All Levels",
    certified: true,
  },
  {
    title: "Cosplay Props Workshop",
    description: "Design and print functional cosplay accessories. Learn finishing techniques and painting.",
    date: "Mar 1, 2026",
    time: "2:00 PM - 6:00 PM",
    duration: "4 hours",
    price: "₹700",
    spots: 8,
    level: "Intermediate",
    certified: false,
  },
]

const benefits = [
  {
    icon: BookOpen,
    title: "Hands-On Learning",
    description: "Learn by doing with real projects and immediate feedback",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Personalized attention with limited seats per workshop",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Earn certificates for select workshops to boost your resume",
  },
  {
    icon: Wrench,
    title: "Take Home Projects",
    description: "Keep what you build during the workshop",
  },
]

export default function WorkshopsPage() {
  return (
    <div className="led-grid min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">STEM & Maker Workshops</span>
          </div>

          <h1 className="font-heading neon-text-purple mb-6 text-4xl font-bold tracking-wider text-foreground md:text-5xl lg:text-6xl">
            Workshops & Learning
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Learn 3D design, robotics, Arduino programming, and maker skills with our hands-on workshops. Suitable for
            students, hobbyists, and professionals.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Workshop Categories" subtitle="Explore our range of learning experiences" />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workshopCategories.map((category) => (
              <NeonCard key={category.title} variant="purple">
                <category.icon className={`mb-4 h-10 w-10 ${category.color}`} />
                <h3 className="font-heading text-xl font-semibold text-foreground">{category.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Upcoming Sessions" subtitle="Register now to secure your spot" />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingWorkshops.map((workshop) => (
              <NeonCard key={workshop.title} variant="blue" className="flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        workshop.level === "Beginner"
                          ? "bg-green-500/20 text-green-400"
                          : workshop.level === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {workshop.level}
                    </span>
                    {workshop.certified && (
                      <span className="flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                        <Award className="h-3 w-3" />
                        Certified
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-heading mt-4 text-xl font-bold text-foreground">{workshop.title}</h3>
                <p className="mt-2 flex-grow text-sm text-muted-foreground">{workshop.description}</p>

                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    {workshop.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    {workshop.time} ({workshop.duration})
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    {workshop.spots} spots available
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">{workshop.price}</span>
                  <Button variant="outline" className="neon-border-blue bg-transparent">
                    Register
                  </Button>
                </div>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Learn With Us?" subtitle="What makes our workshops special" />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <NeonCard key={benefit.title} variant="purple">
                <benefit.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="font-heading text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Workshop Inquiry"
            subtitle="Can't find a workshop that fits? Let us know what you'd like to learn"
          />

          <div className="mt-12">
            <WorkshopInquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}
