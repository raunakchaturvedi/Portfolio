import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Smart Attendance System",
    tech: "Spring Boot • MySQL • JWT • REST API",
    description:
      "Role-based attendance management system with JWT authentication, attendance tracking, reports and dashboard analytics.",
    github: "#",
    demo: "#",
  },
  {
    title: "Student Management System",
    tech: "Java • Spring Boot • MySQL",
    description:
      "CRUD-based management system for handling student records and database operations.",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="
      relative
      min-h-[75vh]
      px-6
      py-24
      overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-5xl md:text-6xl font-bold mb-20">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="space-y-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
              grid
              md:grid-cols-2
              gap-10
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-10
              hover:border-cyan-400
              hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
              transition-all
              duration-300
              "
            >
              {/* Left Side */}
              <div>
                <h3 className="text-4xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-cyan-400 mb-6 font-medium">
                  {project.tech}
                </p>

                <p className="text-gray-400 leading-8 text-lg">
                  {project.description}
                </p>

                <div className="mt-8 flex gap-4">

                  <a
                    href={project.github}
                    className="
                    flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    rounded-full
                    border
                    border-cyan-400
                    hover:bg-cyan-400/10
                    transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="
                    flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    rounded-full
                    bg-cyan-500
                    text-black
                    font-semibold
                    hover:scale-105
                    transition
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>
              </div>

              {/* Right Side */}
              <div
                className="
                rounded-2xl
                border
                border-white/10
                bg-slate-900/60
                flex
                items-center
                justify-center
                min-h-[260px]
                "
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-gray-400">
                    Project Preview
                    <br />
                    (Add screenshot here later)
                  </p>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;