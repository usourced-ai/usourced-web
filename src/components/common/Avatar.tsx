import { useState } from "react";

import type { User } from "@/models/user";

export function Avatar({ user }: { user: User }) {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
      {imageError ? (
        <span className="text-4xl font-medium text-gray-500">
          {user.name[0]}
        </span>
      ) : (
        <img
          className="h-16 w-16 rounded-full"
          src={user.avatarUrl}
          alt={user.name}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}
