"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, TrendingUp, Gem, Check, Crown, Puzzle, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const scrollToContact = () => {
  const element = document.getElementById("contact")
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

const plans = [
  {
    name: "Starter",
    icon: Rocket,
    price: "$300",
    priceSuffix: "+ $89/mo",
    features: [
      "1-page professional website",
      "Mobile-friendly design",
      "Basic SEO setup (Google indexing, keywords)",
      "Contact form",
      "Turnaround: 2–4 days",
    ],
    popular: false,
  },
  {
    name: "Growth",
    icon: TrendingUp,
    price: "$700",
    priceSuffix: "one-time",
    altPrice: "$459",
    altSuffix: "+ $89/mo",
    features: [
      "3 pages (Home, Services, Contact)",
      "Custom design",
      "Lead capture + call-to-action setup",
      "Google Maps & reviews integration (interactive feed)",
      "SEO",
    ],
    popular: true,
  },
  {
    name: "Pro",
    icon: Gem,
    price: "$1000",
    priceSuffix: "",
    features: [
      "5 pages",
      "Booking or quote request system",
      "Advanced SEO (sponsored SEO)",
      "Speed & performance optimization",
      "2 weeks free post-launch support",
    ],
    popular: false,
  },
]

const addOns = [
  { icon: Puzzle, title: "Add-On Services", subtitle: "Tailored extras" },
  { icon: Clock, title: "On-Time Delivery Guarantee", subtitle: "+$100" },
  { icon: Zap, title: "Sponsored SEO Upgrade", subtitle: "Premium add-on" },
]

export function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="pricing" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Pricing
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Web Design Packages
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            Modern Websites. Better Performance. Real Results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 ${
                plan.popular
                  ? "bg-secondary/60 border border-foreground/30 lg:-mt-4 lg:mb-4 shadow-[0_0_40px_-12px_rgba(255,255,255,0.25)]"
                  : "bg-card/50 border border-border/60 hover:border-border"
              }`}
            >
              {/* Glassy sheen */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] to-transparent opacity-60" />

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background shadow-lg whitespace-nowrap">
                  <Crown className="h-3.5 w-3.5" />
                  MOST POPULAR
                </div>
              )}

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${
                      plan.popular ? "bg-foreground/15 text-foreground" : "bg-secondary text-foreground"
                    }`}
                  >
                    <plan.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xl font-bold uppercase tracking-wide text-foreground">
                    {plan.name}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-2 flex-wrap">
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.priceSuffix && (
                      <span className="text-sm text-muted-foreground mb-1.5">{plan.priceSuffix}</span>
                    )}
                  </div>
                  {plan.altPrice && (
                    <div className="mt-2 flex items-end gap-2 flex-wrap">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">or</span>
                      <span className="text-3xl font-bold text-foreground">{plan.altPrice}</span>
                      <span className="text-sm text-muted-foreground mb-1">{plan.altSuffix}</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular ? "bg-foreground/15 text-foreground" : "bg-secondary text-foreground"
                        }`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full py-6 text-base ${
                    plan.popular
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "bg-secondary text-foreground border border-border hover:bg-muted"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-on services bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-xl p-8"
        >
          <div className="grid sm:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <div key={addon.title} className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-secondary text-foreground shrink-0">
                  <addon.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{addon.title}</div>
                  <div className="text-xs text-muted-foreground">{addon.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tailor message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            Contact us and tell us exactly what you need and we can tailor it exactly for your business.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="mt-6 bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
