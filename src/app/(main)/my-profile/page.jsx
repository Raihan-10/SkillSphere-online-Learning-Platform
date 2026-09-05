"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await authClient.updateUser({
      name: name.trim() || user?.name,
      image: image.trim() || user?.image,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Updated!");
    router.push("/my-profile");
    router.refresh();
  };

  if (isPending) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-md mx-auto my-12 p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Update Profile</h2>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          defaultValue={user?.name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
        />

        <input
          type="url"
          placeholder="Image URL"
          defaultValue={user?.image}
          onChange={(e) => setImage(e.target.value)}
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn bg-black text-white w-full">
          Update
        </button>
      </form>
    </div>
  );
}