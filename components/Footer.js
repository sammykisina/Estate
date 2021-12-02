import React from "react";

function Footer() {
  return (
    <div className="h-24 bg-indigo-50 flex items-center justify-center flex-col">
      <span className="text-xl text-indigo-800">&copy; 2021</span>
      <div className="flex gap-44 text-lg text-indigo-900">
        <span>Next.js</span>
        <span>Tailwind css</span>
      </div>
    </div>
  );
}

export default Footer;
