"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Globe, Smartphone, Palette, Bot, BarChart3, LifeBuoy } from "lucide-react"

const services = [
  {
    icon: Globe,
    pillar: "Web",
    title: "Web Development",
    description:
      "Fast, scalable websites and platforms engineered with modern stacks — built to load instantly and convert visitors into customers.",
    features: ["Next.js / React", "Headless CMS", "Core Web Vitals"],
    gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(99, 102, 241, 0.06) 100%)",
  },
  {
    icon: Smartphone,
    pillar: "Apps",
    title: "App Development",
    description:
      "Cross-platform web and mobile apps with native-grade performance, thoughtful UX, and architecture that scales with you.",
    features: ["React Native", "Web Apps", "APIs & Backends"],
    gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(139, 92, 246, 0.06) 100%)",
  },
  {
    icon: Palette,
    pillar: "Design",
    title: "Product Design",
    description:
      "Distinctive brand and interface design that turns your vision into beautiful, intuitive experiences people love to use.",
    features: ["UI/UX Design", "Brand Identity", "Design Systems"],
    gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(168, 85, 247, 0.06) 100%)",
  },
  {
    icon: Bot,
    pillar: "Automation",
    title: "Automation & AI",
    description:
      "Intelligent automations, bots, and AI workflows that remove busywork and let your team move faster than ever.",
    features: ["AI Integration", "Chatbots", "Workflow Automation"],
    gradient: "linear-gradient(135deg, rgba(217, 70, 239, 0.12) 0%, rgba(236, 72, 153, 0.06) 100%)",
  },
  {
    icon: BarChart3,
    pillar: "Growth",
    title: "SEO & Analytics",
    description:
      "Data-driven SEO and analytics that boost visibility, track what matters, and compound results over time.",
    features: ["Technical SEO", "Performance Tracking", "A/B Testing"],
    gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(236, 72, 153, 0.06) 100%)",
  },
  {
    icon: LifeBuoy,
    pillar: "Support",
    title: "Care & Optimization",
    description:
      "Ongoing maintenance, monitoring, and conversion optimization to keep everything fast, secure, and growing.",
    features: ["Maintenance", "CRO", "Monitoring"],
    gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(99, 102, 241, 0.06) 100%)",
  },
]

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" ref={containerRef} className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-widest bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Web · Apps · Design · Automation
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            One team of developers, designers, and strategists shipping digital products
            that are beautiful, functional, and built to convert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`relative h-full p-8 rounded-2xl border transition-all duration-500 ${
                  hoveredIndex === index
                    ? "bg-secondary border-violet-500/30"
                    : "bg-card border-border/50"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/20"
                  >
                    <service.icon className="h-6 w-6 text-violet-300" />
                  </motion.div>
                  <span className="text-xs uppercase tracking-widest bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    {service.pillar}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover gradient effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ background: service.gradient }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
