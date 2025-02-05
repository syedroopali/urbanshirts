"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";

const SignOutBtn = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await signOut({ redirectTo: "/" });
      toast({
        title: "Logout Successfully",
      });
    } catch (error) {
      toast({
        title: "Unable to Logout",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClickCapture={handleSubmit}
      type="button"
      variant="outline"
      className="w-16"
    >
      {loading ? (
        <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
      ) : (
        "Logout"
      )}
    </Button>
  );
};

export default SignOutBtn;
