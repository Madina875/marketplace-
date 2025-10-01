import { memo, useState } from "react";
import { RiStoreLine } from "react-icons/ri";
import { LuUserRound } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = memo(() => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="h-25 w-full bg-[#2B2B2B]">
      <div className="container flex items-center justify-between size-full relative">
        <div
          onClick={() => navigate("/")}
          className="text-white text-2xl gap-2 flex items-center cursor-pointer"
        >
          <RiStoreLine className="text-purple-600" />
          <p>NFT Marketplace</p>
        </div>

        {!show && (
          <HiMenuAlt3
            onClick={() => setShow(true)}
            className="text-3xl text-white cursor-pointer lg:hidden"
          />
        )}

        {show && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setShow(false)}
            />

            <div className="fixed top-0 right-0 h-full w-[260px] bg-[#2B2B2B] text-white flex flex-col gap-6 p-6 duration-300 z-50 lg:hidden">
              <button
                className="absolute top-5 right-5 text-white text-3xl"
                onClick={() => setShow(false)}
              >
                ✕
              </button>

              <NavLink to="/" onClick={() => setShow(false)}>
                Marketplace
              </NavLink>
              <NavLink to="/ranking" onClick={() => setShow(false)}>
                Rankings
              </NavLink>
              <NavLink to="/wallet" onClick={() => setShow(false)}>
                Connect a wallet
              </NavLink>

              <div className="mt-auto">
                <button className="flex rounded-[20px] text-[20px] gap-3 items-center justify-center w-[150px] h-[60px] bg-purple-600">
                  <LuUserRound />
                  Sign Up
                </button>
              </div>
            </div>
          </>
        )}

        <div className="hidden lg:flex text-white gap-[30px] items-center">
          <ul className="flex gap-[35px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700"
                  : "text-white hover:text-shadow-purple-600"
              }
            >
              Marketplace
            </NavLink>
            <NavLink
              to="/ranking"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700"
                  : "text-white hover:text-shadow-purple-600"
              }
            >
              Rankings
            </NavLink>
            <NavLink
              to="/wallet"
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

export default Header;
