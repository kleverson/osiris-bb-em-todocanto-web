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
  already_video?: {
    id: number;
    nickname: string;
    title: string;
    description: string;
    deleted: boolean;
    thumb: string;
    user_id: number;
    updated_at: string | null;
    category: number;
    registrations_participants?: string;
    song: string;
    file: string;
    picture: string;
    created_at: string;
  };
}

export interface ClassifiedItem {
  title: string;
  city: string;
  state: string;
  type_item: string;
  position: string;
  style: string;
  category: string;
  active: boolean;
  email?: string;
  description: string;
  registration: string;
}

export interface ClassifiedResponse {
  data: ClassifiedItem[];
  page: number;
  total_pages: number;
  items_per_page: number;
}

export interface ClassifiedSearchParams {
  term?: string;
  page?: number;
  limit?: number;
}

export interface ClassifiedInfo {
  types: string[];
  styles: string[];
  instruments: string[];
}

export interface CompleteRegisterRequest {
  name: string;
  prefix: number;
  region: string;
}

export interface VideoUploadRequest {
  title: string;
  nickname: string;
  category: number;
  description: string;
  registrations_participants?: string;
  file: File;
  thumb: File;
  picture: File;
  song: string;
}

export interface VideoUpdateRequest {
  title: string;
  nickname: string;
  category: number;
  description: string;
  registrations_participants?: string;
  file?: File;
  thumb?: File;
  picture?: File;
  song: string;
}

export interface Category {
  id: number;
  name: string;
  active: boolean;
  created_at: string;
  updated_at: string | null;
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

  async completeRegister(data: CompleteRegisterRequest): Promise<void> {
    await api.post("/users/complete-register", data);
  },
};

export const classifiedService = {
  async searchClassifieds(
    params: ClassifiedSearchParams = {}
  ): Promise<ClassifiedResponse> {
    const searchParams = new URLSearchParams();

    if (params.term) searchParams.append("term", params.term);
    if (params.page) searchParams.append("page", params.page.toString());
    if (params.limit) searchParams.append("limit", params.limit.toString());

    const response = await api.get<ClassifiedResponse>(
      `/classified/?${searchParams.toString()}`
    );
    return response.data;
  },

  async createClassified(classified: ClassifiedItem): Promise<ClassifiedItem> {
    const response = await api.post<ClassifiedItem>("/classified", classified);
    return response.data;
  },

  async getClassifiedInfo(): Promise<ClassifiedInfo> {
    const response = await api.get<ClassifiedInfo>("/classified/info");
    return response.data;
  },
};

export const videoService = {
  async uploadVideo(data: VideoUploadRequest): Promise<any> {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("nickname", data.nickname);
    formData.append("category", data.category.toString());
    formData.append("description", data.description);
    formData.append(
      "registrations_participants",
      data.registrations_participants || "Sem participantes"
    );
    formData.append("song", data.song);
    formData.append("file", data.file);
    formData.append("thumb", data.thumb);
    formData.append("picture", data.picture);

    const response = await api.post("/video/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  async updateVideo(data: VideoUpdateRequest): Promise<any> {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("nickname", data.nickname);
    formData.append("category", data.category.toString());
    formData.append("description", data.description);
    formData.append(
      "registrations_participants",
      data.registrations_participants || "Sem participantes"
    );
    formData.append("song", data.song);

    if (data.file) {
      formData.append("file", data.file);
    }
    if (data.thumb) {
      formData.append("thumb", data.thumb);
    }
    if (data.picture) {
      formData.append("picture", data.picture);
    }

    const response = await api.put("/video/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};

export const categoryService = {
  async getCategories(): Promise<Category[]> {
    const response = await api.get<Category[]>("/category");
    return response.data;
  },
};

export default api;
