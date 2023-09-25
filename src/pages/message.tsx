import React from 'react';

import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';
import DashboardNav from '@/components/DashboardNav';

function Message() {
  return (
    <DashboardWrapper>
      <DashboardNav backButtonText="DASHBOARD" backHref="/" />
      <DashboardWrapper.MainContent>queries</DashboardWrapper.MainContent>
    </DashboardWrapper>
  );
}

Message.layout = 'none';
export default Message;
