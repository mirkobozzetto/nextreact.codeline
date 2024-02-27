import React from "react";
import Image from "next/image";
// import { ReactNode } from "react";

type AvatarProps = {
  name: string;
  avatarUrl: string;
  // children?: React.ReactNode;
};

// or use destructuring
// const Avatar = ({ name, avatarUrl }: AvatarProps) => {
// but below is more readable and shorter for the reader
const Avatar = (props: AvatarProps) => {
  return (
    <div className="flex flex-col w-fit items-center gap-2">
      <Image
        className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src={props.avatarUrl}
        alt={props.name}
        width={40}
        height={40}
        // priority
      />
      <p>{props.name}</p>
      {/* <span>{props.children}</span> */}
      {/* en fait c'est pas authorisé ça, mais ça fonctionne qund même xD */}
    </div>
  );
};

export default Avatar;
