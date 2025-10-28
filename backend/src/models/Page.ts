import mongoose, { Document, Schema } from 'mongoose';

export interface IPage extends Document {
  slug: string;
  title: string;
  description?: string;
  content: any;
  metadata?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const pageSchema = new Schema<IPage>(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    content: {
      type: Schema.Types.Mixed,
      default: {},
    },
    metadata: {
      metaTitle: String,
      metaDescription: String,
      ogImage: String,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPage>('Page', pageSchema);
