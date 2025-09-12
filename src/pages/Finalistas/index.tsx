import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FinalistasTodoCanto } from "./sections/FinalistasTodoCanto";
import { PerguntasFaq } from "./sections/PerguntasFaq";
import { BannerPrincipal } from "../../components/BannerPrincipal";

export function Finalistas() {
  return (
    <div>
      <Header />
      <div className="logged-container">
        <div className="logged-bg-unified"></div>
        <div className="relative z-10">
          <BannerPrincipal />
          <FinalistasTodoCanto />
        </div>
      </div>
      <PerguntasFaq />
      <Footer />
    </div>
  );
}
