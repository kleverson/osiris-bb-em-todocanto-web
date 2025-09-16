import { VetorBottomBranco } from "../../../assets/Icons";
import Dancarina from "../../../assets/images/dancarina.png";
import Jurado1 from "../../../assets/images/1.png";
import Jurado2 from "../../../assets/images/2.png";
import Jurado3 from "../../../assets/images/3.png";

export function Section4ConhecaJurados() {
  return (
    <div id="jurados" className="relative bg-azul-bb">
      <div className="absolute -bottom-2 w-full z-10">
        <VetorBottomBranco />
      </div>
      <div className="relative max-w-7xl mx-auto w-full px-4 py-44 pt-12">
        <div className="relative z-30 grid lg:grid-cols-2 gap-10">
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-3xl sm:text-5xl text-amarelo-bb font-light">
              Conheça os <strong className="font-extrabold">jurados</strong>
            </h2>
            <p className="text-lg sm:text-2xl text-white font-light">
              O pontapé inicial acontece como juri, que seleciona quem segue
              para a votação online.
            </p>
            <img
              src={Dancarina}
              alt="Dancarina"
              className="max-w-[70%] ml-auto hidden md:block"
            />
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 sm:gap-8">
              <img
                src={Jurado1}
                alt="Rick Bonadio"
                className="w-[93px] h-[93px] md:w-[181px] md:h-[181px]"
              />
              <div className="flex flex-col sm:gap-2 sm:text-2xl">
                <h3 className="font-bold text-amarelo-bb">Rick Bonadio</h3>
                <span className="font-light text-amarelo-bb">@rickbonadio</span>
                <p className="font-light text-white">
                  Um dos maiores nomes da música, produziu artistas como Titãs,
                  CPM22 e Rouge
                </p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-8">
              <img
                src={Jurado2}
                alt="Dudu Marote"
                className="w-[93px] h-[93px] md:w-[181px] md:h-[181px]"
              />
              <div className="flex flex-col sm:gap-2 sm:text-2xl">
                <h3 className="font-bold text-amarelo-bb">Dudu Marote</h3>
                <span className="font-light text-amarelo-bb">@dudumarote</span>
                <p className="font-light text-white">
                  Renomado produtor musical, tecladista e engenheiro de som
                  brasileiro.
                </p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-8">
              <img
                src={Jurado3}
                alt="MARYE"
                className="w-[93px] h-[93px] md:w-[181px] md:h-[181px]"
              />
              <div className="flex flex-col sm:gap-2 sm:text-2xl">
                <h3 className="font-bold text-amarelo-bb">MARYE</h3>
                <span className="font-light text-amarelo-bb">@djmarye</span>
                <p className="font-light text-white">
                  DJ e produtora, comandou pistas renomadas como Caos,
                  Xxxperience, entre outra
                </p>
              </div>
            </div>
            <img
              src={Dancarina}
              alt="Dancarina"
              className="max-w-[80%] mx-auto md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
