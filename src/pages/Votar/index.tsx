import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { BannerLogged } from "./sections/BannerLogged";
import { PerguntasFaq } from "../../components/PerguntasFaq";
import { VoteNasMelhores } from "./sections/VoteNasMelhores";
import { FormEstaSemBanda } from "./sections/FormEstaSemBanda";

export function Votar() {
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
      <FormEstaSemBanda />
      <PerguntasFaq />
      <Footer />
    </div>
  );
}
