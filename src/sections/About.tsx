export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Frontend developer focused on building modern, scalable and
            high-performance web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* image */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 blur-3xl opacity-20 rounded-2xl"></div>

              <img
                src="images/hero.png"
                alt="Afjal Ali"
                className="relative w-80 rounded-2xl border border-zinc-800 shadow-xl"
              />

            </div>
          </div>

          {/* text */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Hi, I'm <span className="text-orange-400">Md Afjal Ali</span>
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              I build modern web applications using
              <span className="text-white font-medium">
                {" "}React, Next.js, TypeScript and Tailwind CSS
              </span>.
              My focus is creating clean UI, smooth user experiences and
              scalable frontend architectures.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Currently I’m building real-world projects like eCommerce
              platforms, SaaS dashboards and modern developer tools to
              strengthen my full-stack development skills.
            </p>

            {/* stats */}
            <div className="flex gap-6">

              <div className="bg-zinc-900 border border-zinc-800 px-6 py-5 rounded-xl text-center">
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 px-6 py-5 rounded-xl text-center">
                <h3 className="text-2xl font-bold">8+</h3>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 px-6 py-5 rounded-xl text-center">
                <h3 className="text-2xl font-bold">1+</h3>
                <p className="text-gray-400 text-sm">Years Learning</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}