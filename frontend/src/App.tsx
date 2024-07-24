import { Home, Signup, Verification } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "home",
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  { path: "/verify/:token", element: <Verification /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
