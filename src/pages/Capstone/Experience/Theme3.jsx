import React from "react";
import Theme from "../../../components/capstone/Theme";
import PageContent from "../../../components/capstone/PageContent";
import Figure from "../../../components/capstone/Figure";
import hudDesign1 from "../../../assets/images/capstone/hudDesign1.png";
import hudDesign2 from "../../../assets/images/capstone/hudDesign2.png";
import hudDesign3 from "../../../assets/images/capstone/hudDesign3.png";
import abilityDesign1 from "../../../assets/images/capstone/abilityDesign1.png";
import abilityDesign2 from "../../../assets/images/capstone/abilityDesign2.png";
import advancementDesign1 from "../../../assets/images/capstone/advancementDesign1.png";
import advancementDesign2 from "../../../assets/images/capstone/advancementDesign2.png";
import advancementDesign3 from "../../../assets/images/capstone/advancementDesign3.png";

const Theme3 = () => {
  return (
    <Theme
      prevThemeLabel="Unity UI Toolkit"
      prevThemePath="../theme2"
      nextThemePath="../theme4"
      nextThemeLabel="Game Art"
    >
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
        </div>
        <div className="mb-15">
          <h2 className="capstone-h2">HUD Design</h2>
          <Figure
            src={hudDesign1}
            figureTitle="Figure 1: First HUD design"
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
            src={hudDesign2}
            figureTitle="Figure 2: Second HUD design"
          ></Figure>
          <p className="mt-4">
            From there, I added the ability slots at the bottom sitting just
            above the experience bar (See Figure 3). I also severely improved
            the visual design of the stats screen, mainly adding the icons. The
            addition of the icons helps the player recognize the stat faster,
            which is important when obtaining buffs.
          </p>
          <p className="mt-4">
            The icons can also be used for status effect related buffs and
            debuffs. For example, when the player is afflicted with a movement
            speed debuff, an icon will appear with a red down arrow to indicate
            that movement speed is debuffed. This function is already
            implemented, but there is not much buffs and debuffs to the game yet
            to fully display its capability.
          </p>
          <Figure
            src={hudDesign3}
            figureTitle="Figure 3: Third HUD design"
          ></Figure>
        </div>
        <div className="mb-15">
          <h2 className="capstone-h2">Ability Selection Design</h2>
          <Figure
            src={abilityDesign1}
            figureTitle="Figure 4: First ability selection design"
          ></Figure>
          <p className="mt-4">
            The ability selection panel is still completely barebones in Figure
            1 with default Unity styling. It displays all the information the
            player would need about the abilities.
          </p>

          <Figure
            src={abilityDesign2}
            figureTitle="Figure 5: Second ability selection design"
          ></Figure>
          <p className="mt-4">
            For the second design, the layout itself is the same as the first
            design, but the styling has significantly improved. The most notable
            change is the color coding on the buttons and the affinity text. It
            allows the player to immediately know the affinity of the ability.
          </p>
        </div>
        <div className="mb-15">
          <h2 className="capstone-h2">Advancement Selection Design</h2>
          <Figure
            src={advancementDesign1}
            figureTitle="Figure 6: First advancement selection design"
          ></Figure>
          <p className="mt-4">
            The image is a bit blurry but it can be seen that the first design
            has absolutely no visual styling. It has the functions it needs to
            perform such as selecting different advancement paths, show details,
            and select it. The art is also a very quick sketch of the vibe I
            want the advancement path to have.
          </p>
          <Figure
            src={advancementDesign2}
            figureTitle="Figure 7: Second advancement selection design"
          ></Figure>
          <p className="mt-4">
            From the first design, I tried to improve it by first making the
            selection panel take the full screen. It allowed me to show the art
            better and also pack in more details about the advancement. However,
            I still wasn't satisfied with it. The art felt very out of place and
            it just didn't have the vibe I wanted it to have, which was to make
            it a cool moment of progression.
          </p>
          <Figure
            src={advancementDesign3}
            figureTitle="Figure 8: Third advancement selection design"
          ></Figure>
          <p className="mt-4">
            From there, I received feedback from my stakeholder that I should
            probably combine the art and details in one screen. I thought about
            it a lot and realized that my stakeholder is right. While trying to
            create a rough image of how the selection screen could look, I felt
            that the art just wasn't popping out as much as I wanted it to. I
            realized that I needed to draw the composition with the UI in mind,
            which was a new experience for me.
          </p>
        </div>
      </PageContent>
    </Theme>
  );
};

export default Theme3;
