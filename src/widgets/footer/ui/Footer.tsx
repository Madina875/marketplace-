import { memo } from "react";
import { LuYoutube } from "react-icons/lu";
import { RiStoreLine } from "react-icons/ri";
import { SiProbot } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

export const Footer = memo(() => {
  return (
    <footer className="h-[330px] w-full bg-[#2B2B2B]">
      <div className="container flex justify-between pt-[40px] text-[#CCCCCC]">
        <div className="w-70">
          <div className="text-white text-2xl mb-6 gap-2 flex items-center">
            <RiStoreLine />
            <p>NFT Marketplace</p>
          </div>
          <p className="text-[#CCCCCC] w-55 mb-4">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="text-[#CCCCCC] mb-2">Join our community</p>
          <div className="text-[#CCCCCC] text-2xl gap-2 p-1 flex items-center">
            <SiProbot />
            <LuYoutube />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div>
          <p className="text-white mb-6 text-2xl">Explore</p>
          <ul className="grid gap-4">
            <li>Marketplace</li>
            <li>Rankings</li>
            <li>Connect a wallet</li>
          </ul>
        </div>
        <div className="w-75">
          <p className="text-white text-[20px] mb-6">Join our weekly digest</p>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <div className="h-[50px] bg-white rounded-[18px] my-5 place-items-center flex">
            <input
              type="text"
              className=" indent-4 placeholder-black"
              placeholder="Enter your email here"
            />
            <button className="bg-purple-700 w-full h-full rounded-[18px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container my-5 text-[#CCCCCC] grid gap-5">
        <hr />
        <p>Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </footer>
  );
});
