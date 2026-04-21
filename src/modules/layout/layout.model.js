import { Schema, model } from 'mongoose';

// Recursive layout node schema — validates the tree structure
const layoutNodeSchema = new Schema(
  {
    id: { type: String, required: true },
    color: { type: String, required: true },
    splitType: {
      type: String,
      enum: ['v', 'h', null],
      default: null,
    },
    ratio: {
      type: Number,
      default: 50,
      min: 0,
      max: 100,
    },
    children: {
      type: [Schema.Types.Mixed], // recursive — each child is a layoutNode
      default: null,
      validate: {
        validator: function (val) {
          // null (leaf node) or exactly 2 children (split node)
          return val === null || (Array.isArray(val) && val.length === 2);
        },
        message: 'children must be null or an array of exactly 2 nodes',
      },
    },
  },
  { _id: false }
);
// Layout Schema
const layoutSchema = new Schema(
  {
    name: { type: String, required: true },
    structure: {
      type: layoutNodeSchema,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Layout = model('Layout', layoutSchema);
