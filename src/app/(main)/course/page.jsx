"use client";
import React, { useState } from "react";
import courseData from "@/data/courses.json";
import Link from "next/link";
import Image from "next/image";

export default function AllCourses() {
  const [search, setSearch] = useState("");

  const filterCourses = courseData.filter(
    (course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <div className="px-5 md:px-0 space-y-2 md:space-y-5 ">
          <p className="font-bold text-2xl md:text-4xl lg:text-5xl">
            Explore all the courses
          </p>
          <p>
            Showing {filterCourses.length} of {courseData.length} course
          </p>
          {/* search */}
          <div className=" md:w-1/2">
            <input
              className="w-full border rounded-4xl px-3"
              type="text"
              placeholder="search by title/category/instructor's name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="text-sm text-slate-400 self-end sm:self-center">
              {filterCourses.length} results
            </span>
          </div>
        </div>
        {/* all courses */}
        {filterCourses.length === 0 ? (
          <div>
            <p>No courses found {search}</p>
          </div>
        ) : (
          <div className="overflow-hidden md:px-0 max-w-7xl mx-auto py-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 px-5 lg:px-0">
            {filterCourses.map((c) => {
              return (
                <div key={c.id} className="">
                  <div className="card bg-white/90 shadow-sm md:h-full h-fit">
                    <figure className="relative h-30 md:h-62.5 ">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover"
                      />
                    </figure>
                    <div className="card-body ">
                      <h2 className="card-title">
                        {c.title}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                      </h2>
                      <p className="text-lg font">{c.description}</p>

                      <div className="flex flex-col gap-3 mt-2">
                        <div className="flex justify-between gap-10">
                          <span>🙎‍♂️{c.instructor}</span>
                          <span>⭐{c.rating}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>⏰{c.duration}</span>
                          <span>🔍{c.category}</span>
                        </div>
                      </div>

                      <div className="card-actions justify-between md:mt-5">
                        <span className="text-lg md:text-xl font-bold">
                          {c.price}
                        </span>

                        <button className="btn bg-blue-900  text-white hover:bg-black duration-150 ">
                          <Link href={`/course/${c.id}`}>View Details</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
