"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const stats = [
    { value: "10+", label: "Projects Built" },
    { value: "8+", label: "Technologies" },
    { value: "Open", label: "To Work" },
    { value: "100%", label: "Responsive UI" },
  ];

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Git",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute right-[-120px] bottom-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: .6 }}
          className="mb-24 text-center"
        >

          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            About Me
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Building Modern Digital
            <br />
            Experiences.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I love transforming ideas into fast, scalable and visually
            engaging web applications with modern technologies.
          </p>

        </motion.div>

        {/* Main Card */}

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .25 }}
            transition={{ duration: .7 }}
            className="flex justify-center"
          >

            <div className="group relative">

              {/* Glow */}

              <div className="absolute -inset-3 rounded-[40px] bg-gradient-to-r from-orange-500/40 to-purple-600/40 opacity-40 blur-3xl transition duration-700 group-hover:opacity-70" />

              {/* Border */}

              <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">

                <Image
                  src="/images/hero.png"
                  alt="Md Afjal Ali"
                  width={430}
                  height={520}
                  priority
                  className="rounded-[28px] object-cover transition duration-700 group-hover:scale-[1.03]"
                />

              </div>

              {/* Floating Badge */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 top-8 rounded-2xl border border-orange-500/20 bg-zinc-900/90 px-5 py-4 backdrop-blur-xl"
              >

                <p className="text-3xl font-bold text-orange-400">
                  10+
                </p>

                <p className="text-sm text-gray-400">
                  Projects
                </p>

              </motion.div>

              {/* Experience Badge */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-6 bottom-10 rounded-2xl border border-white/10 bg-zinc-900/90 px-5 py-4 backdrop-blur-xl"
              >

                <p className="text-xl font-semibold text-white">
                  React
                </p>

                <p className="text-sm text-gray-400">
                  Developer
                </p>

              </motion.div>

            </div>

          </motion.div>

                  <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <span className="text-orange-400 font-medium tracking-widest uppercase text-sm">
              Frontend Developer
            </span>

            <h3 className="mt-4 text-4xl font-bold leading-tight text-white">
              Hi, I'm{" "}
              <span className="text-orange-400">Md Afjal Ali</span>
            </h3>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              I specialize in building modern, responsive and scalable web
              applications using{" "}
              <span className="font-semibold text-white">
                React, Next.js, TypeScript and Tailwind CSS
              </span>
              . I enjoy turning complex ideas into clean, intuitive user
              interfaces with a strong focus on performance and maintainable
              architecture.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Currently I'm expanding my full-stack expertise by developing
              real-world SaaS products, AI-powered applications and modern web
              platforms while continuously improving performance, accessibility
              and user experience.
            </p>

            {/* Tech Stack */}

            <div className="mt-10 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-orange-500 hover:text-white"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <h4 className="text-3xl font-bold text-orange-400">
                    {stat.value}
                  </h4>

                  <p className="mt-2 text-sm text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
              >
                View Projects
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-orange-500"
              >
                Download Resume
              </motion.a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}