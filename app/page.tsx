//page.tsx
import React from "react";
import Stopwatch from "@/components/Stopwatch";

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 m-4 w-full max-w-4xl space-y-6">
        {/* TODO : move it to second page after it created  */}

        <Stopwatch />
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Welcome to Tile Match Game
        </h1>
        <div className="bg-indigo-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            About this game:
          </h2>
          <p className="text-md text-gray-700">
            Welcome to our game app, a product of our intensive Full-Stack
            Javascript and Python Academy Bootcamp journey. With a passion for
            innovation and a dedication to mastering the latest technologies,
            weve created this app as a showcase of our skills and expertise.
          </p>
        </div>
        <div className="bg-indigo-100 p-6 rounded-lg shadow-lg">
          <p className="text-md text-gray-700">
            Harnessing the power of Javascript, Next.js, Tailwind, HTML & CSS,
            Typescript, Python, and various database technologies such as
            PostgreSQL and SQLAlchemy, weve crafted an immersive gaming
            experience. Our journey through GraphQL, Docker, RESTAPI, and
            Postico has equipped us with the tools to deliver seamless
            performance and functionality.
          </p>
        </div>
        <div className="bg-indigo-100 p-6 rounded-lg shadow-lg">
          <p className="text-md text-gray-700">
            From conception to execution, every aspect of this app represents
            our commitment to excellence and our drive to push the boundaries of
            whats possible in the world of game development. Join us on this
            adventure as we continue to explore new horizons and redefine the
            gaming landscape.
          </p>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-800 transition duration-300">
          Start New Game
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
