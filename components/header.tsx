'use client'

import Link from 'next/link'
import { ShoppingBag, Search, Menu, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Header() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/shop/women" className="text-lg font-medium hover:text-accent transition-colors">
                  Shfone & Dress
                </Link>
                <Link href="/shop/men" className="text-lg font-medium hover:text-accent transition-colors">
                  Tishrts & Crops
                </Link>
                <Link href="/shop/accessories" className="text-lg font-medium hover:text-accent transition-colors">
                  Throusers
                </Link>
                <Link href="/collections" className="text-lg font-medium hover:text-accent transition-colors">
                  Collections
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold tracking-tight">HAILE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/shop/women" className="text-sm font-medium hover:text-accent transition-colors">
              Shfon & Dress
            </Link>
            <Link href="/shop/men" className="text-sm font-medium hover:text-accent transition-colors">
              Tisherts & Crops
            </Link>
            <Link href="/shop/accessories" className="text-sm font-medium hover:text-accent transition-colors">
              Throusers
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              Contact Us
            </Link>
          </nav>

         
        </div>
      </div>
    </header>
  )
}
