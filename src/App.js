import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.jsx";
import Home from "./pages/Home.jsx";
import { Box } from "@mui/material";
import Layout from "./component/Layout.jsx";
import Order from "./pages/Order.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "order",
        element: <Order />,
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
