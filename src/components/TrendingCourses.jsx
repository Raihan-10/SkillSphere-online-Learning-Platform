import React from "react";
import courses from "@/data/courses.json";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export default function TrendingCourses() {
  return (
    <div className="bg-blue-200/60">
      <p className="text-center text-lg pt-5">Most wanted Courses</p>
      <p className="text-center text-2xl font-bold "> Trending courses</p>
      <p className="max-w-7xl mx-auto text-blue-700 font-bold">
        <Link href="/" className="flex justify-center  md:justify-end ">
          <span className="flex items-center gap-1 hover:bg-black duration-200 hover:text-white rounded-lg p-1 md:p-2">
            {" "}
            View all
            <BsArrowRight />
          </span>
        </Link>
      </p>
      <div className="overflow-hidden max-w-7xl mx-auto py-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 px-5 lg:px-0">
        {courses.slice(3, 6).map((c) => {
          return (
            <div key={c.id} className="">
              <div className="card bg-white/90 shadow-sm h-full">
                <figure className="relative h-50 md:h-62.5 ">
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

                  <div className="card-actions justify-end md:mt-5">
                    <button className="btn bg-blue-900  text-white hover:bg-black duration-150 ">
                      <Link href={"/"}>View Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
