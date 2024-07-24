import React from "react";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="text-primary lg:w-2/5 lg:px-24 lg:my-16 flex flex-col lg:min-h-[40vh] md:min-h-[30vh] sm:min-h-[25vh] h-40 justify-between flex-wrap uppercase my-8 px-4 sm:px-6 md:px-12
      "
      >
        <h1 className="font-heading font-black lg:text-8xl tracking-wider leading-tight text-4xl sm:text-6xl md:text-7xl selection:bg-hover selection:text-primary">
          Listen
        </h1>
        <h1 className="font-heading font-black lg:text-8xl tracking-wider leading-tight text-4xl sm:text-6xl md:text-7xl selection:bg-hover selection:text-primary">
          Learn
        </h1>
        <h1 className="font-heading font-black leading-tight text-accent lg:text-8xl tracking-wider text-4xl sm:text-6xl md:text-7xl selection:bg-hover selection:text-primary">
          <ReactTyped
            strings={["Grow", "Evolve"]}
            typeSpeed={60}
            backSpeed={40}
            startDelay={150}
            cursorChar=""
          ></ReactTyped>
        </h1>
      </div>
      <div className="lg:px-24 lg:py-8 flex flex-col items-start px-4 py-2 flex-wrap sm:px-6 md:px-12">
        <span className="font-heading capitalize lg:text-4xl text-xl  selection:bg-hover selection:text-primary sm:text-2xl md:text-3xl">
          Subscribe for Upcoming News
        </span>
        <button
          className="lg:px-8 lg:py-4 lg:my-5 my-2 sm:my-3 font-bodyText hover:bg-hover font-bold lg:text-2xl sm:text-lg text-base bg-buttonBackground rounded-xl lg:rounded-2xl px-6 py-2  selection:bg-hover selection:text-primary md:text-xl md:px-7 md:py-3"
          onClick={() => {
            navigate("./signup");
          }}
        >
          Subscribe
        </button>
      </div>
    </>
  );
};

export default Hero;
