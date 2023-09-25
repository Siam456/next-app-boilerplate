import React, { PropsWithChildren } from 'react';

import { Go } from '@/icons';
import { useRouter } from 'next/router';

type Props = PropsWithChildren<{
  backButtonText: string;
  backHref: string;
}>;

export default function DashboardNav({
  backHref,
  children,
  backButtonText,
}: Props) {
  const router = useRouter();

  const redirectCB = (path: string) => router.push(path);
  return (
    <div className="mt-6 flex w-full items-center justify-between px-3 md:px-0">
      <div className="flex items-center gap-3">
        <Go className="rotate-180 fill-gray-300" />

        <button
          className=" text-sm font-semibold text-gray-900"
          onClick={() => {
            redirectCB(backHref);
          }}
        >
          {backButtonText}
        </button>
      </div>
      {children}
    </div>
  );
}
