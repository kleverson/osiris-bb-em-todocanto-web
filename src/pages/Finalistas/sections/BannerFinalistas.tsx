import { LogoBBEmTodoCanto } from "../../../assets/Icons";

export function BannerFinalistas() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center py-5 gap-8">
        <div className="w-[85%]">
          <LogoBBEmTodoCanto />
          <div className="space-y-6 mt-8 lg:ml-20">
            <h2 className="text-3xl lg:text-5xl font-black text-azul-bb font-bb-titulos">
              Conheça os finalistas
            </h2>
            <p className="text-xl text-cinza-700">
              Falta pouco pra você saber quem é o maior talento do BB em Todo
              Canto.
            </p>
            <p className="text-xl text-cinza-700 font-light">
              Os finalistas se apresentarão em 25/10 a partir das 16h na Jenaf,
              em Brasília/DF. <strong>Venha festejar com a gente!</strong> Você
              também poderá assistir os shows por transmissão ao vivo em nosso
              site.
            </p>
            <button className="px-6 lg:px-10 py-3 lg:py-5 text-lg lg:text-2xl font-bold bg-rosa-600 text-white uppercase">
              ver todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
