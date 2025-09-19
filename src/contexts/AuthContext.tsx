import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { authService, type UserData, type LoginRequest } from "../services/api";
import { toast } from "react-toastify";

interface User extends UserData {}

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  updateUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("@bb-em-todocanto:token");

      if (token) {
        try {
          const userData = await authService.getUserData();
          localStorage.setItem(
            "@bb-em-todocanto:user",
            JSON.stringify(userData)
          );
          setUser(userData);
        } catch (error: any) {
          console.log("Token expirado, realizando logout automático");
        }
      }
    };

    initializeAuth();
  }, []);

  async function login(credentials: LoginRequest) {
    try {
      setIsLoading(true);

      const loginResponse = await authService.login(credentials);
      localStorage.setItem(
        "@bb-em-todocanto:token",
        loginResponse.access_token
      );

      const userData = await authService.getUserData();
      localStorage.setItem("@bb-em-todocanto:user", JSON.stringify(userData));
      setUser(userData);

      toast.success("Login realizado com sucesso!");
    } catch (error: any) {
      console.error("Erro no login:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Erro ao fazer login. Verifique suas credenciais.";
      toast.error(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  function logout(showToast: boolean = true) {
    localStorage.removeItem("@bb-em-todocanto:token");
    localStorage.removeItem("@bb-em-todocanto:user");
    setUser(null);

    if (showToast) {
      toast.success("Logout realizado com sucesso!");
    }
  }

  async function updateUser() {
    try {
      const userData = await authService.getUserData();
      localStorage.setItem("@bb-em-todocanto:user", JSON.stringify(userData));
      setUser(userData);
    } catch (error: any) {
      console.error("Erro ao atualizar dados do usuário:", error);

      if (error.response?.status === 401) {
        console.log(
          "Token expirado durante atualização, realizando logout automático"
        );
        logout(false);
      }
    }
  }

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
}
