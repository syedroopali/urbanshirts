"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Promition = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };
  return (
    <section className="w-full py-24 text-center px-6 bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="container mx-auto max-w-4xl space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Limited Time Offer!
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Get exclusive discounts on our top products. Dont miss out on these
          amazing deals.
        </p>
        <Button
          className="px-6 py-3 text-lg bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white transition-all duration-300"
          onClickCapture={handleClick}
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Promition;
