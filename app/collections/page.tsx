import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/data'

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">All Collections</h1>
        <p className="mt-4 text-muted-foreground">
          Browse our complete catalog of premium fashion items.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
