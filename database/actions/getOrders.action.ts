import dbConnect from "../dbConnect";
import Order from "../models/order.model";

export async function getOrders() {
  await dbConnect();

  const orders = await Order.find();

  console.log(orders);
}
