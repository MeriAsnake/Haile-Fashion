'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { products } from '@/lib/data'
import Image from 'next/image'

export default function CheckoutPage() {
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping')
  
  // Mock cart total
const subtotal: number = 540
const shipping: number = 0
const total: number = subtotal + shipping

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment processing
    alert('Order placed successfully!')
    window.location.href = '/'
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Checkout Form */}
        <div className="lg:col-span-7">
          <div className="mb-8">
            <Link href="/cart" className="text-sm text-muted-foreground hover:text-foreground">
              ← Return to Cart
            </Link>
            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight">Checkout</h1>
          </div>

          {step === 'shipping' ? (
            <form onSubmit={handleShippingSubmit} className="space-y-8">
              <div>
                <h2 className="mb-4 text-xl font-medium">Contact Information</h2>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-xl font-medium">Shipping Address</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" required />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Main St" required />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                    <Input id="apartment" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="postalCode">Postal code</Label>
                    <Input id="postalCode" required />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Continue to Payment
              </Button>
            </form>
          ) : (
            <form onSubmit={handlePaymentSubmit} className="space-y-8">
              <div>
                <h2 className="mb-4 text-xl font-medium">Payment Method</h2>
                <RadioGroup defaultValue="card" className="space-y-4">
                  <div className="flex items-center space-x-2 rounded-lg border border-input p-4">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border border-input p-4">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex-1 cursor-pointer">PayPal</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4 rounded-lg border border-input p-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="cardNumber">Card number</Label>
                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiry">Expiry date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cardName">Name on card</Label>
                    <Input id="cardName" required />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => setStep('shipping')}
                >
                  Back
                </Button>
                <Button type="submit" size="lg" className="flex-1">
                  Pay ${total.toFixed(2)}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-5">
          <div className="rounded-lg bg-secondary/30 p-6 lg:sticky lg:top-24">
            <h2 className="mb-6 text-lg font-medium">Order Summary</h2>
            
            <div className="space-y-4 border-b border-border pb-6">
              <div className="flex gap-4">
                <div className="relative aspect-[3/4] w-16 overflow-hidden rounded bg-secondary">
                  <Image
                    src={products[0].images[0] || "/placeholder.svg"}
                    alt={products[0].name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    1
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{products[0].name}</h3>
                  <p className="text-xs text-muted-foreground">Cream / M</p>
                </div>
                <p className="text-sm font-medium">${products[0].price.toFixed(2)}</p>
              </div>
              
              <div className="flex gap-4">
                <div className="relative aspect-[3/4] w-16 overflow-hidden rounded bg-secondary">
                  <Image
                    src={products[4].images[0] || "/placeholder.svg"}
                    alt={products[4].name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    1
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{products[4].name}</h3>
                  <p className="text-xs text-muted-foreground">Tan</p>
                </div>
                <p className="text-sm font-medium">${products[4].price.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-4 text-lg font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
