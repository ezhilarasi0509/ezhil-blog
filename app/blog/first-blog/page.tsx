import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function FirstBlogPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-neutral-900">
      <article className="mx-auto max-w-3xl">
        <Navbar />

        <Link href="/blog" className="text-sm text-neutral-500 hover:text-neutral-900">
          ← Back to blog
        </Link>

        <p className="mt-10 text-sm text-neutral-500">May 28, 2026</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Why I Started This Blog
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-700">
          <p>
            I started this blog as a personal space to document what I learn as
            I continue growing as a software engineer.
          </p>

          <p>
            I completed my Integrated M.Tech in Software Engineering from VIT
            University, Vellore. This website is a clean record of my learning,
            technical understanding, notes, and practical experiences.
          </p>

          <p>
            My goal is not to write perfect articles from day one. My goal is to
            document learning honestly and professionally, with dates, clear
            explanations, and useful notes that I can revisit later.
          </p>

          <p>
            Over time, this blog will contain the things I learn, the concepts I
            understand, the tools I explore, and the projects I build.
          </p>
        </div>
      </article>
    </main>
  );
}