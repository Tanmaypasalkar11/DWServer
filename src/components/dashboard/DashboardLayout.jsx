import { useEffect, useRef, useState } from 'react'
import { Search } from 'lucide-react'

import Sidebar from '@/components/dashboard/Sidebar'
import DashboardLogo from '@/components/dashboard/DashboardLogo'

function UserAvatar() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e9edf7] bg-[linear-gradient(135deg,#f5c97f_0%,#d88b62_100%)] text-xs font-bold text-white shadow-[0_0.5rem_1.125rem_rgba(216,139,98,0.18)] transition hover:brightness-95">
      T
    </div>
  )
}

export default function DashboardLayout({
  toolbar,
  children,
  pathname,
  onNavigate,
}) {
  const [searchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    if (!searchOpen) {
      return undefined
    }

    const handleClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [searchOpen])

  return (
    <div className="dashboard-stage min-h-screen px-0 py-0">
      <div className="flex w-full flex-col">
        <div className="dashboard-shell flex h-[100dvh] w-screen flex-col overflow-hidden bg-white">
          <header className="relative z-[1] flex items-center justify-between border-b border-[#edf1f8] px-4 py-4 sm:px-6 lg:px-5">
            <DashboardLogo />

            <div className="flex items-center gap-3">
              <div ref={searchRef} className="relative h-9 w-9">
                <button
                  type="button"
                  onClick={() => setSearchOpen((value) => !value)}
                  className={`absolute right-0 flex h-9 items-center rounded-full border border-[#d8deeb] bg-white text-[#454a57] shadow-[0_0.0625rem_0.125rem_rgba(16,24,40,0.06)] transition-[width,background-color,color] hover:bg-black/10 hover:text-[#2d61f4] hover:w-[14.625rem] hover:justify-start hover:px-[0.75rem] ${
                    searchOpen
                      ? 'w-[14.625rem] justify-start px-[0.75rem]'
                      : 'w-9 justify-center'
                  }`}
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </button>
                {searchOpen ? (
                  <div className="absolute right-0 top-[2.875rem] z-10 w-[14.625rem] rounded-[0.75rem] border border-[#e5e7eb] bg-white p-3 shadow-[0_0.5rem_1.25rem_rgba(16,24,40,0.12)]">
                    <input
                      type="text"
                      placeholder="Search..."
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          setSearchOpen(false)
                        }
                      }}
                      className="h-[2.5rem] w-full rounded-[0.5rem] border border-[#D0D5DD] bg-white px-[0.75rem] py-[0.5rem] text-[0.875rem] font-medium text-[#344054] shadow-[0_0.0625rem_0.125rem_rgba(16,24,40,0.05)] placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2970FF]/25"
                    />
                  </div>
                ) : null}
              </div>
              <UserAvatar />
            </div>
          </header>

          <div className="relative z-[1] flex flex-1 gap-0 px-3 pb-3 pt-0 sm:px-4 sm:pb-4 lg:px-6 lg:pb-0">
            <div className="lg:w-[6.125rem] lg:pl-[1.125rem]">
              <Sidebar pathname={pathname} onNavigate={onNavigate} />
            </div>

            <div className="dashboard-panel flex h-full min-w-0 flex-1 flex-col overflow-hidden rounded-[1.3125rem] bg-white lg:mt-0">
              {toolbar ? (
                <div className="px-6 pb-5 pt-5 lg:px-10 lg:pb-5 lg:pt-5">
                  {toolbar}
                  <div className="mt-5 h-px bg-[#eef1f5]" />
                </div>
              ) : null}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


