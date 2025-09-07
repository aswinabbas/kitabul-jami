"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { CategoryList } from "@/components/category-list"
import { CategoryPage } from "@/components/category-page"
import hadits from "@/data/hadits.json"

const STORAGE_KEY = "kitabul_jami_data"
const OFFLINE_KEY = "kitabul_jami_offline"

const hadithData = hadits;

export default function KitabulJami() {
  const [currentView, setCurrentView] = useState<"home" | "category">("home")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedHadith, setSelectedHadith] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [isOnline, setIsOnline] = useState(true)
  const [isOfflineReady, setIsOfflineReady] = useState(false)

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine)
    }

    const storeDataOffline = () => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(hadithData))
        localStorage.setItem(OFFLINE_KEY, "true")
        setIsOfflineReady(true)
      } catch (error) {
        console.error("Failed to store data offline:", error)
      }
    }

    const checkOfflineData = () => {
      const storedData = localStorage.getItem(STORAGE_KEY)
      const offlineFlag = localStorage.getItem(OFFLINE_KEY)
      if (storedData && offlineFlag) {
        setIsOfflineReady(true)
      } else {
        storeDataOffline()
      }
    }

    updateOnlineStatus()
    checkOfflineData()

    window.addEventListener("online", updateOnlineStatus)
    window.addEventListener("offline", updateOnlineStatus)

    return () => {
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getHadithData = () => {
    if (!isOnline) {
      try {
        const storedData = localStorage.getItem(STORAGE_KEY)
        return storedData ? JSON.parse(storedData) : hadithData
      } catch (error) {
        console.error("Failed to load offline data:", error)
        return hadithData
      }
    }
    return hadithData
  }

  const currentHadithData = getHadithData()

  const filteredHadith = currentHadithData.filter((hadith: any) => {
    const matchesCategory = selectedCategory ? hadith.judul_bab === selectedCategory : true
    const matchesSearch = searchQuery
      ? hadith.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hadith.terjemahan.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    return matchesCategory && matchesSearch
  })

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName)
    setCurrentView("category")
    setSelectedHadith(null)
  }

  const handleBackToHome = () => {
    setCurrentView("home")
    setSelectedCategory("")
    setSelectedHadith(null)
  }

  const scrollToCategories = () => {
    const categoriesSection = document.getElementById("categories-section")
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleHadithToggle = (index: number) => {
    setSelectedHadith(selectedHadith === index ? null : index)
  }

  if (currentView === "category") {
    return (
      <CategoryPage
        selectedCategory={selectedCategory}
        filteredHadith={filteredHadith}
        searchQuery={searchQuery}
        selectedHadith={selectedHadith}
        isDarkMode={isDarkMode}
        isOnline={isOnline}
        onBack={handleBackToHome}
        onSearchChange={setSearchQuery}
        onHadithToggle={handleHadithToggle}
      />
    )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gradient-to-br from-black via-gray-900 to-black" : "bg-gray-50"
        }`}
    >
      <Navbar
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        isOnline={isOnline}
        scrollY={scrollY}
      />

      <HeroSection
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        onScrollToCategories={scrollToCategories}
      />

      <CategoryList
        isDarkMode={isDarkMode}
        isOnline={isOnline}
        isOfflineReady={isOfflineReady}
        onCategoryClick={handleCategoryClick}
      />

      <footer
        className={`p-4 text-center text-xs ${isDarkMode ? "text-slate-400" : "text-gray-500"
          } border-t ${isDarkMode ? "border-white/10" : "border-gray-200"}`}
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
  )
}
