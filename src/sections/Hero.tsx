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
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL"
  ]

  return (

<section className="relative min-h-screen flex items-center overflow-hidden bg-black">

{/* Background */}
<div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a0f05] to-[#2a1406]" />

{/* Glow */}
<div className="absolute right-[-200px] top-[-120px] w-[650px] h-[650px] bg-orange-500/20 blur-[200px] rounded-full" />

<div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

{/* LEFT SIDE */}
<motion.div variants={container} initial="hidden" animate="show">

<motion.p variants={item} className="text-orange-400 text-lg mb-4">
Hey, I am Md Afjal Ali
</motion.p>

<motion.h1 variants={item} className="text-5xl md:text-6xl font-bold text-white leading-tight">

<TypeAnimation
sequence={[
"Frontend Developer",
2000,
"React Developer",
2000,
"Full Stack Developer",
2000
]}
wrapper="span"
speed={50}
repeat={Infinity}
/>

</motion.h1>

<motion.p variants={item} className="mt-6 text-gray-400 max-w-lg">
I build modern web applications using Next.js,
TypeScript, Node.js and PostgreSQL.
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
className="px-7 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-lg shadow-orange-500/40"
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
className="flex justify-center"
>

<motion.div
animate={{ y: [0, -12, 0] }}
transition={{ duration: 4, repeat: Infinity }}
className="relative"
>

{/* Glow behind image */}
<div className="absolute inset-0 rounded-full bg-orange-500/30 blur-3xl"></div>

<Image
src="/images/hero.png"
alt="Md Afjal Ali"
width={380}
height={380}
priority
className="relative rounded-full object-cover border-4 border-white/10 shadow-[0_0_60px_rgba(255,115,0,0.35)]"
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