/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "../constants/data";

export default function Hero() {
  const colors = ["#54C2CC", "#359CA5", "#23787F", "#10555B"];
  return (
    <>
      <div className="mx-20 pt-10  text-center mb-5">
        <div className="text-6xl text-shadow-blue text-gray-600 dark:text-gray-200 lg:font-bold lg:inline ">
          I am{" "}
        </div>
        <span className="text-6xl text-[#54C2CC] lg:font-bold">Vishwas</span>
      </div>
      <div className="flex flex-row justify-center items-start">
        <RoughNotationGroup show={true}>
          <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
            <RainbowHighlight color={colors[0]}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-500 dark:text-gray-200 my-2">
                Developer.
              </h1>
            </RainbowHighlight>
            <RainbowHighlight color={colors[1]}>
              <h1 className="text-4xl md:text-6xl font-bold  text-gray-400 dark:text-gray-200 my-2">
                Software Engineer.
              </h1>
            </RainbowHighlight>
            <RainbowHighlight color={colors[2]}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-300 dark:text-gray-200 my-2">
                Programmer.
              </h1>
            </RainbowHighlight>
            <RainbowHighlight color={colors[3]}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-200 dark:text-gray-200 my-2">
                Coder.
              </h1>
            </RainbowHighlight>
          </div>
        </RoughNotationGroup>
        <div className="hidden lg:block relative w-full md:w-1/2 mb-20">
          <img
            src={userData.avatarUrl}
            alt="avatar"
            className="float-left lg:px-40"
          />
        </div>
      </div>
      <div className="flex justify-center p-2 lg:hidden">
        <div>
          <img src={userData.avatarUrl} alt="avatar" />
        </div>
      </div>
    </>
  );
}
