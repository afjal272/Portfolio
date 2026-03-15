"use client"

import { motion } from "framer-motion"

const experience = [
  {
    company: "TechChefz Digital Pvt. Ltd.",
    role: "Frontend Developer Intern",
    period: "Jan 2025 – Present",
    points: [
      "Developed responsive UI components using React and Tailwind CSS",
      "Converted Figma designs into clean and maintainable frontend code",
      "Integrated REST APIs for dynamic data rendering",
      "Ensured mobile-first responsiveness and cross-browser compatibility",
    ],
  },
  {
    company: "UniConverge Technologies Pvt. Ltd.",
    role: "Web Development Intern",
    period: "Sep 2024 – Oct 2024",
    points: [
      "Built responsive web pages using HTML, CSS and JavaScript",
      "Structured layouts using Flexbox and Bootstrap",
      "Implemented interactive UI features for better UX",
    ],
  },
]

export default function Experience() {

  return (

    <section id="experience" className="py-32 bg-black">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-20 text-center">
          Experience
        </h2>

        <div className="space-y-12">

          {experience.map((job, i) => (

            <motion.div
              key={i}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:.5}}
              viewport={{once:true}}
              className="bg-neutral-900 border border-white/10 rounded-2xl p-8"
            >

              <h3 className="text-xl text-white font-semibold">
                {job.role}
              </h3>

              <p className="text-orange-400 text-sm mt-1">
                {job.company}
              </p>

              <p className="text-gray-400 text-sm mb-5">
                {job.period}
              </p>

              <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside">

                {job.points.map((point,index)=>(
                  <li key={index}>{point}</li>
                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}