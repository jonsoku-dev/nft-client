import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import type { NextComponentType } from 'next';
import { ReactNode } from 'react';
import { useApollo } from '../lib/apollo';
import { ApolloProvider } from '@apollo/client';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
                                                                                 Component,
                                                                                 pageProps,
                                                                               }: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
};

export default MyApp;