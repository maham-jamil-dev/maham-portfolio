import { ArrowRight, FileText } from "lucide-react";
import developerImage from "../assets/developer.png";
const stats = [
  {
    number: "2+",
    label: "Projects Completed",
  },
  {
    number: "6 Months",
    label: "MERN Training",
  },
  {
    number: "100%",
    label: "Responsive Design",
  },
];
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] px-6 pt-32 text-white"
    >
      <div className="mx-auto grid min-h-[75vh] max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div>
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-violet-400">
            MERN Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm
            <span className="mt-2 block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Maham Jamil
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Passionate MERN Stack Developer focused on building responsive, scalable and user-friendly web applications using modern technologies. I enjoy solving real-world problems through clean and efficient code.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-3 rounded-xl bg-violet-600 px-6 py-4 font-semibold transition hover:bg-violet-500"
            >
              View Projects
              <ArrowRight size={20} />
            </a>

       <a
  href="/Maham-Jameel-CV.pdf"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-3 rounded-xl border border-white/15 px-6 py-4 font-semibold transition hover:border-violet-500"
>
  <FileText size={20} />
  Resume
</a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]"></div>

          <img
            src={developerImage}
            alt="Developer Illustration"
            className="relative z-10 w-full max-w-md rounded-3xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;