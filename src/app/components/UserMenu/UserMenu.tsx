"use client";
import Link from "next/link";
import { useEffect, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  EllipsisVerticalIcon,
  CreditCardIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import "./UserMenu.scss";

export default function UserMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  //useCallback helps us control when a function in our code should be recreated or not. In React, recreating functions too often can slow things down

  const handleOutsideClick = useCallback(
    (event: any) => {
      //checks if the element that was clicked on, or any of its ancestors in the DOM, has a class of .menu-button
      if (showMenu) {
        setShowMenu((prevShowMenu) => {
          if (!event.target.closest(".menu-button")) {
            return false;
          }
          return prevShowMenu;
        });
      }
    },
    [showMenu]
  );

  useEffect(() => {
    //listens the event and calls handleOutsideClick if the event is happen
    window.addEventListener("click", handleOutsideClick);

    //"cleanup function". In this case, the cleanup function is being used to remove an event listener from the window object.
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div
      className="menu-button p-2 rounded-lg dark:hover:bg-blue-600 hover:bg-gray-200 relative hover:cursor-pointer"
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
            <ul className="user-menu absolute shadow-md dark:bg-slate-950 dark:text-white bg-white rounded-xl w-56">
              <li className=" dark:hover:bg-blue-600 dark:hover:text-white">
                <Link href="">
                  <UserIcon className="h-6 w-6 inline-block mr-4" />
                  <span>Account Settings</span>
                </Link>
              </li>
              <li className=" dark:hover:bg-blue-600 dark:hover:text-white">
                <Link href="">
                  <CreditCardIcon className="h-6 w-6 inline-block mr-4" />
                  <span>Billing</span>
                </Link>
              </li>
              <li className=" dark:hover:bg-blue-600 dark:hover:text-white">
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
