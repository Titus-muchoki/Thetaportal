import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Teaweights = () => {
  const [data, setData] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4567/teaweights');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData = data.filter((item) =>
    moment(item.date).isSame(filterDate, 'day')
  );

  return (
    <div className="px-20 py-6">
      <div className="mb-4">
        <label htmlFor="filterDateInput" className="mr-2">
          Filter by Date:
        </label>
        <input
          id="filterDateInput"
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      <table className="min-w-full divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">Daily Kg</th>
            <th className="py-3 px-4">Monthly net</th>
            <th className="py-3 px-4">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className="py-3 px-4">{item.id}</td>
              <td className="py-3 px-4">{item.dailyKg}</td>
              <td className="py-3 px-4">{item.monthlyNet}</td>
              <td className="py-3 px-4">
                {moment(item.createdat).format('MM/DD/YYYY @ h:mm A')}
              </td>
              {/* <td className="py-3 px-4">{item.date}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teaweights;

