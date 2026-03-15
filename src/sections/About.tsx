export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Developer focused on building modern, scalable and user-friendly web applications.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/images/hero.png"
              alt="Afjal Ali"
              className="w-80 h-80 rounded-xl object-cover border border-gray-700 shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-gray-300 text-lg">

            <p>
              I'm <span className="text-white font-semibold">Md Afjal Ali</span>, a frontend developer
              specializing in building modern web applications using
              <span className="text-white font-semibold"> React, Next.js, TypeScript and Tailwind CSS</span>.
            </p>

            <p>
              I enjoy creating clean UI, smooth user experiences and scalable
              frontend architectures.
            </p>

            <p>
              Currently I'm focused on building real-world projects including
              eCommerce platforms, SaaS dashboards and modern portfolio websites
              to strengthen my full-stack development skills.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">

              <div className="bg-zinc-900 p-4 rounded-lg text-center border border-zinc-800">
                <h3 className="text-2xl font-bold text-white">10+</h3>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>

              <div className="bg-zinc-900 p-4 rounded-lg text-center border border-zinc-800">
                <h3 className="text-2xl font-bold text-white">8+</h3>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>

              <div className="bg-zinc-900 p-4 rounded-lg text-center border border-zinc-800">
                <h3 className="text-2xl font-bold text-white">1+</h3>
                <p className="text-gray-400 text-sm">Years Learning</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}