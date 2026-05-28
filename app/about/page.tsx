export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-neutral-900">
      <section className="mx-auto max-w-3xl">
        <nav className="mb-20 flex items-center justify-between text-sm">
          <h1 className="font-semibold">Ezhilarasi S</h1>

          <div className="flex gap-6 text-neutral-600">
            <a href="/blog">Blog</a>
            <a href="/writing">Writing</a>
            <a href="/off-topic">Off-topic</a>
            <a href="/about">About</a>
          </div>
        </nav>

        <section className="space-y-6">
          <p className="text-sm text-neutral-500">Hi, I&apos;m Ezhilarasi S</p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            I document what I learn as a software engineer.
          </h2>

          <p className="text-lg leading-8 text-neutral-600">
            I completed my Integrated M.Tech in Software Engineering from VIT
            University, Vellore.
          </p>

          <p className="text-lg leading-8 text-neutral-600">
            This website is my personal space to document what I learn, build,
            explore, and understand — with dates, notes, commands, and clear
            explanations.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="mb-4 text-xl font-semibold">Recent documentation</h3>

          <div className="space-y-4">
            <article className="rounded-2xl border border-neutral-200 p-5">
              <p className="text-sm text-neutral-500">Coming soon</p>
              <h4 className="mt-2 text-lg font-medium">
                Setting Up My Personal Blog Website
              </h4>
            </article>

            <article className="rounded-2xl border border-neutral-200 p-5">
              <p className="text-sm text-neutral-500">Coming soon</p>
              <h4 className="mt-2 text-lg font-medium">
                Commands I Used While Building This Blog
              </h4>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}