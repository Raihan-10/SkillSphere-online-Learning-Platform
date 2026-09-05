import Image from "next/image";
import Courses from "@/data/courses.json";
import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import { notFound } from "next/navigation";
import EnrollButton from "@/components/EnrollButton";

export default async function CourseDetails({ params }) {
  const { id } = await params;
  const courseId = parseInt(id);
  const course = Courses.find((c) => c.id === courseId);
  if (!course) notFound();

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="bg-blue-900 px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-14">
          
          <div className="text-white w-full lg:flex-1 space-y-5 md:space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              {course.title}
            </h1>
            <p className="text-base md:text-xl text-blue-100 font-light leading-relaxed">
              {course.description}
            </p>
            <div>
              <span className="bg-blue-100 text-blue-700 font-semibold text-sm px-3 py-1 rounded-md inline-block">
                {course.tag}
              </span>
            </div>

            <div className="flex flex-col items-start gap-1 pt-2">
              <p className="text-base md:text-lg">Instructor: {course.instructor}</p>
              <span className="flex items-center gap-1.5 text-base md:text-lg">
                {course.rating}
                <FaStar className="text-yellow-400" />
              </span>
              <p className="text-base md:text-lg text-blue-200">{course.enrolled}</p>
            </div>
          </div>

          <div className="w-full lg:w-[420px] shrink-0">
            <div className="bg-white p-6 text-center space-y-4 rounded-2xl shadow-xl border border-gray-100">
              <div className="relative h-56 w-full rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={course.image}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                  alt={course.title}
                />
              </div>

              <div className="text-left">
                <span className="font-bold text-2xl md:text-3xl text-gray-900">
                  {course.price}
                </span>
              </div>

              <hr className="border-gray-200" />

              <div className="text-left space-y-2 text-gray-700">
                <p className="font-bold text-base md:text-lg text-gray-900">
                  This course includes:
                </p>
                <p className="text-sm font-medium text-blue-600">{course.duration}</p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li>• Full lifetime access</li>
                  <li>• Access on mobile & desktop</li>
                  <li>• Certificate of completion</li>
                </ul>
              </div>

              <div className="pt-2">
                <EnrollButton courseTitle={course.title} courseId={course.id} />
              </div>

              <p className="text-gray-400 text-xs">7 Days money back guarantee</p>
            </div>
          </div>

        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl space-y-8">
          <div>
            <h2 className="font-bold text-xl md:text-2xl mb-4 text-gray-900">
              What you will learn:
            </h2>
            <div className="space-y-2">
              {course.what_you_will_learn.map((item, index) => (
                <div key={index} className="flex items-start gap-3 py-1">
                  <FaCheck className="text-green-600 shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl md:text-2xl mb-4 text-gray-900">
              Course Curriculum
            </h2>
            <div className="space-y-3">
              {course.curriculum.map((c, i) => (
                <div
                  key={i}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-2 justify-between"
                >
                  <div className="flex items-center gap-2 text-sm md:text-base text-gray-800">
                    <span className="font-semibold text-gray-500">{c.chapter}.</span>
                    <span>{c.title}</span>
                  </div>
                  <span className="text-green-600 text-xs md:text-sm font-medium whitespace-nowrap shrink-0">
                    {c.lessons}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-2xl max-w-xl flex flex-col items-center text-center space-y-3">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-blue-500">
              <Image
                src={course.instructor_image}
                fill
                sizes="112px"
                className="object-cover"
                alt={course.instructor}
              />
            </div>
            <h3 className="font-bold text-lg md:text-xl">
              Instructor: {course.instructor}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {course.instructor_bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}