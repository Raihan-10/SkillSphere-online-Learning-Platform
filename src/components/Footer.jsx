import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white px-5 py-2 pt-5 md:pt-10">
      <div className="grid grid-cols md:grid-cols-4 justify-center text-center md:items-start gap-5">
        <div className="flex flex-col md:text-start gap-5">
          <p className="font-bold text-3xl space-y-10 ">Skillsphere</p>
          <p>
            Empowering learners worldwide with expert-led courses in technology,
            design, and business
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <p className="font-semibold text-base text-white">Contact</p>
            <p>Email: support@skillsphere.com</p>
            <p>Phone: +880 16901022</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>

        </div>
        <div className="list-none flex items-center justify-center gap-5 flex-col text-gray-300 font-bold">

          <li>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              YouTube
            </Link>
          </li>
        </div>
        <div>
          <p>
            <Link href={"/"}>Terms and Conditions</Link>
          </p>
          <p>
            <Link href={"/"}>Privacy policy</Link>
          </p>
        </div>
      </div>
      <hr className="text-gray-600 mt-5" />
      <footer className="mt-2 text-center">
        {/* <marquee className="text-gray-400">&copy; skillsphere 2026</marquee> */}
        <p className="text-gray-400">&copy; skillsphere 2026</p>
      </footer>
    </div>
  );
}
