"use client";
import Link from "next/link";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import pic from "../../public/images/avatar.webp";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);
  const user = session?.user;

  return (
    <div className="sticky top-0 z-50 shadow-md bg-gray-800 text-white px-5 py-4">
      <div className="flex items-center justify-between">
        <p className="font-bold text-3xl">
          <span className="text-blue-500">Skill</span>sphere
        </p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-700"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:flex justify-center gap-5 list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/course">Courses</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </div>

        <div className="hidden md:flex items-center justify-end">
          {isPending ? (
            <span className="loading loading-spinner text-success"></span>
          ) : user ? (
            <div className="flex flex-row items-center gap-4">
              <p>Hello, {user?.name}</p>
              <Image
                src={user?.image ? user.image : pic}
                width={36}
                height={36}
                alt="user-profile-pic"
                className="rounded-full w-9 h-9 object-cover shrink-0"
              />
              <Link href="/my-profile" className="btn">
                My Profile
              </Link>
              <button
                className="btn"
                onClick={async () => await authClient.signOut()}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                href="/login"
                className="btn border-none shadow-none hover:bg-blue-500 hover:text-white"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="btn border-none shadow-none hover:bg-blue-500 hover:text-white"
              >
                Registration
              </Link>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 pt-4 mt-4 border-t border-gray-700">
          <div className="flex flex-col gap-3 list-none">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/course" onClick={() => setIsOpen(false)}>
                Courses
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
          </div>

          <div className="pt-2 border-t border-gray-700">
            {isPending ? (
              <span className="loading loading-spinner text-success"></span>
            ) : user ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={user?.image ? user.image : pic}
                    width={36}
                    height={36}
                    alt="user-profile-pic"
                    className="rounded-full w-9 h-9 object-cover shrink-0"
                  />
                  <p>Hello, {user?.name}</p>
                </div>
                <Link
                  href="/my-profile"
                  className="btn w-full"
                  onClick={() => setIsOpen(false)}
                >
                  My Profile
                </Link>
                <button
                  className="btn w-full"
                  onClick={async () => {
                    setIsOpen(false);
                    await authClient.signOut();
                  }}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  className="btn border-none shadow-none hover:bg-blue-500 hover:text-white w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="btn border-none shadow-none hover:bg-blue-500 hover:text-white w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Registration
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}