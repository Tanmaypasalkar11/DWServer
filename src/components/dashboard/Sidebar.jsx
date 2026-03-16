import { cn } from '@/lib/utils'

const navItems = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    iconSrc: '/Icon.svg',
    match: (pathname) => pathname === '/dashboard',
  },
  {
    href: '/dashboard/group',
    label: 'Group',
    iconSrc: '/group_share.svg',
    match: (pathname) => pathname.startsWith('/dashboard/group'),
  },
]

export default function Sidebar({ pathname, onNavigate }) {
  return (
    <aside className="hidden w-[5rem] shrink-0 md:block">
      <nav className="flex w-[3.875rem] flex-col items-center gap-[3.75rem] pt-[1.9375rem]">
        {navItems.map((item) => {
          const isActive = item.match(pathname)

          return (
            <button
              key={item.href}
              type="button"
              onClick={() => onNavigate(item.href)}
              className="group flex w-full flex-col items-center gap-1 text-center"
            >
              <span
                className={cn(
                  'flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-[2.5rem] bg-[#f3f3f4] p-4 transition-colors group-hover:bg-black/10',
                  isActive && 'bg-[rgba(41,112,255,0.2)]'
                )}
              >
                <img
                  src={item.iconSrc}
                  alt=""
                  className="h-6 w-6 shrink-0 object-contain"
                  aria-hidden="true"
                />
              </span>

              <span
                className={cn(
                  'w-full text-center text-[0.75rem] font-medium leading-6 tracking-[-0.03em] text-[#33363f]',
                  isActive && 'font-bold text-[#2970ff]'
                )}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}


