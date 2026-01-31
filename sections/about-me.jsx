import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

export default function AboutMe() {
  const sectionData = [
    {
      title: "Languages & Frameworks",
      description:
        "Proficient in JavaScript, React, Node.js, Express, tailwind, GSAP , Next.js, Typescript and more.",
      image: "../assets/brackets.jpg",
      className:
        "py-10 border-b border-slate-700 md:py-0 md:border-r md:border-b-0 md:px-10",
    },
    {
      title: "Educational Background",
      description:
        "Done Bachelors in Computer Science from Sindh University in 2024.",
      image: "../assets/books.jpg",
      className:
        "py-10 border-b border-slate-700 md:py-0 lg:border-r md:border-b-0 md:px-10",
    },
    {
      title: "Projects",
      description:
        "Done multiple client-based projects, collaborated remotely with teams, and led full stack development efforts.",
      image: "../assets/wrk.jpg",
      className:
        "py-10 border-b border-slate-700 md:py-0 md:border-b-0 md:px-10",
    },
  ];
  return (
    <section className="flex flex-col items-center" id="about">
      <SectionTitle
        title="About me"
        description="I am a Software Engineer and Full Stack Developer with over 1 year of hands-on experience building modern, scalable web applications. I specialize in the MERN stack and enjoy working across both front-end and back-end to turn ideas into functional, real-world solutions.I am passionate about writing clean, maintainable code and solving practical problems through technology. I have worked on multiple client-based projects, collaborated remotely with teams, and led full stack development efforts. I am always eager to learn new tools, improve my skills, and take on challenges that help me grow as a developer."
      />
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 mt-18">
        {sectionData.map((data, index) => (
          <motion.div
            key={data.title}
            className={data.className}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: `${index * 0.15}`,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <div className="size-18 p-2 bg-white border-2 border-blue-600 rounded">
              <img src={data.image} alt="" className="w-fit" />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-slate-200">
                {data.title}
              </h3>
              <p className="text-sm text-slate-400">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
