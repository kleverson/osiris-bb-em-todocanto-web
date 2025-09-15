import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  authService,
  categoryService,
  videoService,
  type Category,
  type CompleteRegisterRequest,
  type VideoUploadRequest,
} from "../services/api";
import { CompartilharIcon, FacebookIcon, WhatsAppIcon } from "../assets/Icons";
import { toast } from "react-toastify";
import { ModalVideoView } from "./ModalVideoView";

export function FormTalentoMusicalStep1({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.user || !formData.password) {
      toast.warning("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await login({
        user: formData.user,
        password: formData.password,
        is_admin: false,
      });
      setStep(2);
    } catch (error) {
      toast.error("Erro ao fazer login. Verifique suas credenciais.");
    }
  };
  return (
    <div className="relative max-w-5xl mx-auto w-full px-4 py-24 z-30 grid md:grid-cols-2 gap-10">
      <div className="space-y-10">
        <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold font-bb-titulos">
          Transforme <br />
          sua música <br />
          em conquista.
        </h2>
        <p className="text-xl text-cinza-600 font-light">
          Envie seu vídeo de apresentação e concorra a até 50 mil pontos Livelo.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:border-l-2 md:pl-10 border-azul-bb/50 flex gap-5 flex-col"
      >
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">Matrícula</span>
          <input
            type="text"
            placeholder="Digite a sua matrícula"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
            value={formData.user}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, user: e.target.value }))
            }
            required
          />
          <span className="text-sm text-azul-bb font-light">
            Exemplo: F000000
          </span>
        </label>
        <label className="flex flex-col gap-2 mt-6">
          <span className="text-cinza-600 font-medium">Senha</span>
          <input
            type="password"
            placeholder="********"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            required
          />
          <span className="text-sm text-azul-bb font-light">
            Utilize a senha dos portais externos.
          </span>
        </label>
        <button
          type="submit"
          disabled={isLoading}
          className={`px-7 py-3 font-bold text-white uppercase mt-10 rounded-sm transition ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-azul-bb cursor-pointer hover:brightness-90"
          }`}
        >
          {isLoading ? "Carregando..." : "continuar"}
        </button>
      </form>
    </div>
  );
}
export function FormTalentoMusicalStep2({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  const { user } = useAuth();
  const [formData, setFormData] = useState<CompleteRegisterRequest>({
    name: "",
    prefix: 0,
    region: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorStep2, setErrorStep2] = useState<string>("");

  const handleNumericInput = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    setFormData((prev) => ({
      ...prev,
      prefix: parseInt(numericValue) || 0,
    }));
  };

  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.preferred_username ?? user?.name ?? "",
        prefix: 0,
        region: "",
      });
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.prefix || !formData.region) {
      toast.warning("Por favor, preencha todos os campos.");
      return;
    }

    try {
      setLoading(true);
      setErrorStep2("");
      await authService.completeRegister(formData);
      toast.success("Dados salvos com sucesso!");
      setStep(3);
    } catch (error: any) {
      let errorMessage = "Erro ao salvar os dados. Tente novamente.";

      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setErrorStep2(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative max-w-5xl mx-auto w-full px-4 py-24 z-30 grid md:grid-cols-2 gap-10">
      <div className="space-y-5">
        <div className="flex gap-3 items-center mb-16">
          <span className="w-7 h-7 rounded-full bg-azul-bb flex items-center justify-center text-xs font-bold text-white">
            01
          </span>
          <span className="text-azul-bb">Seus dados</span>
          <span className="w-7 h-7 rounded-full border-2 border-azul-bb flex items-center justify-center text-xs font-bold text-azul-bb">
            02
          </span>
        </div>
        <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold font-bb-titulos">
          Dados pessoais
        </h2>
        <p className="text-xl text-cinza-600">
          Preencha os seus dados para dar início à inscrição.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:border-l-2 md:pl-10 border-azul-bb/50 flex gap-5 flex-col"
      >
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">Nome completo</span>
          <input
            type="text"
            placeholder="Digite o seu nome completo"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">
            Dependência em que trabalha
          </span>
          <input
            type="text"
            placeholder="Digite o número da sua agência"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
            value={formData.prefix || ""}
            onChange={(e) => handleNumericInput(e.target.value)}
            required
          />
          <span>Exemplo: 4267</span>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">Qual sua região?</span>
          <select
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
            value={formData.region}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, region: e.target.value }))
            }
            required
          >
            <option value="">
              Selecione o local em que está lotado atualmente
            </option>
            <option value="NORTE">Norte</option>
            <option value="NORTHEAST">Nordeste</option>
            <option value="CENTRO_OESTE">Centro-Oeste</option>
            <option value="SUDESTE">Sudeste</option>
            <option value="SUL">Sul</option>
          </select>
        </label>

        {errorStep2 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-red-700 font-medium">{errorStep2}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-10 mt-10">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="w-full py-2 font-bold border-2 border-azul-bb text-azul-bb uppercase rounded-sm cursor-pointer hover:brightness-90 transition"
          >
            VOLTAR
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 font-bold text-white uppercase rounded-sm transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-azul-bb cursor-pointer hover:brightness-90"
            }`}
          >
            {loading ? "Salvando..." : "continuar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export function FormTalentoMusicalStep3({
  setStep,
  setUploadedData,
}: {
  setStep: (step: number) => void;
  setUploadedData: (data: {
    formData: {
      title: string;
      nickname: string;
      category: number;
      description: string;
      song: string;
    };
    files: {
      file?: File;
      thumb?: File;
      picture?: File;
    };
  }) => void;
}) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    nickname: "",
    category: 0,
    description: "",
    song: "",
  });
  const [files, setFiles] = useState<{
    file?: File;
    thumb?: File;
    picture?: File;
  }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await categoryService.getCategories();
        setCategories(response);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    };
    loadCategories();
  }, []);

  const handleFileChange = (type: "file" | "thumb" | "picture", file: File) => {
    setFiles((prev) => ({ ...prev, [type]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Limpa erro anterior

    if (
      !formData.title ||
      !formData.nickname ||
      !formData.category ||
      !formData.description ||
      !formData.song ||
      !files.file ||
      !files.thumb ||
      !files.picture
    ) {
      toast.warning(
        "Por favor, preencha todos os campos e faça upload dos arquivos."
      );
      setError(
        "Por favor, preencha todos os campos e faça upload dos arquivos."
      );
      return;
    }

    try {
      setLoading(true);
      const videoData: VideoUploadRequest = {
        ...formData,
        file: files.file!,
        thumb: files.thumb!,
        picture: files.picture!,
      };

      await videoService.uploadVideo(videoData);

      // Passa os dados completos para o próximo step
      setUploadedData({
        formData,
        files,
      });

      setStep(4);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Erro inesperado ao enviar vídeo. Tente novamente em alguns instantes.";
      setError(errorMessage);
      toast.error("Erro ao enviar vídeo. Verifique a mensagem abaixo.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative max-w-5xl mx-auto w-full px-4 py-24 z-30 grid md:grid-cols-2 gap-10">
      <div className="space-y-5">
        <div className="flex gap-3 items-center mb-16">
          <span className="w-7 h-7 rounded-full bg-verde-500 flex items-center justify-center text-xs font-bold text-azul-bb">
            01
          </span>
          <span className="w-7 h-7 rounded-full bg-azul-bb flex items-center justify-center text-xs font-bold text-white">
            02
          </span>
          <span className="text-azul-bb">Sua música</span>
        </div>
        <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold font-bb-titulos">
          Hora da sua apresentação
        </h2>
        <p className="text-xl text-cinza-600">
          Grave a sua apresentação ou da sua banda e envie o vídeo pra gente
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:border-l-2 md:px-10 border-cinza-400 flex gap-5 flex-col md:max-h-96 overflow-y-auto"
      >
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">
            Escolha a categoria
          </span>
          <select
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                category: parseInt(e.target.value),
              }))
            }
            required
          >
            <option value="">Selecione</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">
            Como gostaria de ser chamado(a)
          </span>
          <input
            type="text"
            placeholder="Fale pra gente"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
            value={formData.nickname}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, nickname: e.target.value }))
            }
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">
            Fale um pouco sobre você
          </span>
          <textarea
            placeholder="Conte sobre o que te inspira nessa jornada"
            maxLength={400}
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition resize-none h-32"
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            required
          />
          <span className="text-sm text-azul-bb">
            Máximo de 400 caracteres.
          </span>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">
            Qual é o nome da música
          </span>
          <input
            type="text"
            placeholder="Digite o título da música que será apresentada"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">Escreva a letra</span>
          <textarea
            placeholder="Escreva a letra da sua música caso possua"
            maxLength={400}
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition resize-none h-32"
            value={formData.song}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, song: e.target.value }))
            }
            required
          />
        </label>
        <div className="space-y-4">
          <h3 className="text-cinza-600 text-xl font-extrabold">
            Faça upload do seu vídeo de apresentação
          </h3>
          <p className="text-cinza-600 font-light">
            Capriche no vídeo. Escolha o melhor ângulo para registrar o melhor
            da sua música. Um vídeo bem gravado com som bem captado valoriza
            ainda mais o seu talento.
          </p>
          <label className="bg-white p-8 flex flex-col items-center justify-center gap-4 text-center text-azul-bb cursor-pointer">
            <span>
              {files.file
                ? files.file.name
                : "Arraste e solte o arquivo do seu vídeo para fazer o envio"}
            </span>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.865967"
                width="40"
                height="40"
                rx="20"
                fill="#465EFF"
              />
              <path
                d="M15.2618 17.7819C15.4401 17.7819 15.6077 17.7125 15.734 17.5863L19.289 14.0313V21.9434C19.289 22.3115 19.5884 22.6109 19.9565 22.6109C20.3246 22.6109 20.624 22.3115 20.624 21.9434V14.0313L24.179 17.5863C24.3051 17.7123 24.4727 17.7819 24.651 17.7819C24.9261 17.7819 25.1624 17.624 25.2676 17.3698C25.3728 17.1157 25.3176 16.8369 25.1229 16.6424L20.64 12.1595C20.2629 11.7824 19.6492 11.7824 19.2721 12.1595L14.7892 16.6424C14.5948 16.8369 14.5393 17.1157 14.6445 17.3698C14.7497 17.624 14.986 17.7819 15.2611 17.7819H15.2618Z"
                fill="white"
              />
              <path
                d="M27.6778 21.6907C27.4993 21.6865 27.3305 21.7549 27.2015 21.8814C27.0718 22.0088 26.9973 22.1855 26.9973 22.3665V26.5807C26.9973 26.6302 26.9571 26.6704 26.9076 26.6704H13.0927C13.0433 26.6704 13.003 26.6302 13.003 26.5807V22.358C13.003 21.9899 12.7036 21.6904 12.3355 21.6904C11.9674 21.6904 11.668 21.9899 11.668 22.358V27.0376C11.668 27.5715 12.1022 28.0057 12.6361 28.0057H27.3645C27.8984 28.0057 28.3326 27.5715 28.3326 27.0376V22.358C28.3326 21.9968 28.039 21.6974 27.6781 21.6904L27.6778 21.6907Z"
                fill="white"
              />
            </svg>

            <input
              type="file"
              accept="video/*"
              onChange={(e) =>
                e.target.files?.[0] &&
                handleFileChange("file", e.target.files[0])
              }
              className="hidden"
            />
            <span className="px-5 py-2 font-bold border-2 border-azul-bb text-azul-bb uppercase rounded-sm cursor-pointer hover:brightness-90 transition">
              selecionar arquivo
            </span>
          </label>
        </div>
        <div className="space-y-4">
          <h3 className="text-cinza-600 text-xl font-extrabold">
            Faça upload da foto de capa do vídeo
          </h3>
          <p className="text-cinza-600 font-light">
            Para melhorar o destaque do seu vídeo, envie uma foto para chamar a
            atenção de quem vai votar
          </p>
          <label className="bg-white p-8 flex flex-col items-center justify-center gap-4 text-center text-azul-bb cursor-pointer">
            <span>
              {files.thumb
                ? files.thumb.name
                : "Arraste e solte o arquivo da sua foto para fazer o envio"}
            </span>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.865967"
                width="40"
                height="40"
                rx="20"
                fill="#465EFF"
              />
              <path
                d="M15.2618 17.7819C15.4401 17.7819 15.6077 17.7125 15.734 17.5863L19.289 14.0313V21.9434C19.289 22.3115 19.5884 22.6109 19.9565 22.6109C20.3246 22.6109 20.624 22.3115 20.624 21.9434V14.0313L24.179 17.5863C24.3051 17.7123 24.4727 17.7819 24.651 17.7819C24.9261 17.7819 25.1624 17.624 25.2676 17.3698C25.3728 17.1157 25.3176 16.8369 25.1229 16.6424L20.64 12.1595C20.2629 11.7824 19.6492 11.7824 19.2721 12.1595L14.7892 16.6424C14.5948 16.8369 14.5393 17.1157 14.6445 17.3698C14.7497 17.624 14.986 17.7819 15.2611 17.7819H15.2618Z"
                fill="white"
              />
              <path
                d="M27.6778 21.6907C27.4993 21.6865 27.3305 21.7549 27.2015 21.8814C27.0718 22.0088 26.9973 22.1855 26.9973 22.3665V26.5807C26.9973 26.6302 26.9571 26.6704 26.9076 26.6704H13.0927C13.0433 26.6704 13.003 26.6302 13.003 26.5807V22.358C13.003 21.9899 12.7036 21.6904 12.3355 21.6904C11.9674 21.6904 11.668 21.9899 11.668 22.358V27.0376C11.668 27.5715 12.1022 28.0057 12.6361 28.0057H27.3645C27.8984 28.0057 28.3326 27.5715 28.3326 27.0376V22.358C28.3326 21.9968 28.039 21.6974 27.6781 21.6904L27.6778 21.6907Z"
                fill="white"
              />
            </svg>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files?.[0] &&
                handleFileChange("thumb", e.target.files[0])
              }
              className="hidden"
            />
            <span className="px-5 py-2 font-bold border-2 border-azul-bb text-azul-bb uppercase rounded-sm cursor-pointer hover:brightness-90 transition">
              selecionar arquivo
            </span>
          </label>
        </div>
        <div className="space-y-4">
          <h3 className="text-cinza-600 text-xl font-extrabold">
            Faça upload da sua melhor foto
          </h3>
          <p className="text-cinza-600 font-light">
            Hora de impressionar o público! Escolha o melhor angulo e envie a
            sua foto que será usada como destaque no seu vídeo
          </p>
          <label className="bg-white p-8 flex flex-col items-center justify-center gap-4 text-center text-azul-bb cursor-pointer">
            <span>
              {files.picture
                ? files.picture.name
                : "Arraste e solte o arquivo da sua foto para fazer o envio"}
            </span>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.865967"
                width="40"
                height="40"
                rx="20"
                fill="#465EFF"
              />
              <path
                d="M15.2618 17.7819C15.4401 17.7819 15.6077 17.7125 15.734 17.5863L19.289 14.0313V21.9434C19.289 22.3115 19.5884 22.6109 19.9565 22.6109C20.3246 22.6109 20.624 22.3115 20.624 21.9434V14.0313L24.179 17.5863C24.3051 17.7123 24.4727 17.7819 24.651 17.7819C24.9261 17.7819 25.1624 17.624 25.2676 17.3698C25.3728 17.1157 25.3176 16.8369 25.1229 16.6424L20.64 12.1595C20.2629 11.7824 19.6492 11.7824 19.2721 12.1595L14.7892 16.6424C14.5948 16.8369 14.5393 17.1157 14.6445 17.3698C14.7497 17.624 14.986 17.7819 15.2611 17.7819H15.2618Z"
                fill="white"
              />
              <path
                d="M27.6778 21.6907C27.4993 21.6865 27.3305 21.7549 27.2015 21.8814C27.0718 22.0088 26.9973 22.1855 26.9973 22.3665V26.5807C26.9973 26.6302 26.9571 26.6704 26.9076 26.6704H13.0927C13.0433 26.6704 13.003 26.6302 13.003 26.5807V22.358C13.003 21.9899 12.7036 21.6904 12.3355 21.6904C11.9674 21.6904 11.668 21.9899 11.668 22.358V27.0376C11.668 27.5715 12.1022 28.0057 12.6361 28.0057H27.3645C27.8984 28.0057 28.3326 27.5715 28.3326 27.0376V22.358C28.3326 21.9968 28.039 21.6974 27.6781 21.6904L27.6778 21.6907Z"
                fill="white"
              />
            </svg>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files?.[0] &&
                handleFileChange("picture", e.target.files[0])
              }
              className="hidden"
            />
            <span className="px-5 py-2 font-bold border-2 border-azul-bb text-azul-bb uppercase rounded-sm cursor-pointer hover:brightness-90 transition">
              selecionar arquivo
            </span>
          </label>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-medium">Erro no envio</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-10 mt-10">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="w-full py-2 font-bold border-2 border-azul-bb text-azul-bb uppercase rounded-sm cursor-pointer hover:brightness-90 transition"
          >
            VOLTAR
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 font-bold text-white uppercase rounded-sm transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-azul-bb cursor-pointer hover:brightness-90"
            }`}
          >
            {loading ? "Enviando..." : "continuar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export function FormTalentoMusicalStep4({
  uploadedData,
}: {
  uploadedData: {
    formData?: {
      title: string;
      nickname: string;
      category: number;
      description: string;
      song: string;
    };
    files?: {
      file?: File;
      thumb?: File;
      picture?: File;
    };
  };
}) {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative max-w-5xl mx-auto w-full px-4 py-24 z-30 grid md:grid-cols-2 md:items-center gap-10">
        <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold font-bb-titulos">
          Inscrição <br />
          concluída <br />
          com sucesso
        </h2>
        <div className="md:border-l-2 md:pl-10 border-cinza-400 flex gap-5 flex-col md:text-lg">
          <p className="text-cinza-600 font-light">
            Pronto! A sua parte está feita. Agora é{" "}
            <strong>hora de divulgar a sua música</strong>, engajar a sua
            torcida e torcer pela vaga na grande final do{" "}
            <strong>BB em todo canto.</strong>
          </p>
          <button
            onClick={handleOpenModal}
            className="px-7 py-3 font-bold bg-azul-bb text-white uppercase w-fit rounded-sm cursor-pointer hover:scale-105 duration-300 text-base"
          >
            Ver vídeo
          </button>
          <p className="text-cinza-600 font-bold">Boa sorte!</p>
        </div>
      </div>

      <ModalVideoView
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoData={user?.already_video ? undefined : uploadedData}
        alreadyVideoData={user?.already_video}
      />
    </>
  );
}

