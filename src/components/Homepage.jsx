import React from "react";
import Banner from "./Banner";
import CourseCard from "./CourseCard";
import courseData from "@/data/courses.json";
import LearningTips from "./LearningTips";
import TopInstructors from "./TopInstructors";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import TrendingCourses from "./TrendingCourses";

export default function Homepage() {
  return (
    <>
      <Banner />
      {/* Popular Coureses */}
      <div className="bg-blue-100 ">
        <p className="text-center text-lg pt-5">🔥Top Rated</p>
        <p className="text-center text-2xl font-bold ">Popular courses</p>
        <p className="max-w-7xl mx-auto text-blue-700 font-bold">
          <Link href="/course" className="flex justify-center  md:justify-end ">
            <span className="flex items-center gap-1 hover:bg-black duration-200 hover:text-white rounded-lg p-1 md:p-2">
              {" "}
              View all
              <BsArrowRight />
            </span>
          </Link>
        </p>
        <div className="overflow-hidden max-w-7xl mx-auto py-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 px-5 lg:px-0">
          {courseData.slice(0, 3).map((item) => (
            <CourseCard key={item.id} card={item} />
          ))}
        </div>
      </div>
      {/* trending courses */}
      <TrendingCourses />
      {/* learning tips */}
      <LearningTips />
      {/* instructors */}
      <TopInstructors />
    </>
  );
}
