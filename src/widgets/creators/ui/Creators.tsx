import { memo } from "react";

export const Creators = memo(() => {
  return (
    <div className="mt-[50px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-4xl text-white font-medium">Top Creators</h4>
            <p className="text-white text-[22px] mt-4">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <div>View Rankings</div>
        </div>
        <div className="grid grid-cols-4 gap-[30px] my-[60px]">
          <div className="border h-[235px] rounded-2xl"></div>
          <div className="border h-[235px] rounded-2xl"></div>
          <div className="border h-[235px] rounded-2xl"></div>
          <div className="border h-[235px] rounded-2xl"></div>
          <div className="border h-[235px] rounded-2xl"></div>
          <div className="border h-[235px] rounded-2xl"></div>
          <div className="border h-[235px] rounded-2xl"></div>
          <div className="border h-[235px] rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
});
