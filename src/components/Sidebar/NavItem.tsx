import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  inco: React.ReactNode;
  text: string;
  indicator?: number;
  href: string;
}

function NavItem({ inco, text, indicator, href }: Props) {
  const router = useRouter();

  const redirectCB = (path: string) => router.push(path);
  return (
    <button
      onClick={() => {
        redirectCB(href);
      }}
      className="relative flex w-12 flex-col items-center gap-1"
    >
      <div className="mt-1">{inco}</div>
      <p className="text-[8px] font-light not-italic">{text}</p>
      {indicator ? (
        <div className=" absolute right-0 flex h-3 w-3 flex-col items-center justify-center gap-2 rounded-full bg-yellow ">
          <p className="text-[8px] text-dark">{indicator}</p>
        </div>
      ) : null}
    </button>
  );
}

NavItem.defaultProps = {
  indicator: 0,
};

export default NavItem;
