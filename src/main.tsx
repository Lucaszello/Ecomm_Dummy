import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider ,QueryClient} from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MantineProvider } from "@mantine/core";


const query = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={{fontFamily : 'Montserrat, sans-serif'}}>
    <QueryClientProvider client={query}>
      <BrowserRouter>
      <App />
      <ReactQueryDevtools/>
      </BrowserRouter>
    </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>
);
