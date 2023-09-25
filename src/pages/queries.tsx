import React from 'react';
import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';
import DashboardNav from '@/components/DashboardNav';

function Queries() {
  return (
    <DashboardWrapper>
      <DashboardNav backButtonText="DASHBOARD" backHref="/" />
      <DashboardWrapper.MainContent>queries</DashboardWrapper.MainContent>
    </DashboardWrapper>
  );
}

Queries.layout = 'none';
export default Queries;
