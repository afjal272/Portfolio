"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {

  const stats = [
    { value: "10+", label: "Projects" },
    { value: "8+", label: "Technologies" },
    { value: "1+", label: "Years Learning" },
  ]

  const services = [
    {
      title: "Frontend Development",
      desc: "Building modern web apps using React and Next.js."
    },
    {
      title: "UI / UX Design",
      desc: "Creating clean and intuitive user interfaces."
    },
    {
      title: "Performance",
      desc: "Optimizing websites for speed and scalability."
    }
  ]

  return (
    <section id="about" className="py-32 px-6 relative">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Frontend developer focused on building modern,
            scalable and high-performance web applications.
          </p>

        </div>


        {/* Main About */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >

            <div className="relative group">

              {/* Glow */}
              <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-3xl"></div>

              <Image
                src="/images/hero.png"
                alt="Md Afjal Ali"
                width={340}
                height={340}
                className="relative rounded-3xl border border-zinc-800 shadow-xl transition duration-500 group-hover:scale-105"
              />

            </div>

          </motion.div>


          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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


            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mb-12">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-zinc-900 border border-zinc-800 px-6 py-6 rounded-xl text-center hover:border-orange-500/40 hover:scale-105 transition"
                >

                  <h3 className="text-3xl font-bold">
                    {stat.value}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {stat.label}
                  </p>

                </div>
              ))}

            </div>

            {/* CTA */}
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium transition hover:scale-105"
            >
              View My Projects
            </a>

          </motion.div>

        </div>


        {/* WHAT I DO */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-orange-500/40 hover:-translate-y-1 transition"
            >

              <h4 className="text-lg font-semibold mb-3">
                {service.title}
              </h4>

              <p className="text-gray-400 text-sm">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}