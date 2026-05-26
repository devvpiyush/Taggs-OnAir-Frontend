// External Modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Local Modules
import App from "./App.jsx";
import Minimal from "./layouts/Minimal";
import Classic from "./layouts/Classic";
import Shell from "./layouts/Shell.jsx";
import store from "@/store/index.js";

import "./index.css";

// Pages
import Home from "@page/Home/Home";
import Search from "@page/Search/Search";
import Login from "@page/Login/Login";
import Profile from "@page/Profile/Profile";
import Chat from "@page/Chat/Chat";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Classic />,
        children: [
          {
            index: true,
            path: "/",
            element: <Home />,
          },
          {
            path: "/:username",
            element: <Profile />,
          },
          {
            path: "/chat/:username",
            element: <Chat />,
          },
        ],
      },
      {
        element: <Minimal />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
        ],
      },
      {
        element: <Shell />,
        children: [
          {
            path: "/search",
            element: <Search />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
