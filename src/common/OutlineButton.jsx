import React from "react";

const OutlineButton = ({ children,className }) => {
  return (
    <button className={`px-6  border-2 border-orange-600 text-orange-600 font-bold rounded-md flex items-center justify-center gap-2 ${className}`}>
      {children}
    </button>
  );
};

export default OutlineButton;
