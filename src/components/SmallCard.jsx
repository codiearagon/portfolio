import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const SmallCard = ({ children, icon: Icon, to, title, className }) => {
  return (
    <NavLink
      to={to}
      className={`group transition-all duration-300 bg-bg-secondary rounded-xl p-10 border border-[#3f1d0d] hover:border-[#5c2b14] hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="text-red-dark" size={32} />}
        <h2>{title}</h2>
      </div>

      <p>{children}</p>

      <div className="flex justify-end mt-6">
        <FaChevronRight
          className="transition-all duration-300 text-red-dark group-hover:translate-x-3"
          size={24}
        />
      </div>
    </NavLink>
  );
};

export default SmallCard;
