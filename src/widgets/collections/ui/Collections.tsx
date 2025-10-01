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
        <div className="h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <div className="md:w-full lg:w-[330px] h-[89%]">
            <div className="grid grid-cols-3 size-full gap-5">
              <div className="grid rounded-2xl col-span-3 row-span-3 bg-[#5c9d77]"></div>
              <div className="grid row-span-1 rounded-2xl bg-[#5c9d77]"></div>
              <div className="grid row-span-1 rounded-2xl bg-[#5c9d77]"></div>
              <div className="grid row-span-1 rounded-2xl bg-[#5c9d77]"></div>
              <div className="col-span-3 h-15 flex items-start justify-center flex-col gap-1">
                <p className="text-white text-[20px] font-medium">
                  DSGN Animals
                </p>
                <div className="flex items-center justify-center gap-2 text-white">
                  <p className="bg-green-300 size-5 rounded-full"></p>
                  <p className="text-gray-200 text-[15px]">Animakid</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-full lg:w-[330px] md:flex hidden h-[89%]">
            <div className="grid grid-cols-3 size-full gap-5">
              <div className="grid rounded-2xl col-span-3 row-span-3 bg-[#5c9d77]"></div>
              <div className="grid row-span-1 rounded-2xl bg-[#5c9d77]"></div>
              <div className="grid row-span-1 rounded-2xl bg-[#5c9d77]"></div>
              <div className="grid row-span-1 rounded-2xl bg-[#5c9d77]"></div>
              <div className="col-span-3 h-15 flex items-start justify-center flex-col gap-1">
                <p className="text-white text-[20px] font-medium">
                  DSGN Animals
                </p>
                <div className="flex items-center justify-center gap-2 text-white">
                  <p className="bg-green-300 size-5 rounded-full"></p>
                  <p className="text-gray-200 text-[15px]">Animakid</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[330px] h-[89%] lg:flex hidden md:hidden">
            <div className="grid grid-cols-3 size-full gap-5">
              <div className="grid rounded-2xl col-span-3 row-span-3 bg-[#5c9d77]"></div>
              <div className="grid row-span-1 rounded-2xl bg-[#5c9d77]"></div>
              <div className="grid row-span-1 rounded-2xl bg-[#5c9d77]"></div>
              <div className="grid row-span-1 rounded-2xl bg-[#5c9d77]"></div>
              <div className="col-span-3 h-15 flex items-start justify-center flex-col gap-1">
                <p className="text-white text-[20px] font-medium">
                  DSGN Animals
                </p>
                <div className="flex items-center justify-center gap-2 text-white">
                  <p className="bg-green-300 size-5 rounded-full"></p>
                  <p className="text-gray-200 text-[15px]">Animakid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
