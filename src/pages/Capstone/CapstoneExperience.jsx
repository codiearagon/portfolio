import React from "react";
import { NavLink } from "react-router-dom";
import PageContent from "../../components/capstone/PageContent";
import ExperienceTheme from "../../components/capstone/ExperienceTheme";

const CapstoneExperience = () => {
  return (
    <div>
      <PageContent>
        <div className="my-20">
          <h1 className="capstone-h1 text-center">Capstone Experience</h1>
        </div>

        <div className="flex flex-col justify-center items-center mt-10 gap-10">
          <ExperienceTheme heading="Systems Designing" linkTo="theme1">
            About my experience in designing a character system and ability
            system
          </ExperienceTheme>
          <ExperienceTheme heading="Unity UI Toolkit" linkTo="theme2">
            About my experience in using Unity UI Toolkit compared to Unity UI
            (uGUI)
          </ExperienceTheme>
          <ExperienceTheme heading="UI Designing" linkTo="theme3">
            About my experience in designing game UI
          </ExperienceTheme>
          <ExperienceTheme heading="Game Art" linkTo="theme4">
            About my experience in making game art
          </ExperienceTheme>
          <ExperienceTheme heading="Final Game" linkTo="theme5">
            Watch a quick demo of the game
          </ExperienceTheme>
        </div>

        <NavLink to="../" className="flex underline justify-center mt-20">
          Go back to Capstone Landing
        </NavLink>
      </PageContent>
    </div>
  );
};

export default CapstoneExperience;
