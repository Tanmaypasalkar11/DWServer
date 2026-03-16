import { useState } from 'react'

import AddDeviceModal from '@/components/dashboard/AddDeviceModal'
import DeviceCard from '@/components/dashboard/DeviceCard'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { devices, filterTabs } from '@/data/dashboard'
import { cn } from '@/lib/utils'

export default function Dashboard({ pathname, onNavigate }) {
  const [showAddDevice, setShowAddDevice] = useState(false)
  const [filter, setFilter] = useState('all')

  const filteredDevices = devices.filter((device) => {
    if (filter === 'available') {
      return device.status === 'online'
    }

    if (filter === 'unavailable') {
      return device.status === 'offline'
    }

    return true
  })
  const visibleDevices =
    filter === 'all' ? filteredDevices.slice(0, 6) : filteredDevices

  const toolbar = (
    <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="inline-flex w-full flex-wrap items-center rounded-[4.9486rem] border border-[#f0f0f0] bg-white p-[0.375rem] shadow-[0_0.1979rem_0.7918rem_rgba(0,0,0,0.05)] lg:w-auto">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilter(tab.id)}
            className={cn(
              'flex flex-1 items-center justify-center rounded-[1.3609rem] px-4 py-2 text-[1.125rem] font-semibold leading-[1.1876rem] transition-all duration-200 ease-in-out',
              filter === tab.id &&
                'bg-[#2970ff] text-white shadow-[0_0.1979rem_0.1979rem_rgba(0,0,0,0.15)]',
              filter !== tab.id &&
                'text-[rgba(0,0,0,0.75)] hover:bg-black/10'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-3">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-[0.625rem] border border-[#ececec] bg-white px-[1.875rem] py-[0.875rem] text-[1rem] font-semibold leading-[1.1876rem] text-[rgba(0,0,0,0.75)] transition-colors hover:bg-black/10 sm:w-auto"
        >
          <span>Group</span>
          <img
            src="/chevron-down.svg"
            alt=""
            aria-hidden="true"
            className="h-6 w-6 shrink-0 object-contain"
          />
        </button>

        <button
          type="button"
          onClick={() => setShowAddDevice(true)}
          className="flex w-full items-center justify-center gap-[0.625rem] rounded-[1.75rem] bg-[linear-gradient(118deg,#2970FF_9.79%,#193D9E_97.55%)] px-5 py-[0.875rem] font-['Inter'] text-[1rem] font-semibold leading-[1.1876rem] text-white shadow-[0_0.875rem_1.75rem_rgba(45,97,244,0.2)] transition-[transform,filter] hover:-translate-y-0.5 hover:brightness-95 sm:w-auto"
        >
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[0.7656rem] w-[0.7656rem] shrink-0"
            aria-hidden="true"
          >
            <path
              d="M7.125 1V13.25M1 7.125H13.25"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-['Inter'] text-[1rem] font-semibold leading-[1.1876rem] text-[#FFF]">
            Add Device
          </span>
        </button>
      </div>
    </div>
  )

  return (
    <>
      <DashboardLayout
        toolbar={toolbar}
        pathname={pathname}
        onNavigate={onNavigate}
      >
        <div className="px-[1.0625rem] pb-0 pt-[0.9375rem]">
          <div className="grid grid-cols-1 gap-x-[0.875rem] gap-y-[0.75rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleDevices.map((device) => (
              <DeviceCard key={device.id} {...device} />
            ))}
          </div>
        </div>
      </DashboardLayout>

      <AddDeviceModal
        open={showAddDevice}
        onClose={() => setShowAddDevice(false)}
        onConfirm={() => setShowAddDevice(false)}
      />
    </>
  )
}





