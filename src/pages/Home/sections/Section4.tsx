import { VetorBottomBranco, VetorTopAmarelo } from "../../../assets/Icons";

export function Section4() {
  return (
    <div id="como-participar" className="relative bg-rosa-600">
      <div className="absolute top-0 w-full z-10">
        <VetorTopAmarelo />
      </div>
      <div className="absolute -bottom-2 w-full z-10">
        <VetorBottomBranco />
      </div>
      <div className="relative max-w-6xl mx-auto w-full px-4 py-44">
        <div className="relative z-30 flex flex-col space-y-10">
          <h2 className="text-3xl sm:text-5xl text-amarelo-bb sm:text-center font-black font-bb-titulos">
            Veja como vai funcionar
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-2">
              <div className="flex items-center gap-6 text-amarelo-bb">
                <span className="w-16 h-16 md:w-[88px] md:h-[88px] rounded-full flex items-center justify-center border-4 border-amarelo-bb text-4xl md:text-5xl font-extrabold">
                  1
                </span>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-2xl font-extrabold uppercase">
                    inscrição
                  </span>
                  <span className="text-xl font-light uppercase">
                    15 a 26/09/2025
                  </span>
                </div>
              </div>
              <p className="text-lg sm:text-2xl text-white font-light">
                Grave seu vídeo (solo ou com sua banda formada por colegas do
                BB) e faça o upload na plataforma. Esse é o seu passaporte para
                o palco!
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-6 text-amarelo-bb">
                <span className="w-16 h-16 md:w-[88px] md:h-[88px] rounded-full flex items-center justify-center border-4 border-amarelo-bb text-4xl md:text-5xl font-extrabold">
                  2
                </span>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-2xl font-extrabold uppercase">
                    votação
                  </span>
                  <span className="text-xl font-light uppercase">
                    01 a 08/10/2025
                  </span>
                </div>
              </div>
              <p className="text-lg sm:text-2xl text-white font-light">
                Todos os colaboradores poderão assistir aos vídeos e votar nos
                seus artistas e bandas favoritos. Os mais votados garantem vaga
                na final em Brasília.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-6 text-amarelo-bb">
                <span className="w-16 h-16 md:w-[88px] md:h-[88px] rounded-full flex items-center justify-center border-4 border-amarelo-bb text-4xl md:text-5xl font-extrabold">
                  3
                </span>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-2xl font-extrabold uppercase">
                    A Grande Final
                  </span>
                  <span className="text-xl font-light uppercase">
                    25/10/2025
                  </span>
                </div>
              </div>
              <p className="text-lg sm:text-2xl text-white font-light">
                Os 3 melhores artistas solo e as 3 melhores bandas vão se
                apresentar ao vivo, durante a Jenaf 2025, em Brasília. Um show
                de talentos com transmissão para todo o BB.
              </p>
            </div>
          </div>

          <button className="px-7 py-3 font-bold bg-amarelo-bb text-azul-bb uppercase mx-auto rounded-sm cursor-pointer hover:scale-105 duration-300">
            confira o regulamento
          </button>
        </div>
      </div>
    </div>
  );
}
