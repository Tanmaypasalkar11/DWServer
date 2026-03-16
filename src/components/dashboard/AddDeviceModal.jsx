const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="#757578"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function Field({ label, children }) {
  return (
    <div className="flex w-full flex-col gap-[0.375rem] self-stretch">
      <label className="font-['Poppins'] text-[0.875rem] font-normal leading-[1.25rem] text-[#344054]">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function AddDeviceModal({ open, onClose, onConfirm }) {
  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-6 backdrop-blur-[0.125rem]"
      onClick={onClose}
    >
      <div
        className="flex min-h-[41.625rem] w-[32.125rem] max-w-full flex-col items-center gap-[2rem] rounded-[1.25rem] bg-white p-[3.125rem] shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)] backdrop-blur-[0.4063rem]"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="w-full self-stretch font-['Poppins'] text-[1.25rem] font-semibold leading-[1.875rem] text-[#101828]">
          Add Device Details
        </h2>

        <div className="flex w-full max-w-[25.875rem] flex-col gap-5 self-stretch">
          <Field label="Device Name">
            <input
              type="text"
              placeholder="Enter Device Name"
              className="h-[3.4375rem] w-full rounded-[0.5rem] border border-[#D0D5DD] bg-white px-[0.875rem] py-[0.625rem] font-['Inter'] text-[1rem] font-normal leading-[1.5rem] text-[#344054] shadow-[0_0.0625rem_0.125rem_rgba(16,24,40,0.05)] transition-colors hover:bg-black/10 placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2970FF]/25"
            />
          </Field>

          <Field label="Group">
            <button
              type="button"
              className="flex h-[3.4375rem] w-full items-center justify-between rounded-[0.5rem] border border-[#D0D5DD] bg-white px-[0.875rem] py-[0.625rem] font-['Inter'] text-[1rem] font-normal leading-[1.5rem] text-[#667085] shadow-[0_0.0625rem_0.125rem_rgba(16,24,40,0.05)] transition-colors hover:bg-black/10"
            >
              <span>Select Group</span>
              <ChevronDownIcon />
            </button>
          </Field>

          <Field label="Status">
            <button
              type="button"
              className="flex h-[3.4375rem] w-full items-center justify-between rounded-[0.5rem] border border-[#D0D5DD] bg-white px-[0.875rem] py-[0.625rem] font-['Inter'] text-[1rem] font-normal leading-[1.5rem] text-[#667085] shadow-[0_0.0625rem_0.125rem_rgba(16,24,40,0.05)] transition-colors hover:bg-black/10"
            >
              <span>Select Status</span>
              <ChevronDownIcon />
            </button>
          </Field>

          <Field label="Description">
            <input
              type="text"
              placeholder="Enter Description"
              className="h-[3.4375rem] w-full rounded-[0.5rem] border border-[#D0D5DD] bg-white px-[0.875rem] py-[0.625rem] font-['Inter'] text-[1rem] font-normal leading-[1.5rem] text-[#344054] shadow-[0_0.0625rem_0.125rem_rgba(16,24,40,0.05)] transition-colors hover:bg-black/10 placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2970FF]/25"
            />
          </Field>
        </div>

        <div className="mt-[2.75rem] flex w-full items-start justify-start gap-[4.75rem] self-stretch">
          <button
            type="button"
            onClick={onClose}
            className="flex h-[2.75rem] w-[10.5625rem] items-center justify-center gap-[0.375rem] rounded-[6.25rem] border border-[#33363F] bg-white px-[1rem] py-[0.625rem] font-['Inter'] text-[1rem] font-semibold leading-[1.5rem] text-[#33363F] shadow-[0_0.0625rem_0.125rem_rgba(16,24,40,0.05)]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex h-[2.75rem] w-[10.5625rem] items-center justify-center gap-[0.375rem] rounded-[6.25rem] border border-[#2970FF] bg-[#2970FF] px-[1rem] py-[0.625rem] font-['Inter'] text-[1rem] font-semibold leading-[1.5rem] text-white shadow-[0_0.0625rem_0.125rem_rgba(16,24,40,0.05)] transition-colors hover:bg-[#193D9E]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}


