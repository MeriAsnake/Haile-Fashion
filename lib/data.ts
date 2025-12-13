export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'women' | 'men' | 'accessories'
  images: string[]
  sizes?: string[]
  colors?: string[]
  featured?: boolean
  newArrival?: boolean
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Silk Blend Midi Dress',
    description: 'A luxurious silk blend midi dress featuring a flattering wrap silhouette and delicate floral print. Perfect for garden parties or evening events.',
    price: 245,
    category: 'women',
    images: [
      '/s2.jpg',
      '/s2.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'yellow', 'Black'],
    featured: true,
    newArrival: true
  },
  {
    id: '2',
    name: 'Structured Wool Blazer',
    description: 'Tailored from premium Italian wool, this structured blazer offers a sharp silhouette for the modern professional. Features peak lapels and double-breasted closure.',
    price: 350,
    category: 'women',
    images: [
      '/t1.jpg',
      '/t1.jpg'
    ],
    sizes: ['34', '36', '38', '40', '42'],
    colors: ['Camel', 'Navy', 'Black'],
    featured: true
  },
  {
    id: '3',
    name: 'Cashmere Crewneck Sweater',
    description: 'Crafted from 100% Grade-A cashmere, this crewneck sweater provides unmatched softness and warmth. A timeless essential for any wardrobe.',
    price: 180,
    category: 'men',
    images: [
      '/t3.jpg',
      '/t4.jpg'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey', 'Navy', 'Burgundy'],
    newArrival: true
  },
  {
    id: '4',
    name: 'Slim Fit Chino Trousers',
    description: 'Versatile slim-fit chinos made from stretch cotton twill. Designed for comfort and style, suitable for both casual and smart-casual occasions.',
    price: 120,
    category: 'men',
    images: [
      '/c1.jpg',
      '/c1.jpg'
    ],
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Beige', 'Olive', 'Navy'],
    featured: true
  },
  {
    id: '5',
    name: 'Leather Crossbody Bag',
    description: 'Minimalist crossbody bag handcrafted from full-grain leather. Features an adjustable strap and gold-tone hardware.',
    price: 295,
    category: 'accessories',
    images: [
      '/leather-crossbody-bag-fashion.jpg',
      '/leather-crossbody-bag-detail.jpg'
    ],
    colors: ['Tan', 'Black', 'Cream'],
    featured: true,
    newArrival: true
  },
  {
    id: '6',
    name: 'Classic Aviator Sunglasses',
    description: 'Timeless aviator sunglasses with gold frames and polarized lenses. 100% UV protection.',
    price: 150,
    category: 'accessories',
    images: [
      '/aviator-sunglasses-fashion.jpg',
      '/aviator-sunglasses-detail.jpg'
    ],
    colors: ['Gold/Green', 'Silver/Grey'],
    newArrival: true
  },
  {
    id: '7',
    name: 'Linen Wide-Leg Trousers',
    description: 'Breezy linen trousers with a high waist and wide leg. The perfect summer staple for effortless elegance.',
    price: 165,
    category: 'women',
    images: [
      '/linen-wide-leg-trousers-fashion.jpg',
      '/linen-wide-leg-trousers-detail.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Natural', 'Black']
  },
  {
    id: '8',
    name: 'Oxford Cotton Shirt',
    description: 'A crisp oxford shirt tailored for a modern fit. Features a button-down collar and signature embroidery.',
    price: 95,
    category: 'men',
    images: [
      '/men-oxford-shirt-fashion.jpg',
      '/placeholder.svg?height=800&width=600'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Blue', 'Pink']
  }
]
