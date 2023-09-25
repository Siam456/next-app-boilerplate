import React, { PropsWithChildren } from 'react';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';

export default function GeneralLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-full bg-gray-100">
     
      <ContentWrapper containerClassName="flex flex-col gap-0 md:gap-15">
        {children}
      </ContentWrapper>
    </div>
  );
}
