import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import AISolutions from "@/components/sections/AISolutions";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";

// Code-split below-the-fold interactive components to optimize initial load & FCP
const ROIQuickEstimator = dynamic(() => import("@/components/sections/ROIQuickEstimator"), {
  loading: () => <div className="min-h-[300px] flex items-center justify-center opacity-0" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <div className="min-h-[300px] flex items-center justify-center opacity-0" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center opacity-0" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <AISolutions />
      <Services />
      <ROIQuickEstimator />
      <CaseStudies />
      <About />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}
