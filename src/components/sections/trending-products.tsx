'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, ExternalLink, Copy, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice: number
  discount: number
  image: string
  category: string
  affiliate_commission: number
  trending_score: number
}

export function TrendingProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call for trending products
    const fetchTrendingProducts = async () => {
      setLoading(true)
      // Mock data - in real app this would come from your database
      const mockProducts: Product[] = [
        {
          id: '1',
          name: 'Oversized Denim Jacket',
          brand: 'UrbanStyle',
          price: 89.99,
          originalPrice: 129.99,
          discount: 31,
          image: 'https://placehold.co/400x500?text=Trendy+oversized+denim+jacket+street+style+fashion',
          category: 'Outerwear',
          affiliate_commission: 12.5,
          trending_score: 95
        },
        {
          id: '2',
          name: 'Flowy Maxi Dress',
          brand: 'BohemianChic',
          price: 75.50,
          originalPrice: 95.00,
          discount: 21,
          image: 'https://placehold.co/400x500?text=Beautiful+flowy+maxi+dress+bohemian+summer+style',
          category: 'Dresses',
          affiliate_commission: 15.0,
          trending_score: 92
        },
        {
          id: '3',
          name: 'Chunky Knit Sweater',
          brand: 'CozyWear',
          price: 65.00,
          originalPrice: 85.00,
          discount: 24,
          image: 'https://placehold.co/400x500?text=Cozy+chunky+knit+sweater+autumn+winter+fashion',
          category: 'Knitwear',
          affiliate_commission: 10.0,
          trending_score: 88
        },
        {
          id: '4',
          name: 'High-Waisted Jeans',
          brand: 'DenimCo',
          price: 95.00,
          originalPrice: 120.00,
          discount: 21,
          image: 'https://placehold.co/400x500?text=Trendy+high+waisted+jeans+modern+denim+fashion',
          category: 'Bottoms',
          affiliate_commission: 18.0,
          trending_score: 90
        },
        {
          id: '5',
          name: 'Cropped Blazer',
          brand: 'Professional',
          price: 110.00,
          originalPrice: 140.00,
          discount: 21,
          image: 'https://placehold.co/400x500?text=Stylish+cropped+blazer+professional+business+fashion',
          category: 'Blazers',
          affiliate_commission: 20.0,
          trending_score: 87
        },
        {
          id: '6',
          name: 'Floral Print Blouse',
          brand: 'FloralFashion',
          price: 45.99,
          originalPrice: 59.99,
          discount: 23,
          image: 'https://placehold.co/400x500?text=Elegant+floral+print+blouse+spring+feminine+fashion',
          category: 'Tops',
          affiliate_commission: 8.5,
          trending_score: 85
        }
      ]
      
      // Sort by trending score
      mockProducts.sort((a, b) => b.trending_score - a.trending_score)
      setProducts(mockProducts)
      setLoading(false)
    }

    fetchTrendingProducts()
  }, [])

  const generateAffiliateLink = (productId: string) => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    return `${baseUrl}/affiliate/${productId}?ref=user123`
  }

  const copyAffiliateLink = (productId: string) => {
    const link = generateAffiliateLink(productId)
    navigator.clipboard.writeText(link)
    // You would typically show a toast notification here
  }

  if (loading) {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Loading Trending Products...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden animate-pulse">
                  <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-700"></div>
                  <CardContent className="p-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            <TrendingUp className="mr-2 h-4 w-4" />
            Hot Right Now
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Trending Products
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the hottest fashion items that are flying off the shelves. 
            High conversion rates and generous commissions await!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 dark:bg-gray-800">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} by ${product.brand} - trending fashion item`}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Discount Badge */}
                {product.discount > 0 && (
                  <Badge className="absolute top-3 left-3 bg-red-500 text-white border-0">
                    -{product.discount}%
                  </Badge>
                )}
                
                {/* Trending Badge */}
                <Badge className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                  🔥 Trending
                </Badge>

                {/* Action Buttons */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => copyAffiliateLink(product.id)}
                      className="bg-white/90 text-black hover:bg-white"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <Badge variant="outline" className="ml-2 text-xs text-green-600 border-green-600">
                    {product.affiliate_commission}% commission
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-lg mb-1 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  by {product.brand}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-purple-600">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Promote
                  </Button>
                </div>
                
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  Earn up to ${(product.price * product.affiliate_commission / 100).toFixed(2)} per sale
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Link href="/products" className="flex items-center">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}