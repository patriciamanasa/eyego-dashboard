'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Slider({ selected, setSelected }: any) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    router.push('/login');
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden p-4 text-black"
        onClick={() => setOpen(!open)}
      >
        <Menu />
      </button>

      {/* Sidebar */}
    <aside
  className={`${
    open ? 'block' : 'hidden'
  } md:block w-52 bg-white text-black p-4 space-y-4 fixed md:sticky top-0 left-0 z-40 shadow-lg`}
>
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setSelected('dashboard')}
              className={`block px-2 py-1 rounded ${
                selected === 'dashboard' ? 'bg-gray-200' : ''
              } w-full text-left hover:bg-gray-100 hover:text-[#4f46e5]`}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelected('chart')}
              className={`block px-2 py-1 rounded ${
                selected === 'chart' ? 'bg-gray-200' : ''
              } w-full text-left hover:bg-gray-100 hover:text-[#4f46e5]`}
            >
              Chart
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelected('table')}
              className={`block px-2 py-1 rounded ${
                selected === 'table' ? 'bg-gray-200' : ''
              } w-full text-left hover:bg-gray-100 hover:text-[#4f46e5]`}
            >
              Table
            </button>
          </li>
        </ul>

        <button
          onClick={handleLogout}
          className="text-[#4f46e5] hover:underline mt-4"
        >
          Logout
        </button>
      </aside>
    </>
  );
}




