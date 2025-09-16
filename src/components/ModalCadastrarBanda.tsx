import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  classifiedService,
  type ClassifiedItem,
  type ClassifiedInfo,
} from "../services/api";
import { estadosBrasil } from "../mock/ModalCadastrarBandaMock";
import { toast } from "react-toastify";

interface ModalCadastrarBandaProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCadastrarBanda({
  isOpen,
  onClose,
}: ModalCadastrarBandaProps) {
  if (!isOpen) return null;

  const [concluido, setConcluido] = useState(false);
  const [loading, setLoading] = useState(false);
  const [classifiedInfo, setClassifiedInfo] = useState<ClassifiedInfo | null>(
    null
  );
  const [formData, setFormData] = useState<ClassifiedItem>({
    title: "",
    city: "",
    state: "",
    type_item: "",
    position: "",
    style: "",
    category: "",
    active: true,
  });
  const handleInputChange = (
    field: keyof ClassifiedItem,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "type_item" && { category: String(value) }), // Sincroniza category com type_item, garantindo string
    }));
  };

  useEffect(() => {
    const loadClassifiedInfo = async () => {
      try {
        const info = await classifiedService.getClassifiedInfo();
        setClassifiedInfo(info);
      } catch (error) {
        console.error("Erro ao carregar informações dos classificados:", error);
      }
    };

    if (isOpen) {
      loadClassifiedInfo();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.city ||
      !formData.state ||
      !formData.type_item ||
      !formData.position ||
      !formData.style
    ) {
      toast.warning("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      setLoading(true);
      await classifiedService.createClassified(formData);
      setConcluido(true);
    } catch (error) {
      toast.error("Erro ao cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 " onClick={onClose}></div>

      <div className="relative w-full max-w-[992px] pt-12">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-2 -right-8 z-10 flex items-center justify-center w-10 h-10 bg-amarelo-bb rounded-full shadow-lg"
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
        {concluido ? (
          <div className="relative bg-cinza-200 rounded-lg shadow-2xl max-h-[582px] p-12 flex flex-col gap-10 items-center justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M56.8726 28.1159C58.4154 29.4016 58.6239 31.6945 57.3382 33.2373L39.1564 55.0555C38.5023 55.8404 37.5482 56.3139 36.5276 56.3602C35.507 56.4065 34.514 56.0213 33.7915 55.2989L22.8824 44.3898C21.4624 42.9697 21.4624 40.6673 22.8824 39.2472C24.3025 37.8271 26.605 37.8271 28.025 39.2472L36.1185 47.3406L51.7511 28.5815C53.0368 27.0386 55.3298 26.8302 56.8726 28.1159Z"
                fill="#465EFF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M40 7.27273C21.9252 7.27273 7.27273 21.9252 7.27273 40C7.27273 58.0748 21.9252 72.7273 40 72.7273C58.0748 72.7273 72.7273 58.0748 72.7273 40C72.7273 21.9252 58.0748 7.27273 40 7.27273ZM0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z"
                fill="#465EFF"
              />
            </svg>

            <h2 className="text-5xl text-azul-bb font-bold">
              Cadastro concluído
            </h2>
            <p className="text-2xl text-cinza-600">
              Em breve a sua publicação estará disponível.
            </p>
            <p className="text-2xl text-cinza-600">
              Fique ligado: alguém pode mandar e-mail <br />
              querendo se juntar à sua banda.
            </p>
          </div>
        ) : (
          <div className="relative bg-cinza-200 rounded-lg shadow-2xl max-h-[582px] overflow-y-auto p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl text-azul-bb font-bold">
                Está sem banda?
              </h2>
              <p className="text-2xl text-cinza-600">
                A gente te ajuda a encontrar quem está faltando.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-2 gap-4 lg:border-l pl-10 border-azul-bb/60"
            >
              <label className="flex flex-col gap-1">
                <span className="text-cinza-600">Cidade*</span>
                <input
                  className="bg-white p-4 rounded-t-md text-azul-bb border-b border-azul-bb"
                  type="text"
                  placeholder="Digite sua cidade"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-cinza-600">Estado*</span>
                <select
                  className="bg-white p-4 rounded-t-md text-azul-bb border-b border-azul-bb"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  required
                >
                  <option value="">Selecione</option>
                  {estadosBrasil.map((estado) => (
                    <option key={estado.value} value={estado.value}>
                      {estado.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="col-span-2 flex flex-col gap-1">
                <span className="text-cinza-600">
                  Nome/Título da publicação*
                </span>
                <input
                  className="bg-white p-4 rounded-t-md text-azul-bb border-b border-azul-bb"
                  type="text"
                  placeholder="Digite seu nome ou nome da banda"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  required
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-cinza-600">Categoria*</span>
                <select
                  className="bg-white p-4 rounded-t-md text-azul-bb border-b border-azul-bb"
                  value={formData.type_item}
                  onChange={(e) =>
                    handleInputChange("type_item", e.target.value)
                  }
                  required
                >
                  <option value="">Selecione</option>
                  {classifiedInfo?.types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-cinza-600">Defina o estilo musical*</span>
                <select
                  className="bg-white p-4 rounded-t-md text-azul-bb border-b border-azul-bb"
                  value={formData.style}
                  onChange={(e) => handleInputChange("style", e.target.value)}
                  required
                >
                  <option value="">Selecione</option>
                  {classifiedInfo?.styles.map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </label>
              <label className="col-span-2 flex flex-col gap-1">
                <span className="text-cinza-600">
                  Posição/Instrumento musical*
                </span>
                <select
                  className="bg-white p-4 rounded-t-md text-azul-bb border-b border-azul-bb"
                  value={formData.position}
                  onChange={(e) =>
                    handleInputChange("position", e.target.value)
                  }
                  required
                >
                  <option value="">Selecione</option>
                  {classifiedInfo?.instruments.map((instrument) => (
                    <option key={instrument} value={instrument}>
                      {instrument}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                disabled={loading}
                className={`w-fit px-6 uppercase text-white py-2 rounded-sm font-bold text-center cursor-pointer ${
                  loading ? "bg-gray-400" : "bg-azul-bb hover:bg-azul-bb/90"
                }`}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
