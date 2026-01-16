import type { Metadata } from "next"
import { Gamepad2, Monitor, Wifi, Headphones, Users, Trophy, Calendar, Clock, Check } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { NeonCard } from "@/components/neon-card"
import { Button } from "@/components/ui/button"
import { SlotBookingForm } from "@/components/slot-booking-form"

export const metadata: Metadata = {
  title: "Gaming Lounge | Print & Play",
  description:
    "Esports gaming lounge with PS5, Xbox Series X, high-refresh displays, fiber internet, and noise-isolated setups. Book your slot today!",
}

const specs = [
  {
    icon: Gamepad2,
    title: "PS5 & Xbox Series X",
    description: "Latest generation consoles with full game library",
  },
  {
    icon: Monitor,
    title: "120-144Hz Displays",
    description: "High refresh rate monitors for smooth gameplay",
  },
  {
    icon: Headphones,
    title: "Noise-Isolated Headsets",
    description: "Premium audio for immersive gaming experience",
  },
  {
    icon: Wifi,
    title: "Fiber Internet + LAN",
    description: "Ultra-low latency for competitive gaming",
  },
]

const hourlyRates = [
  {
    name: "Console Gaming",
    price: "₹40",
    unit: "per hour",
    description: "PS5 or Xbox Series X",
  },
  {
    name: "Day Pass",
    price: "₹200",
    unit: "full day",
    description: "Unlimited gaming access",
  },
]

const memberships = [
  {
    name: "Silver",
    hours: 20,
    price: "₹700",
    perHour: "₹35/hr",
    color: "from-gray-400 to-gray-300",
    features: ["20 hours of gaming", "Valid for 30 days", "Priority booking", "10% off snacks"],
  },
  {
    name: "Gold",
    hours: 40,
    price: "₹1,300",
    perHour: "₹32.5/hr",
    color: "from-yellow-500 to-amber-400",
    popular: true,
    features: [
      "40 hours of gaming",
      "Valid for 45 days",
      "Priority booking",
      "15% off snacks",
      "Free tournament entry",
    ],
  },
  {
    name: "Platinum",
    hours: 80,
    price: "₹2,400",
    perHour: "₹30/hr",
    color: "from-primary to-accent",
    features: [
      "80 hours of gaming",
      "Valid for 60 days",
      "VIP booking",
      "20% off snacks",
      "Free tournament entry",
      "Guest passes (2)",
    ],
  },
]

const tournaments = [
  {
    game: "FIFA 25",
    date: "Jan 28, 2026",
    time: "4:00 PM",
    prize: "₹5,000",
    spots: "16 players",
  },
  {
    game: "Call of Duty: MW3",
    date: "Feb 4, 2026",
    time: "6:00 PM",
    prize: "₹8,000",
    spots: "32 players",
  },
  {
    game: "Tekken 8",
    date: "Feb 11, 2026",
    time: "3:00 PM",
    prize: "₹3,000",
    spots: "16 players",
  },
  {
    game: "Rocket League",
    date: "Feb 18, 2026",
    time: "5:00 PM",
    prize: "₹6,000",
    spots: "24 players",
  },
]

export default function GamingPage() {
  return (
    <div className="led-grid min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Gamepad2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Esports Gaming Lounge</span>
          </div>

          <h1 className="font-heading neon-text-purple mb-6 text-4xl font-bold tracking-wider text-foreground md:text-5xl lg:text-6xl">
            Gaming Lounge
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Experience gaming like never before with our premium esports setup. PS5, Xbox Series X, high-refresh
            displays, fiber internet, and noise-isolated headsets.
          </p>
        </div>
      </section>

      {/* Specs */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Premium Gaming Setup"
            subtitle="Everything you need for the ultimate gaming experience"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {specs.map((spec) => (
              <NeonCard key={spec.title} variant="purple">
                <spec.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="font-heading text-xl font-semibold text-foreground">{spec.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{spec.description}</p>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Pricing" subtitle="Flexible rates for casual gamers and regulars" />

          {/* Hourly Rates */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:max-w-2xl lg:mx-auto">
            {hourlyRates.map((rate) => (
              <NeonCard key={rate.name} variant="blue">
                <h3 className="font-heading text-xl font-semibold text-foreground">{rate.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-accent">{rate.price}</span>
                  <span className="text-muted-foreground">/ {rate.unit}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{rate.description}</p>
              </NeonCard>
            ))}
          </div>

          {/* Memberships */}
          <div className="mt-20">
            <h3 className="font-heading text-center text-2xl font-bold text-foreground mb-12">Membership Tiers</h3>

            <div className="grid gap-8 md:grid-cols-3">
              {memberships.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 ${
                    tier.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`mb-4 inline-block rounded-lg bg-gradient-to-r ${tier.color} px-4 py-2 text-sm font-bold text-white`}
                  >
                    {tier.name}
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">/ {tier.hours} hours</span>
                  </div>

                  <p className="mt-1 text-sm text-primary">{tier.perHour}</p>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`mt-6 w-full ${tier.popular ? "neon-glow-purple" : ""}`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    Get {tier.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="border-y border-border/50 bg-card/30 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Upcoming Tournaments" subtitle="Compete, win prizes, and prove your skills" />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {tournaments.map((tournament) => (
              <NeonCard key={tournament.game} variant="purple">
                <div className="flex items-start justify-between">
                  <div>
                    <Trophy className="mb-2 h-6 w-6 text-primary" />
                    <h3 className="font-heading text-xl font-bold text-foreground">{tournament.game}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">{tournament.prize}</span>
                    <p className="text-xs text-muted-foreground">Prize Pool</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {tournament.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tournament.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {tournament.spots}
                  </div>
                </div>

                <Button variant="outline" className="mt-4 w-full neon-border bg-transparent">
                  Register Now
                </Button>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Book a Slot"
            subtitle="Reserve your gaming station in advance to guarantee availability"
          />

          <div className="mt-12">
            <SlotBookingForm />
          </div>
        </div>
      </section>
    </div>
  )
}
