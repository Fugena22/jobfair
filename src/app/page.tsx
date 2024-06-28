import About from "@/components/about";
import { Activities } from "@/components/activities";
import Benefits from "@/components/benefits";
import { Collab } from "@/components/collab";
import Companies from "@/components/companies";
import Connection from "@/components/connection";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Gift from "@/components/gift";
import { Hero } from "@/components/hero";
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
      <CTA />
      <Gift />
      <FAQ />
      <Connection />
      <Footer />
    </div>
  );
}
