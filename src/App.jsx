import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Darts from "./games/darts/Darts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <p>Home Page</p> },
      {
        path: "darts",
        element: <Darts />,
      },
      {
        path: "simon",
        element: <p>simon</p>,
      },
      {
        path: "monkey-numbers",
        element: <p>monkey-numbers</p>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
