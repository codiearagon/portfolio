import React from "react";
import Theme from "../../../components/capstone/Theme";
import PageContent from "../../../components/capstone/PageContent";
import Figure from "../../../components/capstone/Figure";
import initialDesign from "../../../assets/images/capstone/initialuidesign1.png";
import initialDesign2 from "../../../assets/images/capstone/initialuidesign2.png";
import currentDesign from "../../../assets/images/capstone/currentuidesign.png";

const Theme4 = () => {
  return (
    <Theme prevThemePath="../theme2" nextThemePath="../theme4">
      <PageContent>
        <div className="my-20">
          <h1 className="capstone-h1 text-center">UI Designing</h1>
        </div>

        <div className="mb-15">
          <h2 className="capstone-h2">Imitating MMORPGs for UI Design</h2>
          <p className="mt-4">
            Growing up playing a lot of Massively Multiplayer Online
            Role-Playing Games (MMORPGs) gave me a pretty clear starting point
            for my UI layout. Those games always kept important information
            visible and accessible, things like health, mana, available
            abilities, and an experience bar. That was the standard I had in my
            head going in, and my first iteration reflected that. As seen in
            Figure 1, an early version of the UI already had key character stats
            visible in the top-right corner of the screen.
          </p>
          <Figure
            src={initialDesign}
            figureTitle="Figure 1: First UI design iteration"
          ></Figure>
          <p className="mt-4">
            From there, I leaned into what I remembered from my favorite MMORPGs
            and started imitating their layouts more deliberately (See Figure
            2). The health bar uses the classic green and red color scheme with
            the current level displayed alongside it. The experience bar spans
            the full width of the screen so the player always has a clear sense
            of how close they are to leveling up.
          </p>
          <p className="mt-4">
            The stats from Figure 1 were moved into a low-opacity black box
            sitting beneath the character portrait and level indicator in Figure
            2. The box is toggleable so players can show or hide it based on
            their preference. I designed it this way because I knew the stat
            list would grow over time, and having it permanently on screen would
            quickly become obstructive.
          </p>
          <Figure
            src={initialDesign2}
            figureTitle="Figure 2: Second UI design iteration"
          ></Figure>
          <p className="mt-4">
            The layout has largely stayed the same since then, with the main
            addition being the ability slots sitting just above the experience
            bar (See Figure 3). A selection panel also appears at level 5 and
            every 10 levels after that. The goal for the selection panel was to
            make sure both casual players and more invested ones always have the
            information they need within reach.
          </p>
          <Figure
            src={currentDesign}
            figureTitle="Figure 3: Current UI design iteration"
          ></Figure>
          <p className="mt-4">
            The layout itself is mostly settled, but the visual styling still
            has a lot of room to grow. Things like font, font size, border
            rounding, background color, and other styling details are all still
            subject to change. The UI communicates what it needs to right now,
            but the visual polish is something I plan to revisit.
          </p>
        </div>
      </PageContent>
    </Theme>
  );
};

export default Theme4;
