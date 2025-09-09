import { LogoBBEmTodoCanto } from "../../../assets/Icons";

export function BannerAoVivo() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center py-5 pb-44 gap-8">
        <div className="w-[85%]">
          <LogoBBEmTodoCanto />
          <div className="space-y-6 mt-8 lg:ml-20">
            <h2 className="text-3xl lg:text-5xl font-black text-azul-bb font-bb-titulos">
              Estamos ao vivo!
            </h2>
            <p className="text-xl text-cinza-700">
              É hora de saber quem é o maior talento do BB em Todo Canto.
            </p>
            <p className="text-xl text-cinza-700 font-light">
              Vamos festejar e torcer juntos pela melhor voz!
            </p>
            <button className="px-6 lg:px-10 py-3 text-lg lg:text-2xl font-bold bg-rosa-600 text-white uppercase">
              assistir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
