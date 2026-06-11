import React from "react";
import PageContent from "../../components/capstone/PageContent";
import { NavLink } from "react-router-dom";
import GenericCard from "../../components/GenericCard";

const User = () => {
  return (
    <div>
      <PageContent>
        <div className="my-20">
          <h1 className="capstone-h1 text-center">For Players</h1>
        </div>

        <GenericCard title="What is this?" className="mb-15">
          <p>
            This project is a single-player RPG set in a fantastical world,
            built around deep character systems and meaningful progression. You
            get to follow and play characters who were once ordinary people from
            Earth, now thrown into an unfamiliar world with abilities and
            enemies. It is up to you how the characters will live their lives.
          </p>
        </GenericCard>

        <GenericCard title="Who is this for?" className="mb-15">
          <p className="mt-4">
            If you're a <strong>player</strong>, you would be able to explore a
            rich, fantastical world filled with enemies to battle and systems to
            master. From abilities and affinities to leveling and character
            advancements. You also get to:
          </p>
          <ul className="list-disc list-inside ml-5">
            <li className="my-3">
              Discover a diverse cast of characters, each with their own
              backstory
            </li>
            <li className="my-3">
              Guide them down unique paths and shape their life story
            </li>
          </ul>
          <p className="mt-4">
            If you're a <strong>game designer</strong>, designing and tuning
            content is straightforward and accessible. Core systems like
            character stats, ability properties, and difficulty scaling can all
            be adjusted with ease. Beyond that:
          </p>
          <ul className="list-disc list-inside ml-5">
            <li className="my-3">
              Adding new characters and abilities is as simple as filling in
              values and selecting assets
            </li>
            <li className="my-3">
              No complex engineering work required to expand or balance the game
            </li>
          </ul>
        </GenericCard>

        <GenericCard title="How to play the game?" className="mb-15">
          <p className="mt-4">
            The game can be played over at itch.io with this link:
          </p>
          <a
            className="inline-block mt-4 link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://codie10.itch.io/the-misfortuned"
          >
            https://codie10.itch.io/the-misfortuned
          </a>
        </GenericCard>

        <NavLink to="../" className="flex link underline justify-center mt-20">
          Go back to Capstone Landing
        </NavLink>
      </PageContent>
    </div>
  );
};

export default User;
