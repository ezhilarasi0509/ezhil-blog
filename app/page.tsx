import Footer from "@/components/Footer";
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

        <section className="mt-20 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm text-neutral-500">Blog</p>
            <h2 className="mt-2 text-lg font-medium">Learning documentation</h2>
            <p className="mt-2 leading-7 text-neutral-600">
              Dated posts on what I learn, understand, and build.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm text-neutral-500">Writing</p>
            <h2 className="mt-2 text-lg font-medium">Long-form notes</h2>
            <p className="mt-2 leading-7 text-neutral-600">
              Clear reflections and explanations from my engineering journey.
            </p>
          </div>
        </section>

        <Footer />
      </section>
    </main>
  );
}