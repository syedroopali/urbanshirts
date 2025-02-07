"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import qs from "querystring";
import { Button } from "./ui/button";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  const handleSubmit = () => {
    // const result = qs.parse(searchQuery);
    // console.log(result);

    router.push(`/?query=${searchQuery}`);
    // console.log(searchParams);
  };

  return (
    <>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2"
      />
      <Button onClickCapture={handleSubmit}></Button>
    </>
  );
};

export default SearchBar;
