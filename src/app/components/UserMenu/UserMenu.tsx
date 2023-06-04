"use client";
import {
  EllipsisVerticalIcon,
  CreditCardIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import "./UserMenu.scss";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function UserMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = useRef((event: any) => {
    //checks if the element that was clicked on, or any of its ancestors in the DOM, has a class of .menu-button
    if (showMenu && !event.target.closest(".menu-button")) {
      setShowMenu(false);
    }
  });

  useEffect(() => {
    const handleClick = handleOutsideClick.current;
    //listens the event and calls handleOutsideClick if the event is happen
    window.addEventListener("click", handleClick);

    //"cleanup function". In this case, the cleanup function is being used to remove an event listener from the window object.
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [showMenu]);

  return (
    <div
      className="menu-button p-2 rounded-lg hover:bg-gray-200 relative hover:cursor-pointer"
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
