import type React from "react"
import { cn } from "@/lib/utils"

interface NeonCardProps {
  children: React.ReactNode
  className?: string
  variant?: "purple" | "blue"
}

export function NeonCard({ children, className, variant = "purple" }: NeonCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl bg-card p-6 transition-all duration-300 hover:scale-[1.02]",
        variant === "purple" && "neon-border hover:neon-glow-purple",
        variant === "blue" && "neon-border-blue hover:neon-glow-blue",
        className,
      )}
    >
      {children}
    </div>
  )
}
