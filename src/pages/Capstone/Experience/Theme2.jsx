import React from "react";
import Theme from "../../../components/capstone/Theme";
import PageContent from "../../../components/capstone/PageContent";
import Figure from "../../../components/capstone/Figure";
import damageText from "../../../assets/images/capstone/damageText.png";
import uiToolkit from "../../../assets/images/capstone/uiToolkit.png";

const Theme1 = () => {
  return (
    <Theme prevThemePath="../theme1" nextThemePath="../theme3">
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
            structure made a lot more sense for building HUDs and menus.
          </p>
          <p className="mt-4">
            It wasn't without issues though. I ran into a few bugs along the
            way, including the UI Builder acting up as shown in Figure 2, and a
            progress bar that wasn't correctly calculating its minimum value.
          </p>
          <p className="mt-4">
            Overall, UI Toolkit is what I'll be reaching for on any future HUD
            work. Unity also seems to be actively investing in it as a package,
            so I'd expect it to keep getting better and more polished over time.
          </p>
          <Figure
            src={uiToolkit}
            figureTitle="Figure 2: UI Builder from Unity UI Toolkit"
          />
        </div>
      </PageContent>
    </Theme>
  );
};

export default Theme1;
