import React from "react";

export default function DummyComp() {
  return (
    <div className="block animate-pulse space-y-5">
      <div className="flex gap-5 w-full h-40">
        <div className="bg-dark0 rounded-md w-full h-full"></div>
        <div className="bg-dark0 rounded-md w-full h-full"></div>
        <div className="bg-dark0 rounded-md w-full h-full"></div>
      </div>
      <div className="flex gap-5 h-52">
        <div className="bg-dark0 rounded-md w-full h-full"></div>
        <div className="bg-dark0 rounded-md w-full h-full"></div>
        <div className="bg-dark0 rounded-md w-full h-full"></div>
      </div>
      <div className="flex gap-5 h-60">
        <div className="bg-dark0 rounded-md w-full h-full"></div>
        <div className="bg-dark0 rounded-md w-full h-full"></div>
      </div>
    </div>
  );
}
