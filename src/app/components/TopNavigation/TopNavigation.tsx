import "./TopNavigation.scss";
import Logo from "../../../../public/assets/img/caleeyLogo.svg";
import Image from "next/image";
import Link from "next/link";

export default function TopNavigation() {
  return (
    <header className="flex h-16 w-full shadow-sm p-4">
      <Link href="" className=" flex items-center font-medium text-lg ml-6">
        <Image src={Logo} alt="Company Logo" className=" mr-4"></Image>
        Calleey
      </Link>
      <ul className="menubar"></ul>
    </header>
  );
}
