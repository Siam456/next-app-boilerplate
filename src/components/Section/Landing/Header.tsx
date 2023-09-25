import { Tier } from '@/logos';
import React from 'react';

export default function Header() {
  return (
    <div className="flex flex-col self-stretch">
      <div className="items-baseline justify-between self-stretch md:flex">
        <h3 className="text-3xl font-light not-italic">
          Welcome, Obi-Wan Kenobi.
        </h3>
        <div className="flex  items-end justify-end gap-2 max-md:my-2">
          <p className="text-xs font-light not-italic text-gray-400">
            POWERED BY
          </p>
          <Tier />
        </div>
      </div>
      <p className="text-sm font-light not-italic text-gray-400 ">
        You last logged in at 9:01 PM on May 2, 2023.
      </p>
    </div>
  );
}
