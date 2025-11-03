"use client"
import { useContext, useState } from "react"
import type React from "react"

import toast from "react-hot-toast"
import signup from "@/lib/signup"
import context from "@/lib/context"

type isSubmitProps = {
  isSubmitted: boolean
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export default function StickyForm({ isSubmitted, setIsSubmitted }: isSubmitProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const { setAuthenticated } = useContext(context)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitted) return

    if (!name) return toast.error("Name is required")
    if (!email.includes("@")) return toast.error("Invalid Email")
    if (phone.length !== 10) return toast.error("Enter 10 digit number")

    await toast.promise(signup(name, email, phone), {
      loading: "Processing...",
      success: () => {
        setIsSubmitted(true)
        setAuthenticated(true)

        setName("")
        setPhone("")
        setEmail("")

        const whatsappNumber = "9657119798"
        const message = `Hi, I want to enquire about Godrej Properties.%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")

        return "Success"
      },
      error: (err) => `${err.toString()}`,
    })
  }

  return (
    <div className="hidden lg:block fixed bottom-0 left-0 w-full bg-[#f8f9f4] shadow-[0_-2px_10px_rgba(0,0,0,0.08)] border-t border-[#d4c29e]/40 z-[9999] backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto px-4">
        <form
          className="flex flex-wrap items-center gap-4 py-4"
          onSubmit={handleSubmit}
        >
          <span className="text-[#0f5132] font-semibold text-lg tracking-wide mr-4 uppercase">
            Enquire Now
          </span>

          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-1 min-w-[150px] bg-transparent border-b border-[#0f5132]/40 text-[#1b4332] placeholder-[#3b5d50]/60 focus:border-[#d4af37] focus:outline-none transition-all duration-300"
          />

          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 min-w-[150px] bg-transparent border-b border-[#0f5132]/40 text-[#1b4332] placeholder-[#3b5d50]/60 focus:border-[#d4af37] focus:outline-none transition-all duration-300"
          />

          <input
            type="tel"
            placeholder="Phone*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="flex-1 min-w-[150px] bg-transparent border-b border-[#0f5132]/40 text-[#1b4332] placeholder-[#3b5d50]/60 focus:border-[#d4af37] focus:outline-none transition-all duration-300"
          />

          <button
            type="submit"
            className="bg-[#0f5132] hover:bg-[#145a32] text-[#fffaf0] font-semibold px-8 py-2 rounded-md tracking-wide shadow-md border border-[#d4af37]/30 hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
