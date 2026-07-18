import { useEffect, useState } from "react";

const Navbar = () => {
  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.getElementById(link.toLowerCase())
      );

      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        if (!section) return;

        if (
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="text-2xl font-bold text-white">
          Maham<span className="text-violet-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition ${
                active === link.toLowerCase()
                  ? "text-violet-400"
                  : "text-slate-300 hover:text-violet-400"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/maham-jamil-dev"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/maham-jamil-b83821322"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;