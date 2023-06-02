import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export function Avatar({
  user,
  size = 40,
  className = "",
}: {
  user: {
    name: string;
    avatarUrl?: string;
    [key: string]: any;
  };
  size?: number;
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full bg-gray-200",
        className
      )}
      style={{ width: size, height: size }}
    >
      {!user.avatarUrl || imageError ? (
        <span className="text-2xl font-medium text-gray-500">
          {user.name[0]}
        </span>
      ) : (
        <Image
          width={size}
          height={size}
          src={user.avatarUrl}
          alt={user.name}
          className="rounded-full"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}
