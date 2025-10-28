import mongoose, { Document, Schema } from 'mongoose';

export interface ISiteConfig extends Document {
  key: string;
  value: any;
  description?: string;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  createdAt: Date;
  updatedAt: Date;
}

const siteConfigSchema = new Schema<ISiteConfig>(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    value: {
      type: Schema.Types.Mixed,
      required: true,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      enum: ['string', 'number', 'boolean', 'object', 'array'],
      default: 'string',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISiteConfig>('SiteConfig', siteConfigSchema);
