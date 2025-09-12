import { useState, useMemo } from "react";
import {
  VetorBottomEstaSemBanda,
  VetorTopEstaSemBanda,
} from "../../../assets/Icons";

interface Musico {
  id: number;
  nome: string;
  instrumento: string;
  genero: string;
  email: string;
  cidade: string;
  tipo: "Solo" | "Banda";
}

export function FormEstaSemBanda() {
  const [filtroAtivo, setFiltroAtivo] = useState<"Todos" | "Solo" | "Banda">(
    "Todos"
  );
  const [busca, setBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 8;

  // Lista fictícia de músicos
  const musicos: Musico[] = [
    {
      id: 1,
      nome: "Leonor Maria",
      instrumento: "Baixista",
      genero: "Sertanejo",
      email: "leonor.maria@bb.com.br",
      cidade: "Brasília/DF",
      tipo: "Solo",
    },
    {
      id: 2,
      nome: "Carlos Silva",
      instrumento: "Guitarrista",
      genero: "Rock",
      email: "carlos.silva@bb.com.br",
      cidade: "São Paulo/SP",
      tipo: "Solo",
    },
    {
      id: 3,
      nome: "Banda Melodia",
      instrumento: "Formação Completa",
      genero: "MPB",
      email: "melodia@bb.com.br",
      cidade: "Rio de Janeiro/RJ",
      tipo: "Banda",
    },
    {
      id: 4,
      nome: "Ana Costa",
      instrumento: "Vocalista",
      genero: "Pop",
      email: "ana.costa@bb.com.br",
      cidade: "Belo Horizonte/MG",
      tipo: "Solo",
    },
    {
      id: 5,
      nome: "João Bateria",
      instrumento: "Baterista",
      genero: "Jazz",
      email: "joao.bateria@bb.com.br",
      cidade: "Salvador/BA",
      tipo: "Solo",
    },
    {
      id: 6,
      nome: "Trio Acústico",
      instrumento: "Violão, Voz e Cajon",
      genero: "Folk",
      email: "trio.acustico@bb.com.br",
      cidade: "Curitiba/PR",
      tipo: "Banda",
    },
    {
      id: 7,
      nome: "Marina Teclado",
      instrumento: "Tecladista",
      genero: "Eletrônica",
      email: "marina.teclado@bb.com.br",
      cidade: "Fortaleza/CE",
      tipo: "Solo",
    },
    {
      id: 8,
      nome: "Banda Blues BB",
      instrumento: "Banda Completa",
      genero: "Blues",
      email: "blues.bb@bb.com.br",
      cidade: "Porto Alegre/RS",
      tipo: "Banda",
    },
    {
      id: 9,
      nome: "Rafael Violão",
      instrumento: "Violonista",
      genero: "Clássico",
      email: "rafael.violao@bb.com.br",
      cidade: "Recife/PE",
      tipo: "Solo",
    },
    {
      id: 10,
      nome: "Grupo Samba",
      instrumento: "Percussão e Voz",
      genero: "Samba",
      email: "grupo.samba@bb.com.br",
      cidade: "Santos/SP",
      tipo: "Banda",
    },
    {
      id: 11,
      nome: "Luana Saxofone",
      instrumento: "Saxofonista",
      genero: "Jazz",
      email: "luana.sax@bb.com.br",
      cidade: "Brasília/DF",
      tipo: "Solo",
    },
    {
      id: 12,
      nome: "Rock Nacional",
      instrumento: "Banda de Rock",
      genero: "Rock",
      email: "rock.nacional@bb.com.br",
      cidade: "São Paulo/SP",
      tipo: "Banda",
    },
    {
      id: 13,
      nome: "Pedro Baixo",
      instrumento: "Baixista",
      genero: "Funk",
      email: "pedro.baixo@bb.com.br",
      cidade: "Rio de Janeiro/RJ",
      tipo: "Solo",
    },
    {
      id: 14,
      nome: "Harmonia Gospel",
      instrumento: "Coral",
      genero: "Gospel",
      email: "harmonia.gospel@bb.com.br",
      cidade: "Goiânia/GO",
      tipo: "Banda",
    },
    {
      id: 15,
      nome: "Carla Flauta",
      instrumento: "Flautista",
      genero: "Erudito",
      email: "carla.flauta@bb.com.br",
      cidade: "Florianópolis/SC",
      tipo: "Solo",
    },
    {
      id: 16,
      nome: "Forró Nordeste",
      instrumento: "Sanfona, Zabumba e Triângulo",
      genero: "Forró",
      email: "forro.nordeste@bb.com.br",
      cidade: "Natal/RN",
      tipo: "Banda",
    },
    {
      id: 17,
      nome: "Bruno Violino",
      instrumento: "Violinista",
      genero: "Clássico",
      email: "bruno.violino@bb.com.br",
      cidade: "Manaus/AM",
      tipo: "Solo",
    },
    {
      id: 18,
      nome: "Pagode BB",
      instrumento: "Cavaquinho, Pandeiro e Voz",
      genero: "Pagode",
      email: "pagode.bb@bb.com.br",
      cidade: "Belém/PA",
      tipo: "Banda",
    },
    {
      id: 19,
      nome: "Júlia Harpa",
      instrumento: "Harpista",
      genero: "Erudito",
      email: "julia.harpa@bb.com.br",
      cidade: "Campo Grande/MS",
      tipo: "Solo",
    },
    {
      id: 20,
      nome: "Reggae Roots",
      instrumento: "Banda Reggae",
      genero: "Reggae",
      email: "reggae.roots@bb.com.br",
      cidade: "João Pessoa/PB",
      tipo: "Banda",
    },
    {
      id: 21,
      nome: "Felipe Trompete",
      instrumento: "Trompetista",
      genero: "Jazz",
      email: "felipe.trompete@bb.com.br",
      cidade: "Vitória/ES",
      tipo: "Solo",
    },
    {
      id: 22,
      nome: "Country BB",
      instrumento: "Dupla Sertaneja",
      genero: "Country",
      email: "country.bb@bb.com.br",
      cidade: "Cuiabá/MT",
      tipo: "Banda",
    },
    {
      id: 23,
      nome: "Roberta Clarinete",
      instrumento: "Clarinetista",
      genero: "Erudito",
      email: "roberta.clarinete@bb.com.br",
      cidade: "Maceió/AL",
      tipo: "Solo",
    },
    {
      id: 24,
      nome: "Eletrônica Mix",
      instrumento: "DJ e Produção",
      genero: "Eletrônica",
      email: "eletronica.mix@bb.com.br",
      cidade: "Aracaju/SE",
      tipo: "Banda",
    },
    {
      id: 25,
      nome: "Diego Acordeon",
      instrumento: "Acordeonista",
      genero: "Tango",
      email: "diego.acordeon@bb.com.br",
      cidade: "Rio Branco/AC",
      tipo: "Solo",
    },
  ];

  // Filtrar músicos com base na busca e filtro ativo
  const musicosFiltrados = useMemo(() => {
    return musicos.filter((musico) => {
      const passaFiltroTipo =
        filtroAtivo === "Todos" || musico.tipo === filtroAtivo;
      const passaBusca =
        busca === "" ||
        musico.nome.toLowerCase().includes(busca.toLowerCase()) ||
        musico.instrumento.toLowerCase().includes(busca.toLowerCase()) ||
        musico.genero.toLowerCase().includes(busca.toLowerCase()) ||
        musico.cidade.toLowerCase().includes(busca.toLowerCase());

      return passaFiltroTipo && passaBusca;
    });
  }, [musicos, filtroAtivo, busca]);

  // Calcular paginação
  const totalPaginas = Math.ceil(musicosFiltrados.length / itensPorPagina);
  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
  const indiceFim = indiceInicio + itensPorPagina;
  const musicosParaMostrar = musicosFiltrados.slice(indiceInicio, indiceFim);

  // Calcular páginas visíveis (máximo 7)
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
  };

  const handleBuscaChange = (novaBusca: string) => {
    setBusca(novaBusca);
    setPaginaAtual(1);
  };
  return (
    <div className="bg-cinza-200 relative">
      <div className="absolute top-0 w-full z-10">
        <VetorTopEstaSemBanda color="#465eff " />
      </div>
      <div className="absolute bottom-0 w-full z-10">
        <VetorBottomEstaSemBanda />
      </div>
      <div className="relative max-w-7xl mx-auto w-full px-4 py-28 pb-44 z-30">
        <div className="flex gap-5 flex-col md:flex-row justify-between md:items-end">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-extrabold font-bb-titulos text-azul-bb">
              Está sem <br />
              banda?
            </h2>
            <p className="text-lg sm:text-2xl text-azul-bb">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-20">
          {musicosParaMostrar.map((musico) => (
            <div
              key={musico.id}
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
                <span className="truncate">{musico.email}</span>
                <span>{musico.cidade}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
          <button className="bg-azul-bb px-5 py-2 rounded-sm text-white font-bold uppercase cursor-pointer">
            publicar no mural
          </button>
          <button className="text-azul-bb text-xl cursor-pointer">
            Mostrar tudo
          </button>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center text-azul-bb font-light sm:ml-auto">
            <span>
              Mostrando {indiceInicio + 1}-
              {Math.min(indiceFim, musicosFiltrados.length)} de{" "}
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
                      fill="#465eff "
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
    </div>
  );
}
