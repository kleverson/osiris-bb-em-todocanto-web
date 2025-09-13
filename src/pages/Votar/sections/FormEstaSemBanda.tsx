import { useState, useMemo, useEffect } from "react";
import {
  VetorBottomEstaSemBanda,
  VetorTopEstaSemBanda,
} from "../../../assets/Icons";
import { ModalCadastrarBanda } from "../../../components/ModalCadastrarBanda";
import { useAuth } from "../../../contexts/AuthContext";
import { classifiedService, type ClassifiedItem } from "../../../services/api";

interface Musico {
  id?: number;
  nome: string;
  instrumento: string;
  genero: string;
  email?: string;
  cidade: string;
  tipo: "Solo" | "Banda";
}

export function FormEstaSemBanda() {
  const { isAuthenticated } = useAuth();
  const [filtroAtivo, setFiltroAtivo] = useState<"Todos" | "Solo" | "Banda">(
    "Todos"
  );
  const [busca, setBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 8;
  const [openModal, setOpenModal] = useState(false);
  const [musicos, setMusicos] = useState<Musico[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPaginas, setTotalPaginas] = useState(0);

  const convertApiToMusico = (item: ClassifiedItem): Musico => ({
    nome: item.title,
    instrumento: item.position,
    genero: item.style,
    cidade: `${item.city}/${item.state}`,
    tipo: item.type_item as "Solo" | "Banda",
  });

  const fetchClassifieds = async () => {
    try {
      setLoading(true);
      const response = await classifiedService.searchClassifieds({
        term: busca || undefined,
        page: paginaAtual,
        limit: itensPorPagina,
      });

      const musicosData = response.data.map(convertApiToMusico);
      setMusicos(musicosData);
      setTotalPaginas(response.total_pages);
    } catch (error) {
      console.error("Erro ao buscar classificados:", error);
      setMusicos([]);
      setTotalPaginas(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClassifieds();
  }, [busca, paginaAtual]);

  const musicosFiltrados = useMemo(() => {
    return musicos.filter((musico) => {
      const passaFiltroTipo =
        filtroAtivo === "Todos" || musico.tipo === filtroAtivo;
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
  };

  const handleBuscaChange = (novaBusca: string) => {
    setBusca(novaBusca);
    setPaginaAtual(1);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    fetchClassifieds();
  };
  return (
    <div id="fale-com-a-gente" className="bg-cinza-200 relative">
      <div className="absolute top-0 w-full z-10">
        <VetorTopEstaSemBanda color="#465eff" />
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
            <p className="text-2xl text-azul-bb font-light">
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
                value={busca}
                onChange={(e) => handleBuscaChange(e.target.value)}
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
          <div className="flex justify-center items-center py-20">
            <div className="text-azul-bb text-xl">Carregando...</div>
          </div>
        ) : musicosParaMostrar.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-20">
            {musicosParaMostrar.map((musico, index) => (
              <div
                key={`${musico.nome}-${index}`}
                className="border border-dashed border-verde-500 rounded-3xl flex flex-col gap-4 p-6 text-xl text-azul-bb"
              >
                <h3>{musico.nome}</h3>
                <div className="font-light flex flex-col gap-1 border-b border-verde-500 pb-2">
                  <span className="px-5 py-1">Eu sou</span>
                  <span className="w-full bg-verde-500 text-azul-bb px-5 py-1 rounded-3xl">
                    {musico.instrumento}
                  </span>
                  <span className="px-5 py-1">{musico.genero}</span>
                </div>
                <div className="font-light flex flex-col text-lg">
                  {musico.email && (
                    <span className="truncate">{musico.email}</span>
                  )}
                  <span>{musico.cidade}</span>
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
            onClick={() => setOpenModal(true)}
            disabled={!isAuthenticated}
            className={`px-5 py-2 rounded-sm text-white font-bold uppercase cursor-pointer ${
              isAuthenticated
                ? "bg-azul-bb"
                : "bg-azul-bb/80 cursor-not-allowed"
            }`}
            title={!isAuthenticated ? "Faça login para publicar no mural" : ""}
          >
            publicar no mural
          </button>
          <button className="text-azul-bb text-xl cursor-pointer">
            Mostrar tudo
          </button>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center text-azul-bb font-light sm:ml-auto">
            <span>
              Mostrando {indiceInicio + 1}-{indiceFim} de{" "}
              {musicosFiltrados.length} itens
            </span>
            {totalPaginas > 1 && (
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
                      fill="#465eff"
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
                        : "border-azul-bb text-azul-bb hover:bg-white hover:text-azul-bb"
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
                      fill="#465eff"
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
    </div>
  );
}
