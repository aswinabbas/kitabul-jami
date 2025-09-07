"use client"

import { ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

interface HeroSectionProps {
  isDarkMode: boolean
  onThemeToggle: () => void
  onScrollToCategories: () => void
}

export function HeroSection({ isDarkMode, onThemeToggle, onScrollToCategories }: HeroSectionProps) {
  return (
    <div
      className="relative flex flex-col"
      style={{
        backgroundImage: `linear-gradient(135deg, ${isDarkMode ? "rgba(0,0,0,0.3), rgba(0,0,0,0.7)" : "rgba(255,255,255,0.3), rgba(255,255,255,0.95)"
          }), url('https://images.unsplash.com/photo-1558261537-8fcffa3479c7?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "70vh",
      }}
    >
      <div className="container mx-auto px-4 py-6 max-w-md flex-1 flex flex-col fixed">
        <div className="flex flex-col items-start pt-2">
          <div className="w-full flex justify-end mb-16">
            <ThemeToggle isDarkMode={isDarkMode} onToggle={onThemeToggle} />
          </div>

          <div className="mb-0">
            <h1 className={`text-4xl font-bold -mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Kitabul Jami</h1>
            <p className={`text-lg ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
              Al Hafidz Ibnu Hajar Al-Asqalani
            </p>
          </div>
        </div>

        {/* Hero Content - Scroll Button */}
        <div className="flex-1 flex items-center justify-center text-center space-y-8">
          {/* Attribution */}
          {/* <div className="absolute bottom-6 right-6">
            <div
              className={`px-3 py-2 rounded-lg text-xs ${isDarkMode ? "bg-white/10 text-slate-300" : "bg-white/80 text-gray-600"
                } backdrop-blur-sm`}
            >
              powered by KKI Sufyan bin Uyainah Gorontalo x{" "}
              <a
                href="https://itssme.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline hover:no-underline ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Umaraya Lab
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div >
  )
}
