"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

const SignInBtn = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setLoading(true);
      await signIn("google", { redirect: false });
      toast({
        title: "Login successfuly",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Unable to Login",
          description: error.message,
        });
      }
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
        "Login"
      )}
    </Button>
  );
};

export default SignInBtn;
