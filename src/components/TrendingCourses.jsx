import React from "react";
import courses from "@/data/courses.json";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import CourseCard from "./CourseCard";

export default function TrendingCourses() {
  return (
    <div className="bg-blue-200/60">
      <p className="text-center text-lg pt-5">Most wanted Courses</p>
      <p className="text-center text-2xl font-bold">Trending courses</p>
      <p className="max-w-7xl mx-auto text-blue-700 font-bold">
        <Link href="/course" className="flex justify-center md:justify-end">
          <span className="flex items-center gap-1 hover:bg-black duration-200 hover:text-white rounded-lg p-1 md:p-2">
            View all
            <BsArrowRight />
          </span>
        </Link>
      </p>
      <div className="overflow-hidden max-w-7xl mx-auto py-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 px-5 lg:px-0">
        {courses.slice(3, 6).map((c) => (
          <CourseCard key={c.id} card={c} />
        ))}
      </div>
    </div>
  );
}