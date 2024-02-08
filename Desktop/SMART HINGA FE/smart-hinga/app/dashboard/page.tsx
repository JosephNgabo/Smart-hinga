"use client";
import React, { useState } from "react";
import { FaUsers, FaBlog } from "react-icons/fa";
import FarmersList from "../../components/FarmerList";

const Dashboard = () => {
  const [showFarmersList, setShowFarmersList] = useState(false);

  const toggleFarmersList = () => {   
    setShowFarmersList(!showFarmersList);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-black text-white w-64 flex flex-col">
        <button
          onClick={toggleFarmersList}
          className="flex items-center text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded-md mb-4"
        >
          <FaUsers className="mr-2" />
          List of Farmers
        </button>

        <button className="flex items-center text-white bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md">
          <FaBlog className="mr-2" />
          Add Blog
        </button>
      </div>

      <div className="flex-1 bg-gray-100">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="flex justify-end mb-4">
                <div className="flex space-x-4"></div>
              </div>

              {showFarmersList && <FarmersList />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
