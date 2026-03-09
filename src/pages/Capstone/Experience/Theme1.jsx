import Theme from "../../../components/capstone/Theme";
import { NavLink } from "react-router-dom";
import PageContent from "../../../components/capstone/PageContent";
import Figure from "../../../components/capstone/Figure";
import initialCharacter from "../../../assets/images/capstone/initialcharacterdiagram.png";
import currentCharacter from "../../../assets/images/capstone/currentcharacterdiagram.png";
import initialAbility from "../../../assets/images/capstone/initialabilitydiagram.png";
import currentAbility from "../../../assets/images/capstone/currentabilitydiagram.png";

const Theme2 = () => {
  return (
    <Theme nextThemePath="../theme2">
      <PageContent>
        <div className="my-20">
          <h1 className="capstone-h1 text-center">Systems Designing</h1>
        </div>
        <div className="mb-15">
          <h2 className="capstone-h2">Character System</h2>
          <p className="mt-4">
            Initially, the character system was built around a ScriptableObject
            that held all the base values, which would then get passed into a
            MonoBehaviour Character class containing the base data, runtime
            data, and all other systems (See Figure 1).
          </p>

          <Figure
            src={initialCharacter}
            figureTitle="Figure 1: Initial Character Diagram"
          />
          <p className="mt-4">
            Early in development though, having both a base data and runtime
            data container made things unnecessarily complicated. It led to a
            lot of repeated code, especially when dealing with stat scaling, and
            I realized I didn't actually need access to the base data at all. So
            I removed it.
          </p>
          <p className="mt-4">
            From there I restructured the system to use a component-like
            architecture, similar to how Unity itself is designed, so that the
            Character class isn't responsible for holding everything. I also
            introduced interfaces like IManaUser and IDamageable, which lets
            abilities interact with those interfaces directly rather than caring
            whether the target is a player or an enemy (See Figure 2). This
            meant I could reuse the same ability code for both, which cleaned
            things up a lot.
          </p>
          <Figure
            src={currentCharacter}
            figureTitle="Figure 2: Current Character Diagram"
          />
        </div>
        <div className="mb-15">
          <h2 className="capstone-h2">Ability System</h2>
          <p className="mt-4">
            Going in, I thought the ability system was going to be relatively
            simple (See Figure 3). My assumption was that the different ability
            types like AoE, Projectile, and Self could just be represented as an
            enum called AbilityCoverage. That turned out to be completely wrong.
          </p>

          <Figure
            src={initialAbility}
            figureTitle="Figure 3: Initial Ability Diagram"
          />
          <p className="mt-4">
            Because I wanted abilities to be fully configurable from the
            inspector, with each ability type having its own specific values and
            behaviors, I ended up needing a lot more structure. This meant
            building out factories to handle creating the right ability type and
            passing the correct properties, plus separate factories for each
            ability type to manage their own behaviors (See Figure 4).
          </p>
          <p className="mt-4">
            And this is still just the beginning. The ability system will grow a
            lot more once self casts and other ability types get implemented,
            not to mention the unique behaviors that each type will need on top
            of that.
          </p>
          <Figure
            src={currentAbility}
            figureTitle="Figure 4: Current Ability Diagram"
          />
        </div>
      </PageContent>
    </Theme>
  );
};

export default Theme2;
