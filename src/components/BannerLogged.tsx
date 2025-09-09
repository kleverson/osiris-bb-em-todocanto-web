import { LogoBBEmTodoCanto } from "../assets/Icons";

export function BannerLogged() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center py-5 gap-8">
        <div>
          <LogoBBEmTodoCanto />
          <div className="space-y-6 mt-8 lg:ml-20">
            <h2 className="text-3xl lg:text-5xl font-black text-azul-bb font-bb-titulos">
              Brilhe. Encante. <br />
              Faça parte
            </h2>
            <p className="text-lg lg:text-2xl text-cinza-700">
              Um concurso musical criado para os funcionários do Banco do
              Brasil, com prêmios de até 50 mil pontos Livelo.
            </p>
            <button className="px-6 lg:px-10 py-3 lg:py-5 text-lg lg:text-2xl font-bold bg-rosa-600 text-white uppercase">
              Inscreva-se
            </button>
            <p className="text-sm lg:text-base text-azul-600 mt-20">
              *Confira o regulamento da campanha.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
