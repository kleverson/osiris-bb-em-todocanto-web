import { Link } from "react-router-dom";
import { LogoHeaderBB } from "../assets/Icons";
import { useAuth } from "../contexts/AuthContext";

export function Header() {
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <header className="w-full bg-azul-600 text-white flex justify-between h-14">
      <div className="flex items-start ml-10 z-10">
        <Link to="/" className="w-24 h-w-24">
          <LogoHeaderBB />
        </Link>
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
      <div className="flex">
        {isAuthenticated ? (
          <>
            <span className="px-6 h-full cursor-pointer duration-300 uppercase font-bold text-sm bg-rosa-600 hover:bg-rosa-700 flex gap-2.5 items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4628 13.2C18.4022 11.9092 19.6875 9.70378 19.6875 7.2C19.6875 3.23027 16.4628 0 12.5 0C8.53716 0 5.3125 3.23027 5.3125 7.2C5.3125 9.70378 6.59459 11.9092 8.53716 13.2C4.14372 14.8249 1 19.0443 1 24H2.91667C2.91667 18.707 7.21622 14.4 12.5 14.4C17.7838 14.4 22.0833 18.707 22.0833 24H24C24 19.0443 20.8563 14.8216 16.4628 13.2ZM12.5 12.48C9.59262 12.48 7.22917 10.1124 7.22917 7.2C7.22917 4.28757 9.59262 1.92 12.5 1.92C15.4074 1.92 17.7708 4.28757 17.7708 7.2C17.7708 10.1124 15.4074 12.48 12.5 12.48Z"
                  fill="#FCFC30"
                />
              </svg>
              {user?.name}
            </span>
            <button
              onClick={logout}
              className="px-6 h-full cursor-pointer duration-300 uppercase font-bold text-sm bg-rosa-600 hover:bg-rosa-700 border-l border-amarelo-bb"
            >
              Sair
            </button>
          </>
        ) : (
          <button
            onClick={login}
            className="px-6 h-full cursor-pointer duration-300 uppercase font-bold text-sm bg-rosa-600 hover:bg-rosa-700"
          >
            Iniciar sessão
          </button>
        )}
      </div>
    </header>
  );
}
