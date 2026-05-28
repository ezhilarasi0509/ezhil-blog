import Link from "next/link";

const navItems = [
  { name: "home", href: "/" },
  { name: "blog", href: "/blog" },
  { name: "writing", href: "/writing" },
  { name: "off-topic", href: "/off-topic" },
  { name: "about", href: "/about" },
];

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between text-sm">
      <Link href="/" className="font-semibold text-neutral-900">
        Ezhilarasi S
      </Link>

      <div className="flex gap-6 text-neutral-600">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-neutral-900"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}