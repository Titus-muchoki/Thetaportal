import React, { useState } from 'react';
import Bac from "../assets/Kenyan-Tea-Plantations.jpg"

const Signup = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [data, setData] = useState(null);


    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
            email: email,
            userName: userName,
            password: password,
            confirmPassword: confirmPassword,
        };
        fetch("http://localhost:4567/signups/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
        })
            .then((res) => res.json())
            .then((data) => setData(data));
    }

    return (
        <div className="bg-cover bg-center h-screen w-full blur-0 flex items-center justify-center" style={{ backgroundImage: `url(${Bac})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <label className="mb-4">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 p-2 rounded mt-1 w-full"
                        required
                    />
                </label>
                <br />
                <label className="mb-4">
                    Username:
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="border border-gray-300 p-2 rounded mt-1 w-full"
                        required
                    />
                </label>
                <br />
                <label className="mb-4">
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-2 rounded mt-1 w-full"
                        required
                    />
                </label>
                <br />
                <label className="mb-4">
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border border-gray-300 p-2 rounded mt-1 w-full"
                        required
                    />
                </label>
                <br />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>

    );
};

export default Signup;