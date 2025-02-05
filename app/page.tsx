import AllProducts from "@/components/AllProducts";
import Community from "@/components/Community";
import Hero from "@/components/Hero";
import Promition from "@/components/Promition";

const page = () => {
  return (
    <>
      <Hero />
      <div className="w-full flex items-center justify-center min-h-screen mb-10">
        <AllProducts />
      </div>
      <Promition />
      <Community />
    </>
  );
};

export default page;
