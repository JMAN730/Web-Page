"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, TrendingUp, Gem, Check, Crown, Puzzle, Clock, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const scrollToContact = () => {
  const element = document.getElementById("contact")
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

const freeOffer = [
  { label: "Website Build", value: "$0" },
  { label: "Hosting & Maintenance", value: "$200/month" },
  { label: "Minimum Commitment", value: "6 Months" },
  { label: "Ownership Transfer", value: "Included" },
]

const freeIncludes = [
  "Fully Custom Website",
  "Mobile Optimization",
  "Contact Forms",
  "Basic SEO Foundation",
  "Ongoing Support",
  "Performance Optimization",
]

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
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* ---- Free Website Program (centerpiece) ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Free Custom Website Program
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Apply For A Free{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Website
            </span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            No upfront website development cost. You only pay for hosting,
            maintenance, and support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto max-w-2xl rounded-3xl border border-violet-500/30 bg-card/50 backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_60px_-20px_rgba(168,85,247,0.6)]"
        >
          <div className="divide-y divide-border/60">
            {freeOffer.map((row) => (
              <div key={row.label} className="flex items-center justify-between py-4">
                <span className="text-muted-foreground">{row.label}</span>
                <span className="text-lg font-semibold text-foreground">{row.value}</span>
              </div>
            ))}
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {freeIncludes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-pink-500/30 border border-violet-500/30">
                  <Check className="h-3 w-3 text-violet-300" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="mt-10 w-full bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:opacity-90 rounded-full py-6 text-base group shadow-[0_0_40px_-10px_rgba(168,85,247,0.6)]"
          >
            Apply For A Free Website
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* ---- Traditional packages ---- */}
        <motion.div
          id="packages"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-32 mb-16 scroll-mt-28"
        >
          <span className="text-sm uppercase tracking-widest bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Traditional Packages
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Prefer to own it outright?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            One-time builds with optional support. Modern websites, better
            performance, real results.
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
                  ? "bg-secondary/60 border border-violet-500/40 lg:-mt-4 lg:mb-4 shadow-[0_0_40px_-12px_rgba(168,85,247,0.5)]"
                  : "bg-card/50 border border-border/60 hover:border-violet-500/30"
              }`}
            >
              {/* Glassy sheen */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] to-transparent opacity-60" />

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg whitespace-nowrap">
                  <Crown className="h-3.5 w-3.5" />
                  MOST POPULAR
                </div>
              )}

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${
                      plan.popular
                        ? "bg-gradient-to-br from-violet-500/25 to-pink-500/25 text-violet-200"
                        : "bg-secondary text-foreground"
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
                          plan.popular
                            ? "bg-gradient-to-br from-violet-500/30 to-pink-500/30 text-violet-200"
                            : "bg-secondary text-foreground"
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
                      ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:opacity-90"
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
