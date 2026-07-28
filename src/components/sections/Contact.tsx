"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";


export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      form.current.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-32 bg-gradient-to-br from-[#081014] via-[#0b1f22] to-[#081014] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.25em] text-teal-400">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's build{" "}
            <span className="text-teal-400">
              something great.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
            Have a project in mind or just want to connect? I'd love to hear
            about your ideas and discuss how we can build something meaningful
            together.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <div className="space-y-5">
              <input
                name="name"
                autoComplete="name"
                required
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-teal-400"
              />

              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-teal-400"
              />

              <textarea
                name="message"
                rows={6}
                autoComplete="off"
                required
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-teal-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-teal-400 to-green-500 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-center text-sm text-green-400"
                >
                  Message sent successfully!
                </motion.div>
              )}
            </div>
          </motion.form>

                    {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <h3 className="mb-8 text-xl font-semibold text-white">
                Contact Information
              </h3>

              <div className="space-y-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10">
                    <Mail className="h-5 w-5 text-teal-400" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:mdafjalali272@email.com"
                      className="text-white transition-colors hover:text-teal-400"
                    >
                      mdafjalali272@email.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10">
                    <Phone className="h-5 w-5 text-teal-400" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href="tel:+918448904039"
                      className="text-white transition-colors hover:text-teal-400"
                    >
                      +91 8448904039
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10">
                    <MapPin className="h-5 w-5 text-teal-400" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white">
                      Greater Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-teal-400" />

                <span className="text-sm font-semibold text-teal-400">
                  Currently Available
                </span>
              </div>

              <p className="leading-7 text-gray-400">
                Open to freelance collaborations and full-time opportunities. I focus on
                building modern, scalable and high-performance web applications with a
                strong emphasis on clean architecture, intuitive user experiences and
                maintainable code. If you're looking for a dedicated developer to turn
                ideas into reliable digital products, I'd be glad to work together.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}