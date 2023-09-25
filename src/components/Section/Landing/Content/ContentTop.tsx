import React from 'react';

import { Search } from '@/icons';

type ISearch = (_e: React.ChangeEvent<HTMLInputElement>) => void;

export default function ContentTop({ search }: { search: ISearch }) {
  return (
    <div className="min-h-12 items-center justify-between self-stretch md:flex">
      <h3 className="text-2xl font-light not-italic">
        Lean Business Model Canvas Iterations
      </h3>
      <label
        className=" relative flex h-12 items-center justify-between rounded-md bg-white fill-white px-4 py-4 ring-0 focus:outline-0 focus:ring-0 md:w-[512px]"
        htmlFor="search"
      >
        <input
          id="search"
          onChange={search}
          className="h-full w-full bg-transparent outline-none placeholder:text-sm placeholder:text-gray-400 focus:outline-none "
          placeholder="Search for a student, keyword, ITR, date, year, month or time..."
        />

        <Search />
      </label>
    </div>
  );
}
