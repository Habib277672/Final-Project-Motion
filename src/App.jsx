import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects-p";
import { Contact } from "./Pages/Contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <main className="font-apna-font bg-neutral-100 antialiased dark:bg-neutral-700">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
