import dbConnect from "@/database/dbConnect";
import Product from "@/database/models/porduct.model";
import React from "react";
import CustomCard from "./Card";

const AllProducts = async () => {
  await dbConnect();
  const products = await Product.find().sort({ createdAt: -1 });
  return (
    <ul className="w-full flex gap-10 flex-wrap items-center justify-center ">
      {products.map((shirt, i) => {
        const id = shirt._id.toString();
        return (
          <li key={i}>
            <CustomCard
              id={id}
              title={shirt.name}
              description={shirt.description}
              buttonText="Buy Now"
              // imageUrl=""
              tag={shirt.tag}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default AllProducts;
