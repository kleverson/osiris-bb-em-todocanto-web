import { VetorTopRoxo } from "../../../assets/Icons";

export function Section5Form() {
  return (
    <div className="relative bg-cinza-200">
      <div className="absolute top-0 w-full z-10">
        <VetorTopRoxo />
      </div>
      <div className="relative max-w-5xl mx-auto w-full px-4 py-32 z-30 grid grid-cols-2 gap-10">
        <div className="space-y-5">
          <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold">
            Mostre seu talento musical
          </h2>
          <p className="text-xl text-cinza-600">
            Cante, toque, arrase! Envie o seu vídeo de apresentação e concorra
            ao prêmio de até 50 mil pontos Livelo.
          </p>
        </div>
        <form className="border-l-2 pl-10 border-cinza-400 flex flex-col">
          <label className="flex flex-col gap-2">
            <span className="text-cinza-600 font-medium">Matrícula</span>
            <input
              type="text"
              placeholder="Digite a sua matrícula"
              className="bg-white p-4 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
            />
          </label>
          <label className="flex flex-col gap-2 mt-6">
            <span className="text-cinza-600 font-medium">Senha</span>
            <input
              type="password"
              placeholder="********"
              className="bg-white p-4 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
            />
          </label>
          <button className="px-7 py-3 font-bold bg-azul-bb text-white uppercase mt-10 ml-auto rounded-sm cursor-pointer hover:brightness-90 transition">
            continuar
          </button>
        </form>
      </div>
    </div>
  );
}
