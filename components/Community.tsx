import React from "react";
import { Button } from "./ui/button";

const Community = () => {
  return (
    <section className="w-full py-16 px-6 text-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="container mx-auto max-w-4xl space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Subscribe to our newsletter for the latest deals, exclusive offers,
          and product updates.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-1/2 px-4 py-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400"
          />
          <Button className="px-6 py-3 text-lg bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white transition-all duration-300">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
