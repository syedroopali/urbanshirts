import { model, models, Schema } from "mongoose";
import User from "./user.model";

const OrderSchema = new Schema({
  address: { type: String, default: "" },
  phone: { type: String, default: "" },
  userId: { type: Schema.Types.ObjectId, ref: User },
  order: { type: [String] },
  status: { type: String, default: "pending" },
});

const Order = models?.Order || model("Order", OrderSchema);

export default Order;
