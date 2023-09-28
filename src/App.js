import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { Suspense, lazy } from "react";
import Layout from "./component/Layout.jsx";
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));
const Order = lazy(() => import("./pages/Order.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <PageNotFound />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "order",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Order />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <Box className="app">
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
