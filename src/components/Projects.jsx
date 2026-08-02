import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Teacher Management System",

    status: "Completed",

    description:
      "A full-stack MERN application for managing teacher records with secure authentication, CRUD operations, search functionality and responsive dashboard.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      "JWT Authentication",
      "Teacher CRUD",
      "Responsive Dashboard",
      "Search Teachers",
    ],

    github:
      "https://github.com/maham-jamil-dev/Teacher-Management-System",
  },

  {
    title: "Velnix E-Commerce",

    status: "Completed",

    description:
      "A complete MERN Stack E-Commerce platform featuring Buyer, Seller and Admin modules with secure authentication, product management, shopping cart, wishlist, checkout and order management. Built with a scalable backend architecture and responsive frontend.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      "Buyer, Seller & Admin Modules",
      "JWT Authentication",
      "OTP Email Verification",
      "Forgot & Reset Password",
      "Role Based Access",
      "Product CRUD",
      "Cart Management",
      "Wishlist",
      "Checkout & Orders",
      "Shipping Address",
      "Payment Method",
      "Advanced Search & Filters",
    ],

    github:
      "https://github.com/maham-jamil-dev/Velnix-Ecommerce",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#050816] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-400">
            My Work
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured <span className="text-violet-400">Projects.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            Here are some full-stack projects that showcase my MERN Stack
            development skills, backend architecture and responsive frontend
            development.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-900/20"
            >
              {/* Header */}

              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <span
                  className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                    project.status === "Completed"
                      ? "border-green-500/40 bg-green-500/10 text-green-400"
                      : "border-violet-500/40 bg-violet-500/10 text-violet-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Description */}

              <p className="mt-6 leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="mt-6 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-[#090c1a] px-3 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}

              <div className="mt-8 flex-1">
                <h4 className="mb-3 font-semibold text-violet-400">
                  Key Features
                </h4>

                <ul className="space-y-2 text-sm text-slate-400">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-0.5 text-violet-400">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Github */}

              <div className="mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-500 px-5 py-3 font-semibold text-violet-400 transition hover:bg-violet-500 hover:text-white"
                >
                  <FaGithub size={20} />
                  View Source Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;