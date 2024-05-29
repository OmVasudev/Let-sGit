// pages/login.js

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-12">
        <h1 className="text-white text-5xl font-bold">Point Quest</h1>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1 items-center justify-center">
          <form className="flex flex-col items-center p-10 rounded-lg border border-white border-opacity-30 max-w-sm w-full">
            <h2 className="text-white mb-5 text-2xl font-bold">
              Sign In to your account
            </h2>
            <label htmlFor="email" className="text-white self-start mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
              required
            />

            <label htmlFor="password" className="text-white self-start mb-2">
              Password{" "}
            </label>

            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
              required
            />

            <button
              type="submit"
              className="p-2 mt-4 rounded bg-white text-black w-full"
            >
              Login
            </button>

            {/* Forgot Password Section */}

            <a
              href="/forgot-password"
              className="underline text-white text-sm mt-4"
            >
              Forgot your password?
            </a>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
