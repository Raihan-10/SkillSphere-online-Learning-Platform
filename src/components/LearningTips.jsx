import React from "react";
import LearningTipsCard from "./LearningTipsCard";

export default function LearningTips() {
  return (
    <div className="bg-indigo-100 pt-5 pb-5">
      <div className="max-w-7xl mx-auto w-full md:space-y-5 ">
        <h3 className="font-bold text-center text-2xl mb-3 md:mb-5">Learning Tips</h3>
        <p className="mb-3 md:mb-5 text-center text-lg px-3 md:px-0">
          Proven strategies to stay consistent and achieve your goals faster.
        </p>
        <div className="grid justify-center grid-cols-1  md:grid-cols-3 grid-rows-2 mt-5 md:mt-7 gap-5 md:gap-8 pb-10 px-5 md:px-7 lg:px-0">
          <LearningTipsCard />
        </div>
      </div>
    </div>
  );
}
