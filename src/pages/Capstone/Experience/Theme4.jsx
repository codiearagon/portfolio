import React from "react";
import Theme from "../../../components/capstone/Theme";
import PageContent from "../../../components/capstone/PageContent";
import Figure from "../../../components/capstone/Figure";
import initialDesign from "../../../assets/images/capstone/initiallayladesign.png";
import currentDesign from "../../../assets/images/capstone/currentlayladesign.png";
import abilitySprites1 from "../../../assets/images/capstone/abilitySprites1.png";
import abilitySprites2 from "../../../assets/images/capstone/abilitySprites2.png";
import waterSplash1 from "../../../assets/images/capstone/waterSplash1.png";
import waterSplash2 from "../../../assets/images/capstone/waterSplash2.png";
import fireSplash1 from "../../../assets/images/capstone/fireSplash1.png";
import fireSplash2 from "../../../assets/images/capstone/fireSplash2.png";

const Theme4 = () => {
  return (
    <Theme
      prevThemeLabel="UI Designing"
      prevThemePath="../theme3"
      nextThemePath="../theme5"
      nextThemeLabel="Game Demo"
    >
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
          <h2 className="capstone-h2">Splash Arts</h2>
          <p className="mt-4">
            Aside from liking the idea of advancements because of the sense of
            progression, I also wanted to add them to the game because I wanted
            to draw splash arts.
          </p>
          <p className="mt-4">
            Figure 3 shows the early rough of the water splash art. The main
            idea was to look somewhat melancholic to reflect the intended lore
            for the water path, which was lamenting over loneliness and trying
            to cope with it. Figure 4 shows the improved version and the I
            decided to hide the eyes behind the bangs to increase that vibe of
            loneliness, but I wanted her to feel a bit more powerful so I made
            her look at the viewer.
          </p>
          <Figure
            src={waterSplash1}
            figureTitle="Figure 3: First Layla water splash art"
          ></Figure>
          <Figure
            src={waterSplash2}
            figureTitle="Figure 4: Second Layla water splash art"
          ></Figure>
          <p className="mt-4">
            As for the fire splash art, the idea behind it is that Layla has had
            enough of being a pushover and is now being more assertive with
            protecting herself. And so, I had her take a more confident pose
            with a sharp look in her eyes.
          </p>
          <Figure
            src={fireSplash1}
            figureTitle="Figure 5: First Layla fire splash art"
          ></Figure>
          <Figure
            src={fireSplash2}
            figureTitle="Figure 6: Second Layla fire splash art"
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
            manageable. Figure 7 shows a few examples of the ability sprites I
            made.
          </p>
          <Figure
            src={abilitySprites1}
            figureTitle="Figure 7: First Fireball, Water blade, and Rock bullet sprites"
          ></Figure>
          <p className="mt-4">
            Pixel art is also a lot harder than I anticipated. Every single
            pixel carries weight, and placing a color in the wrong spot can
            throw off the entire design. It forces you to be really intentional
            about what each pixel is actually representing, which is a different
            kind of challenge compared to illustration. That said, a lot of what
            I learned from illustration carried over naturally, things like
            color theory and shape design, so the two skills overlap more than I
            expected.
          </p>
          <Figure
            src={abilitySprites2}
            figureTitle="Figure 8: Second Fireball, Water blade, and Rock bullet sprites"
          ></Figure>
          <p className="mt-4">
            With the second iteration of the sprites, the visual impact has
            significantly improved. I added a lot more contrast and a more
            organic shape to the abilities. The previous sprites were too rigid
            and it didn't really feel like they represented what they had to
            represent. It is also fully animated and seeing the animations
            in-game really enhances the feeling of playing a game and sense of
            completion.
          </p>
        </div>
      </PageContent>
    </Theme>
  );
};

export default Theme4;
