import Image from "next/image"
import Link from "next/link"

export function LeLoLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      <Image
        src="/Logo/android-chrome-192x192.png"
        alt="Kunthive Logo"
        width={40}
        height={40}
        className="w-10 h-10"
      />
      <span className="text-xl font-bold text-foreground">Kunthive</span>
    </Link>
  )
}
