"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { HadithCard } from "./hadith-card"

interface HadithData {
  bab: string
  judul_bab: string
  judul: string
  arab: string
  terjemahan: string
  catatan: string
}

interface CategoryPageProps {
  selectedCategory: string
  filteredHadith: HadithData[]
  searchQuery: string
  selectedHadith: number | null
  isDarkMode: boolean
  isOnline: boolean
  onBack: () => void
  onSearchChange: (query: string) => void
  onHadithToggle: (index: number) => void
}

export function CategoryPage({
  selectedCategory,
  filteredHadith,
  searchQuery,
  selectedHadith,
  isDarkMode,
  isOnline,
  onBack,
  onSearchChange,
  onHadithToggle,
}: CategoryPageProps) {
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gradient-to-br from-black via-gray-900 to-black" : "bg-white"
        }`}
    >
      <div className="container mx-auto px-4 py-0 max-w-md pt-4">
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className={`${isDarkMode ? "text-white hover:bg-white/10" : "text-gray-600 hover:bg-gray-100"}`}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{selectedCategory}</h1>
            <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-gray-500"}`}>
              {filteredHadith.length} hadis tersedia
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              placeholder="Cari hadis..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className={`${isDarkMode
                ? "bg-white/5 border-white/10 text-white placeholder:text-slate-400"
                : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 shadow-xs"
                } w-full p-3 rounded-sm border`}
            />
          </div>
        </div>

        {/* Hadith List */}
        <div className="space-y-4 pb-20">
          {filteredHadith.map((hadith, index) => (
            <HadithCard
              key={index}
              hadith={hadith}
              index={index}
              isExpanded={selectedHadith === index}
              isDarkMode={isDarkMode}
              onToggle={() => onHadithToggle(index)}
            />
          ))}
        </div>

        <footer
          className={`fixed bottom-0 left-0 right-0 p-4 text-center text-xs ${isDarkMode ? "bg-black/80 text-slate-400" : "bg-white/95 text-gray-500"
            } backdrop-blur-sm border-t ${isDarkMode ? "border-white/10" : "border-gray-200"}`}
        >
          Projected by {" "}
          <a
            href="https://itssme.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline hover:no-underline ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Umaraya Lab
          </a>
        </footer>
      </div>
    </div>
  )
}
