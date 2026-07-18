import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiMongoose,
} from "react-icons/si";

import { PiCursorFill } from "react-icons/pi";
const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and modern user interfaces.",
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "React.js", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Responsive Web Design", icon: FaLaptopCode },
      { name: "UI / UX", icon: FaLaptopCode },
    ],
  },

  {
    title: "Backend & Database",
    description: "Developing APIs, authentication and database systems.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "REST APIs", icon: FaNodeJs },
      { name: "JWT Authentication", icon: FaNodeJs },
    ],
  },

  {
    title: "Development Tools",
    description: "Tools I use throughout my development workflow.",
    skills: [
      { name: "VS Code", icon: FaCode },
      { name: "Cursor AI", icon: PiCursorFill },
      { name: "MongoDB Compass", icon: SiMongodb },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
    ],
  },
];
const Skills = () => {

return (
  <section id="skills" className="bg-[#080b18] px-6 py-24 text-white">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-400">
          My Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Technologies I{" "}
          <span className="text-violet-400">Work With.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-slate-400">
          Technologies and tools I use to build modern full-stack web
          applications.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-900/20"
          >
            <h3 className="text-xl font-bold text-violet-400">
              {group.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {group.description}
            </p>

            <div className="mt-7 space-y-3">
              {group.skills.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#090c1a] px-4 py-3 transition duration-300 hover:border-violet-500 hover:bg-violet-500/10"
                >
                  <Icon
                    size={22}
                    className="text-violet-400 flex-shrink-0"
                  />

                  <span className="text-sm text-slate-300">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Skills;