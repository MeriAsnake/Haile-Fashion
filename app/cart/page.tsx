'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { products } from '@/lib/data'

// Mock cart data - in a real app this would come from a context or API
const initialCartItems = [
  {
    id: '1',
    productId: '1',
    quantity: 1,
    size: 'M',
    color: 'Cream',
    product: products[0]
  },
  {
    id: '2',
    productId: '5',
    quantity: 1,
    color: 'Tan',
    product: products[4]
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  const shipping = subtotal > 200 ? 0 : 15
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 font-serif text-3xl font-bold">Your cart is empty</h1>
        <p className="mb-8 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild size="lg">
          <Link href="/collections">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 font-serif text-3xl font-bold tracking-tight sm:text-4xl">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Cart Items */}
        <div className="lg:col-span-8">
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 border-b border-border pb-8 last:border-0">
                <div className="relative aspect-[3/4] w-24 flex-shrink-0 overflow-hidden bg-secondary sm:w-32">
                  <Image
                    src={item.product.images[0] || "/placeholder.svg"}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-medium">
                        <Link href={`/product/${item.product.id}`} className="hover:underline">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.color} {item.size && `• ${item.size}`}
                      </p>
                    </div>
                    <p className="font-medium">${item.product.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-input">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="flex h-8 w-8 items-center justify-center hover:bg-secondary"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="flex h-8 w-8 items-center justify-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="flex h-8 w-8 items-center justify-center hover:bg-secondary"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-muted-foreground underline hover:text-destructive"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="rounded-lg bg-secondary/30 p-6">
            <h2 className="mb-4 text-lg font-medium">Order Summary</h2>
            
            <div className="space-y-4 border-b border-border pb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Button className="mt-8 w-full" size="lg" asChild>
              <Link href="/checkout">
                Proceed to Checkout
              </Link>
            </Button>
            
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Shipping calculated at checkout. Free shipping on orders over $200.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
