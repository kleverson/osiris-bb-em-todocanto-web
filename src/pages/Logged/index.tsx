import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { BannerLogged } from "../../components/BannerLogged";
import { PerguntasFaq } from "../../components/PerguntasFaq";
import { VoteNasMelhores } from "./sections/VoteNasMelhores";

export function Logged() {
  return (
    <div>
      <Header />
      <div className="logged-container">
        <div className="logged-bg-unified"></div>
        <div className="relative z-10">
          <BannerLogged />
          <VoteNasMelhores />
        </div>
      </div>
      <PerguntasFaq />
      <Footer />
    </div>
  );
}
