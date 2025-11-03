"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square, MapPin } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "2BHK Premium",
    location: "MagarPatta-Mundhwa Pune",
    price: "Starting ₹1.69Cr*",
    beds: 2,
    sqft: "915*",
    image: "Marvilla-Logo.jpg",
    badge: "Luxury 2BHK",
    badgeVariant: "default" as const,
    phone: "9657119798",
  },
  {
    id: 2,
    title: "3BHK Premium",
    location: "MagarPatta-Mundhwa Pune",
    price: "Starting ₹2.19Cr*",
    beds: "3",
    sqft: "1166*",
    image: "Mayfair-Logo.jpg",
    badge: "Premium 3 BHK ",
    badgeVariant: "secondary" as const,
    phone: "9657119798",
  },
  {
    id: 3,
    title: "4BHK Premium Plus",
    location: "MagarPatta-Mundhwa Pune",
    price: "Starting ₹3.59Cr*",
    beds: "4",
    sqft: "1934*",
    image: "One Residences Final Logo-C2C-01.jpg",
    badge: "Luxury 4BHK",
    badgeVariant: "destructive" as const,
    phone: "9657119798",
  },
]

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Godrej Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover our curated collection of luxury properties, each offering unique features and unparalleled
            elegance in prime locations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4" variant={property.badgeVariant}>
                    {property.badge}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-card-foreground">
                        {property.title}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">{property.price}</div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm mr-4">{property.beds} Beds</span>
                    </div>
                    {/* <div className="flex items-center text-muted-foreground">
                      <Bath className="w-4 h-4 mr-1" />
                      <span className="text-sm mr-4">{property.baths || "-"} Baths</span>
                    </div> */}
                    <div className="flex items-center text-muted-foreground">
                      <Square className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.sqft || "-"} sqft</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => {
                        const msg = encodeURIComponent(
                          `I want details of ${property.title}`
                        )
                        window.open(
                          `https://wa.me/${property.phone}?text=${msg}`,
                          "_blank"
                        )
                      }}
                    >
                      View Details
                    </Button>

                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => {
                        const msg = encodeURIComponent(
                          `I want to schedule a tour for ${property.title}.`
                        )
                        window.open(
                          `https://wa.me/${property.phone}?text=${msg}`,
                          "_blank"
                        )
                      }}
                    >
                      Schedule Tour
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
