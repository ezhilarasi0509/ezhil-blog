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

        <div className="mt-16 border-t border-neutral-200 pt-10">
          <p className="text-neutral-500">
            Posts will appear here as I write and publish them.
          </p>
        </div>
      </section>
    </main>
  );
}