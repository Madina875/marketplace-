import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-[#2B2B2B]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default memo(MainLayout);
