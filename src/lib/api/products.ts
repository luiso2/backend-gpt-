import apiClient from './client';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  features: string[];
  isActive: boolean;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  status: string;
  results: number;
  data: {
    products: Product[];
  };
}

export interface ProductResponse {
  status: string;
  data: {
    product: Product;
  };
}

export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  features?: string[];
  stock?: number;
}

export const productsApi = {
  getAll: async (params?: {
    category?: string;
    isActive?: boolean;
  }): Promise<ProductsResponse> => {
    const response = await apiClient.get<ProductsResponse>('/products', { params });
    return response.data;
  },

  getById: async (id: string): Promise<ProductResponse> => {
    const response = await apiClient.get<ProductResponse>(`/products/${id}`);
    return response.data;
  },

  create: async (data: CreateProductData): Promise<ProductResponse> => {
    const response = await apiClient.post<ProductResponse>('/products', data);
    return response.data;
  },

  update: async (id: string, data: Partial<CreateProductData>): Promise<ProductResponse> => {
    const response = await apiClient.put<ProductResponse>(`/products/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/products/${id}`);
  },
};
