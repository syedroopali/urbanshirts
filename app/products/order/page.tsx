"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { order } from "@/database/actions/order.action";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { data: session, status } = useSession();

  const handleOrder = async () => {
    if (!address || !phone) {
      alert("Please fill in all details");
      return;
    }
    setOrderPlaced(true);
    await order({ email: session?.user?.email, address, phone });
  };

  const handleClick = () => {
    router.push("/");
  };

  if (status !== "authenticated") {
    return (
      <p className="w-full h-screen text-xl flex items-center justify-center">
        Please Login First
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-1 sm:p-6 bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-lg p-1 sm:p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          {orderPlaced ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600">
                Order Placed Successfully!
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Thank you for shopping with us.
              </p>
              <Button onClickCapture={handleClick} variant="default">
                Back To Home
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <Label>Name</Label>
                  <Input value={session?.user?.name || ""} readOnly />
                </div>
                <div>
                  <Label>Address</Label>
                  <Input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                  />
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="cod"
                    checked
                    readOnly
                    placeholder="radio"
                  />
                  <Label htmlFor="cod" className="font-medium">
                    Cash on Delivery
                  </Label>
                </div>
                <Button className="w-full mt-4" onClickCapture={handleOrder}>
                  Place Order
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPage;
