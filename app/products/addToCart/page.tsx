import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { RemoveFromCart } from "@/database/actions/removeFromCart.action";
import Product from "@/database/models/porduct.model";
import User from "@/database/models/user.model";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function CartPage() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  const user = await User.findOne({ email: session?.user?.email });
  const cartIds = user.cart; // Assuming this is an array of product IDs
  const cart = await Product.find({ _id: { $in: cartIds } }); // Fetch multiple products

  const totalPrice = cart.reduce((preV, curV) => preV + curV.price, 0);

  return (
    <div className="container mx-auto px-4 py-8 lg:w-1/2">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="p-4 border rounded-md shadow-md">
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item._id.toString()}
                className="flex flex-col sm:flex-row justify-between items-center border-b pb-2"
              >
                <span className="text-lg font-medium">
                  {item.name} - Rs: {item.price.toFixed(2)}
                </span>
                <form action={RemoveFromCart} className="mt-2 sm:mt-0">
                  <input type="hidden" name="id" value={item._id.toString()} />
                  <Button variant="destructive" size="sm">
                    Remove
                  </Button>
                </form>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-xl font-semibold text-center sm:text-right">
            Total: Rs: {totalPrice.toFixed(2)}
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/products/order"
              className="bg-black text-white rounded-lg px-3 py-2 w-fit mt-4 block shadow-sm hover:bg-gray-800 dark:bg-white dark:text-black hover:dark:bg-gray-200"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <Link href="/">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
}
