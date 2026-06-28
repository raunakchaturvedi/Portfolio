import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="
      relative
      min-h-[75vh]
      flex
      items-center
      justify-center
      px-6
      py-24
      overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-20
        items-center
        "
      >
        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Turning Ideas Into
            <br />
            <span className="text-cyan-400">
              Scalable Software
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-9">
            I am a Computer Science student and Full Stack Developer passionate
            about building secure backend systems, scalable APIs and modern web
            applications.

            <br /><br />

            My primary stack includes Java, Spring Boot, MySQL, React and modern
            web technologies.

            <br /><br />

            I enjoy solving complex problems, designing system architecture and
            creating applications that deliver real value.
          </p>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-12
          shadow-2xl
          "
        >
          <div className="space-y-10">

            <div>
              <h3 className="text-cyan-400 uppercase tracking-wider mb-2">
                Experience
              </h3>

              <p className="text-4xl font-bold">
                Fresher
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 uppercase tracking-wider mb-2">
                Projects
              </h3>

              <p className="text-4xl font-bold">
                10+
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 uppercase tracking-wider mb-2">
                Tech Stack
              </h3>

              <p className="text-2xl font-semibold leading-10">
                Java <br />
                Spring Boot <br />
                React
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;