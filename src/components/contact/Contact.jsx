"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/Aamir-Mallick",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/aamir-mallick-b4b41a187/",
    label: "LinkedIn",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-900/60 to-night" />
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-[36px] border border-slate-800/70 bg-slate-950/70 px-6 py-16 text-center shadow-glow lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-slate-900/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent"
        >
          Let’s collaborate
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl font-semibold text-white sm:text-5xl"
        >
          Building something that needs polish, momentum, or a design-first lens?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          I’m currently partnering with teams on system-driven web products and
          product design collaborations. Drop a message—happy to talk through
          ideas, roadmaps, or product audits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="mailto:aamirmallick71@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-night transition hover:bg-accent-soft"
          >
            <FiMail />
            aamirmallick71@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/aamir-mallick-b4b41a187/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-accent hover:text-accent"
          >
            Connect on LinkedIn
            <FiArrowUpRight />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="flex items-center gap-5"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-night/80 text-slate-200 transition hover:border-accent hover:text-accent"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
      <p className="mt-12 text-center text-xs uppercase tracking-[0.4em] text-slate-600">
        © {new Date().getFullYear()} Aamir Mallick. Crafted with care.
      </p>
    </section>
  );
};
