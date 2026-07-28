"use client";

import { motion } from "framer-motion";



const experience = [
  {
    company: "TechChefz Digital Pvt. Ltd.",
    role: "Frontend Developer Intern",
    period: "Jan 2025 - Dec 2026",
    points: [
      "Developed responsive UI components using React and Tailwind CSS.",
      "Converted Figma designs into clean, reusable frontend code.",
      "Integrated REST APIs for dynamic data rendering.",
      "Optimized UI for responsiveness and cross-browser compatibility.",
    ],
  },
  {
    company: "UniConverge Technologies Pvt. Ltd.",
    role: "Web Development Intern",
    period: "Sep 2024 - Oct 2024",
    points: [
      "Built responsive websites using HTML, CSS and JavaScript.",
      "Created layouts with Flexbox and Bootstrap.",
      "Implemented interactive UI features for improved user experience.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-5 py-2 text-sm text-teal-400">
            Career Journey
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Work <span className="text-teal-400">Experience</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Building modern web applications with a focus on performance,
            scalability and clean user experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-8">

          {experience.map((job, index) => (

            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mb-12 last:mb-0"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[43px] top-7 h-5 w-5 rounded-full border-4 border-[#081014] bg-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.6)]" />

              {/* Card */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-white/[0.05] hover:shadow-[0_15px_40px_rgba(45,212,191,0.15)]">

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {job.role}
                    </h3>

                    <p className="mt-2 text-teal-400">
                      {job.company}
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">
                    {job.period}
                  </span>

                </div>

                <ul className="mt-8 space-y-4">

                  {job.points.map((point) => (

                    <li
                      key={point}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-teal-400" />

                      <span className="leading-7">
                        {point}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}