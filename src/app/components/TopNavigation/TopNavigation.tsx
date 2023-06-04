"use client";

import "./TopNavigation.scss";
import Logo from "../../../../public/assets/img/caleeyLogo.svg";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SunIcon } from "@heroicons/react/24/outline";
import UserMenu from "../UserMenu/UserMenu";

export default function TopNavigation() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="flex h-16 w-full shadow-sm p-4 justify-between">
        <Link href="" className="flex items-center font-medium text-lg ml-6">
          <Image src={Logo} alt="Company Logo" className=" mr-4"></Image>
          Calleey
        </Link>
        {isLoggedin && <ul className="menubar"></ul>}

        <div className="user flex items-center gap-4">
          <div className="change-theme">
            <SunIcon className="h-6 w-6" />
          </div>
          <img
            src="https://source.unsplash.com/200x200/?face"
            alt="User avatar"
            className=" rounded-full w-10 gap-4 "
          />
          <div className="user-details">
            <div className="username  -mb-2">John Doe</div>
            <Link href="" className=" text-xs text-blue-600">
              calleey.com/johndoe
            </Link>
          </div>
          <UserMenu />
        </div>
      </header>
    </motion.div>
  );
}
