import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export const LoadingSpinner = ({ size = "md", className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8"
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-muted border-t-primary",
        sizeClasses[size],
        className
      )}
    />
  )
}

export const LoadingCard = () => (
  <div className="bg-white/80 backdrop-blur-sm rounded-lg border shadow-lg p-6 animate-pulse">
    <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
    <div className="h-3 bg-muted rounded w-1/2 mb-2"></div>
    <div className="h-3 bg-muted rounded w-2/3"></div>
  </div>
)

export const LoadingState = ({ message = "Loading..." }: { message?: string }) => (
  <div className="flex flex-col items-center justify-center py-12">
    <LoadingSpinner size="lg" className="mb-4" />
    <p className="text-muted-foreground">{message}</p>
  </div>
)