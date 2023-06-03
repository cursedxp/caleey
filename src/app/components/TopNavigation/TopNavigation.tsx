"use client";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import "./TopNavigation.scss";
import Logo from "../../../../public/assets/img/caleeyLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TopNavigation() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <header className="flex h-16 w-full shadow-sm p-4 justify-between">
      <Link href="" className="flex items-center font-medium text-lg ml-6">
        <Image src={Logo} alt="Company Logo" className=" mr-4"></Image>
        Calleey
      </Link>
      {isLoggedin && <ul className="menubar"></ul>}

      <div className="user flex items-center">
        <img
          src="https://source.unsplash.com/200x200/?face"
          alt="User avatar"
          className=" rounded-full w-9 mr-4"
        />
        <div className="user-details">
          <div className="username  -mb-2">John Doe</div>
          <Link href="" className=" text-xs">
            calleey.com/johndoe
          </Link>
        </div>
        <button className=" p-2">
          <EllipsisVerticalIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
