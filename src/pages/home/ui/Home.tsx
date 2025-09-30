import { memo } from "react";
import { Hero } from "../../../widgets/hero";
import { Collections } from "../../../widgets/collections";
import { Creators } from "../../../widgets/creators";

export const Home = memo(() => {
  return (
    <div className="bg-[#2B2B2B]">
      <Hero />
      <Collections />
      <Creators />
    </div>
  );
});