export function FormTalentoMusicalStep5({
  uploadedData,
}: {
  uploadedData: { picture?: string; thumb?: string };
}) {
  return (
    <div className="relative max-w-5xl mx-auto w-full px-4 py-24 z-30 grid md:grid-cols-2 gap-10">
      <div className="space-y-5">
        <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold font-bb-titulos">
          Inscrição concluída com sucesso
        </h2>
        <p className="text-xl text-cinza-600">
          Pronto! A sua parte está feita. Agora é{" "}
          <strong>hora de divulgar a sua música</strong>, engajar a sua torcida
          e torcer pela vaga na grande final do{" "}
          <strong>BB em todo canto.</strong>
        </p>
        <p className="text-cinza-600">
          <strong>Boa sorte!</strong>
        </p>
      </div>
      <form className="md:border-l-2 md:pl-10 border-azul-bb/50 flex gap-5 flex-col">
        <div className="grid grid-cols-2 items-center gap-5 bg-white p-10">
          <img
            src={uploadedData.thumb || "https://picsum.photos/200/300"}
            className="object-cover rounded"
            alt="Capa do vídeo"
          />
          <div>
            <p className="text-cinza-600 font-light">
              Divulgue o seu vídeo nas redes e chame a galera pra votar!
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="#" target="_blank">
                <FacebookIcon />
              </a>
              <a href="#" target="_blank">
                <WhatsAppIcon />
              </a>
              <a href="#" target="_blank">
                <CompartilharIcon />
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
