import React, { useEffect, useState } from 'react';

const Teaweights = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
       fetch('http://localhost:4567/farmers/4/teaweights')
       .then((res) => res.json())
       .then((data) => setData(data))
        .catch((error) => console.log(error))
    }
  

  // Filter the data by the desired id
  const filteredData = data.filter((item) => item.id === 1); // Replace desiredId with the desired id
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Daily Kg</th>
          <th>Monthly Net</th>
          <th>Year</th>
          <th>Date</th>
          <th>Farmer ID</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.dailyKg}</td>
            <td>{item.monthlyNet}</td>
            <td>{item.year}</td>
            <td>{item.date}</td>
            <td>{item.farmerId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Teaweights;