import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.jsx";
import Home from "./pages/Home.jsx";
import Se from "./pages/Se.jsx";

const router = createBrowserRouter([
  {
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
