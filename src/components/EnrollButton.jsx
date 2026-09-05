"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function EnrollButton({ courseTitle, courseId }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleEnroll = () => {
    if (!session?.user) {
      router.push(`/login?callbackURL=/course/${courseId}`);
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
      <button
        onClick={handleEnroll}
        disabled={isEnrolled}
        className={`w-full text-xl text-white text-center rounded-lg px-2 py-1 transition duration-150 ${
          isEnrolled
            ? "bg-green-600 cursor-default"
            : "bg-violet-600 hover:bg-violet-800 cursor-pointer"
        }`}
      >
        {isEnrolled ? "Enrolled" : "Enroll Now"}
      </button>

      {showToast && (
        <div className="toast toast-top toast-center z-50 fixed">
          <div className="alert alert-success text-white shadow-lg">
            <span>Successfully enrolled in {courseTitle}!</span>
          </div>
        </div>
      )}
    </>
  );
}