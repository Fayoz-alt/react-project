import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Register from "./components/Register";
import { ApolloProvider } from "@apollo/client/react";
import { ToastContainer } from "react-toastify";
import { client } from "./components/graphql-client";
import "./App.css";

function App() {
  const isRegisterOpen = true;

  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register open={isRegisterOpen} />} />
      </Routes>
      <ToastContainer />
    </ApolloProvider>
  );
}

export default App;
