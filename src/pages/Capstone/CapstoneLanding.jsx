import { NavLink } from "react-router-dom";
import Hero from "../../components/capstone/Hero";
import PageContent from "../../components/capstone/PageContent";

const CapstoneLanding = () => {
  return (
    <div>
      {/* <Hero /> */}
      <PageContent>
        <div className="mt-50 flex flex-col items-center justify-center mb-10">
          <h1 className="capstone-h1">In Another World</h1>
          <p className="mt-5 text-lg text-center">
            This is the landing page for my capstone project. I created an RPG
            with roguelike elements where the focus is building scalable,
            complex gameplay systems.
          </p>
          <p className="mt-5 text-lg text-center">
            Navigate my capstone project using the buttons below.
          </p>
        </div>
        <div className="flex justify-center">
          <NavLink
            to="user"
            className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80"
          >
            The User
          </NavLink>
          <NavLink
            to="experience"
            className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80"
          >
            Capstone Experience
          </NavLink>
          <NavLink
            to="bibliography"
            className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80"
          >
            Annotated Bibliography
          </NavLink>
          <NavLink
            to="overall"
            className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80"
          >
            Overall Capstone
          </NavLink>
        </div>
      </PageContent>
    </div>
  );
};

export default CapstoneLanding;
