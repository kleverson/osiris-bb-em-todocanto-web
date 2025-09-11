import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

interface Apresentacao {
  id: number;
  nome: string;
  local: string;
  tipo: "Solo" | "Banda";
  imagem: string;
  perfil: string;
  genero: string;
}

export function VoteNasMelhores() {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [filtroAtivo, setFiltroAtivo] = useState<"Todos" | "Solo" | "Banda">(
    "Todos"
  );
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 8;

  const apresentacoes: Apresentacao[] = [
    {
      id: 1,
      nome: "Maria Dagu",
      local: "Sede - Banco do Brasil",
      tipo: "Solo",
      imagem: "https://picsum.photos/300/200?random=1",
      perfil: "https://picsum.photos/100/100?random=1",
      genero: "Pop",
    },
    {
      id: 2,
      nome: "Os Funcionários",
      local: "Agência Central - São Paulo",
      tipo: "Banda",
      imagem: "https://picsum.photos/300/200?random=2",
      perfil: "https://picsum.photos/100/100?random=2",
      genero: "Rock",
    },
    {
      id: 3,
      nome: "João Silva",
      local: "Superintendência - Rio de Janeiro",
      tipo: "Solo",
      imagem: "https://picsum.photos/300/200?random=3",
      perfil: "https://picsum.photos/100/100?random=3",
      genero: "MPB",
    },
    {
      id: 4,
      nome: "Banda BB Blues",
      local: "Agência Copacabana",
      tipo: "Banda",
      imagem: "https://picsum.photos/300/200?random=4",
      perfil: "https://picsum.photos/100/100?random=4",
      genero: "Blues",
    },
    {
      id: 5,
      nome: "Ana Costa",
      local: "Agência Ipanema",
      tipo: "Solo",
      imagem: "https://picsum.photos/300/200?random=5",
      perfil: "https://picsum.photos/100/100?random=5",
      genero: "Sertanejo",
    },
    {
      id: 6,
      nome: "Ritmo e Compasso",
      local: "Sede Regional - Belo Horizonte",
      tipo: "Banda",
      imagem: "https://picsum.photos/300/200?random=6",
      perfil: "https://picsum.photos/100/100?random=6",
      genero: "Samba",
    },
    {
      id: 7,
      nome: "Carlos Melodia",
      local: "Agência Savassi",
      tipo: "Solo",
      imagem: "https://picsum.photos/300/200?random=7",
      perfil: "https://picsum.photos/100/100?random=7",
      genero: "Jazz",
    },
    {
      id: 8,
      nome: "Eletronic BB",
      local: "Sede - Brasília",
      tipo: "Banda",
      imagem: "https://picsum.photos/300/200?random=8",
      perfil: "https://picsum.photos/100/100?random=8",
      genero: "Eletrônica",
    },
    {
      id: 9,
      nome: "Paula Voz",
      local: "Agência Asa Norte",
      tipo: "Solo",
      imagem: "https://picsum.photos/300/200?random=9",
      perfil: "https://picsum.photos/100/100?random=9",
      genero: "Gospel",
    },
    {
      id: 10,
      nome: "BB Rock Band",
      local: "Superintendência - Salvador",
      tipo: "Banda",
      imagem: "https://picsum.photos/300/200?random=10",
      perfil: "https://picsum.photos/100/100?random=10",
      genero: "Rock",
    },
    {
      id: 11,
      nome: "Rafael Acústico",
      local: "Agência Pelourinho",
      tipo: "Solo",
      imagem: "https://picsum.photos/300/200?random=11",
      perfil: "https://picsum.photos/100/100?random=11",
      genero: "Folk",
    },
    {
      id: 12,
      nome: "Forró do BB",
      local: "Sede Regional - Recife",
      tipo: "Banda",
      imagem: "https://picsum.photos/300/200?random=12",
      perfil: "https://picsum.photos/100/100?random=12",
      genero: "Forró",
    },
  ];

  const apresentacoesFiltradas = useMemo(() => {
    return apresentacoes.filter((apresentacao) => {
      const passaFiltroTipo =
        filtroAtivo === "Todos" || apresentacao.tipo === filtroAtivo;

      return passaFiltroTipo;
    });
  }, [apresentacoes, filtroAtivo]);

  const totalPaginas = Math.ceil(
    apresentacoesFiltradas.length / itensPorPagina
  );
  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
  const indiceFim = indiceInicio + itensPorPagina;

  const apresentacoesParaMostrar = mostrarTodos
    ? apresentacoesFiltradas
    : apresentacoesFiltradas.slice(indiceInicio, indiceFim);

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

  // Resetar página quando filtros mudarem
  const handleFiltroChange = (novoFiltro: "Todos" | "Solo" | "Banda") => {
    setFiltroAtivo(novoFiltro);
    setPaginaAtual(1);
    setMostrarTodos(false);
  };

  const handleMostrarTodos = () => {
    setMostrarTodos(!mostrarTodos);
    setPaginaAtual(1);
  };

  return (
    <div className="flex justify-center items-center py-32">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-16">
        <div className="flex justify-between items-center gap-5">
          <h2 className="text-4xl font-extrabold font-bb-titulos text-amarelo-bb">
            Vote nas melhores apresentações
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => handleFiltroChange("Todos")}
              className={`px-4 py-2 w-36 rounded-sm uppercase cursor-pointer font-bold ${
                filtroAtivo === "Todos"
                  ? "bg-verde-500 text-azul-bb"
                  : "border-2 border-verde-500 text-white"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => handleFiltroChange("Solo")}
              className={`px-4 py-2 w-36 rounded-sm uppercase cursor-pointer font-bold ${
                filtroAtivo === "Solo"
                  ? "bg-verde-500 text-azul-bb"
                  : "border-2 border-verde-500 text-white"
              }`}
            >
              Solo
            </button>
            <button
              onClick={() => handleFiltroChange("Banda")}
              className={`px-4 py-2 w-36 rounded-sm uppercase cursor-pointer font-bold ${
                filtroAtivo === "Banda"
                  ? "bg-verde-500 text-azul-bb"
                  : "border-2 border-verde-500 text-white"
              }`}
            >
              Banda
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {apresentacoesParaMostrar.map((apresentacao) => (
            <div key={apresentacao.id} className="flex flex-col gap-2 h-full">
              <div className="flex gap-2 items-start h-16">
                <img
                  src={apresentacao.perfil}
                  alt={`Perfil de ${apresentacao.nome}`}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-white min-w-0 flex-1">
                  <p className="text-2xl font-bold font-bb-titulos leading-tight line-clamp-1">
                    {apresentacao.nome}
                  </p>
                  <span className="font-light text-sm leading-tight line-clamp-2">
                    {apresentacao.local}
                  </span>
                </div>
              </div>

              <div className="w-full h-44 relative">
                <img
                  src={apresentacao.imagem}
                  alt={`Apresentação de ${apresentacao.nome}`}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`px-4 py-1 rounded-xl absolute top-3 right-3 font-light ${
                    apresentacao.tipo === "Solo"
                      ? "bg-verde-500 text-azul-bb"
                      : "bg-rosa-300 text-azul-bb"
                  }`}
                >
                  {apresentacao.tipo}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white flex items-center gap-2">
                  {apresentacao.nome}
                </span>
                <span className="text-xs font-light text-white flex items-center gap-2">
                  {apresentacao.local}
                </span>
                <span className="text-xl font-light text-white flex items-center gap-2">
                  {apresentacao.genero}
                </span>
              </div>

              <Link
                to={`/apresentacao/${apresentacao.id}`}
                className="w-fit px-6 bg-amarelo-bb uppercase text-azul-bb py-2 rounded-sm font-bold text-center flex justify-center items-center gap-2 mt-auto hover:bg-amarelo-bb/90 transition-colors"
              >
                Votar
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={handleMostrarTodos}
            className="text-amarelo-bb text-xl hover:underline duration-300"
          >
            {mostrarTodos ? "Mostrar menos" : "Mostrar tudo"}
          </button>
          {!mostrarTodos && (
            <div className="flex gap-10 items-center text-white font-light">
              <span>
                Mostrando {indiceInicio + 1}-
                {Math.min(indiceFim, apresentacoesFiltradas.length)} de{" "}
                {apresentacoesFiltradas.length} itens
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
          )}
        </div>
      </div>
    </div>
  );
}
