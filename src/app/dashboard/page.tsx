'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Eye,
  Link2,
  Copy,
  BarChart3,
  Calendar,
  Filter,
  Download
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { Input } from '@/components/ui/input'

// Mock data for dashboard
const earningsData = [
  { date: '2024-01-01', earnings: 1200, clicks: 450, conversions: 23 },
  { date: '2024-01-02', earnings: 1850, clicks: 620, conversions: 31 },
  { date: '2024-01-03', earnings: 2100, clicks: 720, conversions: 42 },
  { date: '2024-01-04', earnings: 1950, clicks: 680, conversions: 38 },
  { date: '2024-01-05', earnings: 2400, clicks: 890, conversions: 48 },
  { date: '2024-01-06', earnings: 2850, clicks: 980, conversions: 57 },
  { date: '2024-01-07', earnings: 3200, clicks: 1120, conversions: 64 }
]

const categoryData = [
  { name: 'Dresses', value: 35, color: '#8b5cf6' },
  { name: 'Tops', value: 28, color: '#06b6d4' },
  { name: 'Bottoms', value: 20, color: '#10b981' },
  { name: 'Outerwear', value: 12, color: '#f59e0b' },
  { name: 'Accessories', value: 5, color: '#ef4444' }
]

const recentLinks = [
  {
    id: '1',
    product: 'Summer Floral Dress',
    brand: 'FloralFashion',
    clicks: 89,
    conversions: 12,
    earnings: 145.50,
    created: '2024-01-07'
  },
  {
    id: '2',
    product: 'Denim Jacket Oversized',
    brand: 'UrbanStyle',
    clicks: 156,
    conversions: 8,
    earnings: 98.40,
    created: '2024-01-06'
  },
  {
    id: '3',
    product: 'High-Waisted Jeans',
    brand: 'DenimCo',
    clicks: 203,
    conversions: 15,
    earnings: 187.20,
    created: '2024-01-05'
  }
]

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('7d')
  const [totalEarnings, setTotalEarnings] = useState(0)
  const [totalClicks, setTotalClicks] = useState(0)
  const [totalConversions, setTotalConversions] = useState(0)
  const [conversionRate, setConversionRate] = useState(0)

  useEffect(() => {
    // Calculate totals from mock data
    const totals = earningsData.reduce(
      (acc, day) => ({
        earnings: acc.earnings + day.earnings,
        clicks: acc.clicks + day.clicks,
        conversions: acc.conversions + day.conversions
      }),
      { earnings: 0, clicks: 0, conversions: 0 }
    )
    
    setTotalEarnings(totals.earnings)
    setTotalClicks(totals.clicks)
    setTotalConversions(totals.conversions)
    setConversionRate((totals.conversions / totals.clicks) * 100)
  }, [])

  const generateAffiliateLink = (productName: string) => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    const productSlug = productName.toLowerCase().replace(/\s+/g, '-')
    return `${baseUrl}/affiliate/${productSlug}?ref=user123&utm_source=dashboard`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You would show a toast notification here
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Affiliate Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Track your earnings, manage links, and optimize your performance
        </p>
      </div>

      {/* Time Range Selector */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-gray-500" />
          <span className="text-sm font-medium">Time Range:</span>
          <Tabs value={timeRange} onValueChange={setTimeRange}>
            <TabsList>
              <TabsTrigger value="24h">24h</TabsTrigger>
              <TabsTrigger value="7d">7d</TabsTrigger>
              <TabsTrigger value="30d">30d</TabsTrigger>
              <TabsTrigger value="90d">90d</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
              <DollarSign className="h-8 w-8 opacity-80" />
            </div>
            <div className="flex items-center mt-2 text-sm opacity-90">
              <TrendingUp className="h-4 w-4 mr-1" />
              +12.5% from last period
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Total Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{totalClicks.toLocaleString()}</div>
              <Eye className="h-8 w-8 opacity-80" />
            </div>
            <div className="flex items-center mt-2 text-sm opacity-90">
              <TrendingUp className="h-4 w-4 mr-1" />
              +8.3% from last period
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{totalConversions}</div>
              <Users className="h-8 w-8 opacity-80" />
            </div>
            <div className="flex items-center mt-2 text-sm opacity-90">
              <TrendingUp className="h-4 w-4 mr-1" />
              +15.2% from last period
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{conversionRate.toFixed(1)}%</div>
              <BarChart3 className="h-8 w-8 opacity-80" />
            </div>
            <div className="flex items-center mt-2 text-sm opacity-90">
              <TrendingUp className="h-4 w-4 mr-1" />
              +2.1% from last period
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Earnings Trend */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
              Earnings Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value: number, name: string) => [
                    name === 'earnings' ? `$${value}` : value,
                    name.charAt(0).toUpperCase() + name.slice(1)
                  ]}
                  labelFormatter={(date) => new Date(date).toLocaleDateString()}
                />
                <Line 
                  type="monotone" 
                  dataKey="earnings" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
              Top Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Link Generator */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Link2 className="h-5 w-5 mr-2 text-green-600" />
            Quick Link Generator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input 
              placeholder="Enter product name or URL..." 
              className="flex-1"
            />
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Generate Link
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Generate personalized affiliate links instantly with tracking parameters
          </p>
        </CardContent>
      </Card>

      {/* Recent Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Link2 className="h-5 w-5 mr-2 text-purple-600" />
              Recent Affiliate Links
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentLinks.map((link) => (
              <div key={link.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{link.product}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">by {link.brand}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant="outline" className="text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      {link.clicks} clicks
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Users className="h-3 w-3 mr-1" />
                      {link.conversions} conversions
                    </Badge>
                    <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                      <DollarSign className="h-3 w-3 mr-1" />
                      ${link.earnings}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(generateAffiliateLink(link.product))}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <BarChart3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}