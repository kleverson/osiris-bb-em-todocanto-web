import { useState, useMemo, useEffect } from "react";
import {
  VetorBottomEstaSemBanda,
  VetorTopEstaSemBanda,
} from "../../../assets/Icons";
import { ModalCadastrarBanda } from "../../../components/ModalCadastrarBanda";
import { ModalLogin } from "../../../components/ModalLogin";

import { useAuth } from "../../../contexts/AuthContext";
import { classifiedService, type ClassifiedItem } from "../../../services/api";
import { useDebounce } from "../../../hooks/useDebounce";

export function Section6FormEstaSemBanda() {
  const { isAuthenticated } = useAuth();
  const [filtroAtivo, setFiltroAtivo] = useState<"Todos" | "Solo" | "Banda">(
    "Todos"
  );
  const [inputValue, setInputValue] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 6;
  const [openModal, setOpenModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [musicos, setMusicos] = useState<ClassifiedItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [mostrandoTodos, setMostrandoTodos] = useState(false);

  const busca = useDebounce(inputValue, 500);

  const fetchClassifieds = async (mostrarTodos = false) => {
    try {
      setLoading(true);
      const response = await classifiedService.searchClassifieds({
        term: busca || undefined,
        page: mostrarTodos ? 1 : paginaAtual,
        limit: mostrarTodos ? 100 : itensPorPagina,
      });

      setMusicos(response.data);
      setTotalPaginas(response.total_pages);
      setMostrandoTodos(mostrarTodos);
    } catch (error) {
      console.error("Erro ao buscar classificados:", error);
      setMusicos([]);
      setTotalPaginas(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!mostrandoTodos) {
      fetchClassifieds();
    }
  }, [busca, paginaAtual, mostrandoTodos]);

  const musicosFiltrados = useMemo(() => {
    return musicos.filter((musico) => {
      const passaFiltroTipo =
        filtroAtivo === "Todos" || musico.category === filtroAtivo;
      return passaFiltroTipo;
    });
  }, [musicos, filtroAtivo]);

  const musicosParaMostrar = musicosFiltrados;
  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
  const indiceFim = indiceInicio + musicosParaMostrar.length;

  const calcularPaginasVisiveis = () => {
    const maxPaginas = 7;
    let inicio = Math.max(1, paginaAtual - Math.floor(maxPaginas / 2));
    let fim = Math.min(totalPaginas, inicio + maxPaginas - 1);

    if (fim - inicio + 1 < maxPaginas) {
      inicio = Math.max(1, fim - maxPaginas + 1);
    }

    return Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i);
  };

  const paginasVisiveis = calcularPaginasVisiveis();

  const handleFiltroChange = (novoFiltro: "Todos" | "Solo" | "Banda") => {
    setFiltroAtivo(novoFiltro);
    setMostrandoTodos(false);
  };

  const handleInputChange = (novoValor: string) => {
    setInputValue(novoValor);
    setPaginaAtual(1);
    setMostrandoTodos(false);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    fetchClassifieds();
  };

  const handlePublicarClick = () => {
    if (isAuthenticated) {
      setOpenModal(true);
    } else {
      setOpenLoginModal(true);
    }
  };

  const handleLoginSuccess = () => {
    setOpenLoginModal(false);
    setOpenModal(true);
  };

  const handleLoginCancel = () => {
    setOpenLoginModal(false);
  };

  const handleMostrarTudo = () => {
    if (mostrandoTodos) {
      setMostrandoTodos(false);
      setPaginaAtual(1);
      fetchClassifieds();
    } else {
      fetchClassifieds(true);
    }
  };
  return (
    <div id="esta-sem-banda" className="bg-roxo-600 relative">
      <div className="absolute top-0 w-full z-10">
        <VetorTopEstaSemBanda />
      </div>
      <div className="absolute bottom-0 w-full z-10">
        <VetorBottomEstaSemBanda />
      </div>
      <div className="relative max-w-7xl mx-auto w-full px-4 py-24 sm:pb-44 z-30">
        <div className="flex flex-col lg:flex-row gap-5 justify-between lg:items-end">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-bb-titulos text-white lg:text-azul-bb">
              Monte a <br />
              sua banda?
            </h2>
            <p className="text-lg sm:text-xl text-white lg:text-azul-bb font-light">
              A gente te ajuda a encontrar <br />
              quem está faltando.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xl">
            <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-sm overflow-hidden flex gap-2 items-center w-full shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#7b7f8b"
                viewBox="0 0 16 16"
                className="flex-shrink-0"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>

              <input
                type="text"
                className="w-full text-azul-bb focus:outline-none px-2 text-sm sm:text-base"
                placeholder="Busque por artista solo, banda ou nome do funcionário"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:ml-auto">
              <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={() => handleFiltroChange("Todos")}
                  className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 w-full sm:w-28 rounded-sm uppercase cursor-pointer font-bold text-sm sm:text-base ${
                    filtroAtivo === "Todos"
                      ? "bg-azul-bb text-white"
                      : "bg-amarelo-bb text-azul-bb"
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => handleFiltroChange("Solo")}
                  className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 w-full sm:w-28 rounded-sm uppercase cursor-pointer font-bold text-sm sm:text-base ${
                    filtroAtivo === "Solo"
                      ? "bg-azul-bb text-white"
                      : "bg-amarelo-bb text-azul-bb"
                  }`}
                >
                  Solo
                </button>
                <button
                  onClick={() => handleFiltroChange("Banda")}
                  className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 w-full sm:w-28 rounded-sm uppercase cursor-pointer font-bold text-sm sm:text-base ${
                    filtroAtivo === "Banda"
                      ? "bg-azul-bb text-white"
                      : "bg-amarelo-bb text-azul-bb"
                  }`}
                >
                  Banda
                </button>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 py-12 sm:py-16 md:py-20">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="border border-dashed border-verde-500/30 rounded-2xl sm:rounded-3xl flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 text-lg sm:text-xl animate-pulse"
              >
                <div className="h-5 sm:h-6 bg-white/20 rounded-lg w-3/4"></div>

                <div className="font-light flex flex-col gap-1 border-b border-verde-500/30 pb-2">
                  <div className="h-4 sm:h-5 bg-white/15 rounded w-16 px-3 sm:px-5 py-1"></div>
                  <div className="w-full bg-verde-500/50 h-6 sm:h-8 px-3 sm:px-5 py-1 rounded-2xl sm:rounded-3xl flex items-center">
                    <div className="h-3 sm:h-4 bg-azul-bb/30 rounded w-20"></div>
                  </div>
                  <div className="h-4 sm:h-5 bg-white/15 rounded w-24 px-3 sm:px-5 py-1"></div>
                </div>

                <div className="font-light flex flex-col gap-2 text-base sm:text-lg">
                  <div className="h-3 sm:h-4 bg-white/15 rounded w-32"></div>
                  <div className="h-3 sm:h-4 bg-white/15 rounded w-28"></div>
                  <div className="h-3 sm:h-4 bg-white/15 rounded w-36"></div>
                </div>
              </div>
            ))}
          </div>
        ) : musicosParaMostrar.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 py-12 sm:py-16 md:py-20">
            {musicosParaMostrar.map((musico, index) => (
              <div
                key={`${musico.title}-${index}`}
                className={`border border-dashed ${
                  musico.category === "Músico"
                    ? "border-verde-500"
                    : "border-rosa-600"
                } rounded-2xl sm:rounded-3xl flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 text-lg sm:text-xl text-white`}
              >
                <h3 className="text-lg sm:text-xl font-medium">
                  {musico.title}
                </h3>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 border-y ${
                    musico.category === "Músico"
                      ? "border-verde-500"
                      : "border-rosa-600"
                  } py-2 sm:py-3`}
                >
                  <div className="font-light flex flex-col gap-1 sm:gap-2">
                    <span className="px-3 sm:px-5 py-1 text-sm sm:text-base">
                      {musico.category === "Músico" ? "Procuramos" : "Procuro"}
                    </span>
                    <span
                      className={`w-full ${
                        musico.category === "Músico"
                          ? "bg-verde-500 text-azul-bb"
                          : "bg-rosa-600 text-white"
                      } px-3 sm:px-5 py-1 rounded-2xl sm:rounded-3xl text-sm sm:text-base font-medium`}
                    >
                      {musico.category}
                    </span>
                    <span className="w-full bg-verde-500 text-azul-bb px-3 sm:px-5 py-1 rounded-2xl sm:rounded-3xl text-sm sm:text-base font-medium">
                      {musico.position}
                    </span>
                    <span className="px-3 sm:px-5 py-1 font-medium text-sm sm:text-base">
                      {musico.style}
                    </span>
                  </div>
                  <p
                    className="text-white line-clamp-4 sm:line-clamp-6 text-sm sm:text-base font-light"
                    title={musico.description}
                  >
                    {musico.description}
                  </p>
                </div>
                <div className="font-light flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center text-sm sm:text-lg">
                  <a
                    target="_blank"
                    href={`mailto:${musico.email}`}
                    className="hover:text-amarelo-bb transition-colors"
                  >
                    {musico.email ?? "@bb.com"}
                  </a>
                  <span>{musico.state ?? "-"}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-12 sm:py-16 md:py-20">
            <div className="text-white text-center px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Nenhum resultado encontrado
              </h3>
              <p className="text-base sm:text-lg">
                Tente ajustar os filtros ou fazer uma nova busca.
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-center justify-end w-full lg:w-auto lg:ml-auto">
          <button
            type="button"
            onClick={handlePublicarClick}
            className={`w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-3 rounded-sm font-bold uppercase bg-amarelo-bb text-azul-bb cursor-pointer hover:scale-105 duration-300 text-sm sm:text-base`}
          >
            publicar no mural
          </button>
          {totalPaginas >= 1 && (
            <button
              onClick={handleMostrarTudo}
              className={`text-lg sm:text-xl text-amarelo-bb cursor-pointer hover:underline`}
            >
              {mostrandoTodos ? "Mostrar menos" : "Mostrar tudo"}
            </button>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-10 items-center text-white font-light">
            <span className="text-sm sm:text-base text-center">
              {mostrandoTodos
                ? `Mostrando todos os ${musicosFiltrados.length} itens`
                : `Mostrando ${indiceInicio + 1}-${indiceFim} de ${
                    musicosFiltrados.length
                  } itens`}
            </span>
            {totalPaginas > 1 && !mostrandoTodos && (
              <div className="flex gap-1 sm:gap-2 items-center font-normal">
                <button
                  onClick={() => setPaginaAtual(Math.max(1, paginaAtual - 1))}
                  disabled={paginaAtual === 1}
                  className={`p-1 ${
                    paginaAtual === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer hover:bg-white/10 rounded"
                  } transition-all`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      d="M16 7.0275L14.4777 5.5L8 12L14.4777 18.5L16 16.9725L11.0553 12L16 7.0275Z"
                      fill="white"
                    />
                  </svg>
                </button>
                {paginasVisiveis.map((numeroPagina) => (
                  <button
                    key={numeroPagina}
                    onClick={() => setPaginaAtual(numeroPagina)}
                    className={`border rounded-sm w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm ${
                      paginaAtual === numeroPagina
                        ? "border-azul-bb bg-azul-bb text-white"
                        : "border-white text-white hover:bg-white hover:text-azul-bb"
                    } transition-colors cursor-pointer`}
                  >
                    {numeroPagina}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setPaginaAtual(Math.min(totalPaginas, paginaAtual + 1))
                  }
                  disabled={paginaAtual === totalPaginas}
                  className={`p-1 ${
                    paginaAtual === totalPaginas
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer hover:bg-white/10 rounded"
                  } transition-all`}
                >
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      d="M1.52227 0.5L0 2.0275L4.94467 7L0 11.9725L1.52227 13.5L8 7L1.52227 0.5Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {openModal && (
        <ModalCadastrarBanda isOpen={openModal} onClose={handleModalClose} />
      )}
      {openLoginModal && (
        <ModalLogin
          isOpen={openLoginModal}
          onClose={handleLoginCancel}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
}
