import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.jsx";
import Home from "./pages/Home.jsx";
import { Box } from "@mui/material";
import Layout from "./component/Layout.jsx";

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
