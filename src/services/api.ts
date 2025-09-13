import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL?.replace("/docs", "") ||
    "https://bb-em-todocanto-api-bafbd63d79c6.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar o token de autorização
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@bb-em-todocanto:token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para lidar com respostas de erro
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado ou inválido
      localStorage.removeItem("@bb-em-todocanto:token");
      localStorage.removeItem("@bb-em-todocanto:user");
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export interface LoginRequest {
  user: string;
  password: string;
  is_admin: boolean;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface UserData {
  given_name: string;
  family_name: string;
  locale: string;
  name: string;
  uid: string;
  acct: string;
  upn: string;
  preferred_username: string;
  email: string;
  sub: string;
  updated_at: number;
  id: number;
}

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>("/users/login", credentials);
    return response.data;
  },

  async getUserData(): Promise<UserData> {
    const response = await api.get<UserData>("/users/me");
    return response.data;
  },
};

export default api;
