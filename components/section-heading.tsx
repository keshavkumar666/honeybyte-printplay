import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({ title, subtitle, className, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center", className)}>
      <h2 className="font-heading text-3xl font-bold tracking-wider text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
