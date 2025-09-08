import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section1 } from "./sections/Section1";
import { Section2 } from "./sections/Section2";
import { Section3 } from "./sections/Section3";
import { Section4 } from "./sections/Section4";
import { Section5Form } from "./sections/Section5Form";
import { Section6 } from "./sections/Section6";

export function Home() {
  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="home-bg-unified"></div>
        <div className="relative z-10">
          <Section1 />
          <Section2 />
        </div>
      </div>
      <Section3 />
      <Section4 />
      <Section5Form />
      <Section6 />
      <Footer />
    </div>
  );
}
