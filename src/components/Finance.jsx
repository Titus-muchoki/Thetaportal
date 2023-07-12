import React, { useEffect, useState } from 'react';

const Finance = () => {
    const [finance, setFinance] = useState([]);

    useEffect(() => {
        fetchFinance();
    });


    const fetchFinance = async () => {
        try {
            const response = await fetch('http://localhost:4567/finances');
            const data = await response.json();
            setFinance(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='px-8 py-6'>
            <div className="container mx-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-800">Monthly Pay</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-800">Minimum Bonus</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-800">Bonus</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-800">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finance.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="px-6 py-4 whitespace-nowrap">{item.monthlyPay}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.minBonus}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.bonus}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.createdat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            );
};

            export default Finance;
