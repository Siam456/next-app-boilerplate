import React from 'react';
import '@/styles/globals.css';

import type { AppPropsWithLayout } from '@/types';

import { GeneralLayout } from '@/layouts';
import useFonts from '@/hooks/useFonts';
import { Provider } from 'react-redux';
import store from '@/store';

const ComponentMap: any = {
  none: ({ Component, pageProps }: AppPropsWithLayout) => (
    <GeneralLayout>
      <Component {...pageProps} />
    </GeneralLayout>
  ),
};

export default function App({
  Component,
  pageProps,
  ...rest
}: AppPropsWithLayout) {
  const { lexend } = useFonts();
  const layout = Component.layout ?? 'none';
  const ModifiedComponent = ComponentMap[layout];

  return (
    <Provider store={store}>
      <div className={lexend}>
        <ModifiedComponent
          Component={Component}
          pageProps={pageProps}
          {...rest}
        />
      </div>
    </Provider>
  );
}
