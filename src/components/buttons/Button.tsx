import React, { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';

interface Props extends PropsWithChildren {
  icons: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, icons, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className=" flex h-8 items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-purple-200"
    >
      {children} {icons}
    </button>
  );
}
