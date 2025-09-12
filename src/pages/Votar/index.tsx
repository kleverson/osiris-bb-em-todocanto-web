import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PerguntasFaq } from "./sections/PerguntasFaq";
import { VoteNasMelhores } from "./sections/VoteNasMelhores";
import { FormEstaSemBanda } from "./sections/FormEstaSemBanda";
import { BannerPrincipal } from "../../components/BannerPrincipal";

export function Votar() {
  return (
    <div>
      <Header />
      <div className="logged-container">
        <div className="logged-bg-unified"></div>
        <div className="relative z-10">
          <BannerPrincipal />
          <VoteNasMelhores />
        </div>
      </div>
      <FormEstaSemBanda />
      <PerguntasFaq />
      <Footer />
    </div>
  );
}
