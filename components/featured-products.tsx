import { Product } from '@/lib/data'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

async function getFeaturedProducts() {
  // In a real app, this would be an API call
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?featured=true`)
  // return res.json()
  
  // For this demo, we'll import directly since we're in a server component
  const { products } = await import('@/lib/data')
  return products.filter(p => p.featured).slice(0, 4)
}

export async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Featured Collection</h2>
            <p className="mt-2 text-muted-foreground">Curated pieces for your wardrobe.</p>
          </div>
          <Button variant="link" asChild className="hidden sm:inline-flex">
            <Link href="/collections">View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Button variant="link" asChild>
            <Link href="/collections">View All</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
