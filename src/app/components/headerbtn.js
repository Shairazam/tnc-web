import { useState } from "react";

export default function FlipBtn() {
  const [isSlid, setIsSlid] = useState(false);

  return (
    <div
      className="relative w-32 h-12 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsSlid(true)} // Trigger slide on hover
      onMouseLeave={() => setIsSlid(false)} // Reset on hover end
    >
      {/* Background Layer */}
      <div
        className={`absolute inset-0 bg-blue-500 rounded-md transition-transform duration-500 ${
          isSlid ? "-translate-y-full" : ""
        }`}
      ></div>

      {/* Front Text */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-white transition-transform duration-500 ${
          isSlid ? "translate-y-full" : ""
        }`}
      >
        <span>Contact Us</span>
      </div>

      {/* Back Text */}
      <div
        className={`absolute inset-0 flex items-center justify-center border border-md rounded outline-0 text-white transition-transform duration-500 ${
          isSlid ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
