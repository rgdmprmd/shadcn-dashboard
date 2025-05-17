"use client";

import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authenticate } from "@/lib/actions";
import useAuthStore from "@/store/useAuthStore";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const LoginForm = () => {
  const router = useRouter();

  //#region  //*=========== Store ===========
  const login = useAuthStore.useLogin();
  //#endregion  //*======== Store ===========

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    // console.log(values);
    const res = await authenticate(values);

    if (!res.success) {
      toast.error("Oops, Invalid credentials. Please try again");
    } else {
      localStorage.setItem("token", res.token);

      login({
        id: res.data.id,
        email: res.data.email,
        name: res.data.name,
        token: res.token,
      });

      toast.success(`Hello ${res.data.name}`);

      router.push("/auth");
    }
  }

  return (
    <div className="grid gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="*******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full cursor-pointer">
            Login
          </Button>
          {/* <Button type="button" variant="outline" className="w-full">
			Login with Google
		</Button> */}
        </form>
      </Form>
    </div>
  );
};
