import Link from "next/link"

export function LeLoLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
        <span className="text-white font-bold text-sm tracking-tight">K</span>
      </div>
      <span className="text-lg font-semibold text-foreground tracking-tight">Kunthive</span>
    </Link>
  )
}
