import { motion } from "framer-motion";

function Stats() {
  const stats = [
    {
      number: "150+",
      title: "DSA Problems"
    },
    {
      number: "3+",
      title: "Projects"
    },
    {
      number: "5+",
      title: "Technologies"
    },
    {
      number: "100%",
      title: "Passion"
    }
  ];

  return (
    <section
      className="
      py-20
      px-6
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-4
        gap-6
        "
      >
        {stats.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{
              scale: 1.05
            }}
            className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-8
            text-center
            "
          >
            <h2
              className="
              text-5xl
              font-bold
              text-cyan-400
              "
            >
              {item.number}
            </h2>

            <p
              className="
              mt-4
              text-gray-400
              "
            >
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;