import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  containerClassName?: string;
}

function ContentWrapper({ children, className, containerClassName }: Props) {
  return (
    <div className={`w-full overflow-x-hidden p-8 ${className}`}>
      <div className={`${containerClassName} mx-auto max-w-[1376px] `}>
        {children}
      </div>
    </div>
  );
}

ContentWrapper.defaultProps = {
  className: '',
  containerClassName: '',
};

export default ContentWrapper;
