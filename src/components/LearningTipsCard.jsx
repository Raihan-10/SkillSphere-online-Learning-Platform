import React from "react";
import { CiTimer } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { GoGoal, GoGraph } from "react-icons/go";
import { MdOutlineNoteAlt } from "react-icons/md";
import { RiCommunityLine } from "react-icons/ri";

export default function LearningTipsCard() {
  return (
    <>
      <div className="flex gap-3 bg-white/50 p-5 rounded-lg ">
        <GoGoal className="text-4xl text-green-600  " />
        <p className="font-bold">
          Set clear goals <br />
          <span className="font-normal">
            Break big goals into measurable milestones.
          </span>
        </p>
      </div>

      <div className="flex bg-white/50 p-5 rounded-lg  gap-3">
        <CiTimer className="text-blue-600 text-4xl " />
        <p className="font-bold">
          Manage your time
          <br />
          <span className="font-normal">
            Dedicate 30 minutes daily — consistency wins.
          </span>
        </p>
      </div>

      <div className="flex  bg-white/50 p-5 rounded-lg  gap-3 ">
        <MdOutlineNoteAlt className="text-4xl text-red-600" />
        <p className="font-bold">
          Take smart notes
          <br />
          <span className="font-normal">Write concepts in your own words.</span>
        </p>
      </div>

      <div className="flex gap-3 bg-white/50 p-5 rounded-lg ">
        <RiCommunityLine className="text-4xl text-green-600  " />
        <p className="font-bold">
          Join a community
          <br />
          <span className="font-normal">
            Discussing topics accelerates progress.{" "}
          </span>
        </p>
      </div>

      <div className="flex bg-white/50 p-5 rounded-lg  gap-3">
        <GoGraph  className="text-blue-600 text-4xl " />
        <p className="font-bold">
          Practice daily
          <br />
          <span className="font-normal">
            Build real projects — apply what you learn.{" "}
          </span>
        </p>
      </div>

      <div className="flex  bg-white/50 p-5 rounded-lg  gap-3 ">
        <FaRegStar className="text-4xl text-red-600" />
        <p className="font-bold">
          Reward yourself
          <br />
          <span className="font-normal">
            Celebrate every milestone you hit.
          </span>
        </p>
      </div>
    </>
  );
}
