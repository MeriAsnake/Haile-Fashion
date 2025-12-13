import { NextResponse } from 'next/server'
import { products } from '@/lib/data'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const featured = searchParams.get('featured')
  const newArrival = searchParams.get('newArrival')
  const query = searchParams.get('query')

  let filteredProducts = [...products]

  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category)
  }

  if (featured === 'true') {
    filteredProducts = filteredProducts.filter(p => p.featured)
  }

  if (newArrival === 'true') {
    filteredProducts = filteredProducts.filter(p => p.newArrival)
  }

  if (query) {
    const lowerQuery = query.toLowerCase()
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.description.toLowerCase().includes(lowerQuery)
    )
  }

  return NextResponse.json(filteredProducts)
}
