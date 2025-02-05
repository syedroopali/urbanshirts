import { model, models, Schema } from "mongoose";

export interface IProduct {
  name: string;
  price: number;
  description: string;
  detail: string;
  tag: string;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  detail: { type: String },
  tag: { type: String },
});

const Product = models?.Product || model<IProduct>("Product", ProductSchema);

export default Product;
