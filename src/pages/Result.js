import React from "react";

export default function Result({ score }) {
  return (
    <>
      <div className="flex flex-col h-[80vh] items-center justify-center">
        <h1 className="text-8xl text-center mt-5">Thank you for</h1>
        <h1 className="text-8xl text-center mt-5">being a part of</h1>
        <h1 className="text-9xl text-center mt-5">
          BUG <span className="bg-red-400 text-white">Heist</span>
        </h1>
        <h1 className="text-8xl text-center mt-5 text-red-400">
          Your Score: {score}
        </h1>
      </div>
    </>
  );
}
