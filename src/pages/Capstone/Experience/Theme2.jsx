import React from "react";
import Theme from "../../../components/Capstone/Theme";
import PageContent from "../../../components/Capstone/PageContent";

const Theme1 = () => {
  return (
    <Theme prevThemePath="../theme1" nextThemePath="../theme3">
      <PageContent>
        <div className="my-20">
          <h1 className="capstone-h1 text-center">Unity UI Toolkit</h1>
        </div>

        <div className="mb-15">
          <h2 className="capstone-h2">
            Using Unity UI Toolkit was the right call
          </h2>
          <p className="mt-4">
            I've always disliked Unity's UGUI for making user interfaces like
            menus, or the game HUD. It felt unintuitive and personally, it didnt
            make sense to have them as game objects. Using it for in-game world
            UI like healthbars and bubble dialogues was fine. But, I always
            thought that it was the only option until I randomly encountered
            Unity UI toolkit when searching for UI tips before the capstone
            quarter started
          </p>
          <p className="mt-4">Unity UI Toolkit's</p>
          <p className="mt-4">
            The goal was to treat it like a real game, something that could
            realistically support updates and expansions down the line. It also
            gave me experience working with a larger codebase and learning how
            to refactor when things inevitably go wrong.
          </p>
        </div>
      </PageContent>
    </Theme>
  );
};

export default Theme1;
