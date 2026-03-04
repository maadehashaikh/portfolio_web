import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

function ExperienceCard({ role, company, duration, points }) {
  return (
    <div className="w-full border border-gray-200 p-6 rounded-xl max-w-2xl bg-black ">
      <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-200">
        <div>
          <h3 className="text-xl font-medium  text-indigo-500">{role}</h3>
          <span>{company}</span>
        </div>
        <span className="text-sm">{duration}</span>
      </div>

      <ul className="list-disc px-5 mt-6 text-white space-y-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function MyExperience() {
  const experiences = [
    {
      role: "Junior Full Stack Developer",
      company: "TechFira",
      duration: "October 2022 – Present",
      points: [
        "Working on full-stack web applications using the MERN stack sql as database and Next.js",
        "Developing responsive UI components and integrating RESTful APIs",
        "Collaborating with team members to implement features and fix bugs",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Decentral Developers",
      duration: "July 2022 – September 2022",
      points: [
        "Assisted in building MERN-based web applications",
        "Implemented authentication and CRUD functionality",
        "Gained hands-on experience with APIs and databases",
      ],
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Client Projects",
      duration: "Contract-Based",
      points: [
        "Delivered multiple freelance projects using MERN stack and Next.js",
        "Built admin dashboards and role-based access systems",
        "Ensured responsive design, performance optimization, and timely delivery",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center" id="experience">
      <SectionTitle
        title="My Experience"
        description="I have over 1 year of experience as a Full Stack Developer, beginning with a 3-month internship and currently working as a Junior Full Stack Developer at TechFira."
      />

      <motion.div
        className="relative max-w-5xl py-20 mt-2 md:w-full mx-2 md:mx-auto flex flex-col gap-6 items-center"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </motion.div>
    </section>
  );
}
