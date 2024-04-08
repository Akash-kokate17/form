import React from "react";

export function Home(props) {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="md:text-4xl text-xl font-bold">
            <span style={{ background: "linear-gradient(to right, #7928CA, #FF0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Welcome To Aeonaxy Technologies</span>
          </h1>
          <br />
          <p className="text-center text-xl md:text-4xl font-bold">
            <span style={{ background: "linear-gradient(to right, #7928CA, #FF0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Universe</span>
          </p>
        </div>
      </div>
    </>
  );
}
