import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

interface ModalLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalLogin({ isOpen, onClose }: ModalLoginProps) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !password) {
      return;
    }

    try {
      await login({
        user,
        password,
        is_admin: false,
      });

      setUser("");
      setPassword("");
      onClose();
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setUser("");
      setPassword("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[10000]"
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-w-5xl mx-auto w-full p-10 md:p-20 z-30 grid md:grid-cols-2 gap-10">
            <button
              onClick={handleClose}
              disabled={isLoading}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-azul-bb"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="space-y-10">
              <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold font-bb-titulos">
                Acesse <br />
                sua conta <br />
                BB em Todo Canto.
              </h2>
              <p className="text-xl text-cinza-600 font-light">
                Faça login com sua matrícula e senha dos portais externos para
                acessar o sistema.
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
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  disabled={isLoading}
                  className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition disabled:opacity-50"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition disabled:opacity-50"
                  required
                />
                <span className="text-sm text-azul-bb font-light">
                  Utilize a senha dos portais externos.
                </span>
              </label>

              <button
                type="submit"
                disabled={isLoading || !user || !password}
                className="px-7 py-3 font-bold bg-azul-bb text-white uppercase mt-10 rounded-sm cursor-pointer hover:brightness-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Entrando...
                  </>
                ) : (
                  "Entrar"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
