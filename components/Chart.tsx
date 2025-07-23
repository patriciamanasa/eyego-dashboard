'use client';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useAppSelector } from '../app/lib/hooks';


const fallbackData = [
  { name: 'Laptop', price: 1200 },
  { name: 'Smartphone', price: 800 },
  { name: 'Tablet', price: 600 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 100 },
];

interface CustomTickProps {
  x: number;
  y: number;
  payload: {
    value: string;
  };
}
const renderCustomAxisTick = ({ x, y, payload }: CustomTickProps) => (
  <text x={x} y={y + 15} textAnchor="middle" fill="#666" fontSize={12}>
    {payload.value}
  </text>
);

export default function Chart() {
  const { chartData } = useAppSelector((state) => state.data);
  const data = chartData.length ? chartData : fallbackData;

  return (
    <div className="bg-white p-4 rounded shadow w-full h-80">
      <h3 className="text-lg font-semibold mb-2">Product Prices</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 4, right: 19, bottom: 20, left: 10 }}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#4f46e5"
            strokeWidth={2}
            name="Price ($)"
          />
          <XAxis dataKey="name" tick={renderCustomAxisTick} />
          <YAxis label={{ value: 'Price ($)', position: 'insideLeft', angle: -90 }} />
          <Legend align="right" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}



