import Image from "next/image";
import Courses from "@/data/courses.json";
import Link from "next/link";
import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import { notFound } from "next/navigation";

export default async function CourseDetails({ params }) {
  const { id } = await params;
  console.log(id, "params");
  const courseId = parseInt(id);
  const course = Courses.find((c) => c.id === courseId);
  if (!course) notFound();

  return (
    <div>
      <div className="bg-blue-900 md:px-0 sm:px-6">
        <div className="pt-10 pb-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          <div className="text-white w-full lg:w-1/2 space-y-5 md:space-y-7">
            <h3 className="md:text-5xl text-2xl">{course.title}</h3>
            <p className="text-lg md:text-2xl font-light">
              {course.description}
            </p>
            <p className="bg-blue-100 text-blue-600 font-bold w-fit px-2 rounded-lg">
              {course.tag}
            </p>

            <div className="flex flex-col items-center lg:items-start gap-1">
              <p className="text-lg">Instructor: {course.instructor}</p>
              <span className="text-start flex flex-row items-center gap-1 text-lg">
                {course.rating}
                <FaStar className="text-yellow-500" />
              </span>
              <p className="text-lg">{course.enrolled}</p>
            </div>
          </div>
          <div className="px-3 md:px-0">
            <div className="bg-white p-4 text-center space-y-1 rounded-lg ">
              <Image
                src={course.image}
                height={300}
                width={300}
                alt="course-image"
              ></Image>
              <p className="text-left font-bold text-lg md:text-2xl">
                {course.price}
              </p>
              <hr className="mt-2 h-2" />
              <div className="text-left md:text-[17px] flex flex-col">
                <div className=" space-y-2">
                  <p className="font-bold md:text-xl">This course include:</p>
                  <p>{course.duration}</p>
                  <ul className="space-y-1">
                    <li>Full lifetime access</li>
                    <li>Access on mobile & desktop</li>
                    <li>Certificate of completion</li>
                  </ul>
                </div>
              </div>

              <Link href={`/login`}>
                <p className="bg-violet-600 hover:bg-violet-800 text-xl text-white text-center rounded-lg px-2 py-1">
                  Enroll Now
                </p>
              </Link>

              <p className="text-gray-500">7 Days money back guarantee</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 sm:px-6 md:px-0 pb-10 max-w-7xl mx-auto">
        <div className="w-fit">
          <p className="font-bold md:text-2xl mb-2 text-lg">
            What you will learn:
          </p>

          {course.what_you_will_learn.map((item, index) => (
            <div key={index}>
              <p className="grid grid-cols-[18px_1fr] items-start gap-2 py-2">
                <FaCheck className="shrink-0 mt-1" />
                <span className="leading-snug">{item}</span>
              </p>
            </div>
          ))}

          <h3 className="pt-5 pb-2 font-bold md:text-2xl mb-2 text-lg">
            Course Curriculum
          </h3>
          <div className="space-y-3">
            {course.curriculum.map((c, i) => (
              <div
                key={i}
                className="w-full p-4  bg-gray-100 rounded-xl flex flex-col md:flex-row items-center gap-4 justify-between"
              >
                <div className="flex justify-between gap-2">
                  <span>{c.chapter}.</span>
                  <span>{c.title}</span>
                </div>
                <span className=" text-green-600 whitespace-nowrap shrink-0">
                  {c.lessons}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* instructors bio */}
        <div className="max-w-7xl mx-auto mt-10 text-white">
          <div
            className="bg-gray-900  flex flex-col justify-center items-center  px-5 py-7 rounded-2xl lg:w-1/2 w-fit text-center
           "
          >
            <Image
              className="rounded-full w-32 h-32 object-cover"
              src={course.instructor_image}
              height={300}
              width={300}
              alt={course.instructor_image}
            ></Image>
            <p className="mb-2 mt-2 font-bold text-xl">
              Instructor: {course.instructor}
            </p>
            <span>{course.instructor_bio}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
