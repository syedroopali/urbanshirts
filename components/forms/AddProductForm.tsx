"use client";

import { ProductSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Path, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddProduct } from "@/database/actions/addProduct.action";
import { toast } from "@/hooks/use-toast";
import { useTransition } from "react";

export function AddProductForm() {
  const [isPending, startTransition] = useTransition();

  const DefaultValues: z.infer<typeof ProductSchema> = {
    name: "",
    price: "",
    description: "",
    detail: "",
    imageUrl: "",
    tag: "",
  };

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: DefaultValues,
  });

  async function onSubmit(values: z.infer<typeof ProductSchema>) {
    const res = await AddProduct(values);
    startTransition(() => {
      try {
        if (res?.success) {
          toast({
            title: "Success",
            description: "Product Added successfully",
          });
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        }
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200 w-[30rem] "
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Add New Product
        </h2>

        {(Object.keys(DefaultValues) as Array<keyof typeof DefaultValues>).map(
          (field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<z.infer<typeof ProductSchema>>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-medium">
                    Product{" "}
                    {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-md"
                      type={field.name === "price" ? "number" : "text"}
                      placeholder={`Enter ${field.name}`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )
        )}

        <Button
          type="submit"
          className="w-full text-lg font-semibold py-3 rounded-lg transition-all duration-300"
          disabled={isPending}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
