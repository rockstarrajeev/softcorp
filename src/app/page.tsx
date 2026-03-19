import Hero from "@/components/sections/Hero";
import AISolutions from "@/components/sections/AISolutions";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AISolutions />
      <Services />
      <CaseStudies />
      <About />
      <Process />
      <Contact />
    </>
  );
}
