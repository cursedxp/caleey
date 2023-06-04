"use client";
import {
  EllipsisVerticalIcon,
  CreditCardIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import "./UserMenu.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function UserMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className=" p-2 rounded-lg hover:bg-gray-200 relative hover:cursor-pointer"
      onClick={handleClick}
    >
      <EllipsisVerticalIcon className="h-6 w-6" />
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, x: -190, y: 0 }}
            animate={{ opacity: 1, x: -190, y: 20 }}
            exit={{ opacity: 0, x: -190, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="user-menu absolute shadow-md bg-white rounded-xl w-56">
              <li>
                <Link href="">
                  <UserIcon className="h-6 w-6 inline-block mr-4" />
                  <span>Account Settings</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <CreditCardIcon className="h-6 w-6 inline-block mr-4" />
                  <span>Billing</span>
                </Link>
              </li>
              <li className="">
                <Link href="">
                  <ArrowLeftOnRectangleIcon className="h-6 w-6 inline-block mr-4" />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
