import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/data'
import { notFound } from 'next/navigation'

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const category = (await params).category
  
  // Validate category
  if (!['women', 'men', 'accessories'].includes(category)) {
    notFound()
  }

  const categoryProducts = products.filter(p => p.category === category)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold capitalize tracking-tight sm:text-5xl">{category}</h1>
        <p className="mt-4 text-muted-foreground">
          Explore our latest collection of {category}'s fashion.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {categoryProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-muted-foreground">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}
