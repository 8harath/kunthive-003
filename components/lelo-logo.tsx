import Link from "next/link"

export function LeLoLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Kunthive home">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary shadow-sm">
        <span className="text-white font-bold text-sm tracking-tight">K</span>
      </div>
      <span className="text-lg font-semibold text-foreground tracking-tight">Kunthive</span>
    </Link>
  )
}
