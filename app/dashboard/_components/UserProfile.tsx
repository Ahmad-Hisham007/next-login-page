"use client";
import NavLink from "@/Components/NavLink/NavLink";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const UserProfile = () => {
  const { data: session } = useSession();
  const imageSrc = session?.user?.image;
  console.log(session?.user);
  if (!imageSrc) return null;

  return (
    <div>
      <div className="">
        <button
          className="btn h-auto p-0 rounded-full shadow-none border border-slate-400"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } as React.CSSProperties}
        >
          <Image
            src={imageSrc}
            alt="user image"
            width={35}
            height={35}
            className="rounded-full"
          ></Image>
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } as React.CSSProperties}
        >
          <li>
            <NavLink href="/dashboard/profile">Profile</NavLink>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
