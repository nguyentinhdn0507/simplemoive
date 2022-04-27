import React from "react";

const Button = ({
  onClick,
  className = "",
  full = false,
  type = "button",
  bgColor,
  children,
}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`py-3 px-6 rounded-lg capitalize mt-auto 
        ${full ? "w-full" : ""} ${bgColor} ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
