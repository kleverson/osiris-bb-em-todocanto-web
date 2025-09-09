import { Contator, LogoBBEmTodoCanto } from "../../../assets/Icons";

export function Section1() {
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
        <div className="flex justify-center">
          <div className="w-[320px] h-[320px] lg:w-[568px] lg:h-[568px] relative">
            <Contator />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
              <h3 className="text-xl lg:text-3xl font-black text-amarelo-bb">
                Faltam apenas
              </h3>
              <div className="flex gap-2">
                <div className="w-[60px] h-[60px] lg:w-[88px] lg:h-[88px] rounded-full bg-amarelo-bb text-azul-bb flex flex-col justify-center items-center">
                  <span className="text-2xl lg:text-4xl font-bold">10</span>
                  <span className="text-xs lg:text-sm">dias</span>
                </div>
                <div className="w-[60px] h-[60px] lg:w-[88px] lg:h-[88px] rounded-full bg-amarelo-bb text-azul-bb flex flex-col justify-center items-center">
                  <span className="text-2xl lg:text-4xl font-bold">10</span>
                  <span className="text-xs lg:text-sm">horas</span>
                </div>
                <div className="w-[60px] h-[60px] lg:w-[88px] lg:h-[88px] rounded-full bg-amarelo-bb text-azul-bb flex flex-col justify-center items-center">
                  <span className="text-2xl lg:text-4xl font-bold">10</span>
                  <span className="text-xs lg:text-sm">minutos</span>
                </div>
              </div>
              <p className="text-lg lg:text-3xl text-white">
                para as inscrições serem encerradas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
