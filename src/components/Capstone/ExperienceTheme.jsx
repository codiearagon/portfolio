import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ExperienceTheme = ({
  children,
  heading,
  linkTo,
  linkToLabel = "Read more",
}) => {
  return (
    <NavLink
      to={linkTo}
      className="group flex flex-col transition-all duration-200 items-start bg-bg-secondary border border-gold-muted w-xl p-8 rounded-2xl hover:border-gold-light-muted hover:-translate-y-1"
    >
      <div>
        <h2 className="capstone-h2">{heading}</h2>
        <p className="mt-4 pr-35">{children}</p>
      </div>

      <div className="flex justify-end mt-6">
        <FaChevronRight
          className="transition-all duration-300 text-red-dark group-hover:translate-x-3"
          size={24}
        />
      </div>
    </NavLink>
  );
};

export default ExperienceTheme;
