import React, { useState, useEffect } from "react";
import axios from "axios";

const FarmersList = () => {
  const [farmers, setFarmers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = await axios.get(
          "https://smarthinga-backend.onrender.com/api/farmers",
          config
        );
        setFarmers(response.data.farmers);
      } catch (error) {
        console.error("Error fetching farmers:", error);
      }
    };
    fetchFarmers();
  }, []);

  //   useEffect(() => {
  //     const fetchFarmers = async () => {
  //       try {
  //         const response = await axios.get(
  //                         `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/farmers`, config
  //                         );
  //         const data = await response.data;
  //         console.log("fffffffffffff", data);

  //         if (data) {
  //             setFarmers(data);
  //         }

  //       } catch (error) {
  //         console.error("Error fetching farmers:", error);
  //       }
  //     };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">List of Farmers</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Sector</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map(
            (farmer: {
              id: number;
              firstname: string;
              lastname: string;
              email: string;
              phoneNumber: string;
              sector: string;
            }) => (
              <tr key={farmer.id}>
                <td>{farmer.id}</td>
                <td>{farmer.firstname}</td>
                <td>{farmer.lastname}</td>
                <td>{farmer.email}</td>
                <td>{farmer.phoneNumber}</td>
                <td>{farmer.sector}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FarmersList;
