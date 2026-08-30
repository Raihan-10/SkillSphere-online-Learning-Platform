import React from "react";
import instructors from "@/data/courses.json";
import Image from "next/image";

export default function TopInstructors() {
  return (
    <div className="bg-violet-100 flex flex-col justify-center text-center items-center pb-10 pt-10 md:pt-15 md:pb-15">
      <p className="text-2xl">Meet the Experts</p>
      <h3 className="text-2xl md:text-4xl font-bold mt-2 mb-2 md:mt-4 md:mb-4 p-2 rounded-2xl">
        Top Instructors
      </h3>
      <p className="text-lg">Industry professionals ready to share their expertise with you.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 mt-5 md:mt-10 justify-center  ">
        {instructors.slice(0,4).map((i) => {
          return (
            <div
              key={i.id}
              className=" border p-8 lg:p-10 flex flex-col justify-center items-center rounded-2xl bg-slate-900 text-white"
            >
              <Image
                src={i.instructor_image}
                alt="instructor's picture"
                height={200}
                width={200}
              
                className="w-32 h-32 rounded-full object-cover "
              ></Image>
              <p className="mt-2">{i.instructor}</p>
              <p className="mt-2">Category: <span className="text-blue-500 font-bold">{i.category}</span></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
