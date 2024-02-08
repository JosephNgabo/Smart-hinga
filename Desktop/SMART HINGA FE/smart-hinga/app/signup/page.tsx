"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";



const SignupPage = () => {
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sector, setSector] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        // return alert("Passwords do not match");
        toast.error("Passwords do not match")
      }
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/farmers/register`,
        {
          firstname,
          lastname,
          username,
          email,
          phoneNumber,
          sector,
          password,
        }
      );
      console.log(response.data)
      toast.success("Signup successful!");
      router.push('/dashboard')
    } catch (error) {
      console.log(error);
      toast.error("Signup failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Start a 14 day free trial
        </h2>

        {/* Signup Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="Kagaba"
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="Saire"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="ksaire"
            />
          </div>

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
              placeholder="ksaire@gmail.com"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="2234567890"
            />
          </div>

          <div>
            <label
              htmlFor="sector"
              className="block text-sm font-medium text-gray-700"
            >
              Sector
            </label>
            <input
              type="text"
              id="sector"
              name="sector"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="Gisozi"
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
              placeholder="password123"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="password123"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-700 text-white rounded-md hover:bg-green-600"
          >
            Sign up
          </button>
        </form>

        {/* Link to Sign In Page */}
        <p className="mt-6 text-sm text-gray-600">
          Already a member?{" "}
          <a href="/users" className="text-blue-500">
            Sign in
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupPage;
