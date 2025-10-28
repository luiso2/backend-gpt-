import mongoose, { Document, Schema } from 'mongoose';

export interface ISection extends Document {
  pageSlug: string;
  sectionKey: string;
  title?: string;
  content: any;
  order: number;
  isVisible: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const sectionSchema = new Schema<ISection>(
  {
    pageSlug: {
      type: String,
      required: true,
      index: true,
    },
    sectionKey: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    content: {
      type: Schema.Types.Mixed,
      required: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

sectionSchema.index({ pageSlug: 1, sectionKey: 1 }, { unique: true });

export default mongoose.model<ISection>('Section', sectionSchema);
