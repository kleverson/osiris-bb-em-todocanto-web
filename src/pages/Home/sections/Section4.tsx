import { VetorBallonWithPink, VetorTopAmarelo } from "../../../assets/Icons";
import Person1 from "../../../assets/images/person1.png";
import Person2 from "../../../assets/images/person2.png";
import Person3 from "../../../assets/images/person3.png";

export function Section4() {
  return (
    <div className="relative bg-rosa-600">
      <div className="absolute top-0 w-full z-10">
        <VetorTopAmarelo />
      </div>
      <div className="relative max-w-6xl mx-auto w-full px-4 py-10">
        <div className="relative z-30 flex flex-col">
          <h2 className="text-3xl lg:text-5xl text-rosa-600 text-center font-black font-bb-titulos">
            Veja como vai funcionar
          </h2>
          <div className="grid grid-cols-3 gap-10 mt-32">
            <div className="space-y-4">
              <div className="flex items-center gap-6 text-amarelo-bb">
                <span className="w-[88px] h-[88px] rounded-full flex items-center justify-center border-4 border-amarelo-bb text-5xl font-extrabold">
                  1
                </span>
                <span className="text-2xl font-extrabold uppercase">
                  inscrição
                </span>
              </div>
              <p className="text-3xl text-white">
                Escolha uma das duas categorias e envie o seu vídeo de
                apresentação ou da sua banda com todos os integrantes no período
                de 15 a 26/9/25.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-6 text-amarelo-bb">
                <span className="w-[88px] h-[88px] rounded-full flex items-center justify-center border-4 border-amarelo-bb text-5xl font-extrabold">
                  2
                </span>
                <span className="text-2xl font-extrabold uppercase">
                  votação
                </span>
              </div>
              <p className="text-3xl text-white">
                Os melhores selecionados via votação online, vão embarcar rumo a
                Brasília/DF com tudo pago — passagem, hospedagem e muita emoção!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-6 text-amarelo-bb">
                <span className="w-[88px] h-[88px] rounded-full flex items-center justify-center border-4 border-amarelo-bb text-5xl font-extrabold">
                  3
                </span>
                <span className="text-2xl font-extrabold uppercase">final</span>
              </div>
              <p className="text-3xl text-white">
                Os finalistas disputarão a grande final no dia 25/10/25 em um
                showzaço ao vivo e transmitido aqui no site.
              </p>
            </div>
          </div>

          <button className="px-7 py-3 font-bold bg-amarelo-bb text-azul-bb uppercase mt-10 mx-auto rounded-sm cursor-pointer hover:brightness-90 transition">
            confira o regulamento
          </button>
        </div>
      </div>
      <div className="relative bg-roxo-600 -mt-10">
        <div className="absolute top-0 left-0 w-full z-10">
          <VetorBallonWithPink />
        </div>
        <div className="relative max-w-6xl mx-auto w-full px-4 z-20 grid grid-cols-1 lg:grid-cols-2 gap-10 pt-32 pb-10">
          <div className="space-y-6">
            <h2 className="text-5xl text-azul-bb font-bb-titulos">
              Conheça a <br />
              <strong>equipe técnica</strong>
            </h2>
            <p className="text-2xl text-cinza-700">
              O pontapé inicial acontece com o juri <br />
              técnico, que seleciona quem segue <br />
              para a votação online.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-8 items-center">
              <img src={Person1} alt="Rick Bonadio" />
              <div>
                <a
                  href="#"
                  className="text-2xl text-amarelo-bb uppercase underline font-extrabold"
                >
                  Rick Bonadio
                </a>
                <p className="text-2xl text-amarelo-bb">@rickbonadio</p>
                <p className="text-2xl text-white">
                  Um dos maiores nomes da música, produziu artistas como Titãs,
                  CPM22 e Rouge
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <img src={Person2} alt="Dudu Marote" />
              <div>
                <a
                  href="#"
                  className="text-2xl text-amarelo-bb uppercase underline font-extrabold"
                >
                  Dudu Marote
                </a>
                <p className="text-2xl text-amarelo-bb">@dudumarote</p>
                <p className="text-2xl text-white">
                  Renomado produtor musical, tecladista e engenheiro de som
                  brasileiro.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <img src={Person3} alt="MARYE" />
              <div>
                <a
                  href="#"
                  className="text-2xl text-amarelo-bb uppercase underline font-extrabold"
                >
                  MARYE
                </a>
                <p className="text-2xl text-amarelo-bb">@djmarye</p>
                <p className="text-2xl text-white">
                  DJ e produtora, comandou pistas renomadas como Caos,
                  Xxxperience, entre outras.
                </p>
              </div>
            </div>
            <button className="px-7 py-3 font-bold bg-amarelo-bb text-azul-bb uppercase mx-auto rounded-sm cursor-pointer hover:brightness-90 transition">
              confira o regulamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
