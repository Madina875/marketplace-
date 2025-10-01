import { memo } from "react";
import { useRoutes } from "react-router-dom";
import Home from "../../pages/home";
import MainLayout from "../layout/MainLayout";
import { NotFound } from "../../pages/not-found";

const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return router;
};

export default memo(AppRouter);
