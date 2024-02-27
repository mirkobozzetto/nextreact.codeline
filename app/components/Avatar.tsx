import React from "react";
import Image from "next/image";

type AvatarProps = {
  name: string;
  avatarUrl: string;
};

const Avatar = (props: AvatarProps) => {
  return (
    <div className="flex flex-col w-fit items-center gap-2">
      <Image
        className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src={props.avatarUrl}
        alt="Bordered avatar"
        width={40}
        height={40}
        // priority
      />
      <p>{props.name}</p>
    </div>
  );
};

export default Avatar;
