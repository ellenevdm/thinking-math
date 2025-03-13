"use client";

import { FC } from "react";

interface FooterProps {}

const Footer: FC = () => {
  return (
    <footer>
      <div className="w-full bg-gray-800 text-white b-0 p-15">
        <div className="flex justify-between items-center ">
          {" "}
          <h1 className="text-3xl">Thinking Maths</h1>
          <div className="flex space-x-9 items-center justify-around text-lg">
            <button className="border-2 bg-white text-black font-bold p-2">
              Email
            </button>
            <button className="border-2 bg-white text-black font-bold p-2">
              LinkedIn
            </button>
            <button className="border-2 bg-white text-black font-bold p-2">
              WhatsApp
            </button>
          </div>
        </div>
        <div className="h-0.25 bg-gray-300 my-5"></div>
        <div className="text-center">
          <p>©EllieWritesCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
