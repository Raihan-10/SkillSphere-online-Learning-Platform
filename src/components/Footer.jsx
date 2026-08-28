import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
  <div className="bg-blue-900 text-white">
      <div className="flex justify-between mx-auto mt-120  p-5">
      <div className="flex flex-col">
        <p>Skillsphere</p>
        <p>
          Empowering learners worldwide with expert-led courses in technology,
          design, and business
        </p>
      </div>
      <div>
        <p>Contact</p>
      </div>
      <div>
        <li>
          <Link href={"/fb"}>fb</Link>
        </li>
        <li>
          <Link href={"/fb"}>fb</Link>
        </li>
        <li>
          <Link href={"/fb"}>fb</Link>
        </li>
        <li>
          <Link href={"/fb"}>fb</Link>
        </li>
        <li>
          <Link href={"/fb"}>fb</Link>
        </li>
        <li>
          <Link href={"/fb"}>fb</Link>
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
    </div >
          <footer className="text-center">&copy; skillsphere 2026</footer>

  </div>
  );
}
