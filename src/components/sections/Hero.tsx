"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }

  const techStack = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    
  ]

  return (

<section className="relative min-h-screen flex items-center overflow-hidden">


{/* Glow */}
<div className="absolute right-[-200px] top-[-120px] w-[650px] h-[650px] bg-teal-400/20 blur-[200px] rounded-full" />

<div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

{/* LEFT SIDE */}
<motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="max-w-[520px]"
>

<motion.p variants={item} className="text-teal-400 text-lg mb-4">
Hey, I am Md Afjal Ali
</motion.p>

<motion.h1
  variants={item}
  className="text-5xl md:text-6xl font-bold text-white leading-tight min-h-[90px]"
>

<span className="inline-block w-[500px] whitespace-nowrap">
<TypeAnimation
  sequence={[
    "Frontend Developer",
    1000,
    "React Developer",
    1000,
    
  ]}
  speed={60}
  repeat={Infinity}
  cursor={false}
/>
</span>

</motion.h1>

<motion.p variants={item} className="mt-6 text-gray-400">
I build modern, responsive web applications using React, Next.js and TypeScript, 
with a focus on clean UI, performance and user experience.
</motion.p>

{/* Tech */}
<motion.div variants={item} className="mt-6 flex flex-wrap gap-3">

{techStack.map((tech) => (
<span
key={tech}
className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300"
>
{tech}
</span>
))}

</motion.div>

{/* Buttons */}
<motion.div variants={item} className="mt-8 flex gap-4">

<motion.button
whileHover={{ scale: 1.06 }}
whileTap={{ scale: 0.95 }}
className="px-7 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-medium shadow-lg shadow-teal-400/30 hover:scale-105 transition-all duration-300"
>
Hire Me
</motion.button>

<motion.button
whileHover={{ scale: 1.06 }}
whileTap={{ scale: 0.95 }}
className="px-7 py-3 rounded-xl border border-gray-600 text-white hover:bg-white/5 transition"
>
Download Resume
</motion.button>

</motion.div>

</motion.div>


{/* RIGHT SIDE */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="flex justify-end min-h-[420px]"
>

<motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="relative translate-x-12"   // ✅ final clean shift
>

{/* Glow */}
<div className="absolute inset-0 rounded-full bg-teal-400/25 blur-3xl"></div>

<Image
  src="/images/hero.png"
  alt="Md Afjal Ali"
  width={380}
  height={380}
  priority
  className="relative rounded-full object-cover border-4 border-white/10 shadow-[0_0_60px_rgba(45,212,191,0.30)]"
/>

</motion.div>

</motion.div>

</div>

{/* Scroll */}
<motion.div
  animate={{ y: [0, 12, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 text-sm"
>
↓ Scroll
</motion.div>

</section>

  )
}