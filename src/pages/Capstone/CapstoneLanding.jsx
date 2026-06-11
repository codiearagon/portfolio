import { NavLink } from "react-router-dom";
import Hero from "../../components/capstone/Hero";
import PageContent from "../../components/capstone/PageContent";
import fireSplash from "../../assets/images/capstone/fireSplash2.png";
import SmallCard from "../../components/SmallCard";
import { FaGamepad, FaCode, FaBook, FaPenNib } from "react-icons/fa";

const CapstoneLanding = () => {
  return (
    <section>
      <section className="relative min-h-[560px] overflow-hidden bg-bg">
        <img
          src={fireSplash}
          className="absolute -right-48 top-0 w-[70%] h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0a0a0a_0%,#0a0a0a_28%,rgba(10,10,10,.85)_45%,rgba(69,10,10,.35)_75%,rgba(10,10,10,.65)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,#0a0a0a_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-12 py-28">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-bold leading-none text-text">
              THE <br />
              <span className="text-red">MISFORTUNED</span>
            </h1>
            <div className="my-6 h-px w-full bg-gold" />
            <h2 className="text-red tracking-widest uppercase text-lg mb-4">
              A 2D Action RPG with Roguelike Elements
            </h2>
            <p className="text-text-secondary max-w-xl leading-7">
              Explore a world where ordinary people from Earth are summoned to a
              fantasy realm and struggle to build new lives. Customize your
              character through elemental affinities, unlock powerful abilities,
              and survive increasingly difficult encounters.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex justify-center gap-5">
          <SmallCard icon={FaGamepad} to="user" title="For Players">
            Game overview, features, and link to the game.
          </SmallCard>
          <SmallCard icon={FaCode} to="experience" title="Development Process">
            Design decisions, systems, and implementation.
          </SmallCard>
          <SmallCard
            icon={FaBook}
            to="bibliography"
            title="Annotated Bibliography"
          >
            Assets, resources, and references used.
          </SmallCard>
          <SmallCard icon={FaPenNib} to="overall" title="Personal Reflections">
            Lessons learned and my growth journey.
          </SmallCard>
        </div>
      </section>
    </section>
  );
};

export default CapstoneLanding;
