import mongoose, { Document, Schema } from 'mongoose';

export interface IPortfolioProject extends Document {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  images?: string[];
  link?: string;
  githubLink?: string;
  technologies: string[];
  features: string[];
  isFeatured: boolean;
  isPublished: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const portfolioProjectSchema = new Schema<IPortfolioProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
    },
    images: {
      type: [String],
      default: [],
    },
    link: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    technologies: {
      type: [String],
      default: [],
    },
    features: {
      type: [String],
      default: [],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPublished: {
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

export default mongoose.model<IPortfolioProject>('PortfolioProject', portfolioProjectSchema);
