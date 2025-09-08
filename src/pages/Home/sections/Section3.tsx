import { Rockeiro, VetorTopAzul } from "../../../assets/Icons";

export function Section3() {
  return (
    <div className="relative bg-amarelo-bb">
      <div className="absolute top-0 w-full">
        <VetorTopAzul />
      </div>
      <div className="max-w-6xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="z-20">
          <h2 className="text-3xl lg:text-5xl text-amarelo-bb font-black">
            Concorra a 50 mil <br />
            pontos Livelo
          </h2>
          <p className="text-lg lg:text-2xl text-cinza-700 mt-28 mb-8">
            A banda campeã vai receber <strong>50 mil pontos Livelo</strong>{" "}
            para Turbinar a conquista, e o artista solo vencedor{" "}
            <strong>garante 10 mil pontos</strong> para seguir transformando sua
            música em realidade.
          </p>
          <button className="px-6 lg:px-10 py-3 lg:py-5 text-lg lg:text-2xl font-bold bg-azul-bb text-white uppercase rounded-sm">
            confira o regulamento
          </button>
        </div>
        <div className="hidden lg:block z-20">
          <Rockeiro />
        </div>
      </div>
    </div>
  );
}
