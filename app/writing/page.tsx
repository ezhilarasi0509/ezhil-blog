import Navbar from "@/components/Navbar";

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-neutral-900">
      <section className="mx-auto max-w-3xl">
        <Navbar />

        <h1 className="text-4xl font-semibold tracking-tight">Writing</h1>

        <p className="mt-4 text-lg leading-8 text-neutral-600">
          Longer notes and reflections from my learning and engineering journey.
        </p>
      </section>
    </main>
  );
}