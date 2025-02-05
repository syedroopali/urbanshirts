"use client";
import React from "react";
import { NextPageContext } from "next";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
interface ErrorProps {
  statusCode: number;
  message: string;
}
const ErrorPage: React.FC<ErrorProps> = ({ statusCode, message }) => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/");
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-center p-6">
      <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        {message || "An unexpected error occurred."}
      </p>
      <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
        Error code: {statusCode || "Unknown"}
      </p>
      <div className="flex gap-4">
        <Button
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md"
          onClickCapture={() => window.location.reload()}
        >
          Try Again
        </Button>
        <Button
          className="mt-6 px-6 py-3 bg-black text-white rounded-md"
          onClickCapture={handleSubmit}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message =
    err?.message || "There was a problem with the request. Please try again.";
  return { statusCode, message };
};

export default ErrorPage;
