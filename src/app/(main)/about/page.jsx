"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function AboutContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        e.target.reset();
    };

    return (
        <div className="w-full max-w-full overflow-x-hidden min-h-screen bg-gray-50 text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* About Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                            Empowering Future Tech Leaders
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                            About <span className="text-blue-600">SkillSphere</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            SkillSphere is a modern online learning platform where users can explore courses, watch lessons, and build hands-on skills in Web Development, Design, and Marketing
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-100">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Crafted for Clarity & Practical Mastery
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We bridge the gap between foundational education and professional production standards. Every course structure is curated by vetted industry professionals, focusing on real development challenges, dynamic route systems, and secured client architectures
                            </p>
                            <div className="flex gap-4 pt-2">
                                <Link
                                    href="/course"
                                    className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-xl px-6"
                                >
                                    Explore Courses
                                </Link>
                                <a
                                    href="#contact"
                                    className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black rounded-xl px-6"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="space-y-8 scroll-mt-24">
                    <div className="text-center space-y-3">
                        <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                            Get Support
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Have Questions? Contact Us
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                            Whether you have questions about enrolled curriculums, authentication, or technical queries, our team is here to assist you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Details Card */}
                        <div className="bg-gray-900 text-white p-8 rounded-3xl space-y-8 flex flex-col justify-between">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">Contact Information</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Fill out the form or reach out directly through our verified communication lines.
                                </p>

                                <div className="space-y-4 text-sm text-gray-300">
                                    <div className="flex items-center gap-4">
                                        <span className="p-3 bg-gray-800 rounded-xl text-blue-400">
                                            <FaEnvelope />
                                        </span>
                                        <span>support@skillsphere.com</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="p-3 bg-gray-800 rounded-xl text-blue-400">
                                            <FaPhoneAlt />
                                        </span>
                                        <span>+880 16901022</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="p-3 bg-gray-800 rounded-xl text-blue-400">
                                            <FaMapMarkerAlt />
                                        </span>
                                        <span>Dhaka, Bangladesh</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-800 text-xs text-gray-500">
                                Typical response time is within 12 hours.
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
                            {submitted && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="John Doe"
                                            className="input input-bordered w-full bg-gray-50 focus:bg-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Your Email</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="name@example.com"
                                            className="input input-bordered w-full bg-gray-50 focus:bg-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Course Inquiry / Feedback"
                                        className="input input-bordered w-full bg-gray-50 focus:bg-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Write your message here..."
                                        className="textarea textarea-bordered w-full bg-gray-50 focus:bg-white"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn bg-blue-600 hover:bg-blue-700 text-white w-full rounded-xl border-none gap-2"
                                >
                                    <span>Send Message</span>
                                    <FaPaperPlane className="text-xs" />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}