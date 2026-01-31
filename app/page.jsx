"use client";
import HeroSection from "@/sections/hero-section";
import AboutMe from "@/sections/about-me";
import GetInTouch from "@/sections/get-in-touch";
import Projects from "@/sections/projects";
import Services from "@/sections/services";
import TrustedCompanies from "@/sections/myExperience";

export default function Page() {
  return (
    <main className="px-6 md:px-16 lg:px-24 xl:px-32">
      <HeroSection />
      <AboutMe />
      <Projects />
      <Services />
      <TrustedCompanies />
      <GetInTouch />
    </main>
  );
}
