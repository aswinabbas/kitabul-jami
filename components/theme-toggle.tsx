"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
  isDarkMode: boolean
  onToggle: () => void
  className?: string
}

export function ThemeToggle({ isDarkMode, onToggle, className = "" }: ThemeToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`${isDarkMode ? "text-white hover:bg-white/10" : "text-gray-600 hover:bg-gray-100"} ${className}`}
      onClick={onToggle}
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
