const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="text-lg font-bold">
            Maham<span className="text-violet-400">.</span>
          </p>

          <p className="mt-1 text-sm text-slate-500">
            MERN Stack Developer
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 Maham Jamil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;