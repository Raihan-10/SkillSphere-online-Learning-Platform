import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CourseCard({ card }) {
  if (!card) return null;

  return (
    <div className="card bg-white/90 shadow-sm">
      <figure className="relative h-50 md:h-62.5 ">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          {card.title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p className="text-lg font">{card.description}</p>

        <div className="flex flex-col gap-3 mt-2">
          <div className="flex justify-between gap-10">
            <span>🙎‍♂️{card.instructor}</span>
            <span>⭐{card.rating}</span>
          </div>
          <div className="flex justify-between">
            <span>⏰{card.duration}</span>
            <span>🔍{card.category}</span>
          </div>
        </div>

        <div className="card-actions items-center justify-between md:mt-5">
          <span className="text-lg md:text-xl font-bold">{card.price}</span>
          <button className="btn bg-blue-900  text-white hover:bg-black duration-150 ">
            <Link href="/course">View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
