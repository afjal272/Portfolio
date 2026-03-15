"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"

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

      console.error("EmailJS Error:",error)
      alert("Email failed to send")

    }finally{
      setLoading(false)
    }
  }

  return (

<section id="contact" className="py-32 bg-black text-white">

<div className="max-w-3xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-12">
Let's Connect
</h2>

<form ref={form} onSubmit={sendEmail} className="space-y-6">

<input
name="name"
placeholder="Your Name"
required
className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
/>

<input
name="email"
type="email"
placeholder="Your Email"
required
className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
/>

<input
name="subject"
placeholder="Subject"
required
className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
/>

<textarea
name="message"
placeholder="Message"
rows={5}
required
className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
/>

<motion.button
type="submit"
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
disabled={loading}
className="w-full py-4 bg-orange-500 rounded-xl font-semibold"
>

{loading ? "Sending..." : "Send Message"}

</motion.button>

{success && (
<p className="text-green-400 text-center mt-4">
Message sent successfully!
</p>
)}

</form>

</div>

</section>

  )
}