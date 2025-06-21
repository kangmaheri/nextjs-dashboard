//  Perbandingan Tabs dengan Prefetch

'use client'
import { useState } from 'react'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'customers', label: 'Customers' },
  { id: 'invoices', label: 'Invoices' },
]

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 -mb-px border-b-2 font-medium ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-blue-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 'overview' && <div>📊 Ini halaman Overview</div>}
        {activeTab === 'customers' && <div>👥 Ini halaman Customers</div>}
        {activeTab === 'invoices' && <div>🧾 Ini halaman Invoices</div>}
      </div>
    </div>
  )
}
