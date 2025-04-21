import React, { useState } from 'react';
import axios from 'axios';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const AdoptionChart = () => {
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        M: 1000,
        k: 0.1,
        B: 10,
        duration: 100,
        step: 1,
    });

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/simulate', {
                params,
            });

            const formattedData = response.data.map((value, index) => ({
                time: (index * params.step).toFixed(1),
                users: Math.round(value),
            }));

            setData(formattedData);
        } catch (error) {
            console.error('Error fetching simulation data:', error);
        }
    };

    return (
        <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Software Adoption Simulation
            </h2>

            <div className="flex gap-4 mb-4">
                <input
                    className="border p-2 rounded"
                    type="number"
                    placeholder="Market Saturation (M)"
                    value={params.M}
                    onChange={(e) => setParams({ ...params, M: parseFloat(e.target.value) })}
                />
                <input
                    className="border p-2 rounded"
                    type="number"
                    step="0.01"
                    placeholder="Growth Rate (k)"
                    value={params.k}
                    onChange={(e) => setParams({ ...params, k: parseFloat(e.target.value) })}
                />
                <input
                    className="border p-2 rounded"
                    type="number"
                    placeholder="Initial Users (B)"
                    value={params.B}
                    onChange={(e) => setParams({ ...params, B: parseFloat(e.target.value) })}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={fetchData}
                >
                    Run Simulation
                </button>
            </div>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" label={{ value: 'Time', position: 'insideBottomRight', offset: -10 }} />
                    <YAxis label={{ value: 'Users', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AdoptionChart;
