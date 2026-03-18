import React from "react";
import Theme from "../../../components/capstone/Theme";
import PageContent from "../../../components/capstone/PageContent";
import Figure from "../../../components/capstone/Figure";
import initialDesign from "../../../assets/images/capstone/initiallayladesign.png";
import currentDesign from "../../../assets/images/capstone/currentlayladesign.png";
import abilitySprites from "../../../assets/images/capstone/abilitysprites.png";

const Theme3 = () => {
  return (
    <Theme prevThemePath="../theme3" nextThemePath="../theme5">
      <PageContent>
        <div className="my-20">
          <h1 className="capstone-h1 text-center">Game Art</h1>
        </div>

        <div className="mb-15">
          <h2 className="capstone-h2">Incorporating Illustration Skills</h2>
          <p className="mt-4">
            Over the past few years I picked up drawing fan art illustrations as
            a hobby and it quickly became one of my favorite pastimes. There's
            something about thinking through a composition, sketching out the
            big picture, and then slowly zeroing in on the details that feels
            really satisfying once it all comes together.
          </p>
          <p className="mt-4">
            I really wanted to bring that into this project. I didn't have any
            character designing experience but I wanted to try anyway. Figure 1
            shows the first design iteration for my character Layla. I ended up
            scrapping it though, because the design had too much detail for what
            was supposed to be a base form.
          </p>
          <Figure
            src={initialDesign}
            figureTitle="Figure 1: First Layla base design"
          ></Figure>
          <p className="mt-4">
            My vision was for every character's base design to be relatively
            simple, with the complexity and detail increasing as the player
            progresses through their paths. I thought that having the art evolve
            alongside the gameplay would help players feel the sense of
            progression more naturally.
          </p>
          <p className="mt-4">
            As such, I simplified the design significantly, as seen in Figure 2.
            I'm still not sure about the composition for the splash art on the
            character select screen, but the character design itself is most
            likely here to stay.
          </p>
          <Figure
            src={currentDesign}
            figureTitle="Figure 2: Second Layla base design"
          ></Figure>
        </div>
        <div className="mb-15">
          <h2 className="capstone-h2">Pixel Art</h2>
          <p className="mt-4">
            For the in-game art, I went with pixel art over vector art for a
            couple of reasons. The more practical one is that I bought Aseprite,
            a pixel art software, a few months before the project and didn't
            want it to go to waste. But I also thought that once I got
            comfortable with it, creating animations would be a lot more
            manageable. Figure 3 shows a few examples of the ability sprites I
            made.
          </p>
          <Figure
            src={abilitySprites}
            figureTitle="Figure 3: Fireball, Water blade, and Rock bullet sprites"
          ></Figure>
          <p className="mt-4">
            I'm not planning to spend too much time on highly detailed ability
            sprites since I'd rather redirect that effort toward the visual
            effects and characters instead. That said, a lot of what I learned
            from illustration carried over naturally, things like color theory
            and shape design, so the two skills overlap more than I expected.
          </p>
          <p className="mt-4">
            Pixel art is also a lot harder than I anticipated. Every single
            pixel carries weight, and placing a color in the wrong spot can
            throw off the entire design. It forces you to be really intentional
            about what each pixel is actually representing, which is a different
            kind of challenge compared to illustration.
          </p>
        </div>
      </PageContent>
    </Theme>
  );
};

export default Theme3;
