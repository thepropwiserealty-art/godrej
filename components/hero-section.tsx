"use client"


import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const section = document.querySelector(`#${id}`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }


  return (
    <section
      id="home"
      className="
        relative 
        w-full min-h-screen 
        flex items-center justify-center 
        overflow-x-hidden overflow-y-hidden 
        bg-black
      "
      style={{
        // This ensures full-bleed layout even on mobile
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      {/* ✅ Background Image */}
      <div
        className="
          absolute inset-0 z-0 
          overflow-hidden 
          w-full h-full
        "
      >
        <img
          src="/mantrabg"
          alt="Luxury Estate"
          className="
            absolute inset-0 
            w-full h-full 
            object-cover 
            object-center 
            select-none 
            m-0 p-0 border-0 
            block
          "
          style={{
            width: '100vw', // ensures it fills viewport
            maxWidth: '100%',
          }}
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>


      {/* ✅ Foreground Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Elaris by Godrej Properties   
        </motion.h1>


        <motion.p
          className="text-base sm:text-xl md:text-2xl mb-8 text-balance opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Luxury estates crafted for the discerning few. Experience unparalleled elegance and sophistication.
        </motion.p>


        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
            onClick={() => scrollToSection("about")}
          >
            Explore Properties
          </Button>


          <a
            href="https://wa.me/9657119798?text=Schedule%20me%20a%20Tour%20for%20Godrej%20Properties%20MagarPatta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Schedule Tour
            </Button>
          </a>
        </motion.div>
      </div>


      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}