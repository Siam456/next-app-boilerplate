import React from 'react';

import type { NextPageWithLayout } from '@/types/generics';

import { Divider } from '@/icons';

import Header from '@/components/Section/Landing/Header';
import Content from '@/components/Section/Landing/Content';

const Home: NextPageWithLayout = function () {
  return (
    <div className="flex flex-col gap-6 self-stretch">
      <Header />
      <Divider />
      <Content />
    </div>
  );
};

Home.layout = 'none';
export default Home;
