import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-10 right-10 p-3 rounded-full bg-red-deep text-text shadow-lg hover:cursor-pointer"
      >
        <FaChevronUp />
      </button>
    </>
  );
};

export default MainLayout;
