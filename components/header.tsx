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
                  Women
                </Link>
                <Link href="/shop/men" className="text-lg font-medium hover:text-accent transition-colors">
                  Men
                </Link>
                <Link href="/shop/accessories" className="text-lg font-medium hover:text-accent transition-colors">
                  Accessories
                </Link>
                <Link href="/collections" className="text-lg font-medium hover:text-accent transition-colors">
                  Collections
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-accent transition-colors">
                  About
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
              Women
            </Link>
            <Link href="/shop/men" className="text-sm font-medium hover:text-accent transition-colors">
              Men
            </Link>
            <Link href="/shop/accessories" className="text-sm font-medium hover:text-accent transition-colors">
              Accessories
            </Link>
            <Link href="/collections" className="text-sm font-medium hover:text-accent transition-colors">
              Collections
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
                <span className="sr-only">Shopping cart</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
