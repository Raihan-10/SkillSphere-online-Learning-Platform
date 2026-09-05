"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";

export default function CourseCard({ card }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showToast, setShowToast] = useState(false);

  if (!card) return null;

  const handleEnroll = () => {
    if (!session?.user) {
      router.push(`/login?callbackURL=/course`);
      return;
    }

    if (isEnrolled) return;
    setIsEnrolled(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.015 }}
        className="card bg-white/90 shadow-sm overflow-hidden h-full flex flex-col justify-between"
      >
        <figure className="relative h-40 md:h-52 w-full">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
          />
          {isEnrolled && (
            <div className="absolute top-2 right-2 badge badge-success text-white font-medium shadow">
              Enrolled
            </div>
          )}
        </figure>

        <div className="card-body p-4 sm:p-5 flex flex-col justify-between flex-1">
          <div>
            <h2 className="card-title text-base sm:text-lg">{card.title}</h2>
            <p className="text-sm font text-gray-600 line-clamp-2 mt-1">
              {card.description}
            </p>

            <div className="flex flex-col gap-2 mt-3 text-xs sm:text-sm">
              <div className="flex justify-between gap-4">
                <span className="truncate">🙎‍♂️ {card.instructor}</span>
                <span className="shrink-0">⭐ {card.rating}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>⏰ {card.duration}</span>
                <span className="truncate">🔍 {card.category}</span>
              </div>
            </div>
          </div>

          <div className="card-actions items-center justify-between mt-4 pt-2 border-t border-gray-100">
            <span className="text-base md:text-lg font-bold">{card.price}</span>
            <div className="flex items-center gap-2">

              <Link
                href={`/course/${card.id}`}
                className="btn btn-sm bg-blue-900 text-white hover:bg-black border-none duration-150"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {showToast && (
        <div className="toast toast-top toast-center z-50 fixed">
          <div className="alert alert-success text-white shadow-lg">
            <span>Successfully enrolled in {card.title}!</span>
          </div>
        </div>
      )}
    </>
  );
}