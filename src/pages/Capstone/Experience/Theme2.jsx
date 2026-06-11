import React from "react";
import Theme from "../../../components/capstone/Theme";
import PageContent from "../../../components/capstone/PageContent";
import Figure from "../../../components/capstone/Figure";
import damageText from "../../../assets/images/capstone/damageText.png";
import uiToolkit from "../../../assets/images/capstone/uiToolkit.png";
import uitoolkitproblem from "../../../assets/images/capstone/uitoolkitproblem.png";

const Theme2 = () => {
  return (
    <Theme
      prevThemeLabel="Systems Designing"
      prevThemePath="../theme1"
      nextThemePath="../theme3"
      nextThemeLabel="UI Designing"
    >
      <PageContent>
        <div className="my-20">
          <h1 className="capstone-h1 text-center">Unity UI Toolkit</h1>
        </div>

        <div className="mb-15">
          <h2 className="capstone-h2">Unity UI Toolkit vs Unity UI (uGUI)</h2>
          <p className="mt-4">
            I've always found uGUI unintuitive. Having UI elements exist as game
            objects never really made sense to me, and working with it always
            felt clunky. That said, it does have its place for in-world UI like
            healthbars, and in this project I used it specifically for damage
            text (See Figure 1). For a long time I thought it was the only real
            option, until I stumbled across Unity UI Toolkit while looking up UI
            tips before the capstone quarter started.
          </p>
          <Figure
            src={damageText}
            figureTitle="Figure 1: Damage Text Hierarchy"
          />
          <p className="mt-4">
            UI Toolkit felt immediately more natural since it follows a workflow
            similar to web development, with a clear separation between
            document, styles, and script (See Figure 2). It was still a learning
            curve since I hadn't touched web development in a while, but the
            structure made a lot more sense for building menus.
          </p>
          <p className="mt-4">
            It wasn't without issues though. I ran into a few bugs along the
            way, including the UI Builder acting up as shown in Figure 2, and a
            progress bar that wasn't correctly calculating its minimum value.
          </p>
          <Figure
            src={uiToolkit}
            figureTitle="Figure 2: UI Builder from Unity UI Toolkit"
          />
          <p className="mt-4">
            After working with UI Toolkit, I think that UI Toolkit's biggest
            strength is definitely working with menus. I don't think it's good
            for in-game UI, and honestly even HUDs. I haven't gone very deep
            into it and I probably haven't touched even 50% of the features it
            offers, but the biggest problem to me right now is the amount of
            references that I have to make for each element I want to use. On
            top of that, I'm making references through string, which to me is
            just unreliable and prone to mistakes.
          </p>
          <p className="mt-4">
            Looking at Figure 3, the amount of string references I have to make
            seems a bit too much for me. Now, I know that I can split this up
            into multiple files, especially the ability slots. I probably
            should, but the point that there is too much string references still
            stands.
          </p>
          <Figure
            src={uitoolkitproblem}
            figureTitle="Figure 3: UI Toolkit struggles"
          />
        </div>
      </PageContent>
    </Theme>
  );
};

export default Theme2;
