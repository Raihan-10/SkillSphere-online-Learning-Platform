"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    setLoading(false);

    if (error) {
      alert(error.message || "Failed to update profile.");
    } else {
      alert("Profile updated successfully!");
      router.push("/my-profile");
      router.refresh();
    }
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto my-12 p-8 bg-white rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Update Profile Information
      </h2>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            required
            defaultValue={user?.name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Image URL (Direct link)
          </label>
          <input
            type="url"
            defaultValue={user?.image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://i.ibb.co.com/example.jpg"
            className="input input-bordered w-full"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn bg-black hover:bg-gray-800 text-white w-full rounded-xl border-none"
        >
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </div>
  );
}