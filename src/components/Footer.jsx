import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-800">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="mt-5 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0  text-white">
              &copy; Copyright 2023 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
