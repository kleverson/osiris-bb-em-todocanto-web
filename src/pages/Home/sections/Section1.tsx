import { Contator, LogoBBEmTodoCanto } from "../../../assets/Icons";
import { useAuth } from "../../../contexts/AuthContext";

export function Section1() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center py-12 gap-8">
        <div className="flex flex-col justify-center">
          {isAuthenticated ? (
            <div>
              <LogoBBEmTodoCanto />
              <div className="space-y-6 mt-8 lg:ml-20 max-w-md">
                <h2 className="text-3xl lg:text-5xl font-black text-azul-bb font-bb-titulos">
                  Brilhe. Encante. <br />
                  Faça parte
                </h2>
                <p className="text-lg lg:text-2xl text-azul-bb font-light">
                  O palco é seu! Participe do concurso musical exclusivo para
                  funcionários do BB e concorra a até 50 mil pontos Livelo.
                </p>
                <button className="px-7 py-3 text-lg rounded-sm font-bold bg-rosa-600 text-white uppercase cursor-pointer">
                  Conheça os classificados
                </button>
              </div>
            </div>
          ) : (
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
          )}
          <p className="text-sm lg:text-base text-azul-600 mt-20 font-light">
            *Confira o regulamento da campanha.
          </p>
        </div>
      </div>
    </div>
  );
}
