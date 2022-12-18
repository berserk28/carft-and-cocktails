import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { AppProvider } from "./context";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import App from "./App";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AppProvider>
  </React.StrictMode>
);
