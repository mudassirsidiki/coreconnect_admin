'use client'

import { Card } from '@/components/ui/card'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

// Daily Activity Trend - Companies and Contacts added over time
const dailyActivityData = [
  { date: '15 Nov', companies: 12, contacts: 45 },
  { date: '16 Nov', companies: 8, contacts: 32 },
  { date: '17 Nov', companies: 15, contacts: 58 },
  { date: '18 Nov', companies: 6, contacts: 22 },
  { date: '19 Nov', companies: 10, contacts: 38 },
  { date: '20 Nov', companies: 18, contacts: 65 },
  { date: '21 Nov', companies: 11, contacts: 42 },
  { date: '22 Nov', companies: 13, contacts: 48 },
  { date: '23 Nov', companies: 9, contacts: 38 },
  { date: '24 Nov', companies: 16, contacts: 60 },
  { date: '25 Nov', companies: 9, contacts: 35 },
]

// Industry Distribution
const industryData = [
  { name: 'Technology', value: 3, fill: '#8b5cf6' },
  { name: 'Healthcare', value: 1, fill: '#3b82f6' },
  { name: 'Finance', value: 1, fill: '#06b6d4' },
  { name: 'Retail', value: 1, fill: '#ec4899' },
  { name: 'Manufacturing', value: 1, fill: '#f59e0b' },
  { name: 'Energy', value: 1, fill: '#10b981' },
  { name: 'Education', value: 1, fill: '#ef4444' },
  { name: 'Real Estate', value: 1, fill: '#6366f1' },
  { name: 'Telecommunications', value: 1, fill: '#14b8a6' },
  { name: 'Transportation', value: 1, fill: '#f97316' },
]

// Regional Performance Comparison
const regionalData = [
  { region: 'USA', companies: 71, contacts: 280, total: 351 },
  { region: 'Canada', companies: 40, contacts: 185, total: 225 },
]

// Top PT Team Members by Total Additions
const topPerformersData = [
  { name: 'Zainab Raza', companies: 18, contacts: 65, total: 83 },
  { name: 'Hira Abbas', companies: 16, contacts: 60, total: 76 },
  { name: 'Hassan Malik', companies: 15, contacts: 58, total: 73 },
  { name: 'Sana Mirza', companies: 13, contacts: 48, total: 61 },
  { name: 'Usman Iqbal', companies: 11, contacts: 42, total: 53 },
  { name: 'Ahmed Ali', companies: 12, contacts: 45, total: 57 },
  { name: 'Bilal Ahmed', companies: 10, contacts: 38, total: 48 },
]

const COLORS = ['#8b5cf6', '#3b82f6', '#06b6d4', '#ec4899', '#f59e0b', '#10b981', '#ef4444', '#6366f1', '#14b8a6', '#f97316']

export function ActivityCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 w-full">
      {/* Daily Activity Trend */}
      <Card className="border-border p-6 w-full">
        <h3 className="text-lg font-semibold text-foreground mb-4">Daily Activity Trend</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Companies and Contacts added over the past 11 days
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyActivityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="date" 
              stroke="var(--color-muted-foreground)" 
              tick={{ fontSize: 12 }}
            />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="companies" 
              stroke="#8b5cf6" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              name="Companies Added"
            />
            <Line 
              type="monotone" 
              dataKey="contacts" 
              stroke="#3b82f6" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              name="Contacts Added"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Industry Distribution */}
      <Card className="border-border p-6 w-full">
        <h3 className="text-lg font-semibold text-foreground mb-4">Industry Distribution</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Breakdown of companies by industry sector
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={industryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {industryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      {/* Regional Performance Comparison */}
      <Card className="border-border p-6 w-full">
        <h3 className="text-lg font-semibold text-foreground mb-4">Regional Performance</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Comparison of USA vs Canada performance
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={regionalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="region" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            />
            <Legend />
            <Bar dataKey="companies" fill="#8b5cf6" radius={[8, 8, 0, 0]} name="Companies" />
            <Bar dataKey="contacts" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Contacts" />
            <Bar dataKey="total" fill="#06b6d4" radius={[8, 8, 0, 0]} name="Total" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
          {regionalData.map((item) => (
            <div key={item.region} className="flex flex-col">
              <span className="text-muted-foreground">{item.region}:</span>
              <span className="font-semibold text-foreground">
                {item.total} total ({item.companies} companies, {item.contacts} contacts)
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Performers */}
      <Card className="border-border p-6 w-full">
        <h3 className="text-lg font-semibold text-foreground mb-4">Top PT Team Members</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Highest performing team members by total additions
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topPerformersData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis type="number" stroke="var(--color-muted-foreground)" />
            <YAxis 
              dataKey="name" 
              type="category" 
              stroke="var(--color-muted-foreground)" 
              width={100}
              tick={{ fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
              formatter={(value: number, name: string) => {
                if (name === 'total') return [value, 'Total Additions']
                if (name === 'companies') return [value, 'Companies']
                if (name === 'contacts') return [value, 'Contacts']
                return [value, name]
              }}
            />
            <Legend />
            <Bar dataKey="companies" fill="#8b5cf6" radius={[0, 4, 4, 0]} name="Companies" />
            <Bar dataKey="contacts" fill="#3b82f6" radius={[0, 4, 4, 0]} name="Contacts" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
