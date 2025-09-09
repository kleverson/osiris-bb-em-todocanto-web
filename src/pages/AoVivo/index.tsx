import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PerguntasFaq } from "../../components/PerguntasFaq";
import { FinalistasTodoCanto } from "./sections/FinalistasTodoCanto";
import { BannerAoVivo } from "./sections/BannerAoVivo";

export function AoVivo() {
  return (
    <div>
      <Header />
      <div className="logged-container">
        <div className="logged-bg-unified"></div>
        <div className="relative z-10">
          <BannerAoVivo />
          <FinalistasTodoCanto />
        </div>
      </div>
      <PerguntasFaq />
      <Footer />
    </div>
  );
}
