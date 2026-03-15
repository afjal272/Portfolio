"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "PHP", level: 75 },

  { name: "React", level: 90 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },

  { name: "PostgreSQL", level: 75 },
  { name: "Tailwind CSS", level: 90 },
]

export default function TechStack() {

  return (

    <section id="skills" className="py-32 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-20">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {skills.map((skill, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-white/10 rounded-2xl p-4"
            >

              <div className="flex justify-between mb-3">

                <span className="text-white font-medium">
                  {skill.name}
                </span>

                <span className="text-gray-400 text-sm">
                  {skill.level}%
                </span>

              </div>

              <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-orange-500 rounded-full"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}