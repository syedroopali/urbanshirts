import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { RemoveFromCart } from "@/database/actions/removeFromCart.action";
import Product from "@/database/models/porduct.model";
import User from "@/database/models/user.model";
import Link from "next/link";

export default async function CartPage() {
  const session = await auth();
  if (!session) {
    return;
  }
  const user = await User.findOne({ email: session?.user?.email });
  const cartId = user.cart;
  const cart = await Product.find({ _id: cartId });
  const totalPrice = cart.reduce((preV, curV) => (preV += curV.price), 0);
  return (
    <div className="container mx-auto p-8 w-[50%] ">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="p-4 border rounded-md">
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b p-2"
              >
                <span>
                  {item.name} - Rs: {item.price.toFixed(2)}
                </span>
                <form action={RemoveFromCart}>
                  <input
                    readOnly
                    hidden
                    placeholder="id"
                    name="id"
                    value={item._id.toString()}
                  />
                  <Button variant="destructive">Remove</Button>
                </form>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-lg font-semibold">
            Total: Rs: {totalPrice.toFixed(2)}
          </div>
          <Button className="mt-4 w-full">Proceed to Checkout</Button>
        </div>
      )}
      <div className="mt-6">
        <Link href="/">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
}
