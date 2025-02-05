"use client";

import React from "react";
import { Button } from "./ui/button";
import { AddToCart } from "@/database/actions/addToCart.action";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";

const AddToCartBtn = ({ id }: { id: string }) => {
  const handleSubmit = async () => {
    try {
      const res = await AddToCart(id);
      if (res.success) {
        toast({
          title: "Item Added to Cart",
        });
      } else {
        throw new Error("unable to add");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: error.message,
          description: "Unable to Add Item",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <>
      <div className="flex gap-4 items-center justify-between">
        <Button
          className="mt-4 w-full bg-black hover:bg-gray-800 transition-all duration-150 text-md"
          onClickCapture={handleSubmit}
        >
          Add to Cart
        </Button>
        <Link
          href="/"
          className="mt-4 w-full text-center hover:text-gray-700 text-black
          dark:text-white dark:hover:text-gray-200"
        >
          Bank To Home
        </Link>
      </div>
    </>
  );
};

export default AddToCartBtn;
