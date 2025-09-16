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
  const itensPorPagina = 8;
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
        limit: mostrarTodos ? 1000 : itensPorPagina,
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
        filtroAtivo === "Todos" || musico.type_item === filtroAtivo;
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
      <div className="relative max-w-7xl mx-auto w-full px-4 py-28 sm:pb-44 z-30">
        <div className="flex flex-col md:flex-row gap-5 justify-between md:items-end">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-extrabold font-bb-titulos text-white md:text-azul-bb">
              Está sem <br />
              banda?
            </h2>
            <p className="text-2xl text-white md:text-azul-bb font-light">
              A gente te ajuda a encontrar <br />
              quem está faltando.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xl">
            <div className="bg-white px-4 py-2 rounded-sm overflow-hidden flex gap-2 items-center max-w-2xl w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#7b7f8b"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>

              <input
                type="text"
                className="w-full text-azul-bb focus:outline-none px-2"
                placeholder="Busque por artista solo, banda ou nome do funcionário"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
              />
            </div>
            <div className="ml-auto">
              <div className="flex gap-4">
                <button
                  onClick={() => handleFiltroChange("Todos")}
                  className={`px-4 py-2 w-28 rounded-sm uppercase cursor-pointer font-bold ${
                    filtroAtivo === "Todos"
                      ? "bg-azul-bb text-white"
                      : "bg-amarelo-bb text-azul-bb"
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => handleFiltroChange("Solo")}
                  className={`px-4 py-2 w-28 rounded-sm uppercase cursor-pointer font-bold ${
                    filtroAtivo === "Solo"
                      ? "bg-azul-bb text-white"
                      : "bg-amarelo-bb text-azul-bb"
                  }`}
                >
                  Solo
                </button>
                <button
                  onClick={() => handleFiltroChange("Banda")}
                  className={`px-4 py-2 w-28 rounded-sm uppercase cursor-pointer font-bold ${
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-20">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="border border-dashed border-verde-500/30 rounded-3xl flex flex-col gap-4 p-6 text-xl animate-pulse"
              >
                <div className="h-6 bg-white/20 rounded-lg w-3/4"></div>

                <div className="font-light flex flex-col gap-1 border-b border-verde-500/30 pb-2">
                  <div className="h-5 bg-white/15 rounded w-16 px-5 py-1"></div>
                  <div className="w-full bg-verde-500/50 h-8 px-5 py-1 rounded-3xl flex items-center">
                    <div className="h-4 bg-azul-bb/30 rounded w-20"></div>
                  </div>
                  <div className="h-5 bg-white/15 rounded w-24 px-5 py-1"></div>
                </div>

                <div className="font-light flex flex-col gap-2 text-lg">
                  <div className="h-4 bg-white/15 rounded w-32"></div>
                  <div className="h-4 bg-white/15 rounded w-28"></div>
                  <div className="h-4 bg-white/15 rounded w-36"></div>
                </div>
              </div>
            ))}
          </div>
        ) : musicosParaMostrar.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-20">
            {musicosParaMostrar.map((musico, index) => (
              <div
                key={`${musico.title}-${index}`}
                className="border border-dashed border-verde-500 rounded-3xl flex flex-col gap-4 p-6 text-xl text-white"
              >
                <h3>{musico.title}</h3>
                <div className="font-light flex flex-col gap-1 border-b border-verde-500 pb-2">
                  <span className="px-5 py-1">
                    {musico.type_item === "Músico" ? "Procuramos" : "Procuro"}
                  </span>
                  <span
                    className={`w-full ${
                      musico.type_item === "Músico"
                        ? "bg-verde-500 text-azul-bb"
                        : "bg-rosa-600 text-white"
                    } px-5 py-1 rounded-3xl`}
                  >
                    {musico.type_item}
                  </span>
                  <span className="w-full bg-verde-500 text-azul-bb px-5 py-1 rounded-3xl">
                    {musico.position}
                  </span>
                  <span className="px-5 py-1 font-medium">{musico.style}</span>
                </div>
                <div className="font-light flex flex-col text-lg">
                  {musico.email && (
                    <span className="truncate">{musico.email}</span>
                  )}
                  <a
                    target="_blank"
                    href={`mailto:${musico.email}`}
                    className="flex gap-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                      <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                    </svg>
                    {musico.email ?? "@bb.com"}
                  </a>
                  <span className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>
                    {musico.city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-20">
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Nenhum resultado encontrado
              </h3>
              <p className="text-lg">
                Tente ajustar os filtros ou fazer uma nova busca.
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-between items-center">
          <button
            type="button"
            onClick={handlePublicarClick}
            className={`px-5 py-2 rounded-sm font-bold uppercase bg-amarelo-bb text-azul-bb cursor-pointer hover:scale-105 duration-300`}
          >
            publicar no mural
          </button>
          {totalPaginas >= 1 && (
            <button
              onClick={handleMostrarTudo}
              className={`text-xl text-amarelo-bb cursor-pointer`}
            >
              {mostrandoTodos ? "Mostrar menos" : "Mostrar tudo"}
            </button>
          )}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center text-white font-light sm:ml-auto">
            <span>
              {mostrandoTodos
                ? `Mostrando todos os ${musicosFiltrados.length} itens`
                : `Mostrando ${indiceInicio + 1}-${indiceFim} de ${
                    musicosFiltrados.length
                  } itens`}
            </span>
            {totalPaginas > 1 && !mostrandoTodos && (
              <div className="flex gap-2 items-center font-normal">
                <button
                  onClick={() => setPaginaAtual(Math.max(1, paginaAtual - 1))}
                  disabled={paginaAtual === 1}
                  className={`${
                    paginaAtual === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                    className={`border rounded-sm w-8 h-8 flex items-center justify-center ${
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
                  className={`${
                    paginaAtual === totalPaginas
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
