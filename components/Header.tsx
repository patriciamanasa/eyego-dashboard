'use client';

import { useAppDispatch } from '../app/lib/hooks';
import { logout } from '../app/lib/features/authSlice';
import { useRouter } from 'next/navigation';
import { Bell } from 'lucide-react';
import Image from 'next/image';
import img from '../public/images/Flag_of_Egypt.svg.png'
import avatarimg from '../public/images/girl.webp'
export default function Header() {
  const dispatch = useAppDispatch();
  const router = useRouter();


  return (
    <header className="flex justify-between items-center bg-white shadow-lg rounded-2xl px-6 py-4 mx-4 my-4">
      <h1 className="text-xl font-bold text-gray-800">Eyego <span className='text-[#4f46e5]'>Dashboard</span></h1>

      <div className="flex items-center gap-4">
        <Image
          src={img}
          alt="Country Flag"
          width={24}
          height={24}
          className="rounded-full object-cover"
        />
        <Bell className="text-gray-600 w-5 h-5 cursor-pointer hover:text-blue-500" />

        <Image
          src={avatarimg}
          alt="User Avatar"
          width={36}
          height={36}
          className="rounded-full object-cover cursor-pointer"
        />
      </div>
    </header>
  );
}


