"use client"

import { ChevronRight, Heart, Book, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { OnlineStatus } from "./online-status"
import hadits from "@/data/hadits.json"

const hadithData = hadits;
const lengthAdab = hadithData.filter(r => r.bab === "1").length;
const lengthSilah = hadithData.filter(r => r.bab === "2").length;
const lengthZuhud = hadithData.filter(r => r.bab === "3").length;
const lengthAkhlak = hadithData.filter(r => r.bab === "4").length;
const lengthDoa = hadithData.filter(r => r.bab === "5").length;

const categories = [
  { name: "Adab", count: lengthAdab, color: "bg-emerald-500", icon: Heart },
  { name: "Silaturahim dan Kebaikan", count: lengthSilah, color: "bg-blue-500", icon: Book },
  { name: "Zuhud dan Wara", count: lengthZuhud, color: "bg-purple-500", icon: Star },
  { name: "Peringatan Terhadap Akhlak-Akhlak Buruk", count: lengthAkhlak, color: "bg-amber-500", icon: Book },
  { name: "Dzikir dan Doa", count: lengthDoa, color: "bg-rose-500", icon: Heart },
]

interface CategoryListProps {
  isDarkMode: boolean
  isOnline: boolean
  isOfflineReady: boolean
  onCategoryClick: (categoryName: string) => void
}

export function CategoryList({ isDarkMode, isOnline, isOfflineReady, onCategoryClick }: CategoryListProps) {
  return (
    <div
      id="categories-section"
      className={`relative z-10 ${isDarkMode ? "bg-gradient-to-br from-black via-gray-900 to-black" : "bg-white"
        } rounded-t-3xl -mt-36`}
    >
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Kategori</h2>
            <OnlineStatus
              isOnline={isOnline}
              isOfflineReady={isOfflineReady}
              showOfflineReady={true}
              isDarkMode={isDarkMode}
            />
          </div>
          <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>
            Pilih kategori hadis
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 pb-20">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.name}
                className={`cursor-pointer transition-all duration-200 active:scale-95 ${isDarkMode
                  ? "backdrop-blur-sm border-0 bg-white/5 hover:bg-white/8"
                  : "bg-white border-[.5px] border-gray-200 hover:bg-gray-50"
                  }`}
                onClick={() => onCategoryClick(category.name)}
              >
                <CardContent className="flex items-center justify-between px-4 py-0">
                  <div className="flex items-center gap-3">
                    {/* <div
                      className={`w-8 h-8 rounded-xl ${category.color} flex items-center justify-center`}
                      style={{
                        backgroundImage: `url('/--category-name--icon.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <IconComponent className="h-4 w-4 text-white" />
                    </div> */}
                    <div>
                      <h3 className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>{category.name}</h3>
                      <p className={`text-xs ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>
                        {category.count} hadis tersedia
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`h-4 w-4 ${isDarkMode ? "text-slate-400" : "text-gray-400"}`} />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
