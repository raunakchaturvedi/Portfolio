import { motion } from "framer-motion";

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "MySQL",
  "Hibernate",
  "REST API",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "SQL"
];

function Skills() {
  return (
    <section
      id="skills"
      className="
      min-h-[80vh]
      flex
      items-center
      justify-center
      px-6
      py-20
      "
    >
      <div className="max-w-6xl mx-auto">

        <h2
          className="
          text-center
          text-5xl
          font-bold
          mb-16
          "
        >
          My <span className="text-cyan-400">Tech Stack</span>
        </h2>

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-8
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05
              }}
              viewport={{ once: true }}
              className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-2xl
              p-8
              text-center
              text-xl
              font-semibold
              hover:border-cyan-400
              hover:scale-105
              transition
              duration-300
              "
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;