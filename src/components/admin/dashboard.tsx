'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Users, 
  Store, 
  Package, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Settings,
  Shield,
  BarChart3
} from 'lucide-react'

// Mock data for admin dashboard
const mockStats = {
  totalUsers: 15420,
  totalVendors: 847,
  totalProducts: 23450,
  totalRevenue: 1250000,
  pendingVendors: 23,
  activeOrders: 456,
  monthlyGrowth: 12.5,
  disputeCount: 8
}

const mockRecentVendors = [
  {
    id: 1,
    name: 'TechGear Pro',
    email: 'contact@techgear.com',
    status: 'pending',
    products: 45,
    revenue: 12500,
    joinedDate: '2024-01-15'
  },
  {
    id: 2,
    name: 'Fashion Forward',
    email: 'hello@fashion.com',
    status: 'active',
    products: 89,
    revenue: 23400,
    joinedDate: '2024-01-10'
  },
  {
    id: 3,
    name: 'Home Essentials',
    email: 'info@home.com',
    status: 'pending',
    products: 23,
    revenue: 5600,
    joinedDate: '2024-01-12'
  }
]

const mockRecentOrders = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    vendor: 'TechGear Pro',
    amount: 299.99,
    status: 'processing',
    date: '2024-01-20'
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    vendor: 'Fashion Forward',
    amount: 149.50,
    status: 'shipped',
    date: '2024-01-19'
  },
  {
    id: 'ORD-003',
    customer: 'Mike Johnson',
    vendor: 'Home Essentials',
    amount: 89.99,
    status: 'delivered',
    date: '2024-01-18'
  }
]

const mockDisputes = [
  {
    id: 1,
    orderId: 'ORD-004',
    customer: 'Sarah Wilson',
    vendor: 'TechGear Pro',
    issue: 'Product not as described',
    status: 'open',
    priority: 'high'
  },
  {
    id: 2,
    orderId: 'ORD-005',
    customer: 'David Brown',
    vendor: 'Fashion Forward',
    issue: 'Late delivery',
    status: 'resolved',
    priority: 'medium'
  }
]

export default function AdminDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'delivered':
      case 'resolved':
        return 'bg-green-100 text-green-800'
      case 'pending':
      case 'processing':
        return 'bg-yellow-100 text-yellow-800'
      case 'open':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your marketplace, vendors, and monitor performance
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +{mockStats.monthlyGrowth}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vendors</CardTitle>
            <Store className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalVendors}</div>
            <p className="text-xs text-muted-foreground">
              {mockStats.pendingVendors} pending approval
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalProducts.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Across {mockStats.totalVendors} vendors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(mockStats.totalRevenue / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">
              +{mockStats.monthlyGrowth}% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common administrative tasks and shortcuts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-20 flex-col">
              <Shield className="h-6 w-6 mb-2" />
              <span>Approve Vendors</span>
              <Badge variant="secondary" className="mt-1">
                {mockStats.pendingVendors} pending
              </Badge>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <AlertTriangle className="h-6 w-6 mb-2" />
              <span>Resolve Disputes</span>
              <Badge variant="secondary" className="mt-1">
                {mockStats.disputeCount} open
              </Badge>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <BarChart3 className="h-6 w-6 mb-2" />
              <span>View Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Settings className="h-6 w-6 mb-2" />
              <span>System Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Vendors */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Vendors</CardTitle>
            <CardDescription>
              Latest vendor registrations and status updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentVendors.map((vendor) => (
                <div key={vendor.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{vendor.name}</p>
                    <p className="text-xs text-muted-foreground">{vendor.email}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>{vendor.products} products</span>
                      <span>•</span>
                      <span>${vendor.revenue.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(vendor.status)}>
                      {vendor.status === 'pending' ? (
                        <Clock className="h-3 w-3 mr-1" />
                      ) : (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      )}
                      {vendor.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Vendors
            </Button>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Latest customer orders and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{order.id}</p>
                    <p className="text-xs text-muted-foreground">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.vendor}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                    <span className="text-sm font-medium">${order.amount}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Orders
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Disputes */}
      <Card>
        <CardHeader>
          <CardTitle>Active Disputes</CardTitle>
          <CardDescription>
            Customer complaints and vendor disputes requiring attention
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockDisputes.map((dispute) => (
              <div key={dispute.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{dispute.orderId}</p>
                  <p className="text-xs text-muted-foreground">
                    {dispute.customer} vs {dispute.vendor}
                  </p>
                  <p className="text-sm">{dispute.issue}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getPriorityColor(dispute.priority)}>
                    {dispute.priority} priority
                  </Badge>
                  <Badge className={getStatusColor(dispute.status)}>
                    {dispute.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Resolve
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Disputes
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
