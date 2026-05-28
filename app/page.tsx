import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-neutral-900">
      <section className="mx-auto max-w-3xl">
        <Navbar />

        <section className="space-y-6">
          <p className="text-sm text-neutral-500">Hi, I&apos;m Ezhilarasi S</p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            I document what I learn.
          </h1>

          <p className="text-lg leading-8 text-neutral-600">
            I completed my Integrated M.Tech in Software Engineering from VIT
            University, Vellore.
          </p>

          <p className="text-lg leading-8 text-neutral-600">
            This is my personal space for writing about the things I learn,
            understand, build, and explore as I grow as a software engineer.
          </p>
        </section>

        <section className="mt-20 border-t border-neutral-200 pt-10">
          <p className="text-sm leading-7 text-neutral-500">
            New posts will be added as I document my learning journey.
          </p>
        </section>
      </section>
    </main>
  );
}