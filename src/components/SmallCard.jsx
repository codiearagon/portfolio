import React from "react";

const SmallCard = () => {
  return (
    <div
      className={`transition-colors bg-bg-secondary rounded-xl p-10 border border-[#3f1d0d] hover:border-[#5c2b14] ${className}`}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default SmallCard;
