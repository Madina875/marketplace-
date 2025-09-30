import { memo } from "react";
import { useRoutes } from "react-router-dom";
import Home from "../../pages/home";
import MainLayout from "../layout/MainLayout";

const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "*", element: <div className="text-3xl">NotFound</div> },
      ],
    },
  ]);
  return router;
};

export default memo(AppRouter);
