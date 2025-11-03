"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        
        {/* ✅ TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* ✅ LEFT — Keep as it is */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-md flex items-center justify-center">
                <img
                  src="/godrejlogo.png"
                  alt="Mantra Burgundy Logo"
                  className="h-14 w-auto rounded-md"
                />
              </div>
            </div>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Godrej Property </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 9657119798</span>
              </div>
              
            </div>
          </motion.div>

          {/* ✅ MIDDLE + RIGHT — Three QR Logos with even spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex justify-between items-center px-4"
          >
            {/* <img src="/QRf.png" alt="QR Code" className="h-32 w-32 object-contain rounded-md" /> */}
      
          </motion.div>
        </div>

        {/* ✅ DISCLAIMER */}
        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/80 leading-relaxed space-y-3">
          <p>
            <strong>This project is RERA registered.</strong> | Authorized Channel Partner |
            Channel Partner RERA Number: <strong>_______</strong> |
            Project RERA Number: <strong>______</strong>
          </p>
          <p>
            Please be advised that this website is not an official site and serves solely as an
            informational portal managed by a RERA authorized real estate agent. It does not
            constitute an offer or guarantee of any services. The prices displayed on this website
            are subject to change without prior notice, and the availability of properties cannot
            be guaranteed. The images showcased are for representational purposes only and may not
            accurately reflect actual properties. We may share your data with RERA-registered
            Developers as necessary and may send updates to the mobile number or email registered
            with us. All rights reserved. Unauthorized use, reproduction, or distribution of the
            site's content is prohibited and may violate applicable laws. For accurate and
            up-to-date information, please contact us directly. Thank you for visiting.
          </p>
          <p className="mt-6 text-sm">© 2025 Godrej Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
