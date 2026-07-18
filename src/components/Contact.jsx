const Contact = () => {
  return (
    <section id="contact" className="bg-[#050816] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-16 text-center md:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-400">
            Contact Me
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Let's Build Something{" "}
            <span className="text-violet-400">Together.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I'm open to internship opportunities and exciting web development
            projects. Feel free to get in touch.
          </p>

          <a
            href="mailto:mahamjameel.dev@gmail.com"
            className="mt-10 inline-flex rounded-xl bg-violet-600 px-8 py-4 font-semibold transition duration-300 hover:bg-violet-500"
          >
            mahamjameel.dev@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;