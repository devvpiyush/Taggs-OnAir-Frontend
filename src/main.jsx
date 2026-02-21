// External Modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Local Modules
import App from "./App.jsx";
import Minimal from "./layouts/Minimal.jsx";
import Classic from "./layouts/Classic.jsx";

import "./index.css";

// Pages
import Home from "@page/Home/Home.jsx";
import Search from "@page/Search/Search.jsx";
import Signup from "@page/Signup/Signup.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Minimal />,
        children: [{ path: "/signup", element: <Signup /> }],
      },
      {
        element: <Classic />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        element: <Classic excluded="Header" />,
        children: [{ path: "/search", element: <Search /> }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />,
  /* </StrictMode> */
);
