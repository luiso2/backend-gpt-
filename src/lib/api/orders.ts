import apiClient from './client';

export interface OrderItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  shippingAddress?: ShippingAddress;
  createdAt: string;
  updatedAt: string;
}

export interface OrdersResponse {
  status: string;
  results: number;
  data: {
    orders: Order[];
  };
}

export interface OrderResponse {
  status: string;
  data: {
    order: Order;
  };
}

export interface CreateOrderData {
  items: {
    product: string;
    quantity: number;
  }[];
  paymentMethod: string;
  shippingAddress?: ShippingAddress;
}

export interface UpdateOrderStatusData {
  status?: Order['status'];
  paymentStatus?: Order['paymentStatus'];
}

export const ordersApi = {
  getAll: async (): Promise<OrdersResponse> => {
    const response = await apiClient.get<OrdersResponse>('/orders');
    return response.data;
  },

  getById: async (id: string): Promise<OrderResponse> => {
    const response = await apiClient.get<OrderResponse>(`/orders/${id}`);
    return response.data;
  },

  create: async (data: CreateOrderData): Promise<OrderResponse> => {
    const response = await apiClient.post<OrderResponse>('/orders', data);
    return response.data;
  },

  updateStatus: async (
    id: string,
    data: UpdateOrderStatusData
  ): Promise<OrderResponse> => {
    const response = await apiClient.patch<OrderResponse>(`/orders/${id}/status`, data);
    return response.data;
  },
};
