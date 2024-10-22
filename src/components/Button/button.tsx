import { TypesButton } from '@/types/types'
import { cn } from '@/lib/cn'

export function Button({ children, className }: TypesButton) {
  return (
    <button className={cn('bg-red-500 text-white', className)}>
      {children}
    </button>
  )
}
