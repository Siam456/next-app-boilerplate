import React, { PropsWithChildren } from 'react';

interface WrapperElementProps extends PropsWithChildren {
  className?: string;
}

interface WrapperProps extends PropsWithChildren {
  className?: string;
  containerClassName?: string;
}

function DashboardWrapper({
  children,
  className,
  containerClassName,
}: WrapperProps) {
  return (
    <div className={`px-3 ${className}`}>
      <div
        className={`${containerClassName} lg:max-w-dashboard-wrapper mx-auto max-w-full`}
      >
        {children}
      </div>
    </div>
  );
}

function DashboardMainContent({ children, className }: WrapperElementProps) {
  return (
    <div className={`flex w-full max-w-full flex-col gap-6 py-8 ${className}`}>
      {children}
    </div>
  );
}

DashboardWrapper.defaultProps = {
  className: '',
  containerClassName: '',
};

DashboardMainContent.defaultProps = {
  className: '',
};

DashboardWrapper.MainContent = DashboardMainContent;
export default DashboardWrapper;
