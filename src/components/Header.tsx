import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { scroller } from "react-scroll";
import { LogoHeaderBB } from "../assets/Icons";
import { useAuth } from "../contexts/AuthContext";
import { ModalLogin } from "./ModalLogin";

export function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -56,
        });
      }, 100);
    } else {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -56,
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMobileNavigation = (sectionId: string) => {
    closeMenu();
    scrollToSection(sectionId);
  };

  return (
    <>
      <header className="w-full bg-azul-bb text-white flex justify-between items-center h-14 relative z-50">
        <div className="flex items-center gap-5 ml-4 lg:ml-10 z-10">
          <Link to="/" className="flex-shrink-0">
            <LogoHeaderBB />
          </Link>

          <nav className="hidden lg:flex items-center gap-5">
            <button
              onClick={() => scrollToSection("o-concurso")}
              className="hover:text-amarelo-bb cursor-pointer duration-300 uppercase font-bold text-sm whitespace-nowrap"
            >
              o concurso
            </button>
            <button
              onClick={() => scrollToSection("como-participar")}
              className="hover:text-amarelo-bb cursor-pointer duration-300 uppercase font-bold text-sm whitespace-nowrap"
            >
              como participar
            </button>
            <button
              onClick={() => scrollToSection("premios")}
              className="hover:text-amarelo-bb cursor-pointer duration-300 uppercase font-bold text-sm whitespace-nowrap"
            >
              prêmios
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="hover:text-amarelo-bb cursor-pointer duration-300 uppercase font-bold text-sm whitespace-nowrap"
            >
              como funciona
            </button>
            {/* <button
              onClick={() => scrollToSection("jurados")}
              className="hover:text-amarelo-bb cursor-pointer duration-300 uppercase font-bold text-sm whitespace-nowrap"
            >
              jurados
            </button> */}
            <button
              onClick={() => scrollToSection("esta-sem-banda")}
              className="hover:text-amarelo-bb cursor-pointer duration-300 uppercase font-bold text-sm whitespace-nowrap"
            >
              Está sem banda
            </button>
            <button
              onClick={() => scrollToSection("duvidas")}
              className="hover:text-amarelo-bb cursor-pointer duration-300 uppercase font-bold text-sm whitespace-nowrap"
            >
              dúvidas
            </button>
            <button
              onClick={() => scrollToSection("regulamento")}
              className="hover:text-amarelo-bb cursor-pointer duration-300 uppercase font-bold text-sm whitespace-nowrap"
            >
              regulamento
            </button>
          </nav>
        </div>

        <div className="flex items-center mr-4 lg:mr-0">
          <div className="hidden lg:flex">
            {isAuthenticated ? (
              <>
                <span className="px-6 h-14 duration-300 uppercase font-bold text-sm bg-rosa-600 hover:bg-rosa-700 flex gap-2.5 items-center justify-center">
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
                  {user?.name ?? user?.registry}
                </span>
                <button
                  onClick={logout}
                  className="px-6 h-14 cursor-pointer duration-300 uppercase font-bold text-sm bg-rosa-600 hover:bg-rosa-700 border-l border-amarelo-bb"
                >
                  Sair
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-6 h-14 cursor-pointer duration-300 uppercase font-bold text-sm bg-rosa-600 hover:bg-rosa-700"
              >
                Iniciar sessão
              </button>
            )}
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1 focus:outline-none"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-azul-bb text-white transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-end px-6 pt-4">
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center text-white hover:text-amarelo-bb transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="p-6">
            {isAuthenticated ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4628 13.2C18.4022 11.9092 19.6875 9.70378 19.6875 7.2C19.6875 3.23027 16.4628 0 12.5 0C8.53716 0 5.3125 3.23027 5.3125 7.2C5.3125 9.70378 6.59459 11.9092 8.53716 13.2C4.14372 14.8249 1 19.0443 1 24H2.91667C2.91667 18.707 7.21622 14.4 12.5 14.4C17.7838 14.4 22.0833 18.707 22.0833 24H24C24 19.0443 20.8563 14.8216 16.4628 13.2ZM12.5 12.48C9.59262 12.48 7.22917 10.1124 7.22917 7.2C7.22917 4.28757 9.59262 1.92 12.5 1.92C15.4074 1.92 17.7708 4.28757 17.7708 7.2C17.7708 10.1124 15.4074 12.48 12.5 12.48Z"
                      fill="#FCFC30"
                    />
                  </svg>
                  <div>
                    <p className="font-bold text-lg">
                      {user?.name ?? user?.registry}
                    </p>
                    <p className="text-sm text-gray-300">Usuário logado</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="w-full bg-rosa-600 hover:bg-rosa-700 text-white py-3 px-4 rounded-sm uppercase font-bold text-sm transition-colors"
                >
                  Sair
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsLoginModalOpen(true);
                  closeMenu();
                }}
                className="w-full bg-rosa-600 hover:bg-rosa-700 text-white py-3 px-4 rounded-sm uppercase font-bold text-sm transition-colors"
              >
                Iniciar sessão
              </button>
            )}
          </div>
          <nav className="flex-1 px-6">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleMobileNavigation("o-concurso")}
                  className="block w-full text-left py-3 px-4 hover:bg-azul-500 hover:text-amarelo-bb transition-colors uppercase font-bold text-sm rounded-sm"
                >
                  O Concurso
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMobileNavigation("como-participar")}
                  className="block w-full text-left py-3 px-4 hover:bg-azul-500 hover:text-amarelo-bb transition-colors uppercase font-bold text-sm rounded-sm"
                >
                  Como Participar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMobileNavigation("premios")}
                  className="block w-full text-left py-3 px-4 hover:bg-azul-500 hover:text-amarelo-bb transition-colors uppercase font-bold text-sm rounded-sm"
                >
                  Prêmios
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMobileNavigation("como-funciona")}
                  className="block w-full text-left py-3 px-4 hover:bg-azul-500 hover:text-amarelo-bb transition-colors uppercase font-bold text-sm rounded-sm"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMobileNavigation("esta-sem-banda")}
                  className="block w-full text-left py-3 px-4 hover:bg-azul-500 hover:text-amarelo-bb transition-colors uppercase font-bold text-sm rounded-sm"
                >
                  Está sem banda
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMobileNavigation("duvidas")}
                  className="block w-full text-left py-3 px-4 hover:bg-azul-500 hover:text-amarelo-bb transition-colors uppercase font-bold text-sm rounded-sm"
                >
                  Dúvidas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMobileNavigation("regulamento")}
                  className="block w-full text-left py-3 px-4 hover:bg-azul-500 hover:text-amarelo-bb transition-colors uppercase font-bold text-sm rounded-sm"
                >
                  Regulamento
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <ModalLogin
        isOpen={isLoginModalOpen}
        onClose={() => {
          setIsLoginModalOpen(false);
          scrollToSection("inscreva-se");
        }}
      />
    </>
  );
}
