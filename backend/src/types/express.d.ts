declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        role: string;
      };
      isGPTRequest?: boolean;
      requestSource?: string;
    }
  }
}

export {};
