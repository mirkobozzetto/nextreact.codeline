import React from "react";
import Image from "next/image";

type AvatarProps = {
  name: string;
};

const Avatar = (props: AvatarProps) => {
  console.log(props);

  return (
    <div className="flex flex-col w-fit items-center gap-2">
      <Image
        className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src="https://gravatar.com/avatar/1f82b0492a0a938288c2d5b70534a1fb?s=400&d=robohash"
        alt="Bordered avatar"
        width={40}
        height={40}
        // priority
      />
      <p>Jean</p>
    </div>
  );
};

export default Avatar;
