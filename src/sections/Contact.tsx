"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {

  const form = useRef<HTMLFormElement | null>(null)
  const [loading,setLoading] = useState(false)
  const [success,setSuccess] = useState(false)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!form.current) return

    try{
      setLoading(true)

      await emailjs.sendForm(
        "service_gwr9t13",
        "template_rq601ix",
        form.current,
        "1GFw8DRiI2_naluwy"
      )

      setSuccess(true)
      form.current.reset()

    }catch(error){
      console.error(error)
    }finally{
      setLoading(false)
    }
  }

  return (

<section className="py-32 px-6 bg-gradient-to-br from-[#081014] via-[#0b1f22] to-[#081014] text-white">

<div className="max-w-5xl mx-auto"> {/* 🔥 tighter width */}

{/* Heading */}
<div className="text-center mb-16">
  <p className="text-teal-400 text-sm mb-3 tracking-wide">
    GET IN TOUCH
  </p>

  <h2 className="text-4xl md:text-5xl font-bold">
    Let's build <span className="text-teal-400">something great.</span>
  </h2>

  <p className="text-gray-400 mt-4 text-sm max-w-xl mx-auto">
    Have a project in mind? I'd love to hear about it.
  </p>
</div>

{/* GRID */}
<div className="grid md:grid-cols-2 gap-10 items-start">

{/* LEFT → FORM */}
<motion.form
  ref={form}
  onSubmit={sendEmail}
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-4"
>

{/* NAME */}
<div>
  <label className="text-xs text-gray-400 mb-1 block">Name</label>
  <input
    name="name"
    placeholder="Your name..."
    required
    className="w-full p-3 rounded-lg bg-white/[0.02] border border-white/10 focus:outline-none focus:border-teal-400"
  />
</div>

{/* EMAIL */}
<div>
  <label className="text-xs text-gray-400 mb-1 block">Email</label>
  <input
    name="email"
    type="email"
    placeholder="your@email.com"
    required
    className="w-full p-3 rounded-lg bg-white/[0.02] border border-white/10 focus:outline-none focus:border-teal-400"
  />
</div>

{/* MESSAGE */}
<div>
  <label className="text-xs text-gray-400 mb-1 block">Message</label>
  <textarea
    name="message"
    placeholder="Tell me about your project..."
    rows={5}
    required
    className="w-full p-3 rounded-lg bg-white/[0.02] border border-white/10 focus:outline-none focus:border-teal-400"
  />
</div>

<motion.button
  type="submit"
  whileHover={{scale:1.03}}
  whileTap={{scale:0.97}}
  disabled={loading}
  className="w-full py-3 rounded-full font-semibold bg-gradient-to-r from-teal-400 to-green-500 hover:opacity-90 transition"
>
  {loading ? "Sending..." : "Send Message"}
</motion.button>

{/* ✅ SUCCESS BOX like reference */}
{success && (
  <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg p-3 text-center">
    Message sent successfully! I'll get back to you soon.
  </div>
)}

</motion.form>


{/* RIGHT → INFO */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="flex flex-col gap-6"
>

{/* Contact Info */}
<div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_30px_rgba(0,255,180,0.03)]">

  <h3 className="text-sm font-semibold mb-5">
    Contact Information
  </h3>

  <div className="space-y-10">

    {/* Email */}
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-teal-400/10 border border-teal-400/20">
        <Mail className="w-4 h-4 text-teal-400" />
      </div>
      <div>
        <p className="text-xs text-gray-400">Email</p>
        <p className="text-sm text-white">mdafjalali272@email.com</p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-teal-400/10 border border-teal-400/20">
        <Phone className="w-4 h-4 text-teal-400" />
      </div>
      <div>
        <p className="text-xs text-gray-400">Phone</p>
        <p className="text-sm text-white">+91 8448904039</p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-teal-400/10 border border-teal-400/20">
        <MapPin className="w-4 h-4 text-teal-400" />
      </div>
      <div>
        <p className="text-xs text-gray-400">Location</p>
        <p className="text-sm text-white">India</p>
      </div>
    </div>

  </div>
</div>


{/* Availability */}
<div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_30px_rgba(0,255,180,0.03)]">

  <p className="text-teal-400 font-semibold mb-2 flex items-center gap-2 text-sm">
    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
    Currently Available
  </p>

  <p className="text-gray-400 text-sm leading-relaxed">
    I'm open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk.
  </p>

</div>

</motion.div>

</div>
</div>
</section>

  )
}