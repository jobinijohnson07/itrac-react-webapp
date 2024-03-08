import React, { useState, useEffect } from "react";
import './Home.scss'

function Home() {
  const [homeDetails, setHomeDetails] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);

  useEffect(() => { 
    const token = localStorage.getItem("token");
    fetch("http://54.73.58.228:100/api/v1/stores/21/cabinets", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
      })
    }) 
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setHomeDetails(data))
      .catch(error => setError(error.message));
  }, []);


  return (
    <div className="home-section">
      <div>Cabinets at Mater Private Cork - 12</div> 
      {error ? (
        <div>Error: {error}</div>
      ) : (
        Array.isArray(homeDetails) && homeDetails.length > 0 ? (
          homeDetails.map((homeDetail, index) => (
            <div key={index}>{homeDetail.u_name}</div>
          ))
        ) : (
          <div>No data available</div>
        )
      )}
    </div>
  );
} 

export default Home;
