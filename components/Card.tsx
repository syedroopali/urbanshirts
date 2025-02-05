import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  tag: string;
  id: string;
};

const CustomCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  tag,
  id,
}) => {
  return (
    <Card className="w-80 rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full h-48 bg-yellow-100 dark:bg-yellow-500"></div>
      {/* <Image
        src={imageUrl}
        alt={title}
        width={320}
        height={180}
        className="w-full h-40 object-cover"
      /> */}
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </CardTitle>
        <p className=" px-2 w-fit bg-yellow-300 dark:bg-yellow-400 rounded-md text-gray-800 dark:text-black">
          {tag}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
        <Link
          // ${href}${id}
          href={`/products/${id}`}
          className="w-fit flex items-center justify-center bg-black dark:bg-white dark:text-black transition-all duration-200 px-4 py-1 rounded-md text-white text-md font-medium"
        >
          {buttonText}
        </Link>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
