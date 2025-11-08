"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginPage() {

  
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false, 
      });

      if (res?.error) {
        setError(res.error);
      } else {
        router.push("/dasboard"); 
      }
    } catch (err) {
      console.error(err);
      setError("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-600">Login</h1>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded text-center">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-1">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              onChange: () => setError(""),
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              onChange: () => setError(""),
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>

        <p className="text-center text-gray-500">
          <span
            className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
