'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full border-b border-[#2d5016]/10 bg-[#faf9f7] sticky top-0 z-50">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-[#2d5016] font-bold text-lg font-sans">
              Wihda
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-[#2d5016] hover:text-[#2d5016]/70 text-sm font-medium transition">
                About
              </Link>
              <Link href="/download" className="text-[#2d5016] hover:text-[#2d5016]/70 text-sm font-medium transition">
                Download
              </Link>
              <Link href="/simulation" className="text-[#2d5016] hover:text-[#2d5016]/70 text-sm font-medium transition">
                Demo
              </Link>
              <Link href="/contact" className="text-[#2d5016] hover:text-[#2d5016]/70 text-sm font-medium transition">
                Contact
              </Link>
            </div>
          </div>
          <Button variant="ghost" className="text-[#2d5016] hover:bg-[#2d5016]/5">
            Log in
          </Button>
        </nav>
      </div>
    </header>
  )
}
