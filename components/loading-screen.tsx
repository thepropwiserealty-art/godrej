"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // allow fade-out complete
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return (
      <motion.div
        className="loading-screen fixed inset-0 bg-white z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ pointerEvents: "none" }}
      />
    )
  }

  return (
    <div className="loading-screen fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Logo */}
        <motion.div
          className="mx-auto mb-4 flex items-center justify-center p-6 bg-white rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src="/godrejlogo.png"
            alt="Logo"
            width={110}
            height={110}
            priority
            className="rounded-lg"
          />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="text-2xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          Godrej Properties
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-gray-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
  
        </motion.p>
      </motion.div>
    </div>
  )
}
