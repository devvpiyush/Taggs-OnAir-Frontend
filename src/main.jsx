// External Modules
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Local Modules
import App from "./App.jsx";
import Minimal from "./layouts/Minimal.jsx";
import Classic from "./layouts/Classic.jsx";

import "./index.css";

// Pages
import Home from "@page/Home/Home.jsx";
import Search from "@page/Search/Search.jsx";
import Login from "@page/Login/Login.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
