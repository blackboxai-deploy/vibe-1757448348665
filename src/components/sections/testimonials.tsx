'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fashion Influencer',
    avatar: 'https://placehold.co/100x100?text=Sarah+fashion+influencer+professional+headshot',
    content: 'Sunstart Fashion changed my life! I went from struggling to make $100 a month to earning over $5,000 monthly. The platform is incredibly user-friendly and the support team is amazing.',
    earnings: '$5,200',
    period: 'Last Month',
    rating: 5,
    specialty: 'Street Style'
  },
  {
    name: 'Marcus Chen',
    role: 'Style Blogger',
    avatar: 'https://placehold.co/100x100?text=Marcus+style+blogger+creative+professional+portrait',
    content: 'The analytics dashboard is phenomenal. I can track every click, conversion, and commission in real-time. It helped me optimize my content and triple my earnings in just 3 months.',
    earnings: '$3,800',
    period: 'Last Month',
    rating: 5,
    specialty: 'Luxury Fashion'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Fashion Enthusiast',
    avatar: 'https://placehold.co/100x100?text=Emma+fashion+enthusiast+trendy+lifestyle+photo',
    content: 'I love how easy it is to generate affiliate links and share them with my community. The commission rates are the best I\'ve found, and payments are always on time.',
    earnings: '$2,950',
    period: 'Last Month',
    rating: 5,
    specialty: 'Bohemian Style'
  },
  {
    name: 'David Kim',
    role: 'Content Creator',
    avatar: 'https://placehold.co/100x100?text=David+content+creator+modern+social+media+portrait',
    content: 'The community aspect is fantastic. I\'ve learned so much from other successful affiliates and the trending products feature helps me stay ahead of fashion trends.',
    earnings: '$4,100',
    period: 'Last Month',
    rating: 5,
    specialty: 'Streetwear'
  },
  {
    name: 'Lisa Thompson',
    role: 'Fashion Consultant',
    avatar: 'https://placehold.co/100x100?text=Lisa+fashion+consultant+elegant+professional+photo',
    content: 'Sunstart Fashion provides everything I need to run my affiliate business effectively. From product discovery to payment processing, it\'s all seamlessly integrated.',
    earnings: '$6,750',
    period: 'Last Month',
    rating: 5,
    specialty: 'Professional Wear'
  },
  {
    name: 'Alex Rivera',
    role: 'Social Media Manager',
    avatar: 'https://placehold.co/100x100?text=Alex+social+media+manager+creative+workspace+portrait',
    content: 'The mobile app is incredible. I can manage my affiliate links, track earnings, and engage with the community all from my phone. Perfect for content creators on the go.',
    earnings: '$3,200',
    period: 'Last Month',
    rating: 5,
    specialty: 'Casual Wear'
  }
]

export function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      <div className="container px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            Success Stories
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What Our Affiliates Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Real stories from real people who have transformed their passion for fashion 
            into a thriving income stream with Sunstart Fashion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} - ${testimonial.role}`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gradient-to-r from-purple-500 to-pink-500"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {testimonial.specialty}
                    </Badge>
                  </div>
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute top-0 left-0 w-6 h-6 text-purple-200 dark:text-purple-700 -translate-x-1 -translate-y-1" />
                  <p className="text-gray-700 dark:text-gray-300 pl-6 italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      {testimonial.earnings}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.period}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                4.9/5
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium mb-1">
                Average Rating
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Based on 10,000+ reviews
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                $4,200
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium mb-1">
                Average Monthly Earnings
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                For active affiliates
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                92%
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium mb-1">
                Would Recommend
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                To friends & family
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}