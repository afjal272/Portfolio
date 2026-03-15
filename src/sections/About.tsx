"use client"

import { motion } from "framer-motion"

export default function About() {

  const stats = [
    { number: "10+", label: "Projects" },
    { number: "8+", label: "Technologies" },
    { number: "1+", label: "Years Learning" }
  ]

  const tech = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "PostgreSQL"
  ]

  return (
    <section id="about" className="py-32 px-6 relative">

      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="text-center mb-24">

          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Frontend developer focused on building modern,
            scalable and high-performance web applications.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >

            <div className="relative group">

              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 blur-3xl opacity-20 rounded-3xl"></div>

              {/* image */}
              <img
                src="/images/hero.png"
                alt="Afjal"
                className="relative w-80 rounded-3xl border border-white/10 shadow-2xl transition duration-500 group-hover:scale-105"
              />

            </div>

          </motion.div>


          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-2xl font-semibold mb-6">
              Hi, I'm <span className="text-orange-400">Md Afjal Ali</span>
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              I build modern web applications using
              <span className="text-white font-medium">
                {" "}React, Next.js, TypeScript and Tailwind CSS
              </span>.
              My focus is creating clean UI, smooth user experiences
              and scalable frontend architectures.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Currently I'm building real-world projects like
              eCommerce platforms, SaaS dashboards and developer
              tools to strengthen my full-stack development skills.
            </p>


            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 mb-10">

              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition"
                >
                  {t}
                </span>
              ))}

            </div>


            {/* STATS */}
            <div className="grid grid-cols-3 gap-6">

              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -6 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-lg px-6 py-6 rounded-xl text-center"
                >

                  <h3 className="text-3xl font-bold text-white">
                    {s.number}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {s.label}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}