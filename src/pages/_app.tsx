import "../styles/globals.css";
import type { AppProps } from "next/app";
import { setContext } from '@apollo/client/link/context';

// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { AUTH_TOKEN } from "../constants";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

// 2
const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

// 3
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});



function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={client}>
         <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
        />
        <div className="center w85">
          <div className="ph3 pv1 background-gray">
            <Component {...pageProps} />
          </div>
        </div>
      </ApolloProvider>
  );
}

export default MyApp;
