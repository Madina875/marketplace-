import { memo } from "react";

export const Collections = memo(() => {
  return (
    <div className="h-[830px]">
      <div className="container h-full py-[80px]">
        <div className="text-white mb-[60px]">
          <h2 className="mb-[20px] text-4xl font-medium">
            Trending Collection
          </h2>
          <p className="text-[22px] text-gray-200">
            Checkout our weekly updated trending collection.
          </p>
        </div>
        <div className="h-full flex gap-[30px]">
          <div className="w-[330px] h-[89%]">
            <div className="grid grid-cols-3 size-full gap-5">
              <div className="grid border col-span-3 row-span-3"></div>
              <div className="grid border row-span-1"></div>
              <div className="grid border row-span-1"></div>
              <div className="grid border row-span-1"></div>
              <div className="grid col-span-3 h-15 border">
                <p>DSGN Animals</p>
                <div className="flex items-center justify-center gap-2 text-white">
                  <p className="bg-blue-950 size-5 rounded-full"></p>
                  <p>Animakid</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[330px] h-[89%]">
            <div className="grid grid-cols-3 size-full gap-5">
              <div className="grid border col-span-3 row-span-3"></div>
              <div className="grid border row-span-1"></div>
              <div className="grid border row-span-1"></div>
              <div className="grid border row-span-1"></div>
              <div className="grid col-span-3 h-15 border">
                <p>DSGN Animals</p>
                <div className="flex items-center justify-center gap-2 text-white">
                  <p className="bg-blue-950 size-5 rounded-full"></p>
                  <p>Animakid</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[330px] h-[89%]">
            <div className="grid grid-cols-3 size-full gap-5">
              <div className="grid border col-span-3 row-span-3"></div>
              <div className="grid border row-span-1"></div>
              <div className="grid border row-span-1"></div>
              <div className="grid border row-span-1"></div>
              <div className="grid col-span-3 h-15 border">
                <p>DSGN Animals</p>
                <div className="flex items-center justify-center gap-2 text-white">
                  <p className="bg-blue-950 size-5 rounded-full"></p>
                  <p>Animakid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
