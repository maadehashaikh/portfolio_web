import SectionTitle from "@/components/section-title";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [className, setClassName] = useState("");

  const sectionData = [
    {
      title: "FoodTuck Website",
      description:
        "Developed a fully functional e-commerce website using Next.js and Sanity as the headless CMS. Implemented Clerk authentication for secure user sign-in and state management using Context API to handle global application state efficiently. Integrated dynamic product listings, cart functionality, and a seamless user experience.",
      image: "../assets/foodweb.png",
      align: "object-center",
      link: "https://www.linkedin.com/posts/maadeha-shaikh_nextjs-sanitycms-clerk-activity-7295164658217291778-qw7x?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcYS8BMSpeV9pRorpJfJTH1Usw6AJWn5k",
    },
    {
      title: "Haseen's Offical",
      description:
        "Built a full-stack e-commerce web application using the MERN stack, featuring secure Stripe payment integration, user authentication, cart management, and an admin dashboard for product CRUD operations. Implemented file uploads using Multer and designed scalable REST APIs.",
      image: "../assets/haseen offical.png",
      align: "object-right",
      link: "https://www.linkedin.com/posts/maadeha-shaikh_mernstack-ecommercedevelopment-stripepayments-activity-7286457198799458304-C2NX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcYS8BMSpeV9pRorpJfJTH1Usw6AJWn5k",
    },
    {
      title: "Rahe Illahi ",
      description:
        "Built a full-stack NGO Management System using MERN  to manage events and volunteer assignments, featuring role-based access control and approval workflows. Designed a responsive UI using Ant Design and Framer Motion, and developed RESTful APIs using Node.js, Express, and MongoDB.",
      image: "../assets/raheillahi.png",
      link: "https://youtu.be/Bqd2VbQ_ED4",
    },
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sectionData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, sectionData.length]);

  return (
    <section className="flex flex-col items-center" id="projects">
      <SectionTitle
        title="My Projects"
        description="A visual collection of our most recent works - each piece crafted with intention, emotion, and style."
      />

      <div
        className="flex items-center gap-4 h-100 w-full max-w-5xl mt-18 mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {sectionData.map((data, index) => (
          <motion.div
            key={data.title}
            className={`relative group flex-grow h-[400px] rounded-xl overflow-hidden ${isHovered && className ? "hover:w-full w-56" : index === activeIndex ? "w-full" : "w-56"} ${className} ${!className ? "pointer-events-none" : ""}`}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            onAnimationComplete={() =>
              setClassName("transition-all duration-500")
            }
            transition={{
              delay: `${index * 0.15}`,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <img
              className={`h-full w-full object-cover ${data.align}`}
              src={data.image}
              alt={data.title}
            />
            <div
              className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 transition-all duration-300 ${isHovered && className ? "opacity-0 group-hover:opacity-100" : index === activeIndex ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-semibold">{data.title}</h1>

                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </a>
              </div>

              <p className="text-sm mt-2">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
