import React from 'react';
import DashboardCard from '@/components/card/DashboardCard';
import { DashboardForm } from '@/types/DashboardTypes';

export default function ContentBody({ data }: { data: DashboardForm[] }) {
  return (
    <div className="mx-auto grid grid-cols-1 content-start items-start gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((item: DashboardForm) => (
        <DashboardCard key={item.id} {...item} />
      ))}
    </div>
  );
}
