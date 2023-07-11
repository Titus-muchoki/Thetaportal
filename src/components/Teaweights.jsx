import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Teaweights = () => {
    const [column, setColumn] = useState([]);
    const [records, setRecords] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:4567/farmers/1/teaweights')
        .then((response) => {
          const data = response.data;
          setColumn(Object.keys(data.teaweights[0]));
          setRecords(data.teaweights);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              {column.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((teaweight, i) => (
              <tr key={i}>
                <td>
                  {teaweight.id}
                  {teaweight.farmerId}
                  {teaweight.dailyKg}
                  {teaweight.monthlyNet}
                  {teaweight.year}
                  {teaweight.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Teaweights;
  
