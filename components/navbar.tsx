"use client"

import { ThemeToggle } from "./theme-toggle"
import { OnlineStatus } from "./online-status"

interface NavbarProps {
  isDarkMode: boolean
  onThemeToggle: () => void
  isOnline: boolean
  scrollY: number
}

export function Navbar({ isDarkMode, onThemeToggle, isOnline, scrollY }: NavbarProps) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 200 ? "translate-y-0" : "-translate-y-full"
      } ${isDarkMode ? "bg-black/90 border-white/10" : "bg-white/95 border-gray-200"} backdrop-blur-md border-b`}
    >
      <div className="container mx-auto px-4 py-3 max-w-md">
        <div className="flex items-center justify-between">
          <h1 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Kitabul Jami</h1>
          <div className="flex items-center gap-2">
            <OnlineStatus isOnline={isOnline} isDarkMode={isDarkMode} />
            <ThemeToggle isDarkMode={isDarkMode} onToggle={onThemeToggle} />
          </div>
        </div>
      </div>
    </div>
  )
}
