import { NavLink } from "react-router-dom";
import Hero from "../../components/capstone/Hero";
import PageContent from "../../components/capstone/PageContent";
import fireSplash from "../../assets/images/capstone/fireSplash2.png";

const CapstoneLanding = () => {
  return (
    <div>
      <PageContent>
        <div className="mt-20 flex flex-col items-center justify-center mb-10">
          <h1 className="capstone-h1">The Misfortuned</h1>
          <p className="mt-5 text-lg text-center">
            Explore a world where ordinary people from Earth are summoned to a
            fantasy realm and struggle to build new lives. Customize your
            character through elemental affinities, unlock powerful abilities,
            and survive increasingly difficult encounters.
          </p>
          <p className="mt-5 text-lg text-center">
            Navigate my capstone project using the buttons below.
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <NavLink to="user" className="button-primary p-3 rounded-md">
            For Players
          </NavLink>
          <NavLink to="experience" className="button-primary p-3 rounded-md">
            Development Process
          </NavLink>
          <NavLink to="bibliography" className="button-primary p-3 rounded-md">
            Annotated Bibliography
          </NavLink>
          <NavLink to="overall" className="button-primary p-3 rounded-md">
            Personal Reflections
          </NavLink>
        </div>
        <img src={fireSplash} className="mt-10 rounded-xl rounded-md" />
      </PageContent>
    </div>
  );
};

export default CapstoneLanding;
