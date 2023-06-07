import { useEffect, useState, FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, RootState } from "@/app/data/dataSlice";
import UserMenu from "../UserMenu/UserMenu";
import Image from "next/image";
import Logo from "../../../../public/assets/img/caleeyLogo.svg";
import "./TopNavigation.scss";

// This is the type for the props of ThemeToggle component.
interface ThemeToggleProps {
  darkMode: boolean;
  onThemeToggle: () => void;
}

// This is a functional component for the theme toggle feature.
const ThemeToggle: FC<ThemeToggleProps> = ({ darkMode, onThemeToggle }) => (
  <div className="change-theme cursor-pointer" onClick={onThemeToggle}>
    {darkMode ? (
      <SunIcon className="h-6 w-6 text-yellow-300" />
    ) : (
      <MoonIcon className="h-6 w-6" />
    )}
  </div>
);

// This is a functional component for the user details.
const UserDetails: FC = () => (
  <div className="user-details">
    <div className="username -mb-2">John Doe</div>
    <Link href="" className="text-xs text-blue-600">
      calleey.com/johndoe
    </Link>
  </div>
);

// This is the main component.
const TopNavigation: FC = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  // We use useSelector to get the current state of the dark mode from the Redux store.
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  // We get the dispatch function from Redux.
  const dispatch = useDispatch();

  // This function dispatches an action to toggle the dark mode in the Redux store.
  const changeTheme = () => {
    dispatch(setDarkMode());
  };

  // We use useEffect to add or remove the "dark" class from the root HTML element
  // whenever the darkMode value changes.
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // The component returns the JSX for the navigation bar.
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="flex h-16 w-full dark:bg-slate-950 shadow-sm p-4 justify-between">
        <Link href="" className="flex items-center font-medium text-lg ml-6">
          <Image src={Logo} alt="Company Logo" className=" mr-4"></Image>
          Calleey
        </Link>
        {isLoggedin && <ul className="menubar"></ul>}

        <div className="user flex items-center gap-4">
          <ThemeToggle darkMode={darkMode} onThemeToggle={changeTheme} />
          <img
            src="https://source.unsplash.com/200x200/?face"
            alt="User avatar"
            className=" rounded-full w-10 gap-4 "
          />
          <UserDetails />
          <UserMenu />
        </div>
      </header>
    </motion.div>
  );
};

export default TopNavigation;
