import React from "react";
import notFound from "./notFound.jpg";
export function NotFound(props) {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center w-full bg-white h-screen">
        <div className="flex flex-wrap flex-col items-center justify-center">
          <img src={notFound} alt="not found" className="w-[30%] md:w-[30%]" />
          <p className="font-bold">Search Not Found</p>
        </div>
      </div>
    </>
  );
}
