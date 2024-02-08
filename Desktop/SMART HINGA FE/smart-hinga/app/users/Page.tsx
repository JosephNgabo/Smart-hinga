"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/farmers/login`,
        {
          email,
          password,
        }
      );
      console.log(response);
      const {token,farmer} = response.data;
    
      localStorage.setItem("user", JSON.stringify(farmer));
      localStorage.setItem("token", token);
      
      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Sign In to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="Your Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="/forgot" className="text-sm text-blue-500">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-green-700 text-white rounded-md hover:bg-green-600"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <span className="border-b w-1/4"></span>
          <span className="text-gray-500 text-sm">Or continue with</span>
          <span className="border-b w-1/4"></span>
        </div>

        <div className="flex mt-6 space-x-4">
          <button className="w-full p-3 bg-white-500 border-2  text-blue-70 rounded-md hover:bg-slate-400-600">
            Google
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Not a member?{" "}
          <a href="/signup" className="text-blue-500">
            Start a 14 day free trial
          </a>
        </p>
      </div>
      <ToastContainer /> {/* This is where the toast messages will be displayed */}
    </div>
  );
};

export default Page;
