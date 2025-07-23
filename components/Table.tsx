'use client';

import { useState, useMemo } from 'react';

const productData = [
  { id: 1, name: 'Smartphone', price: 800 },
  { id: 2, name: 'Laptop', price: 1200 },
  { id: 3, name: 'Tablet', price: 600 },
  { id: 4, name: 'Monitor', price: 300 },
  { id: 5, name: 'Keyboard', price: 100 },
  { id: 6, name: 'Smartphone', price: 850 },
  { id: 7, name: 'Laptop', price: 1300 },
  { id: 8, name: 'Tablet', price: 550 },
  { id: 9, name: 'Monitor', price: 350 },
  { id: 10, name: 'Keyboard', price: 120 },
];

export default function Table() {
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState<'id' | 'name' | 'price'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    return productData.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortKey, sortOrder]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (key: 'id' | 'name' | 'price') => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full overflow-x-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h3 className="text-xl font-bold text-gray-800">Product Table</h3>
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded-full px-5 py-2 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <table className="min-w-full text-sm text-left rounded-xl overflow-hidden">
        <thead className="bg-[#4f46e5] text-white">
          <tr>
            {['id', 'name', 'price'].map((key) => (
              <th
                key={key}
                onClick={() => handleSort(key as 'id' | 'name' | 'price')}
                className="px-6 py-3 font-semibold tracking-wide cursor-pointer hover:bg-[#4f46e5] transition-all"
              >
                {key.toUpperCase()} {sortKey === key && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {paginatedData.map((item) => (
            <tr key={item.id} className="hover:bg-indigo-50 transition">
              <td className="px-6 py-4 font-medium text-gray-700">{item.id}</td>
              <td className="px-6 py-4 text-gray-800">{item.name}</td>
              <td className="px-6 py-4 text-[#4f46e5 ]font-semibold">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-gray-600 text-sm">
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-indigo-100 text-[#4f46e5] rounded-lg hover:bg-indigo-200 transition disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ⬅ Prev
          </button>
          <button
            className="px-4 py-2 bg-indigo-100 text-[#4f46e5] rounded-lg hover:bg-indigo-200 transition disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
}
