"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6 py-10 sm:py-16 md:py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left gap-10 px-4 sm:px-8 md:px-12">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-10 ">
              Discover the Best Deals on{" "}
              <span className="text-yellow-300 dark:text-yellow-400 bg-black/90 px-2 rounded-lg">
                Quality Products
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
              Shop the latest trends and unbeatable prices. Upgrade your style
              today.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                className="px-6 sm:px-8 py-3 text-lg font-semibold rounded-lg shadow-md m-auto"
                variant="default"
                onClickCapture={handleClick}
              >
                Shop Now
              </Button>
              {/* <Button
                variant="outline"
                className="px-6 sm:px-8 py-3 text-lg border-gray-700 dark:border-gray-300 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 font-semibold rounded-lg shadow-md"
              >
                Learn More
              </Button> */}
            </div>
          </div>
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mt-8 lg:mt-0">
            <Image
              src="/HeroImage.jpg"
              alt="E-commerce Hero Image"
              width={600}
              height={400}
              className="rounded-xl shadow-xl object-cover border-4 border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Separator Section */}
      <section className="w-full py-10 sm:py-16 md:py-20  flex items-center justify-center border-t border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center">
          Explore Our Featured Products
        </h2>
      </section>
    </>
  );
};

export default Hero;
