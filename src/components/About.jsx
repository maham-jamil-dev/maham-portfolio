import {
  FaUserGraduate,
  FaLaptopCode,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-[#080b18] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Building practical web
            <span className="text-violet-400"> experiences.</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">
              Hi, I'm Maham 👋
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              I'm a passionate MERN Stack Developer who enjoys building modern,
              responsive and user-friendly web applications using React.js,
              Node.js, Express.js and MongoDB.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              My focus is writing clean, maintainable code while developing
              secure REST APIs, authentication systems and full-stack projects
              that solve real-world problems.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              Currently, I'm expanding my skills through hands-on MERN projects
              and preparing myself for Software Engineering internships.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-500">
              <FaLaptopCode className="text-3xl text-violet-400" />

              <p className="mt-5 text-sm text-slate-500">
                Specialization
              </p>

              <h3 className="mt-2 text-xl font-bold">
                MERN Stack Development
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-500">
              <FaRocket className="text-3xl text-violet-400" />

              <p className="mt-5 text-sm text-slate-500">
                Current Project
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Velnix E-Commerce
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-500">
              <FaShieldAlt className="text-3xl text-violet-400" />

              <p className="mt-5 text-sm text-slate-500">
                Authentication
              </p>

              <h3 className="mt-2 text-xl font-bold">
                JWT & OTP Verification
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-500">
              <FaUserGraduate className="text-3xl text-violet-400" />

              <p className="mt-5 text-sm text-slate-500">
                Learning
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Advanced MERN Development
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;