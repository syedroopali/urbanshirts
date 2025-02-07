import AddToCartBtn from "@/components/AddToCartBtn";
import AllProducts from "@/components/AllProducts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Product from "@/database/models/porduct.model";
import { PageProps } from "@/.next/types/app/page";

const ProductPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const product = await Product.findOne({ _id: id });

  return (
    <section className="container mx-auto px-1 sm:px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Product Details Section */}
        <div className="lg:col-span-2 flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="https://5.imimg.com/data5/SELLER/Default/2023/12/368334062/DP/HR/EJ/32968154/t-shirtzmq6b-512-1000x1000.webp"
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>

          {/* Product Details */}
          <Card className="w-full md:w-1/2 p-1 sm:p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black bg-yellow-300 dark:bg-yellow-400 w-fit px-3 py-1 rounded-md">
                {product.tag}
              </p>
              <p className="text-3xl font-bold text-primary mt-4">
                Rs: {product.price.toFixed(2)}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                {product.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {product.detail}
              </p>
              <div className="mt-6">
                <AddToCartBtn id={id} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Similar Products Section */}
        <div className="w-full lg:w-auto h-auto lg:h-[72vh] overflow-y-auto px-4 py-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
          <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-6">
            More Similar Products
          </h2>
          <AllProducts />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
