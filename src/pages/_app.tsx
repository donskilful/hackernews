import "../styles/globals.css";
import type { AppProps } from "next/app";

// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import LinkList from "../components/LinkList";
import CreateLink from "../components/CreateLink";

// 2
const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// 4
// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root')
// );

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div>
        <CreateLink/>
        <LinkList />
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
