import { useEffect, useRef, useState } from 'react'

function DeviceGlyph() {
  return (
    <div className="flex h-[2.0625rem] w-[2.0625rem] items-center justify-center rounded-[0.4375rem] bg-[#f4f7fe] p-[0.5rem_0.5625rem_0.4375rem_0.625rem]">
      <img
        src="/respberry.png"
        alt=""
        className="h-[1.125rem] w-[0.875rem] object-contain"
        aria-hidden="true"
      />
    </div>
  )
}

function MarkerPinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z"
        fill="#D6DAE5"
      />
      <path
        d="M9 16.5C12 13.5 15 10.8137 15 7.5C15 4.18629 12.3137 1.5 9 1.5C5.68629 1.5 3 4.18629 3 7.5C3 10.8137 6 13.5 9 16.5Z"
        fill="#D6DAE5"
      />
      <path
        d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z"
        stroke="black"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16.5C12 13.5 15 10.8137 15 7.5C15 4.18629 12.3137 1.5 9 1.5C5.68629 1.5 3 4.18629 3 7.5C3 10.8137 6 13.5 9 16.5Z"
        stroke="black"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" fill="#7E869E" fillOpacity="0.25" />
      <path
        d="M12 7V11.75C12 11.8881 12.1119 12 12.25 12H15"
        stroke="#222222"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ContextMenu({ onClose }) {
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  const items = [
    { icon: '/edit-03.svg', label: 'Edit' },
    { icon: '/eye-off.svg', label: 'Disable' },
    { icon: '/trash-01.svg', label: 'Delete' },
    { icon: '/share-06.svg', label: 'New Share' },
  ]

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-[1.875rem] z-50 w-[11.5rem] rounded-[0.5rem] border border-[rgba(234,236,240,0.5)] bg-white py-1 shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25),0_0.75rem_1.25rem_rgba(7,6,18,0.25)]"
    >
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={onClose}
          className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-[0.875rem] font-medium text-[#101728] transition-colors hover:bg-black/10"
        >
          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
            <img
              src={item.icon}
              alt=""
              className="h-4 w-4 object-contain"
              aria-hidden="true"
            />
          </span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  )
}

export default function DeviceCard({
  name,
  group,
  description,
  location,
  date,
  status,
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const statusColor = status === 'online' ? '#60FAC4' : '#FF7373'

  return (
    <article className="group flex w-full items-center justify-center rounded-[0.9375rem] border border-[rgba(217,217,217,0.5)] bg-white p-[1.75rem_1.25rem_0.75rem_1.0625rem] transition-colors hover:bg-black/10">
      <div className="flex w-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex min-w-0 items-start gap-[0.75rem]">
            <div className="flex items-center">
              <div className="relative mr-[0.125rem] h-[2.0625rem] w-[0.3125rem]">
                <span
                  className="absolute top-[0.25rem] h-[1.5rem] w-[0.3125rem] rounded-[0.1563rem]"
                  style={{ backgroundColor: statusColor }}
                />
              </div>
              <DeviceGlyph />
            </div>

            <div className="min-w-0">
              <div className="flex flex-col justify-center self-stretch">
                <h3 className="truncate font-['DM_Sans'] text-[1.375rem] font-bold leading-[2.625rem] tracking-[-0.0275rem] text-black">
                  {name}
                </h3>
              </div>
              <p className="text-[0.875rem] font-medium leading-6 tracking-[-0.0175rem] text-[#5d657d]">
                {group}
              </p>
              <p className="truncate text-[0.875rem] font-medium leading-6 tracking-[-0.0175rem] text-[#5d657d]">
                {description}
              </p>
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-[1.7103rem] w-[1.6865rem] items-center justify-center"
              aria-label="Device actions"
            >
              <img
                src="/dots-horizontal.svg"
                alt=""
                className="h-[1.7103rem] w-[1.6865rem] object-contain opacity-70"
                aria-hidden="true"
              />
            </button>
            {menuOpen ? <ContextMenu onClose={() => setMenuOpen(false)} /> : null}
          </div>
        </div>

        <div className="flex items-center self-stretch rounded-[0.25rem] bg-[#f3f6fd] pb-[0.8125rem] pl-[0.9375rem] pr-[0.875rem] pt-[0.75rem] transition-colors group-hover:bg-black/10">
          <div className="flex w-full items-center">
            <div className="flex min-w-0 flex-1 items-center gap-[0.5rem]">
              <MarkerPinIcon />
              <span className="truncate font-['DM_Sans'] text-[0.875rem] font-medium leading-[2.625rem] tracking-[-0.0175rem] text-black">
                {location}
              </span>
            </div>

            <div className="mx-[0.5rem] h-[2rem] w-px bg-[#d6dae5]" />

            <div className="flex min-w-0 flex-1 items-center gap-[0.5rem]">
              <ClockIcon />
              <span className="truncate font-['DM_Sans'] text-[0.875rem] font-medium leading-[2.625rem] tracking-[-0.0175rem] text-black">
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}


