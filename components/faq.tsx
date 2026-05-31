"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to build my website?",
    answer:
      "It depends on the package. A Starter site typically takes 2–4 days, while Growth and Pro builds take a bit longer as we add custom design, integrations, and extra pages. We'll give you a clear timeline before we start.",
  },
  {
    question: "What's the difference between the one-time and monthly options?",
    answer:
      "The one-time price gets your website built and delivered. The monthly option lowers the upfront cost and includes ongoing hosting, maintenance, and support so your site stays fast, secure, and up to date.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Absolutely. Our packages are a starting point — contact us and tell us exactly what you need and we can tailor it exactly for your business.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Every website we build is fully responsive and optimized for phones, tablets, and desktops out of the box.",
  },
  {
    question: "Do you handle SEO?",
    answer:
      "Yes. Every package includes SEO setup, and our Pro package and Sponsored SEO upgrade go further with advanced optimization to help you rank higher and get found.",
  },
  {
    question: "What happens after my site launches?",
    answer:
      "Pro includes 2 weeks of free post-launch support. On monthly plans we handle ongoing updates and maintenance. Either way, we're here whenever you need changes or have questions.",
  },
]

export function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="faq" ref={containerRef} className="py-32 relative">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            Everything you need to know. Still curious? Just reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-6 mb-4 last:mb-0"
              >
                <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
