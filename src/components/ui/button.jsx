import { cva } from 'class-variance-authority'
import { Slot } from 'radix-ui'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center rounded-lg border text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-slate-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4',
  {
    variants: {
      variant: {
        default: 'border-slate-900 bg-slate-900 text-white hover:bg-slate-800',
        outline: 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100',
        secondary: 'border-slate-200 bg-slate-200 text-slate-900 hover:bg-slate-300',
        ghost: 'border-transparent bg-transparent text-slate-900 hover:bg-slate-100',
        destructive: 'border-red-600 bg-red-600 text-white hover:bg-red-500',
        link: 'border-transparent p-0 text-slate-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 gap-2 px-4 py-2',
        xs: 'h-7 gap-1 px-2 text-xs',
        sm: 'h-9 gap-1.5 px-3 text-sm',
        lg: 'h-11 gap-2 px-5 text-sm',
        icon: 'size-8',
        'icon-xs': 'size-6',
        'icon-sm': 'size-7',
        'icon-lg': 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
