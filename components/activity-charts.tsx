'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'

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

// PT Team Members Data - Aggregated from user data
const ptTeamMembersData = [
  { name: 'Zainab Raza', companies: 18, contacts: 65 },
  { name: 'Hira Abbas', companies: 16, contacts: 60 },
  { name: 'Hassan Malik', companies: 15, contacts: 58 },
  { name: 'Sana Mirza', companies: 13, contacts: 48 },
  { name: 'Ahmed Ali', companies: 12, contacts: 45 },
  { name: 'Usman Iqbal', companies: 11, contacts: 42 },
  { name: 'Bilal Ahmed', companies: 10, contacts: 38 },
  { name: 'Fatima Khan', companies: 8, contacts: 32 },
  { name: 'Omar Butt', companies: 9, contacts: 38 },
  { name: 'Tariq Hussain', companies: 9, contacts: 35 },
  { name: 'Ayesha Sheikh', companies: 6, contacts: 22 },
  { name: 'Mohammad Ali', companies: 14, contacts: 52 },
  { name: 'Ayesha Rahman', companies: 12, contacts: 48 },
  { name: 'Omar Sheikh', companies: 11, contacts: 44 },
  { name: 'Zainab Ali', companies: 10, contacts: 40 },
  { name: 'Usman Khan', companies: 13, contacts: 50 },
  { name: 'Hira Malik', companies: 15, contacts: 55 },
  { name: 'Tariq Ahmed', companies: 9, contacts: 36 },
  { name: 'Fatima Hussain', companies: 11, contacts: 42 },
  { name: 'Hassan Raza', companies: 8, contacts: 30 },
  { name: 'Ayesha Iqbal', companies: 12, contacts: 46 },
  { name: 'Mohammad Hassan', companies: 16, contacts: 58 },
]

type SortField = 'companies' | 'contacts' | null
type SortDirection = 'asc' | 'desc' | null

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

      {/* PT Team Members Table */}
      <PTTeamMembersTable />
    </div>
  )
}

function PTTeamMembersTable() {
  const [sortField, setSortField] = useState<SortField>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)

  const handleSort = (field: 'companies' | 'contacts') => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      // New field, start with descending
      setSortField(field)
      setSortDirection('desc')
    }
  }

  // Sort the data
  const sortedData = [...ptTeamMembersData].sort((a, b) => {
    if (!sortField || !sortDirection) return 0

    const aValue = a[sortField]
    const bValue = b[sortField]

    if (sortDirection === 'asc') {
      return aValue - bValue
    } else {
      return bValue - aValue
    }
  })

  const getSortIcon = (field: 'companies' | 'contacts') => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-4 h-4 opacity-50" />
    }
    return sortDirection === 'asc' ? (
      <ArrowUp className="w-4 h-4" />
    ) : (
      <ArrowDown className="w-4 h-4" />
    )
  }

  return (
    <Card className="border-border p-6 w-full flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">PT Team Members</h3>
        <p className="text-xs text-muted-foreground">
          All team members with their companies and contacts added
        </p>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden max-h-[400px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-foreground font-semibold">PT Team Member</TableHead>
              <TableHead className="text-foreground font-semibold text-center">
                <button
                  onClick={() => handleSort('companies')}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity mx-auto"
                >
                  Companies Added
                  {getSortIcon('companies')}
                </button>
              </TableHead>
              <TableHead className="text-foreground font-semibold text-center">
                <button
                  onClick={() => handleSort('contacts')}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity mx-auto"
                >
                  Contacts Added
                  {getSortIcon('contacts')}
                </button>
              </TableHead>
              <TableHead className="text-foreground font-semibold text-center">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((member, index) => (
              <TableRow key={index} className="hover:bg-muted/50">
                <TableCell className="font-medium text-foreground">{member.name}</TableCell>
                <TableCell className="text-center text-foreground">{member.companies}</TableCell>
                <TableCell className="text-center text-foreground">{member.contacts}</TableCell>
                <TableCell className="text-center text-foreground font-semibold">
                  {member.companies + member.contacts}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
