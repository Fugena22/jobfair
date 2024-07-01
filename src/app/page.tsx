import About from "@/components/about";
import { Activities } from "@/components/activities";
import Benefits from "@/components/benefits";
import { Collab } from "@/components/collab";
import Companies from "@/components/companies";
import Connection from "@/components/connection";
import Contact from "@/components/contact";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Gift from "@/components/gift";
import { Hero } from "@/components/hero";
import Steps from "@/components/steps";
import { Target } from "@/components/target";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Collab />
      <Companies />
      <Benefits />
      <Target />
      <Activities />
      <Steps />
      <CTA />
      <Gift />
      <FAQ />
      <Connection />
      <Contact />
      <Footer />
    </div>
  );
}
