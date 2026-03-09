import React from "react";
import PageContent from "../../components/Capstone/PageContent";

const OverallCapstone = () => {
  return (
    <div>
      <PageContent>
        <div className="my-20">
          <h1 className="capstone-h1 text-center">Overall Capstone</h1>
        </div>

        <div className="mb-15 bg-gray-200 rounded-xl p-8">
          <h2 className="capstone-h2">A Long-Term Game Development Journey</h2>
          <p className="mt-4">
            Most of my previous games were done within a month, and the longest
            one was a 3-month group project for a course. The problem with short
            timeframes is that you almost always end up with spaghetti code. It
            works, but it can never scale well.
          </p>
          <p className="mt-4">
            I've always wanted to build a game over a longer period and
            completely by myself, so I have full control over the architecture
            and design. This project was my chance to do that.
          </p>
          <p className="mt-4">
            The goal was to treat it like a real game, something that could
            realistically support updates and expansions down the line. It also
            gave me experience working with a larger codebase and learning how
            to refactor when things inevitably go wrong.
          </p>
        </div>

        <div className="mb-15 bg-gray-200 rounded-xl p-8">
          <h2 className="capstone-h2">Stop Overengineering, Start Building</h2>
          <p className="mt-4">
            In my first few weeks of development, I was mostly focused on
            implementing the character system and projectile system as part of
            the larger ability system. But because of my project goals, I got
            really obsessed with writing clean code and following things like
            SOLID principles. I was making slow progress, but I told myself that
            was fine since the whole point of this project was scalability and
            good architecture.
          </p>
          <p className="mt-4">
            When I first met with my expert in week 5, the biggest thing he told
            me was that it's okay to be messy at first and clean it up later. I
            should be focusing on getting the systems working, making sure
            they're fun and behave the way I intended. The key takeaway was that
            there's no need to overcomplicate something until it actually needs
            it.
          </p>
          <p className="mt-4">
            That advice hit me hard. Deep down I already knew I was
            overcomplicating things too fast, but the perfectionist in me kept
            pushing that thought aside. And honestly, that lesson doesn't just
            apply to coding. It's something that carries over into making art
            and picking up other skills too.
          </p>
        </div>
        <div className="mb-15 bg-gray-200 rounded-xl p-8">
          <h2 className="capstone-h2">
            Finding a Workflow That Actually Works
          </h2>
          <p className="mt-4">
            A game isn't just code. It also involves visual assets, audio, and a
            lot of other moving parts, so figuring out how to split my time was
            a real challenge. There were moments I got completely lost trying to
            make something look good and had to force myself to stop and get
            back to coding.
          </p>
          <p className="mt-4">
            The same problem showed up in programming too. I didn't know how
            much time to give each system, and it was easy to sink too much into
            one area. Eventually I figured out that working horizontally worked
            a lot better for me. Instead of fully building one system at a time,
            I'd do a little work across each one and connect them together early
            so I could see how everything interacted.
          </p>
          <p className="mt-4">
            From there, I could actually see which systems needed the most
            attention and which ones were fine, so I wasn't wasting time
            polishing something that didn't need it yet. It tied back to the
            same lesson from my expert feedback: get things working first, and
            let that guide where your effort goes.
          </p>
        </div>
        <div className="mb-15 bg-gray-200 rounded-xl p-8">
          <h2 className="capstone-h2">Building Toward a Career in Games</h2>
          <p className="mt-4">
            Games are the reason I got into programming and computer science in
            the first place, and getting into game development is something I've
            always been working toward. This project is a way for me to prove
            that I can ship a full game on my own with complex gameplay systems
            that you'd find in real games.
          </p>
          <p className="mt-4">
            Working solo also taught me a lot about how different systems
            connect together. Something as simple as tying an ability system to
            particles and trails gave me a much better understanding of how
            gameplay, visuals, and audio all depend on each other.
          </p>
          <p className="mt-4">
            The genre I chose also wasn't random. RPGs are something I genuinely
            want to work on professionally. There's a certain depth and
            creativity that comes with coding RPG systems that I find really
            fun, and this project let me dig into that.
          </p>
        </div>
        <div className="mb-15 bg-gray-200 rounded-xl p-8">
          <h2 className="capstone-h2">Conclusion</h2>
          <p className="mt-4">
            The biggest thing this project taught me is that building fast and
            iterating is just as important as building it right. That's a lesson
            I'll carry into every project going forward.
          </p>
          <p className="mt-4">
            As for what's next, the focus is on content. That means improving
            visual assets, adding audio, and bringing in at least 2 more
            characters each with their own advancement paths. At that point
            there'll be enough in the game for players to really dig in and
            explore what it has to offer.
          </p>
        </div>
      </PageContent>
    </div>
  );
};

export default OverallCapstone;
