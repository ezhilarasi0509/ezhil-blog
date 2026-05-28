import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-neutral-900">
      <section className="mx-auto max-w-3xl">
        <Navbar />

        <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>

        <p className="mt-4 text-lg leading-8 text-neutral-600">
          A dated collection of my learning notes, technical understanding, and
          personal documentation.
        </p>

        <div className="mt-16 rounded-2xl border border-neutral-200 p-6">
          <p className="leading-7 text-neutral-600">
            I will publish posts here as I document what I learn.
          </p>
        </div>

        <Footer />
      </section>
    </main>
  );
}