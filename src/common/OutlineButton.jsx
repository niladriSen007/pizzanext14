import React from "react";

const OutlineButton = ({ children }) => {
  return (
    <button className="px-6 py-2 border-2 border-orange-600 text-orange-600 font-bold rounded-md flex items-center gap-2">
      {children}
    </button>
  );
};

export default OutlineButton;
