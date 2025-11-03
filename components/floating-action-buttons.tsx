"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingActionButtons() {
  const buttons = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
      action: () => {
        const message = encodeURIComponent("Send me details of Mantra Burgundy series")
        window.open(`https://wa.me/9657119798?text=${message}`, "_blank")
      },
    },
    {
      icon: Phone,
      label: "Call",
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => window.open("tel:+919657119798", "_self"),
    },
    {
      icon: Car,
      label: "Uber",
      color: "bg-black hover:bg-gray-800",
      action: () =>window.open(`https://wa.me/9657119798?text=${"Book Uber for me "}`, "_blank")

    },
  ]

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <div className="flex flex-col space-y-3">
        {buttons.map((button, index) => (
          <motion.div
            key={button.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3 group"
          >
            {/* Label - shows on hover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="bg-white text-gray-800 px-3 py-1 rounded-full shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              {button.label}
            </motion.div>

            {/* Button */}
            <Button
              size="icon"
              className={`w-12 h-12 rounded-full shadow-lg ${button.color} text-white border-0 transition-transform hover:scale-110`}
              onClick={button.action}
            >
              <button.icon className="w-5 h-5" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
