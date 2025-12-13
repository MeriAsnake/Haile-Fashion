import { Hero } from '@/components/hero'
import { FeaturedProducts } from '@/components/featured-products'
import { CategoryGrid } from '@/components/category-grid'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategoryGrid />
    </>
  )
}
