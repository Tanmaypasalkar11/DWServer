import { cn } from '@/lib/utils'

function Input({ className, type = 'text', ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full self-stretch rounded-[0.5rem] border border-[#D0D5DD] bg-white px-[0.875rem] py-[0.625rem] font-['Inter'] text-[1rem] font-normal leading-6 text-[#344054] shadow-[0_0.0625rem_0.125rem_rgba(16,24,40,0.05)] outline-none transition-colors placeholder:truncate placeholder:font-['Inter'] placeholder:text-[1rem] placeholder:font-normal placeholder:leading-6 placeholder:text-[#667085] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-[#193D9E] focus-visible:ring-2 focus-visible:ring-[#193D9E]/15",
        className
      )}
      {...props}
    />
  )
}

export { Input }


