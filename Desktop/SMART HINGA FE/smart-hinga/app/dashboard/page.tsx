import React from "react";
import { FaUsers, FaBlog } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="bg-gray-800 w-64">
        {/* Sidebar content goes here */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100">
        {/* Main content goes here */}
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          {/* Dashboard Content */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="flex justify-end mb-4">
                {/* Right Navigation */}
                <div className="flex space-x-4">
                  {/* List of Users Button */}
                  <button className="flex items-center text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded-md">
                    <FaUsers className="mr-2" />
                    List of Users
                  </button>
                  
                  {/* Add Blog Button */}
                  <button className="flex items-center text-white bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md">
                    <FaBlog className="mr-2" />
                    Add Blog
                  </button>
                </div>
              </div>

              {/* Dashboard Content Goes Here */}
              {/* For example, a dashboard widget */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Welcome to your dashboard!</h2>
                <p>This is where you can manage your users and blogs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
