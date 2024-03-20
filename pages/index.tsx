//index.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import BaharehLinkedInQR from "/public/LinkedInScanable/BaharehLinkedIn.png";
import LeeLinkedInQR from "/public/LinkedInScanable/LeeLinkedIn.png";
import Image from "next/image";

const IndexPage = () => {
  const router = useRouter();

  // Function to handle button click and navigate to the game page 'Start New Game'
  const startGame = () => {
    router.push("/game"); // Use router.push to navigate to the game page from welcome page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 m-4 w-full max-w-4xl space-y-6">
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
          <h2 className="font-bold text-md text-gray-700">
            Meet the developers:
          </h2>
          <br></br>
          <div className="flex justify-between items-center space-x-4">
            <div className="flex-1">
              <h3>Bahareh Foroughi</h3>
              <a
                href="https://www.linkedin.com/in/bhrforoughi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={BaharehLinkedInQR.src}
                  alt="Bahareh's LinkedIn QR Code"
                  width={125}
                  height={75}
                />
              </a>
            </div>

            <div className="flex-1">
              <h3>Lee-Anne van der Merwe</h3>
              <a
                href="https://www.linkedin.com/in/lee-anne-van-der-merwe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={LeeLinkedInQR.src}
                  alt="Lee-Anne's LinkedIn QR Code"
                  width={125}
                  height={75}
                />
              </a>
            </div>
          </div>
          <p className="text-md text-gray-700 mt-4">
            From conception to execution, every aspect of this app represents
            our commitment to excellence and our drive to push the boundaries of
            whats possible in the world of game development. Join us on this
            adventure as we continue to explore new horizons and redefine the
            gaming landscape.
          </p>
        </div>
        <button
          onClick={startGame}
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-800 transition duration-300"
        >
          Start New Game
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
