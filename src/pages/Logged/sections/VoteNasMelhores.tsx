import { Link } from "react-router-dom";
import { useState } from "react";

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

  const apresentacoesFiltradas = apresentacoes.filter((apresentacao) => {
    if (filtroAtivo === "Todos") return true;
    return apresentacao.tipo === filtroAtivo;
  });

  const apresentacoesParaMostrar = mostrarTodos
    ? apresentacoesFiltradas
    : apresentacoesFiltradas.slice(0, 6);

  const temMaisItens = apresentacoesFiltradas.length > 6;

  return (
    <div className="flex justify-center items-center py-32">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-16">
        <h2 className="text-5xl font-extrabold font-bb-titulos text-amarelo-bb">
          Vote nas melhores apresentações
        </h2>
        <div className="flex justify-between items-center gap-5">
          <div className="bg-white px-4 py-2 rounded-t-sm overflow-hidden flex gap-2 items-center max-w-2xl w-full">
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
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setFiltroAtivo("Todos")}
              className={`px-4 py-2 w-36 rounded-sm uppercase cursor-pointer font-bold ${
                filtroAtivo === "Todos"
                  ? "bg-verde-500 text-azul-bb"
                  : "border-2 border-verde-500 text-white"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFiltroAtivo("Solo")}
              className={`px-4 py-2 w-36 rounded-sm uppercase cursor-pointer font-bold ${
                filtroAtivo === "Solo"
                  ? "bg-verde-500 text-azul-bb"
                  : "border-2 border-verde-500 text-white"
              }`}
            >
              Solo
            </button>
            <button
              onClick={() => setFiltroAtivo("Banda")}
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
                  className={`px-4 py-1 rounded-b-sm absolute top-0 left-4 font-light ${
                    apresentacao.tipo === "Solo"
                      ? "bg-verde-500 text-azul-bb"
                      : "bg-rosa-300 text-azul-bb"
                  }`}
                >
                  {apresentacao.tipo}
                </span>
              </div>

              <div className="h-8 flex items-center">
                <span className="text-2xl font-light text-white flex items-center gap-2">
                  <svg
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <g clipPath="url(#clip0_16_10642)">
                      <path
                        d="M0.0826914 8.76043C0.837104 7.18705 5.50276 8.94197 4.93796 11.0479C4.37518 13.1538 -0.701978 10.4004 0.0826914 8.76043Z"
                        fill="#FF6E91"
                      />
                      <path
                        d="M7.28997 13.3976C8.04438 11.8243 12.71 13.5792 12.1452 15.6851C11.5825 17.791 6.5053 15.0376 7.28997 13.3976Z"
                        fill="#FF6E91"
                      />
                      <path
                        d="M13.8497 6.88648L14.3036 4.54659C12.1513 3.20318 7.11247 0.447754 7.11247 0.447754L4.39941 10.9571L4.93799 11.0458L7.12861 2.57988L13.8497 6.88447V6.88648Z"
                        fill="#FF6E91"
                      />
                      <path
                        d="M12.1453 15.685L14.3036 4.54631L13.646 4.10254L11.7297 15.5377L12.1453 15.685Z"
                        fill="#FF6E91"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_16_10642">
                        <rect
                          width="14.3036"
                          height="16"
                          fill="white"
                          transform="translate(0 0.447754)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="truncate">{apresentacao.genero}</span>
                </span>
              </div>

              {/* Botão sempre no final */}
              <Link
                to={`/apresentacao/${apresentacao.id}`}
                className="w-full bg-amarelo-bb uppercase text-azul-bb py-2 rounded-sm font-bold text-center flex justify-center items-center gap-2 mt-auto hover:bg-amarelo-bb/90 transition-colors"
              >
                Votar
              </Link>
            </div>
          ))}
        </div>
        {temMaisItens && (
          <button
            onClick={() => setMostrarTodos(!mostrarTodos)}
            className="bg-rosa-600 text-white py-3 px-4 rounded-sm uppercase cursor-pointer w-full max-w-xs mx-auto hover:bg-rosa-700 transition-colors"
          >
            {mostrarTodos ? "Ver menos" : "Ver mais"}
          </button>
        )}
      </div>
    </div>
  );
}
