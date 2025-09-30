import { memo } from "react";
import { LuYoutube } from "react-icons/lu";
import { RiStoreLine } from "react-icons/ri";
import { SiProbot } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

export const Footer = memo(() => {
  return (
    <footer className="h-[330px] w-full bg-[#2B2B2B]">
      <div className="container flex justify-between text-[#CCCCCC]">
        <div>
          <div className="text-white text-2xl  gap-2 flex items-center">
            <RiStoreLine />
            <p>NFT Marketplace</p>
          </div>
          <p className="text-[#CCCCCC]">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="text-[#CCCCCC]">Join our community</p>
          <div className="text-[#CCCCCC] text-2xl flex items-center">
            <SiProbot />
            <LuYoutube />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div>
          <p className="text-white mb-4 text-2xl">Explore</p>
          <ul className="grid gap-4">
            <li>Marketplace</li>
            <li>Rankings</li>
            <li>Connect a wallet</li>
          </ul>
        </div>
        <div className="w-105">
          <p className="text-white text-[20px] mb-5">Join our weekly digest</p>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <div>
            <input type="text" placeholder="Enter your email here" />
            <button>Subscribe</button>
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
