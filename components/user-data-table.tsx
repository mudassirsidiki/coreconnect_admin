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
import { Clock, ArrowUpDown, ArrowDown } from 'lucide-react'

type SortBy = 'time' | 'total'

interface UserDataItem {
  id: number
  ptTeamMember: string
  addedBy: string
  companiesAdded: number
  contactsAdded: number
  industry: string
  region: string
  dateAdded: string
  clientName: string
}

const mockUserData: UserDataItem[] = [
  {
    id: 1,
    ptTeamMember: 'Ahmed Ali',
    addedBy: 'Mohammad Hassan',
    companiesAdded: 12,
    contactsAdded: 45,
    industry: 'Technology',
    region: 'USA',
    dateAdded: '15 Nov 2025',
    clientName: 'TechCorp Inc.',
  },
  {
    id: 2,
    ptTeamMember: 'Fatima Khan',
    addedBy: 'Ayesha Rahman',
    companiesAdded: 8,
    contactsAdded: 32,
    industry: 'Healthcare',
    region: 'Canada',
    dateAdded: '16 Nov 2025',
    clientName: 'MedHealth Solutions',
  },
  {
    id: 3,
    ptTeamMember: 'Hassan Malik',
    addedBy: 'Omar Sheikh',
    companiesAdded: 15,
    contactsAdded: 58,
    industry: 'Finance',
    region: 'USA',
    dateAdded: '17 Nov 2025',
    clientName: 'FinanceGlobal Ltd.',
  },
  {
    id: 4,
    ptTeamMember: 'Ayesha Sheikh',
    addedBy: 'Zainab Ali',
    companiesAdded: 6,
    contactsAdded: 22,
    industry: 'Retail',
    region: 'Canada',
    dateAdded: '18 Nov 2025',
    clientName: 'RetailMax Group',
  },
  {
    id: 5,
    ptTeamMember: 'Bilal Ahmed',
    addedBy: 'Usman Khan',
    companiesAdded: 10,
    contactsAdded: 38,
    industry: 'Manufacturing',
    region: 'USA',
    dateAdded: '19 Nov 2025',
    clientName: 'ManufacturePro Co.',
  },
  {
    id: 6,
    ptTeamMember: 'Zainab Raza',
    addedBy: 'Hira Malik',
    companiesAdded: 18,
    contactsAdded: 65,
    industry: 'Technology',
    region: 'Canada',
    dateAdded: '20 Nov 2025',
    clientName: 'InnovateTech Systems',
  },
  {
    id: 7,
    ptTeamMember: 'Usman Iqbal',
    addedBy: 'Tariq Ahmed',
    companiesAdded: 11,
    contactsAdded: 42,
    industry: 'Energy',
    region: 'USA',
    dateAdded: '21 Nov 2025',
    clientName: 'EnergySolutions Corp.',
  },
  {
    id: 8,
    ptTeamMember: 'Sana Mirza',
    addedBy: 'Fatima Hussain',
    companiesAdded: 13,
    contactsAdded: 48,
    industry: 'Education',
    region: 'Canada',
    dateAdded: '22 Nov 2025',
    clientName: 'EduTech Academy',
  },
  {
    id: 9,
    ptTeamMember: 'Omar Butt',
    addedBy: 'Hassan Raza',
    companiesAdded: 9,
    contactsAdded: 38,
    industry: 'Real Estate',
    region: 'USA',
    dateAdded: '23 Nov 2025',
    clientName: 'PropertyDevelopers LLC',
  },
  {
    id: 10,
    ptTeamMember: 'Hira Abbas',
    addedBy: 'Ayesha Iqbal',
    companiesAdded: 16,
    contactsAdded: 60,
    industry: 'Telecommunications',
    region: 'Canada',
    dateAdded: '24 Nov 2025',
    clientName: 'TelecomGlobal Inc.',
  },
  {
    id: 11,
    ptTeamMember: 'Tariq Hussain',
    addedBy: 'Mohammad Ali',
    companiesAdded: 9,
    contactsAdded: 35,
    industry: 'Transportation',
    region: 'USA',
    dateAdded: '25 Nov 2025',
    clientName: 'TransportLogistics Ltd.',
  },
]

export function UserDataTable() {
  const [sortBy, setSortBy] = useState<SortBy>('time')

  // Sort users based on selected sort option
  const sortedUsers = [...mockUserData].sort((a, b) => {
    if (sortBy === 'time') {
      // Sort by date added in ascending order (oldest first)
      return a.dateAdded.localeCompare(b.dateAdded)
    } else {
      // Sort by total (companies + contacts) in descending order (highest first)
      const totalA = a.companiesAdded + a.contactsAdded
      const totalB = b.companiesAdded + b.contactsAdded
      return totalB - totalA // Descending order (highest to lowest)
    }
  })

  const handleSortToggle = () => {
    setSortBy(sortBy === 'time' ? 'total' : 'time')
  }

  return (
    <Card className="border-border h-full flex flex-col w-full">
      <div className="p-6 flex flex-col flex-1 min-h-0">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground">User Data Activity</h3>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-auto [&_div[data-slot='table-container']]:overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-foreground font-semibold">PT Team Member</TableHead>
                <TableHead className="text-foreground font-semibold">Added By (Lead)</TableHead>
                <TableHead className="text-foreground font-semibold text-center">
                  Companies Added
                </TableHead>
                <TableHead className="text-foreground font-semibold text-center">
                  Contacts Added
                </TableHead>
                <TableHead className="text-foreground font-semibold">Industry</TableHead>
                <TableHead className="text-foreground font-semibold">Region</TableHead>
                <TableHead className="text-foreground font-semibold">
                  <button
                    onClick={handleSortToggle}
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                    <Clock className="w-4 h-4" />
                    Date Added
                    {sortBy === 'time' ? (
                      <ArrowDown className="w-4 h-4" />
                    ) : (
                      <ArrowUpDown className="w-4 h-4 opacity-50" />
                    )}
                  </button>
                </TableHead>
                <TableHead className="text-foreground font-semibold">Client Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedUsers.map((user) => {
                return (
                  <TableRow key={user.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium text-foreground">
                      {user.ptTeamMember}
                    </TableCell>
                    <TableCell className="text-foreground">{user.addedBy}</TableCell>
                    <TableCell className="text-center text-foreground">
                      {user.companiesAdded}
                    </TableCell>
                    <TableCell className="text-center text-foreground">
                      {user.contactsAdded}
                    </TableCell>
                    <TableCell className="text-foreground">{user.industry}</TableCell>
                    <TableCell className="text-foreground">{user.region}</TableCell>
                    <TableCell className="text-foreground">{user.dateAdded}</TableCell>
                    <TableCell className="text-foreground">{user.clientName}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  )
}
