import React from "react";
import SearcBar from "../components/SearcBar";

export default function HomePage() {
  return (
    <div className="fixed flex flex-row items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] flex-wrap justify-center gap-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Welcome!</h1>
        <h2 className="text-xl max-w-[450px]">
          Enter ingredients you have in your kitchen to find recipes you can
          make right now!
        </h2>
      </div>
      <div>
        <SearcBar />
      </div>
    </div>
  );
}
