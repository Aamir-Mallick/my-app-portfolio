"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const highlightWords = ["Design Systems", "DesignOps", "Performance"];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden pt-40 pb-28 sm:pb-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-radial opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-96 bg-gradient-to-b from-accent/10 to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 text-left lg:flex-row lg:items-center lg:gap-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-slate-900/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Frontend Engineer
          </span>

          <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Crafting resilient, human-centered web experiences for modern brands.
          </h1>

          <p className="text-lg leading-relaxed text-slate-300/90 lg:text-xl">
            I'm Aamir Mallick, a senior front-end developer focused on design systems,
            accessible interfaces, and meaningful animation. I partner with product
            teams to turn complex ideas into intuitive journeys across the web.
          </p>

          <div className="flex flex-wrap gap-3">
            {highlightWords.map((word) => (
              <span
                key={word}
                className="rounded-full border border-slate-700/80 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-300"
              >
                {word}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="https://mail.google.com/mail/u/0/?tab=km#inbox/FMfcgzGljlqmgZZflcqLWvKKjZCKkvSK?compose=GTvVlcSBmmDLtkjmpPnTcwZxvDZHcLvFnWKfKXHpNDFjHVLGcBXMbBsPCvbVSrNHvVTrkZpLbbWpq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-night transition hover:bg-accent-soft"
            >
              <FiMail />
              Start a conversation
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-accent hover:text-accent"
            >
              View recent work
              <FiArrowUpRight />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto flex w-full max-w-sm flex-col gap-6 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-8 shadow-glow sm:max-w-md"
        >
          <div className="absolute -inset-px rounded-3xl border border-white/10" />
          <div className="relative">
            <p className="text-sm font-semibold text-accent">Currently @ Deloitte</p>
            <p className="mt-2 text-3xl font-semibold text-white">4+ Years</p>
            <p className="text-sm text-slate-400">Design-led engineering & delivery</p>
          </div>

          <div className="relative space-y-4 text-sm text-slate-300">
            <p>
              Translating ambitious concepts into performant interfaces for finance,
              education, and SaaS platforms. Collaborative partner across design,
              product, and engineering.
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Design systems, accessibility, and micro-interactions
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Accelerating delivery with Next.js and modern tooling
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Mentoring teams in scalable front-end architecture
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
