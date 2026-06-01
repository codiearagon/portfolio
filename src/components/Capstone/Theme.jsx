import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Theme = ({
  children,
  prevThemePath,
  prevThemeLabel = "Previous Theme",
  nextThemePath,
  nextThemeLabel = "Next Theme",
}) => {
  return (
    <div>
      <div className="">{children}</div>
      <div className="flex gap-4 justify-between mx-50">
        <div>
          {prevThemePath && (
            <NavLink
              to={prevThemePath}
              className="flex items-center gap-2 px-4 py-2 bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80"
            >
              <FaChevronLeft />
              <span>{prevThemeLabel}</span>
            </NavLink>
          )}
        </div>

        <div>
          {nextThemePath && (
            <NavLink
              to={nextThemePath}
              className="flex items-center gap-2 px-4 py-2 bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80"
            >
              <span>{nextThemeLabel}</span>
              <FaChevronRight />
            </NavLink>
          )}
        </div>
      </div>
      <NavLink to="../../" className="flex underline justify-center mt-20 py-8">
        Go back to Capstone Landing
      </NavLink>
    </div>
  );
};

export default Theme;
