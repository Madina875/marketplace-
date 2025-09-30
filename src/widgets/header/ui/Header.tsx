import { memo } from "react";
import { RiStoreLine } from "react-icons/ri";
import { LuUserRound } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export const Header = memo(() => {
  return (
    <header className="h-25 w-full bg-[#2B2B2B]">
      <div className="container flex items-center justify-between size-full">
        <div className="text-white text-2xl  gap-2 flex items-center">
          <RiStoreLine className="text-purple-600" />
          <p>NFT Marketplace</p>
        </div>
        <div className="flex text-white gap-[30px] items-center">
          <ul className="flex gap-[35px]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700"
                  : "text-white hover:text-shadow-purple-600"
              }
            >
              Marketplace
            </NavLink>
            <NavLink
              to={"/ranking"}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700"
                  : "text-white hover:text-shadow-purple-600"
              }
            >
              Rankings
            </NavLink>
            <NavLink
              to={"/wallet"}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700"
                  : "text-white hover:text-shadow-purple-600"
              }
            >
              Connect a wallet
            </NavLink>
          </ul>
          <button className="flex rounded-[20px] text-[20px] gap-3 items-center justify-center w-[150px] h-[60px] bg-purple-600">
            <LuUserRound />
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
});
