// External Modules
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Local Modules
import App from "./App.jsx";
import Minimal from "./layouts/Minimal";
import Classic from "./layouts/Classic";

import "./index.css";

// Pages
import Home from "@page/Home/Home";
import Search from "@page/Search/Search";
import Login from "@page/Login/Login";
import Profile from "@page/Profile/Profile";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/:username",
        element: <Profile />,
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
