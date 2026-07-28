"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const projects = [
  {
    title: "Shopio",
    category: "AI Product Recommendation Platform",
    description:
      "An AI-powered product discovery platform that helps users find the best products based on their budget, preferences and intelligent decision scoring.",
    image: "/projects/shopio.png",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "AI Decision Engine",
      "Smart Product Ranking",
      "Live Product Comparison",
      "Explainable Recommendations",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Leora",
    category: "Modern SaaS Platform",
    description:
      "A scalable SaaS application built with modern architecture, responsive UI and production-ready development practices.",
    image: "/projects/leora.png",
    tech: ["React", "TypeScript", "Tailwind", "Node.js"],
    features: [
      "Modern Dashboard",
      "Authentication",
      "Responsive Design",
      "Scalable Architecture",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "GoCarry",
    category: "Corporate Gifting Platform",
    description:
      "Corporate gifting platform built for businesses to discover premium gifting products for employees and clients.",
    image: "/projects/gocarry.png",
    tech: ["Next.js", "Tailwind", "TypeScript", "SEO"],
    features: [
      "Corporate Product Showcase",
      "SEO Optimized",
      "Responsive UI",
      "Lead Generation",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Doctor Appointment System",
    category: "Healthcare Management",
    description:
      "Appointment booking platform for patients and doctors with authentication, scheduling and dashboard management.",
    image: "/projects/doctor.png",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Appointment Booking",
      "Doctor Management",
      "Authentication",
      "Dashboard",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-5 py-2 text-sm text-teal-400">
            Featured Work
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Selected <span className="text-teal-400">Projects</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A collection of products focused on modern UI,
            scalable architecture and real-world problem solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">

          {projects.map((project) => (

           
              <motion.div
              key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                 duration: 0.5,
                 ease: [0.22, 1, 0.36, 1],
                 }}
                
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/40 hover:shadow-xl"
              >

                <div className="relative h-45 overflow-hidden bg-white/[0.02]">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                </div>

                <div className="p-8">

                  <span className="w-fit rounded-full bg-teal-400/10 px-4 py-2 text-xs font-medium text-teal-400">
                    {project.category}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">



                                        {project.features.map((feature) => (
                      <span
                        key={feature}
                       className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-gray-300 transition-all duration-300 hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">

                    <a
                      href={project.demo}
                      className="flex-1 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 py-3 text-center text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      className="flex-1 rounded-xl border border-white/10 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </motion.div>

           

          ))}

                  </div>
      </div>
    </section>
  );
}
