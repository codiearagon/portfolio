import React from "react";
import { NavLink } from "react-router-dom";
import PageContent from "../../components/capstone/PageContent";
import ExperienceTheme from "../../components/capstone/ExperienceTheme";

const CapstoneExperience = () => {
  return (
    <div>
      <PageContent>
        <div className="my-20">
          <h1 className="capstone-h1 text-center">Development Process</h1>
        </div>

        <div className="flex flex-col justify-center items-center mt-10 gap-10">
          <ExperienceTheme heading="Systems Designing" linkTo="theme1">
            Learn more about my process for designing systems and my struggles
            in creating a good ability system.
          </ExperienceTheme>
          <ExperienceTheme heading="Unity UI Toolkit" linkTo="theme2">
            Learn more about my experience with using UI Toolkit and my overall
            thoughts on it.
          </ExperienceTheme>
          <ExperienceTheme heading="UI Designing" linkTo="theme3">
            Learn more about how my UI evolved throughout the capstone.
          </ExperienceTheme>
          <ExperienceTheme heading="Game Art" linkTo="theme4">
            Learn more about how I incorporated my digital art hobby into the
            game.
          </ExperienceTheme>
          <ExperienceTheme heading="Final Game" linkTo="theme5">
            Watch a quick demo of the game
          </ExperienceTheme>
        </div>

        <NavLink to="../" className="flex link underline justify-center mt-20">
          Go back to Capstone Landing
        </NavLink>
      </PageContent>
    </div>
  );
};

export default CapstoneExperience;
