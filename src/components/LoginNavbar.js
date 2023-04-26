import React from "react";
import Link from "next/link";

const LoginNavbar = () => {
  return (
    <div>
      <nav>
        {/* add your navigation links here */}
        <div className="w-full h-[54px] bg-[#930606] fixed top-0 left-0 right-0 z-10 mb-10 shadow-lg flex items-center justify-between">
          <span className="flex items-center pt-1 pb-2 pl-2">
            <Link href="/">
              <img
                src="/ulm_logo.png"
                alt="logo"
                style={{ width: "54px", height: "42px" }}
              />
            </Link>
          </span>
          <div className="flex items-center justify-end pr-4">
            <div className="flex gap-4">
            <Link href="https://pmac.vercel.app/authenticator">
                <span className="flex items-center h-[25px] text-white text-lg font-semibold bg-secondary hover:bg-gray-900 p-4 rounded-sm group cursor-pointer hover:shadow-lg ">
                  Sign up
                </span>
              </Link>
              <Link href="https://pmac.vercel.app/authenticator">
                <span className="flex items-center h-[25px] text-white text-lg font-semibold bg-secondary hover:bg-gray-900 p-4 rounded-sm group cursor-pointer hover:shadow-lg ">
                  Log in
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LoginNavbar;
