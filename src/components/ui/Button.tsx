import * as React from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-accent text-primary shadow hover:bg-accent-hover",
  outline: "border border-accent text-accent bg-transparent shadow-sm hover:bg-accent hover:text-primary",
  ghost: "hover:bg-primary-light hover:text-accent text-text-main",
  link: "text-accent underline-offset-4 hover:underline",
}

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-8 py-2",
  sm: "h-9 px-4 text-xs",
  lg: "h-14 px-10 text-base",
  icon: "h-11 w-11",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-accent uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
