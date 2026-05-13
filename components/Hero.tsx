export default function Hero() {
    return (
        <section className="relative z-10 pt-40 pb-24">
            <div className="container">

                {/*Intro */}
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-400">
                    Full Stack Software Developer
                </p>

                {/* Main Heading */}
                <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
                    Building modern web applications with clean design and scalable code.
                </h1>

                {/* Supporting Text */}
                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                    Former educator and school administrator transitioning into software development with a focus on React, JavaScript, TypeScript, Node.js, and backend systems.
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-10 flex flex-wrap gap-3">
                    {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "JavaScript",
                        "Node.js",
                        "Tailwind CSS",
                     ].map((tech) =>(
                        <span
                            key={tech}
                            className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
                            {tech}
                        </span>
                     ))}
                </div>

         {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-green-500 px-6 py-3 font-medium text-black transition hover:bg-green-400"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-zinc-700 px-6 py-3 font-medium text-white transition hover:border-zinc-500"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
          