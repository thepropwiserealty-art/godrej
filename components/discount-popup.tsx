"use client"

import type React from "react"
import { useState, useEffect, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Info, Phone, Mail, User, IndianRupee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"
import { checkIfSubmitted } from "@/lib/checkIfSubmitted"
import signup from "@/lib/signup"
import context from "@/lib/context"

type isSubmitProps = {
  isSubmitted: boolean
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DiscountPopup({ isSubmitted, setIsSubmitted }: isSubmitProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" })
  const [showTooltip, setShowTooltip] = useState(false)
  const { isAuthenticated, setAuthenticated } = useContext(context)

  useEffect(() => {
    checkIfSubmitted(setIsSubmitted).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (isSubmitted) return
    const showPopup = () => setIsVisible(true)
    const initialTimer = setTimeout(showPopup, 20000)
    const recurringTimer = setInterval(() => {
      if (!isSubmitted) setIsVisible(true)
    }, 20000)
    return () => {
      clearTimeout(initialTimer)
      clearInterval(recurringTimer)
    }
  }, [isSubmitted])

  const handleClose = () => setIsVisible(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({ name: "", email: "", phone: "" })
    if (!name) return setErrors(prev => ({ ...prev, name: "Name is required" }))
    if (!email.includes("@")) return setErrors(prev => ({ ...prev, email: "Invalid email" }))
    if (phone.length !== 10) return setErrors(prev => ({ ...prev, phone: "Enter 10-digit number" }))
    await toast.promise(signup(name, email, phone), {
      loading: "processing...",
      success: () => {
        setIsSubmitted(true)
        setIsVisible(false)
        setAuthenticated(true)
        setName("")
        setPhone("")
        setEmail("")
        const whatsappNumber = "8237311365"
        const message = `Hi, I want to enquire about Godrej Properties.%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
        return "success"
      },
      error: (err) => `${err.toString()}`,
    })
  }

  if (isSubmitted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 min-h-screen bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 xs:p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="bg-gradient-to-br from-[#ffffff] via-[#f7f7f7] to-[#ece8e3] rounded-3xl shadow-2xl w-full max-w-[95vw] sm:max-w-xl md:max-w-4xl relative border border-[#d1c7b9]/50 flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="fixed top-6 right-6 z-[99] p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md
                         md:absolute md:top-3 md:right-3 md:z-10"
            >
              <X className="w-5 h-5 text-[#3d3d3d]" />
            </button>

            <div className="flex-1 h-full overflow-y-auto max-h-[90vh] flex flex-col md:flex-row">
              {/* Info Tooltip */}
              <div className="absolute top-3 left-3 z-20">
                <div
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() => setShowTooltip(prev => !prev)}
                  className="relative"
                >
                  <div className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md cursor-pointer transition-colors">
                    <Info className="w-5 h-5 text-[#1a1a1a]" />
                  </div>
                  <AnimatePresence>
                    {showTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-10 left-0 w-64 sm:w-72 bg-white border border-gray-200 rounded-xl shadow-xl p-3 sm:p-4 text-xs sm:text-sm text-gray-700 z-30"
                      >
                        <h4 className="font-semibold text-[#1a1a1a] mb-2">Terms & Conditions</h4>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Exclusive luxury offer valid for a limited time.</li>
                          <li>Additional benefits applicable post site visit confirmation.</li>
                          <li>Personalized coupon code — valid for 7 days.</li>
                          <li>Use or mention the code at the Godrej site office.</li>
                          <li>Inform us for rescheduling your visit and code renewal.</li>
                          <li>Our team will assist you through every step.</li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Left Side - Form */}
              <div className="flex-1 p-3 sm:p-6 md:p-8 flex flex-col justify-center order-2 md:order-1 bg-white/70 backdrop-blur-md">
                <div className="max-w-sm mx-auto w-full">
                  <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-2 tracking-wide">
                      Exclusive Privilege
                    </h2>
                    <p className="text-[#5a5a5a]/90 text-xs sm:text-sm md:text-base">
                      Get your personalized site visit offer
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                    {/* Name Field */}
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-[#3d3d3d] mb-1 block">
                        Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8c7a58]/70" />
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          className="pl-10 h-12 border-[#c5b69e]/40 focus:border-[#8c7a58] focus:ring-0 bg-[#f9f8f6] text-[#2a2a2a]"
                        />
                      </div>
                      {errors.name && <p className="text-[#a03e3e] text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-[#3d3d3d] mb-1 block">
                        Email *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8c7a58]/70" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="pl-10 h-12 border-[#c5b69e]/40 focus:border-[#8c7a58] focus:ring-0 bg-[#f9f8f6] text-[#2a2a2a]"
                        />
                      </div>
                      {errors.email && <p className="text-[#a03e3e] text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-[#3d3d3d] mb-1 block">
                        Phone Number *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8c7a58]/70" />
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter 10-digit mobile number"
                          className="pl-10 h-12 border-[#c5b69e]/40 focus:border-[#8c7a58] focus:ring-0 bg-[#f9f8f6] text-[#2a2a2a]"
                          maxLength={10}
                        />
                      </div>
                      {errors.phone && <p className="text-[#a03e3e] text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-[#8c7a58] to-[#a89674] hover:from-[#7b694e] hover:to-[#98865f] text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:scale-[1.01]"
                    >
                      Get in Touch
                    </Button>
                  </form>
                </div>
              </div>

              {/* Right Side - Offer Section */}
              <div className="flex-1 relative overflow-y-auto order-1 md:order-2 h-56 sm:h-72 md:h-auto bg-gradient-to-br from-[#2e2a25] via-[#3b3530] to-[#50473f]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-10 text-[#f5f5f5] text-left">
                  <h3 className="text-base sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-[#d4af37]">
                    We Promise
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <p className="flex items-center text-sm md:text-base">
                      <Phone className="w-5 h-5 text-[#d4af37] mr-3" />
                      Instant Call Back
                    </p>
                    <p className="flex items-center text-sm md:text-base">
                      <User className="w-5 h-5 text-[#d4af37] mr-3" />
                      Free Site Visit
                    </p>
                    <p className="flex items-center text-sm md:text-base">
                      <IndianRupee className="w-5 h-5 text-[#d4af37] mr-3" />
                      Best Price Assurance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
