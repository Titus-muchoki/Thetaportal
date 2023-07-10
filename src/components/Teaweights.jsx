import React, { useEffect, useState } from 'react';


const Teaweights = () => {
    const [teaweight, setTeaWeight] = useState([]);
    useEffect(() => {
        teaTotal();
    })
    const teaTotal = async () =>{
        fetch('http://localhost:4567/farmers/1/teaweights')
        .then((res) => res.json())
        .then((teaweight) => setTeaWeight(teaweight))
        .catch(error => console.log(error));
    }
    return (
    
            <div className='flex bg-slate-500'>

                <table className='p-0 border-collapse'>
                    <thead>
                        <tr>
                            <th class="px-4 py-2">dailykg</th>
                            <th class="px-4 py-2">monthlynet</th>
                            <th class="px-4 py-2">year</th>
                            <th class="px-4 py-2">date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {teaweight.map(item => (
                            <tr px-4 py-2 key={item.id}>
                                <td class="px-4 py-2">{item.dailyKg}</td>
                                <td class="px-4 py-2">{item.monthlyNet}</td>
                                <td class="px-4 py-2">{item.year}</td>
                                <td class="px-4 py-2">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
};

export default Teaweights;