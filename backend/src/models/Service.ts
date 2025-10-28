import mongoose, { Document, Schema } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  icon?: string;
  features: string[];
  pricing?: {
    amount: number;
    currency: string;
    period?: string;
  };
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const serviceSchema = new Schema<IService>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    features: {
      type: [String],
      default: [],
    },
    pricing: {
      amount: {
        type: Number,
      },
      currency: {
        type: String,
        default: 'USD',
      },
      period: {
        type: String,
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IService>('Service', serviceSchema);
