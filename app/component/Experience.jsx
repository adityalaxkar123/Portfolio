import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const EXPERIENCE = [
  {
    company: "Khatakhat Logistics Pvt. Ltd.",
    position: "Full Stack Developer Intern",
    location: "Imphal",
    timeframe: "Jan–Feb 2026",
    description:
      "Built and shipped end-to-end features for a logistics platform across dashboards and APIs.",
    technologies: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Tailwind CSS",
      "Git",
    ],
    achievements: [
      "Built end-to-end features across frontend, backend, and REST APIs.",
      "Developed modules for Vendor, Customer, Delivery Partner, and Admin dashboards.",
      "Designed APIs, optimized backend performance, and managed database migrations.",
      "Collaborated with product and operations teams to ship production-ready features.",
    ],
  },
  {
    company: "Edunet Foundation (Shell Collaboration)",
    position: "AI/ML Intern (Computer Vision)",
    location: "Remote",
    duration: "2 months",
    description:
      "I worked on a project that involved computer vision to detect and classify garbage type and differentiate between recyclable and non-recyclable waste.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "EfficientNetV2B2"],
    achievements: [
      "Classified 6+ classes of garbage",
      "Successfully deployed the project on Gradio",
    ],
  },
  {
    company: "GirlScript Summer of Code",
    position: "Open Source Contributor",
    duration: "2 months",
    description:
      "Contributed to 10+ open source projects in the web development domain.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind",
      "REST APIs",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
    ],
    achievements: ["Delivered 10+ client projects", "Achieved 95% client satisfaction"],
  },
];

const Experience = ({ isDarkMode: _isDarkMode }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const getTimeLabel = (exp) => exp.timeframe || exp.duration;

  const allTech = useMemo(() => {
    const uniq = new Set();
    for (const exp of EXPERIENCE) {
      for (const tech of exp.technologies || []) uniq.add(tech);
    }
    return Array.from(uniq);
  }, []);

  const getInitials = (company) => {
    if (!company) return "EX";
    const parts = company
      .replace(/\([^)]*\)/g, "")
      .split(/\s+/)
      .filter(Boolean);
    const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
    return letters || "EX";
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="section-shell relative overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-12 sm:mb-16 px-2"
      >
        <p className="mb-2 text-sm sm:text-base md:text-lg font-Ovo text-blue-600 dark:text-blue-400">
          Experience
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Ovo text-gray-900 dark:text-white">
          Roles I’ve Worked In
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300 font-Ovo 
                       text-xs sm:text-sm md:text-base">
          A quick, skimmable view of impact, highlights, and tech—optimized for mobile.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Sticky summary panel */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                What I Deliver
              </h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Frontend + Backend features, shipped to production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                  <span>REST APIs, database design, and performance improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                  <span>Collaboration across product/ops and open-source teams</span>
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200 border border-blue-100/70 dark:border-blue-900/60">
                  {EXPERIENCE.length} roles
                </span>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-200 border border-black/5 dark:border-white/10">
                  Full Stack
                </span>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-200 border border-black/5 dark:border-white/10">
                  AI/ML
                </span>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-200 border border-black/5 dark:border-white/10">
                  Open Source
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-500/70 via-purple-500/70 to-fuchsia-500/70 p-[1px]">
              <div className="rounded-2xl bg-white dark:bg-gray-900 border border-black/5 dark:border-white/10 p-5">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  Toolbox
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  A snapshot of technologies I’ve used across roles.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {allTech.slice(0, 14).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-200 border border-black/5 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {allTech.length > 14 && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300 border border-black/5 dark:border-white/10">
                      +{allTech.length - 14} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Accordion list */}
        <div className="lg:col-span-8 space-y-4">
          {EXPERIENCE.map((exp, index) => {
            const isOpen = openIndex === index;
            return (
            <motion.div
              key={`${exp.company}-${exp.position}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className={`rounded-2xl border border-black/5 dark:border-white/10 backdrop-blur transition-shadow ${
                isOpen
                  ? "bg-white dark:bg-gray-900 shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
                  : "bg-white/70 dark:bg-white/5"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full text-left p-4 sm:p-5"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-600 text-white flex items-center justify-center font-bold tracking-wide">
                    {getInitials(exp.company)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {getTimeLabel(exp)}{exp.location ? ` • ${exp.location}` : ""}
                        </p>
                        <h3 className="mt-0.5 text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-blue-700 dark:text-blue-300 truncate">
                          {exp.company}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        <span className="hidden sm:inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-200 border border-black/5 dark:border-white/10">
                          Tap to view details
                        </span>
                        <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-700 dark:text-gray-200"
                          >
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </button>

              <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}>
                <div className="overflow-hidden px-4 sm:px-5 pb-5">
                  <div className="h-px w-full bg-black/5 dark:bg-white/10" />

                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Highlights
                      </h5>
                      <ul className="space-y-2">
                        {(exp.achievements || []).map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                          >
                            <Image
                              src={assets.right_arrow}
                              alt="Bullet"
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 opacity-80"
                            />
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Tech
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {(exp.technologies || []).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs md:text-sm bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-200 border border-black/5 dark:border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
