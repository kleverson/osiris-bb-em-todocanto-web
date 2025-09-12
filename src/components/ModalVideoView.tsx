interface Apresentacao {
  id: number;
  nome: string;
  local: string;
  tipo: "Solo" | "Banda";
  imagem: string;
  perfil: string;
  genero: string;
}

interface ModalVideoViewProps {
  isOpen: boolean;
  onClose: () => void;
  apresentacaoSelecionada: Apresentacao | null;
}

export function ModalVideoView({
  isOpen,
  onClose,
  apresentacaoSelecionada,
}: ModalVideoViewProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30 " onClick={onClose}></div>

      <div className="relative w-full max-w-[992px] pt-12">
        <button
          onClick={onClose}
          className="absolute top-0 sm:top-2 right-0 sm:-right-8 z-10 flex items-center justify-center w-10 h-10 bg-amarelo-bb rounded-full shadow-lg"
          aria-label="Fechar modal"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.694233 0.690105C1.61808 -0.230047 3.116 -0.230023 4.03986 0.690105L8.53485 5.16709L12.9601 0.759519C13.884 -0.160631 15.3819 -0.160641 16.3058 0.759519C17.2296 1.67968 17.2296 3.17159 16.3058 4.09175L11.8805 8.49933L16.3071 12.9082C17.231 13.8284 17.231 15.3203 16.3071 16.2405C15.3833 17.1606 13.8853 17.1606 12.9615 16.2405L8.53485 11.8316L4.03852 16.3099C3.11465 17.23 1.61674 17.23 0.692886 16.3099C-0.23097 15.3897 -0.230954 13.8978 0.692886 12.9777L5.18921 8.49933L0.694233 4.02234C-0.229582 3.10218 -0.229585 1.61026 0.694233 0.690105Z"
              fill="#465EFF"
            />
          </svg>
        </button>

        <div className="relative bg-azul-bb rounded-lg shadow-2xl max-h-[582px] overflow-y-auto p-12 grid sm:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <img src={apresentacaoSelecionada?.imagem} alt="" />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-amarelo-bb">
                {apresentacaoSelecionada?.nome}
              </h2>
              <p className="text-white font-light">
                {apresentacaoSelecionada?.local}
              </p>
              <span className="text-white font-light">
                {apresentacaoSelecionada?.genero}
              </span>
            </div>
            <button className="w-fit px-6 bg-amarelo-bb uppercase text-azul-bb py-2 rounded-sm font-bold text-center flex justify-center items-center gap-2 mt-auto hover:bg-amarelo-bb/90 transition-colors">
              votar
            </button>
          </div>
          <div>
            <p className="text-white font-light sm:max-h-[482px] overflow-y-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in volusequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
