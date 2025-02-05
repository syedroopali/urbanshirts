"use client";

import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const NotLoginToast = ({
  username,
}: {
  username: string | null | undefined;
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (!username) {
      toast({
        title: "Please Login First",
        variant: "destructive",
      });
    }
  };

  const handleRouter = () => {
    router.push("/products/addToCart");
  };

  return (
    <Button
      // href="/products/addToCart"
      type="button"
      variant="ghost"
      onClickCapture={username ? handleRouter : handleClick}
      className="text-gray-900 dark:text-white p-0 hover:bg-transparent hover:stroke-yellow-400 hover:dark:bg-transparent"
      asChild
    >
      <ShoppingCart className="w-7 h-7" />
    </Button>
  );
};

export default NotLoginToast;
