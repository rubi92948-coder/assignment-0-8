"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  // ✅ Loading state handle
  if (userData.isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  // ✅ যদি user না থাকে → redirect
  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Card
        className="
          relative
          w-[420px] md:w-[480px]
          flex flex-col items-center
          border mt-5
          bg-white shadow-lg
          overflow-hidden
        "
      >
        {/* PURPLE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 via-purple-100/20 to-transparent pointer-events-none" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center py-10 px-6">

          {/* ✅ AVATAR FIX */}
          <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            {user?.image ? (
              <img
                src={user.image}
                alt="user"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/default-avatar.png"; // fallback image
                }}
              />
            ) : (
              <span className="text-2xl font-bold">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </span>
            )}
          </div>

          {/* ✅ NAME fallback */}
          <h2 className="text-3xl font-bold mt-5">
            {user?.name || "No Name"}
          </h2>

          {/* ✅ EMAIL fallback */}
          <p className="text-lg text-gray-600 mt-1">
            {user?.email || "No Email"}
          </p>

          <div className="mt-6">
            <UpdateUserModal />
          </div>

        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;