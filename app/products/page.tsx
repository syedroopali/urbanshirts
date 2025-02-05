import AllProducts from "@/components/AllProducts";
import React from "react";

const page = () => {
  return (
    <>
      <section className="w-full py-6 sm:py-10 md:py-14  flex items-center justify-center border-t border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center">
          Explore Our Best Products
        </h2>
      </section>
      <div className="w-full flex items-center justify-center min-h-screen mb-16">
        <AllProducts />
      </div>
    </>
  );
};

export default page;
