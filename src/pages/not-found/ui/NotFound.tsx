import { memo } from "react";
import { NavLink } from "react-router-dom";

export const NotFound = memo(() => {
  return (
    <div className="container flex items-center justify-center flex-col h-screen">
      <div>Page Not Found go to home page</div>
      <NavLink
        to={"/"}
        className="hover:bg-[#2f2e2e] cursor-pointer mt-5 px-[40px] py-[15px] border border-purple-700 text-white rounded-[20px]"
      >
        Home
      </NavLink>
    </div>
  );
});
