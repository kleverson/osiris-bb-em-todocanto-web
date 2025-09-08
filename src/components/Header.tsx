import { LogoHeaderBB } from "../assets/Icons";

export function Header() {
  return (
    <header className="w-full bg-azul-600 text-white flex justify-between h-14">
      <div className="flex items-start ml-10 z-10">
        <div className="w-24 h-w-24">
          <LogoHeaderBB />
        </div>
        <button className="px-6 h-full hover:bg-azul-bb/10 cursor-pointer duration-300 uppercase font-bold text-sm">
          o concurso
        </button>
        <button className="px-6 h-full hover:bg-azul-bb/10 cursor-pointer duration-300 uppercase font-bold text-sm">
          o concurso
        </button>
        <button className="px-6 h-full hover:bg-azul-bb/10 cursor-pointer duration-300 uppercase font-bold text-sm">
          Prêmios
        </button>
        <button className="px-6 h-full hover:bg-azul-bb/10 cursor-pointer duration-300 uppercase font-bold text-sm">
          como participar
        </button>
        <button className="px-6 h-full hover:bg-azul-bb/10 cursor-pointer duration-300 uppercase font-bold text-sm">
          equipe técnica
        </button>
        <button className="px-6 h-full hover:bg-azul-bb/10 cursor-pointer duration-300 uppercase font-bold text-sm">
          dúvidas
        </button>
        <button className="px-6 h-full hover:bg-azul-bb/10 cursor-pointer duration-300 uppercase font-bold text-sm">
          fale com a gente
        </button>
        <button className="px-6 h-full hover:bg-azul-bb/10 cursor-pointer duration-300 uppercase font-bold text-sm">
          regulamento
        </button>
      </div>
      <div>
        <button className="px-6 h-full cursor-pointer duration-300 uppercase font-bold text-sm bg-rosa-600">
          Iniciar sessão
        </button>
      </div>
    </header>
  );
}
