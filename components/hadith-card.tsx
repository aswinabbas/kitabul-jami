"use client"

import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface HadithData {
  bab: string
  judul_bab: string
  judul: string
  arab: string
  terjemahan: string
  catatan: string
}

interface HadithCardProps {
  hadith: HadithData
  index: number
  isExpanded: boolean
  isDarkMode: boolean
  onToggle: () => void
}

export function HadithCard({ hadith, index, isExpanded, isDarkMode, onToggle }: HadithCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all duration-200 ${isDarkMode
        ? "backdrop-blur-sm border-0 bg-white/5 hover:bg-white/10"
        : "bg-white border border-gray-200 hover:border-gray-300 shadow-xs hover:shadow-md"
        }`}
      onClick={onToggle}
    >
      <CardContent className="px-4 py-0">
        <div className="flex items-start justify-between mb-0">
          <h3 className={`font-medium text-balance leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            {hadith.judul}
          </h3>
        </div>

        {isExpanded && (
          <div className={`space-y-4 mt-4 pt-4 border-t ${isDarkMode ? "border-white/10" : "border-gray-200"}`}>
            {/* Arabic Text */}
            <div
              className={`font-scheherazade text-lg leading-relaxed text-right ${isDarkMode ? "text-white" : "text-gray-900"
                }`}
            >
              {hadith.arab}
            </div>

            {/* Translation */}
            <div className={`text-sm leading-relaxed ${isDarkMode ? "text-slate-300" : "text-gray-600"}`}>
              <strong className={isDarkMode ? "text-white" : "text-gray-900"}>Terjemahan:</strong>
              <br />
              {hadith.terjemahan}
            </div>

            {/* Notes */}
            <div
              className={`text-xs p-3 rounded-lg ${isDarkMode ? "text-slate-400 bg-white/5" : "text-gray-600 bg-gray-50"
                }`}
            >
              <strong className={isDarkMode ? "text-slate-300" : "text-gray-700"}>Catatan:</strong>
              <br />
              {hadith.catatan}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
