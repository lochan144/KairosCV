import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Header() {
  return (
    <header className="border-b-2 border-primary py-4 md:py-6 mb-8 md:mb-12 sticky top-0 bg-background z-40">
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Navigation (Desktop) / Mobile Menu */}
          <div className="flex items-center gap-4 md:gap-6 flex-1">
            <Navigation />

            {/* Logo - Desktop Only, positioned after nav */}
            <Link href="/" className="hidden md:block hover:opacity-80 transition-opacity group">
              <div className="flex items-center gap-2">
                <h2 className="text-xl lg:text-2xl font-black mb-0 group-hover:translate-x-[-2px] transition-transform">
                  KairosCV
                </h2>
                {/* Beta badge inline with logo on desktop */}
                <div className="border-2 border-primary px-2 py-1 font-bold text-[10px] uppercase bg-primary text-primary-foreground">
                  BETA
                </div>
              </div>
            </Link>
          </div>

          {/* Center: Logo (Mobile Only) */}
          <Link href="/" className="md:hidden hover:opacity-80 transition-opacity group absolute left-1/2 -translate-x-1/2">
            <h2 className="text-xl font-black mb-0 group-hover:translate-x-[-2px] transition-transform">
              KairosCV
            </h2>
          </Link>

          {/* Right: Beta Badge (Mobile Only) */}
          <div className="md:hidden border-2 border-primary px-2 py-1 font-bold text-[10px] uppercase bg-primary text-primary-foreground">
            BETA
          </div>
        </div>
      </div>
    </header>
  )
}
