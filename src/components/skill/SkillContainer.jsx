"use client";

import { motion } from "framer-motion";

const coreSkills = [
  "React & Next.js",
  "TypeScript",
  "Design Systems",
  "Accessibility (WCAG)",
  "State Machines",
  "Testing Library",
];

const tooling = [
  "Tailwind CSS",
  "Storybook",
  "GraphQL",
  "Node & Express",
  "AWS Amplify",
  "Firebase",
];

const principles = [
  {
    title: "Systems thinking",
    description:
      "Scalable foundations with atomic components, robust tokens, and usable documentation.",
  },
  {
    title: "Inclusive design",
    description:
      "Accessible patterns that flex across devices, contexts, and assistive technologies.",
  },
  {
    title: "Performance first",
    description:
      "Measurable improvements through smart loading strategies, caching, and observability.",
  },
];

export const SkillContainer = () => {
  return (
    <section id="skills" className="relative border-t border-slate-900 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-slate-900/80 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-start lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:max-w-md"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
            Capabilities
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            A toolkit built for shipping beautifully engineered products.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            I blend precise interface engineering with thoughtful UX collaboration,
            ensuring every surface performs as well as it looks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid w-full gap-10 md:grid-cols-2"
        >
          <SkillCard title="Core stack" items={coreSkills} />
          <SkillCard title="Toolbox" items={tooling} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-16 grid max-w-6xl gap-8 px-6 md:grid-cols-3 lg:px-10"
      >
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="group relative flex flex-col gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 transition hover:border-accent/50 hover:shadow-glow"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-accent/40 bg-night/80 text-accent">
                ●
              </span>
              <p className="text-lg font-semibold text-white">{principle.title}</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {principle.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const SkillCard = ({ title, items }) => (
  <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/50 p-8">
    <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <ul className="mt-6 space-y-3 text-sm font-medium text-slate-300">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition hover:border-accent/50 hover:bg-night"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);
