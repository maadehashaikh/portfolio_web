import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
  const testimonials = [
    {
      id: "1",
      quote:
        "Building scalable web applications using MERN stack and Next.js, including frontend, backend, and database integration.",
      role: "Full Stack Web Development",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      id: "2",
      quote:
        "Creating responsive and engaging user interfaces with Tailwind CSS, Ant Design, Framer Motion, and GSAP.",
      role: "UI & Frontend Development",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      id: "3",
      quote:
        "Developing secure REST APIs with Node.js, Express, MongoDB, including authentication and third-party integrations.",
      role: "Backend & API Integration",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="flex flex-col items-center" id="services">
      <SectionTitle
        title="My services"
        description="I provide end-to-end web development services focused on building fast, scalable, and user-friendly applications. From crafting modern interfaces to developing secure backend systems, I help businesses and organizations turn ideas into reliable digital products."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="group border border-slate-800 p-6 rounded-xl"
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
            <div className="flex items-center gap-3 group-hover:-translate-y-1 duration-300">
              <p className="text-indigo-500 text-2xl">{testimonial.role}</p>
            </div>
            <p className="text-slate-100 text-base mt-6">{testimonial.quote}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
