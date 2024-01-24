import React from 'react'

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In to Your Account</h2>
      
      {/* Email and Password Form */}
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-3 w-full border rounded-md"
            placeholder="example@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
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
            <label htmlFor="rememberMe" className="text-sm text-gray-600">Remember me</label>
          </div>
          <a href="#" className="text-sm text-blue-500">Forgot password?</a>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Sign in
        </button>
      </form>

      <div className="mt-6 flex items-center justify-between">
        <span className="border-b w-1/4"></span>
        <span className="text-gray-500 text-sm">Or continue with</span>
        <span className="border-b w-1/4"></span>
      </div>

      {/* Social Media Buttons */}
      <div className="flex mt-6 space-x-4">
        <button className="w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600">Google</button>
        <button className="w-full p-3 bg-gray-800 text-white rounded-md hover:bg-gray-900">GitHub</button>
      </div>

      <p className="mt-6 text-sm text-gray-600">Not a member? <a href="#" className="text-blue-500">Start a 14 day free trial</a></p>
    </div>
  </div>
);
};

export default Page
