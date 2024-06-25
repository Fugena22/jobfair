import AboutUs from "@/components/about";
import { Activities } from "@/components/activities";
import Benefits from "@/components/benefits";
import { Collab } from "@/components/collab";
import Companies from "@/components/companies";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Target } from "@/components/target";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Collab />
      <Companies />
      <Benefits />
      <Target />
      <Activities />
      <FAQ />
      <Footer />
    </div>
  );
}
