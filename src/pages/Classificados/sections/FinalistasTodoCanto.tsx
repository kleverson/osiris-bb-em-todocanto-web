import { useState } from "react";
import { ModalCantorView } from "../../../components/ModalCantorView";

interface Apresentacao {
  id: number;
  nome: string;
  local: string;
  tipo: "Solo" | "Banda";
  imagem: string;
  perfil: string;
  genero: string;
}

export function FinalistasTodoCanto() {
  const apresentacoesSolo: Apresentacao[] = [
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
  ];
  const apresentacoesBanda: Apresentacao[] = [
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
  ];
  const [openModal, setOpenModal] = useState(false);
  const [apresentacaoSelecionada, setApresentacaoSelecionada] =
    useState<Apresentacao | null>(null);

  return (
    <div className="flex justify-center items-center py-32">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-8 sm:gap-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold font-bb-titulos text-amarelo-bb ml-auto">
          Finalistas do BB em Todo Canto
        </h2>
        <div className="space-y-5 sm:space-y-10">
          <h3 className="text-3xl sm:text-5xl font-thin text-end text-verde-500">
            Solo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {apresentacoesSolo.map((apresentacao) => (
              <div
                key={apresentacao.id}
                className="flex flex-col gap-2 h-full"
                onClick={() => {
                  setApresentacaoSelecionada(apresentacao);
                  setOpenModal(true);
                }}
              >
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
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5 sm:space-y-10">
          <h3 className="text-3xl sm:text-5xl font-thin text-end text-verde-500">
            Banda
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {apresentacoesBanda.map((apresentacao) => (
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
              </div>
            ))}
          </div>
        </div>
        <button className="bg-amarelo-bb text-azul-bb py-3 px-4 rounded-sm uppercase cursor-pointer w-full max-w-xs mx-auto hover:bg-rosa-700 transition-colors">
          confira o regulamento
        </button>
      </div>
      {openModal && (
        <ModalCantorView
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          apresentacaoSelecionada={apresentacaoSelecionada}
        />
      )}
    </div>
  );
}
