"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    level: "Basic",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    title: "Database",
    skills: [
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-teal-400/20 bg-teal-400/10 px-5 py-2 text-sm font-medium text-teal-400">
            Technologies I Work With
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Tech{" "}
            <span className="text-teal-400">
              Stack
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            My preferred technologies for building fast, scalable and
            production-ready web applications with a strong focus on clean
            architecture and performance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">

                    {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-teal-400/40 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_rgba(45,212,191,0.15)]"
            >
              {/* Card Header */}
            <div className="mb-8 flex items-center justify-between">
               <div className="flex items-center gap-3">
               <h3 className="text-2xl font-semibold text-white">
                {category.title}
              </h3>

               {category.level && (
             <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-teal-300">
                {category.level}
             </span>
          )}
            </div>

             <div className="h-3 w-3 rounded-full bg-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.8)] transition-transform duration-500 group-hover:scale-125" />
          </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: skillIndex * 0.05,
                    }}
                    className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}