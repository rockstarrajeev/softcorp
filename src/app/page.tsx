import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

import { client } from "@/sanity/lib/client";

export default async function Home() {
  const companyData = await client.fetch(`*[_type == "companyInfo"][0]`, {}, { next: { revalidate: 60 } });

  return (
    <>
      <Hero companyData={companyData} />
      <Services />
      <About />
      <Process />
      <Contact />
    </>
  );
}
