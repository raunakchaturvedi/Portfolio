import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaRocket,
  FaUser,
  FaDownload,
  FaChevronDown,
} from "react-icons/fa";
import { LuMouse } from "react-icons/lu";
// import profile from "../assets/Profile.jpg";

function Hero() {
  return (
    <section
  id="home"
  className="
  relative
  min-h-screen
  flex
  items-center
  overflow-hidden
  bg-[#020617]
  px-6
  pt-28
  md:pt-32
  "
>
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-60 -left-40 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute -bottom-60 -right-40 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[170px]" />

        <div className="absolute top-40 left-36 w-2 h-2 rounded-full bg-cyan-300" />

        <div className="absolute top-80 right-60 w-2 h-2 rounded-full bg-white" />

        <div className="absolute bottom-40 left-1/3 w-2 h-2 rounded-full bg-cyan-400" />

      </div>

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        items-center
        gap-16
        w-full
        "
      >

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p
            className="
            uppercase
            tracking-[8px]
            text-cyan-400
            font-semibold
            mb-6
            "
          >
            Hello, I'm
          </p>

          <h1
            className="
            text-6xl
            md:text-[90px]
            font-black
            leading-none
            bg-gradient-to-r
            from-white
            to-cyan-300
            bg-clip-text
            text-transparent
            "
          >
            Raunak
            <br />
            Chaturvedi
          </h1>
                    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400">
              <TypeAnimation
                sequence={[
                  "Java Backend Developer",
                  1500,
                  "Spring Boot Developer",
                  1500,
                  "Backend Engineer",
                  1500,
                  "Full Stack Developer",
                  1500,
                ]}
                speed={45}
                repeat={Infinity}
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
            mt-8
            max-w-xl
            text-gray-400
            text-lg
            leading-8
            "
          >
            Passionate about building scalable backend systems,
            secure REST APIs and modern web applications using
            Java, Spring Boot, React and MySQL.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="
            flex
            flex-wrap
            gap-5
            mt-10
            "
          >
            

            <a
              href="/cognizant_resume.pdf"
              download
              className="
              flex
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              border
              border-green-400
              text-green-400
              hover:bg-green-400/10
              transition-all
              duration-300
              "
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>
                    
    </motion.div>
          

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
          hidden
          md:flex
          justify-center
          items-center
          relative
          "
        >
          {/* Glow */}

          <div className="absolute w-[430px] h-[430px] rounded-full bg-cyan-500/20 blur-[120px]" />

          {/* Outer Circle */}

          <div
            className="
            relative
            w-[380px]
            h-[380px]
            rounded-full
            border
            border-cyan-400/20
            bg-white/5
            backdrop-blur-xl
            flex
            items-center
            justify-center
            overflow-hidden
            "
          >
            {/* Replace this with your image later */}

            <img
              src="/Profile.png"
              alt="Raunak"
              className="
              w-full
              h-full
              object-cover
              rounded-full
              "
            />
          </div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
            absolute
            bottom-4
            -left-4
            bg-[#0f172a]
            border
            border-cyan-400/20
            rounded-2xl
            px-6
            py-4
            "
          >
            <p className="text-cyan-400 text-sm">
              Experience
            </p>

            <h3 className="text-2xl font-bold">
              Fresher
            </h3>
          </motion.div>

        </motion.div>

      </div>

            {/* Scroll Indicator */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        text-cyan-400
        cursor-pointer
        "
      >
        <LuMouse
          size={30}
          className="mb-2"
        />

        <FaChevronDown />
      </motion.a>

    </section>
  );
}

export default Hero;

