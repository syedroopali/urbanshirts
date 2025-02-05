"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AuthAvtar = ({ image }: { image: string }) => {
  return (
    <Avatar
      className={`${
        image === "/user.png" ? "w-7 h-7" : "w-9 h-9"
      } dark:bg-white`}
    >
      <AvatarImage src={image} />
      <AvatarFallback>User</AvatarFallback>
    </Avatar>
  );
};

export default AuthAvtar;
