"use client";

import React, { useState } from "react";
import courseData from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

export default function AllCourses() {
  const [search, setSearch] = useState("");

  const filterCourses = courseData.filter(
    (course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-full overflow-x-hidden min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-3">
          <h1 className="font-bold text-3xl md:text-5xl text-gray-900 tracking-tight">
            Explore all the courses
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Showing {filterCourses.length} of {courseData.length} courses
          </p>

          <div className="w-full md:w-1/2 space-y-1">
            <input
              className="input input-bordered w-full rounded-full px-4 text-sm"
              type="text"
              placeholder="Search by title / category / instructor"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="text-xs text-slate-400 block px-2">
              {filterCourses.length} results
            </span>
          </div>
        </div>

        {filterCourses.length === 0 ? (
          <div className="py-16 text-center text-gray-500">
            <p className="text-lg">No courses found matching &quot;{search}&quot;</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-4">
            {filterCourses.map((c) => (
              <CourseCard key={c.id} card={c} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}