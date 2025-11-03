"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const projects = [
  {
    name: "Elaris*",
    directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Mantra+Marvilla+Project+Pune",
    mapsLink: "https://maps.app.goo.gl/CoE3UvsZLvE8PLeF6",
    embedSrc:
      "https://www.google.com/maps?q=18.513935,73.916672&z=15&output=embed",
  },
 
]

export default function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="location" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
            Prime Locations
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project) => (
            <Card key={project.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <iframe
                    src={project.embedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={project.name}
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-md flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-sm">{project.name}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-2 p-2">
                  <a href={project.directionsLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-sm">Get Directions</Button>
                  </a>
                  <a href={project.mapsLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent text-sm">
                      View on Google Maps
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
