import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PerguntasFaq } from "../../components/PerguntasFaq";
import { FinalistasTodoCanto } from "./sections/FinalistasTodoCanto";
import { BannerFinalistas } from "./sections/BannerFinalistas";

export function Finalistas() {
  return (
    <div>
      <Header />
      <div className="logged-container">
        <div className="logged-bg-unified"></div>
        <div className="relative z-10">
          <BannerFinalistas />
          <FinalistasTodoCanto />
        </div>
      </div>
      <PerguntasFaq />
      <Footer />
    </div>
  );
}
