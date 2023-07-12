import React, { useEffect, useState } from 'react';

const Fertilizer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchFertilizer();
    }, []);

    const fetchFertilizer = async () => {
        try {
          const response = await fetch('http://localhost:4567/fertilizers');
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.log(error);
        }
      };

    return (    
       <div className='px-20 py-6'>
         <div className="w-64  bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
         <h3 className='font-bold bg-slate-400 border-separate'>No of fertilizer bags issued</h3>
        <ul>
          {data.map((item) => (
            <li key={item.id} className="text-gray-700">
              {item.noOfBags}
            </li>
          ))}
        </ul>
      </div>
       </div>
      
    );
};

export default Fertilizer;