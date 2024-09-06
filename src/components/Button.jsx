import React from "react";

const Button = ({children, ...props}) => {
  return (
    <div>
    <button
      type="button"
      className="text-gray-800 bg-white py-3 px-5 rounded-full text-base font-medium hover:bg-slate-200"
      {...props}
    >
  {children}
    </button>
  </div>
  );
};

export default Button;  
