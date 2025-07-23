'use client';

import { useState } from 'react';
import Slider from '@/components/Slider';
import Header from '@/components/Header';
import Chart from '@/components/Chart';
import Table from '@/components/Table';

export default function DashboardPage() {
  const [selected, setSelected] = useState<'dashboard' | 'chart' | 'table'>('dashboard');

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-auto">
      <Slider selected={selected} setSelected={setSelected} />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 space-y-6 flex-1 ">
          {selected === 'dashboard' && (
            <>
              <Chart />
              <Table />
            </>
          )}
          {selected === 'chart' && <Chart />}
          {selected === 'table' && <Table />}
        </main>
      </div>
    </div>
  );
}

