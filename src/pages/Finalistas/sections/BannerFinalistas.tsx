import { LogoBBEmTodoCanto } from "../../../assets/Icons";

export function BannerFinalistas() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center py-5 gap-8">
        <div className="w-[85%]">
          <LogoBBEmTodoCanto />
          <div className="space-y-6 mt-8 lg:ml-20">
            <h2 className="text-3xl lg:text-5xl font-black text-azul-bb font-bb-titulos">
              Brilhe. Encante. <br />
              Faça parte.
            </h2>
            <p className="text-xl text-azul-bb font-light">
              O palco é seu! Participe do concurso musical exclusivo para
              funcionários do BB e concorra a até 50 mil pontos Livelo.
            </p>
            <button className="py-3 px-4 rounded-sm font-bold bg-rosa-600 text-white uppercase">
              Conheça os classificados
            </button>
            <p className="text-sm lg:text-base text-azul-600 mt-20 font-light">
              *Confira o regulamento da campanha.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
