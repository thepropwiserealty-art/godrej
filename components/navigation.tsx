"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactPopup from "./contact-popup"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#floor-plan" },
  { name: "Floor Plan", href: "#floor-plan" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
]

export default function Navigation() {
  // ❌ Commented out scroll-based background logic
  // const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  // ❌ Commented out scroll listener
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50)
  //   }
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919657119798?text=Give%20me%20details%20of%20Godrej%20Project%20MagarPatta%20City",
      "_blank"
    )
  }

  return (
    <>
      {/* ✅ Static Background Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* ✅ Logo Section */}
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <div className="rounded-md flex items-center justify-center">
                <Image
                  src="/godrejlogo.png"
                  alt="Company Logo"
                  width={140}
                  height={50}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}

              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={openWhatsApp}
              >
                Enquire Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="fixed top-16 left-0 right-0 bg-background border-b shadow-lg"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                    >
                      {item.name}
                    </button>
                  ))}

                  <Button
                    className="bg-primary hover:bg-primary/90 w-full mt-4"
                    onClick={openWhatsApp}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </>
  )
}
