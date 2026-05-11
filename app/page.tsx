export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
  {/* Glow */}
  <div className="absolute top-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-green-500/20 blur-3xl" />

  {/* Content */}
  <section className="relative z-10 pt-40">
    <div className="container">
      <h1 className="mb-6 text-6xl font-bold">
        Portfolio Layout
      </h1>

      <p className="max-w-2xl text-lg text-zinc-400">
        Building a professional software developer portfolio
        with Next.js and Tailwind CSS.
      </p>
    </div>
  </section>
</main>
  );
}