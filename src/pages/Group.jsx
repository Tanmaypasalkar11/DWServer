import { useState } from 'react'

import AddGroupModal from '@/components/dashboard/AddGroupModal'
import DashboardLayout from '@/components/dashboard/DashboardLayout'

export default function Group({ pathname, onNavigate }) {
  const [showAddGroup, setShowAddGroup] = useState(false)
  const [openCardMenu, setOpenCardMenu] = useState(null)

  const groupCards = [
    {
      id: 1,
      title: 'Group 1',
      subtitle: 'GCU',
      description: "Iâ€™ve updated the user interface",
    },
    {
      id: 2,
      title: 'Group 2',
      subtitle: 'GCU',
      description: "Iâ€™ve updated the user interface",
    },
    {
      id: 3,
      title: 'Group 3',
      subtitle: 'GCU',
      description: "Iâ€™ve updated the user interface",
    },
    {
      id: 4,
      title: 'Group 4',
      subtitle: 'GCU',
      description: "Iâ€™ve updated the user interface",
    },
    {
      id: 5,
      title: 'Group 5',
      subtitle: 'GCU',
      description: "Iâ€™ve updated the user interface",
    },
  ]

  const menuItems = [
    { label: 'Edit', icon: '/edit-03.svg' },
    { label: 'Delete', icon: '/trash-01.svg' },
    { label: 'Agents', icon: '/star-04.svg' },
    { label: 'Contacts', icon: '/contact.svg' },
    { label: 'Share', icon: '/share-06.svg' },
  ]

  const toolbar = (
    <div className="flex w-full items-center justify-between">
      <h2 className="font-['Inter'] text-[1.125rem] font-semibold leading-[1.1876rem] text-[rgba(0,0,0,0.75)]">
        Group Details
      </h2>
      <button
        type="button"
        onClick={() => setShowAddGroup(true)}
        className="flex w-full items-center justify-center gap-[0.625rem] rounded-[1.75rem] bg-[linear-gradient(118deg,#2970FF_9.79%,#193D9E_97.55%)] px-5 py-[0.875rem] font-['Inter'] text-[1rem] font-semibold leading-[1.1876rem] text-white shadow-[0_0.875rem_1.75rem_rgba(45,97,244,0.2)] transition-[transform,filter] hover:-translate-y-0.5 hover:brightness-95 sm:w-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10.5 4.375V16.625M4.375 10.5H16.625"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-['Inter'] text-[1rem] font-semibold leading-[1.1876rem] text-white">
          Add Group
        </span>
      </button>
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
          <div className="grid grid-cols-1 gap-[0.9375rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {groupCards.map((card) => (
              <article
                key={card.id}
                className="relative flex w-full items-center justify-center rounded-[0.9375rem] border border-[rgba(217,217,217,0.5)] bg-white p-[1.75rem_1.25rem_1.5152rem_1.0625rem] transition-colors hover:bg-black/10"
              >
                <div className="flex w-full flex-col gap-[0.5rem]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-[0.5rem]">
                      <div className="flex h-[2.0625rem] w-[2.0625rem] items-center justify-center rounded-[0.4375rem] bg-[#f4f7fe] p-[0.5rem_0.5625rem_0.4375rem_0.625rem]">
                        <img
                          src="/respberry.png"
                          alt=""
                          className="h-[1.125rem] w-[0.875rem] object-contain"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex flex-col justify-center self-stretch">
                        <h3 className="truncate font-['DM_Sans'] text-[1.375rem] font-bold leading-[2.625rem] tracking-[-0.0275rem] text-black">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="text-[#667085]"
                      onClick={() =>
                        setOpenCardMenu((value) =>
                          value === card.id ? null : card.id
                        )
                      }
                      aria-label="Group actions"
                    >
                      <img
                        src="/dots-horizontal.svg"
                        alt=""
                        className="h-[1.7103rem] w-[1.6865rem] object-contain opacity-70"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <p className="font-['DM_Sans'] text-[0.875rem] font-medium leading-[1.5rem] tracking-[-0.0175rem] text-[#5d657d]">
                    {card.subtitle}
                  </p>
                  <p className="truncate font-['DM_Sans'] text-[0.875rem] font-medium leading-[1.5rem] tracking-[-0.0175rem] text-[#5d657d]">
                    {card.description}
                  </p>
                </div>

                {openCardMenu === card.id ? (
                  <div className="absolute left-[6rem] top-[2.125rem] z-10 w-[9.25rem] rounded-[0.5rem] border border-[#EAECF0] bg-white py-[0.375rem] shadow-[0_0.25rem_0.625rem_rgba(16,24,40,0.1)]">
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        className="flex w-full items-center gap-2 px-4 py-2 text-left font-['Inter'] text-[0.75rem] font-medium leading-[1.125rem] text-[#344054] hover:bg-[#F9FAFB]"
                        onClick={() => setOpenCardMenu(null)}
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                          <img
                            src={item.icon}
                            alt=""
                            className="h-4 w-4 object-contain"
                            aria-hidden="true"
                          />
                        </span>
                        {item.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </DashboardLayout>

      <AddGroupModal
        open={showAddGroup}
        onClose={() => setShowAddGroup(false)}
        onConfirm={() => setShowAddGroup(false)}
      />
    </>
  )
}


