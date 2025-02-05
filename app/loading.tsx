import { LoaderCircle } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-700">
      <div className="flex flex-col items-center space-y-2">
        <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
        <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
