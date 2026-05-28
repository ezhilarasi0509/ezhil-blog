import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-neutral-900">
      <section className="mx-auto max-w-3xl">
        <Navbar />

        <h1 className="text-4xl font-semibold tracking-tight">About</h1>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-600">
          <p>
            I&apos;m Ezhilarasi S, a software engineering graduate who completed
            Integrated M.Tech in Software Engineering from VIT University,
            Vellore.
          </p>

          <p>
            I created this website to document what I learn in a clean,
            professional, and dated way.
          </p>

          <p>
            My goal is to use this space as a long-term record of my learning,
            technical writing, and growth as a software engineer.
          </p>
        </div>

        <Footer />
      </section>
    </main>
  );
}