import Navbar from "@/components/Navbar";
import { posts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-neutral-900">
      <section className="mx-auto max-w-3xl">
        <Navbar />

        <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>

        <p className="mt-4 text-lg leading-8 text-neutral-600">
          Dated notes on what I learn, build, and understand.
        </p>

        <div className="mt-12 space-y-5">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="block rounded-2xl border border-neutral-200 p-5 transition hover:border-neutral-400"
            >
              <p className="text-sm text-neutral-500">{post.date}</p>
              <h2 className="mt-2 text-xl font-medium">{post.title}</h2>
              <p className="mt-2 leading-7 text-neutral-600">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}