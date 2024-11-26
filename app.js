import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./src/pages/Welcome";
import Quiz from "./src/pages/Quiz";
import Result from "./src/pages/Result";

const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

root.render(<App />);
