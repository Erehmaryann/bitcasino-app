import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import ErrorBoundary from '@/components/ErrorBoundary';

const client = new ApolloClient({
    uri: "https://api.blocktap.io/graphql",
    cache: new InMemoryCache
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  )
}

export default MyApp
