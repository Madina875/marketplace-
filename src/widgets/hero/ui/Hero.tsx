import { memo } from "react";
import { LuPlane } from "react-icons/lu";

export const Hero = memo(() => {
  return (
    <div className="min-h-[700px]  mb-10">
      <div className="h-full md:px-2 flex md:flex-row flex-col justify-center gap-[30px] pt-20">
        <div className="md:w-[510px] h-[540px] md:items-start md:justify-start md:pt-10 md:text-left text-center flex flex-col w-full justify-center items-center">
          <p className="text-white text-5xl md:text-4xl lg:text-7xl w-[90%] font-medium">
            Discover digital art & Collect NFTs
          </p>
          <p className="text-white text-3xl md:text-2xl mt-10 ">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <button className="w-[220px] h-[60px] bg-purple-700 rounded-[18px] flex items-center justify-center gap-2 font-medium text-white mt-7">
            <LuPlane />
            Get Started
          </button>
          <div className="grid grid-cols-3 gap-5 md:text-[15px justify-between items-center md:pr-20 mt-7">
            <div className="flex flex-col font-medium text-white">
              <p>240k +</p>
              <p>Total Sale</p>
            </div>
            <div className="flex flex-col  font-medium text-white">
              <p>240k +</p>
              <p>Total Sale</p>
            </div>
            <div className="flex flex-col font-medium text-white">
              <p>240k +</p>
              <p>Total Sale</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[510px] h-[400px] md:h-[540px]">
          <div className="rounded-t-[20px] h-[70%] bg-gray-900"></div>
          <div className="flex bg-[#3B3B3B] h-[21%] pl-5 flex-col rounded-b-[20px] justify-center items-start gap-2 text-white">
            <p className="font-medium text-[20px] ">Space Walking</p>
            <div className="flex items-center justify-center gap-2 text-white">
              <p className="bg-blue-950 size-5 rounded-full"></p>
              <p>Animakid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
