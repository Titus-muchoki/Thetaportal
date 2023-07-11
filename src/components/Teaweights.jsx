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
  const filteredData = data.filter((item) => item.id === 4); // Replace desiredId with the desired id
  return (
    <div className='px-20'>
      <table className="min-w-full  divide-gray-200">
    <thead className="bg-gray-100">
      <tr>
        <th className="py-3 px-4">ID</th>
        <th className="py-3 px-4">Daily Kg</th>
        <th className="py-3 px-4">Monthly Net</th>
        <th className="py-3 px-4">Year</th>
        <th className="py-3 px-4">Date</th>
        {/* <th className="py-3 px-4">Farmer ID</th> */}
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {filteredData.map((item) => (
        <tr key={item.id}>
          <td className="py-3 px-4">{item.id}</td>
          <td className="py-3 px-4">{item.dailyKg}</td>
          <td className="py-3 px-4">{item.monthlyNet}</td>
          <td className="py-3 px-4">{item.year}</td>
          <td className="py-3 px-4">{item.date}</td>
          {/* <td className="py-3 px-4">{item.farmerId}</td> */}
        </tr>
      ))}
    </tbody>
  </table>
    </div>
  );
};


export default Teaweights;