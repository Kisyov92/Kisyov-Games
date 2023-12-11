import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Darts from "./games/darts/Darts";
import Simon from "./games/simon/Simon";
import HomePaga from "./pages/HomePaga";
import MonkeyNumbers from "./games/monkey-numbers/MonkeyNumbers";
import Quiz from "./games/quiz/Quiz";
import BlankStories from "./games/blank-stories/BlankStories";
import Hangman from "./games/hangman/Hangman";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePaga /> },
      {
        path: "darts",
        element: <Darts />,
      },
      {
        path: "simon",
        element: <Simon />,
      },
      {
        path: "monkey-numbers",
        element: <MonkeyNumbers />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "blank-stories",
        element: <BlankStories />,
      },
      {
        path: "hangman",
        element: <Hangman />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
