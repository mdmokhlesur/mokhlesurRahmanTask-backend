import { Schema, model } from 'mongoose';

const layoutSchema = new Schema(
  {
    name: { type: String, required: true },
    structure: { type: Object, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);

export const Layout = model('Layout', layoutSchema);
