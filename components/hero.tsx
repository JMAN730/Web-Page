"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowDown, Sparkles, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

const trustBadges = [
  "Fully Custom Build",
  "Mobile Optimized",
  "Hosting Included",
  "Contact Forms",
  "SEO Foundation",
  "Ownership Transfer",
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          style={{
            y,
            opacity,
            willChange: 'transform',
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          style={{
            y: y2,
            willChange: 'transform',
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div style={{ scale, opacity, willChange: 'transform' }} className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-sm font-medium uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-violet-300" />
            <span className="bg-gradient-to-r from-violet-300 to-pink-300 bg-clip-text text-transparent">
              Free Custom Website Program
            </span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95]"
        >
          <span className="block text-balance">Premium Custom Websites</span>
          <span className="block mt-2 text-balance">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Built For Free
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance"
        >
          SoftBaseLabs designs and engineers high-performance websites,
          applications, CRMs, and AI-powered automations — built for companies
          ready to operate smarter and grow faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("pricing")}
            className="bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:opacity-90 rounded-full px-8 py-6 text-base group shadow-[0_0_40px_-10px_rgba(168,85,247,0.6)]"
          >
            Apply For A Free Website
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("packages")}
            className="border-border text-foreground hover:bg-secondary rounded-full px-8 py-6 text-base"
          >
            View Traditional Packages
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary rounded-full px-8 py-6 text-base"
          >
            <Link href="/book">Free Custom Quote</Link>
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 max-w-2xl mx-auto"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1 + index * 0.08 }}
              className="flex items-center gap-2.5 text-sm text-muted-foreground"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-pink-500/30 border border-violet-500/30">
                <Check className="h-3 w-3 text-violet-300" />
              </span>
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
