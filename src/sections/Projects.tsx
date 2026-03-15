"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Tilt from "react-parallax-tilt"

const projects = [
  {
    title: "Ecommerce Platform",
    desc: "Modern full-stack ecommerce built with Next.js and PostgreSQL",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c"
  },
  {
    title: "SaaS Automation Builder",
    desc: "Workflow automation platform for ecommerce businesses",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    title: "Mechanic Service Platform",
    desc: "On-demand roadside mechanic service platform",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
]

export default function Projects(){

  return(
    <section id="projects" className="py-32 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-20">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project,i)=>(
            
            <Tilt
              key={i}
              glareEnable
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={1200}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              className="rounded-[28px]"
            >

              <motion.div
                whileHover={{y:-8}}
                transition={{duration:.3}}
                className="group relative h-[420px] rounded-[28px] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl"
              >

                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"/>

                <div className="absolute bottom-0 p-8">

                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-5 max-w-[260px]">
                    {project.desc}
                  </p>

                  <div className="flex gap-3">

                    <button className="px-4 py-2 text-sm rounded-lg bg-orange-500 hover:bg-orange-600 text-white">
                      Live Demo
                    </button>

                    <button className="px-4 py-2 text-sm rounded-lg border border-white/20 text-white hover:bg-white/10">
                      Github
                    </button>

                  </div>

                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>

    </section>
  )
}