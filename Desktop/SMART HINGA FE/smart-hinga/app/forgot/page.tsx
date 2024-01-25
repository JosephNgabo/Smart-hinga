import React from "react";

const ForgotPasswordForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Forgot Password
        </h2>

        {/* Forgot Password Form */}
        <form className="space-y-4">
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
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="example@example.com"
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-700 text-white rounded-md hover:bg-green-600"
          >
            Reset Password
          </button>
        </form>

        {/* Link to Sign In Page */}
        <p className="mt-6 text-sm text-gray-600">
          Remembered your password?{" "}
          <a href="/users" className="text-blue-500">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
