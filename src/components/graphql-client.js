import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://react-groups-final-project-backend.onrender.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const authData = localStorage.getItem(`auth`);
  let token = null;
  if (authData) {
    try {
      token = JSON.parse(authData).state.accessToken;
    } catch (e) {
      console.error("Failed to parse auth token:", e);
    }
  }

  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : "" },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
