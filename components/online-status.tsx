"use client"

import { Wifi, WifiOff, Book } from "lucide-react"

interface OnlineStatusProps {
  isOnline: boolean
  isOfflineReady?: boolean
  showOfflineReady?: boolean
  isDarkMode: boolean
}

export function OnlineStatus({
  isOnline,
  isOfflineReady = false,
  showOfflineReady = false,
  isDarkMode,
}: OnlineStatusProps) {
  if (!isOnline && isOfflineReady && showOfflineReady) {
    return (
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
          isDarkMode ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"
        }`}
      >
        <Book className="h-3 w-3" />
        <span>Tersedia Offline</span>
      </div>
    )
  }

  return (
    <div
      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
        isOnline
          ? isDarkMode
            ? "bg-green-500/20 text-green-400"
            : "bg-green-100 text-green-600"
          : isDarkMode
            ? "bg-amber-500/20 text-amber-400"
            : "bg-amber-100 text-amber-600"
      }`}
    >
      {isOnline ? <Wifi className="h-3 w-3" /> : <WifiOff className="h-3 w-3" />}
      <span>{isOnline ? "Online" : "Offline"}</span>
    </div>
  )
}
