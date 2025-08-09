import { clsx } from 'clsx'
import { cva, type VariantProps } from 'class-variance-authority'

export const button = cva(
  'inline-flex items-center justify-center rounded-2xl border text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: { primary: 'bg-accent text-white border-transparent hover:opacity-90', outline: 'bg-white border-gray-200 text-foreground hover:bg-gray-50' },
      size: { sm: 'h-9 px-4', md: 'h-11 px-6' }
    },
    defaultVariants: { variant: 'primary', size: 'md' }
  }
)
export type ButtonProps = VariantProps<typeof button> & React.ButtonHTMLAttributes<HTMLButtonElement>
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={clsx(button({ variant, size }), className)} {...props} />
}
