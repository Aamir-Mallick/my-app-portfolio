"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Tetrixx",
    description:
      "Supply chain visibility platform offering granular analytics, automated insights, and configurable dashboards trusted by enterprise operators.",
    link: "https://tetrixx.io/",
    image: "/tetrixx.png",
    stack: ["Next.js", "React Query", "Tailwind", "Node"],
    contribution: "Design system architecture & dashboard delivery",
  },
  {
    title: "Starweaver",
    description:
      "An interactive e-learning environment with live classrooms, collaborative tooling, and adaptive content tailored to learners worldwide.",
    link: "https://go.starweaver.com/on-air",
    image: "/starweaver.png",
    stack: ["Next.js", "Framer Motion", "GraphQL", "AWS"],
    contribution: "Live experience design, A11y, and performance uplift",
  },
  {
    title: "Global Menu",
    description:
      "A digital menu platform helping hospitality teams manage real-time updates, QR experiences, and on-brand templates from a single hub.",
    link: "https://admin-dev.globalmenu.app/login",
    image: "/globalmenu.png",
    stack: ["React", "Redux", "Storybook", "Express"],
    contribution: "Component system, role-based UX, API integrations",
  },
  {
    title: "YOLO Connects",
    description:
      "Social publishing suite enabling marketing teams to schedule, preview, and push content to Facebook, Instagram, and LinkedIn.",
    link: "https://app.yoloconnect.in/",
    image: "/yolo.png",
    stack: ["React", "Redux Saga", "REST APIs", "Node"],
    contribution: "Automation workflows, analytics screens, onboarding",
  },
  {
    title: "Poolfish",
    description:
      "DeFi companion that demystifies liquidity provisioning with calculators, portfolio insights, and real-time AMM monitoring.",
    link: "https://poolfish.xyz/calculators/uniswap",
    image: "/poolfish.png",
    stack: ["Next.js", "SWR", "Tailwind", "D3"],
    contribution: "Experience design, charting, responsive layout",
  },
  {
    title: "Talents Crew",
    description:
      "Community-driven hiring marketplace featuring curated roles, candidate profiles, and dynamic search for large talent pools.",
    link: "https://talentscrew.com/",
    image: "/talentsscrew.png",
    stack: ["React", "SCSS", "Firebase", "Node"],
    contribution: "Search UX, onboarding flows, modular UI kit",
  },
];

export const ProjectContainer = () => {
  return (
    <section id="projects" className="border-t border-slate-900 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
              Selected work
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Products shaped with curiosity, craft, and measurable impact.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400">
            From highly regulated industries to emerging SaaS platforms, I partner
            with teams to deliver resilient product surfaces backed by maintainable
            code.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ delay: index * 0.05, duration: 0.6 }}
    className="relative grid gap-8 overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/50 p-6 shadow-lg shadow-black/40 transition hover:border-accent/50 hover:shadow-glow lg:grid-cols-[1.2fr,1fr] lg:p-8"
  >
    <div className="absolute -left-24 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl lg:block" />
    <div className="space-y-6">
      <div className="inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
        {String(index + 1).padStart(2, "0")}
        <span className="hidden h-1 w-1 rounded-full bg-accent sm:block" />
        <span className="text-accent">Case study</span>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="text-sm text-slate-400">
        <span className="font-semibold text-slate-200">Focus:</span>{" "}
        {project.contribution}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-night"
      >
        Visit project
        <FiArrowUpRight />
      </a>
    </div>

    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/80">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover object-top transition duration-700 hover:scale-105"
        sizes="(min-width: 1024px) 450px, 100vw"
        priority={index < 2}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-night/10 via-transparent to-accent/5" />
    </div>
  </motion.article>
);
