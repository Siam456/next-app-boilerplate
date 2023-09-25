import React from 'react';

import { IRootState } from '@/store';
import { useSelector } from 'react-redux';

import ContentTop from './ContentTop';
import ContentBody from './ContentBody';

export default function Content() {
  const dataConfig = useSelector((state: IRootState) => state.dataConfig);
  const [contentData, setContentData] = React.useState(dataConfig);

  const Search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const state = dataConfig.filter((item) => {
      const query = e.target.value.toLowerCase();

      return (
        item.itr.toLowerCase().includes(query) ||
        item.industry.toLowerCase().includes(query) ||
        item.studentName.toLowerCase().includes(query) ||
        item.date.toLowerCase().includes(query) ||
        item.date.toLowerCase().includes(query) ||
        item.date.toLowerCase().includes(query) ||
        item.date.toLowerCase().includes(query)
      );
    });
    setContentData(state);
  };

  return (
    <div className="flex flex-col items-start gap-3 self-stretch">
      <ContentTop search={Search} />
      <ContentBody data={contentData} />
    </div>
  );
}
