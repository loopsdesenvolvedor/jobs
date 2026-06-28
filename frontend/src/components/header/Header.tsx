import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import ButtonWithIcon from "./ButtonWithIcon";

import { FaUserCircle as UserIcon } from "react-icons/fa";
import { HiMenuAlt4 as MenuIcon } from "react-icons/hi";

const Header = () => {
  return (
    <header className="border-b border-b-gray-200">
      <Container>
        <div className="w-full h-12.5 sm:h-13.5 flex  justify-between items-center">
          <Link href="/">
            <Image src={"./jobs.svg"} alt="Logo Jobs" width={75} height={28} />
          </Link>

          <div className="flex justify-end items-center gap-2.5">
            <ButtonWithIcon
              className="w-19.5 h-7.5 text-xs cursor-pointer flex justify-center items-center gap-2 border border-gray-200 bg-gray-200 rounded-md hover:bg-gray-300 hover:border-gray-300 duration-300"
              text="Entrar"
              icon={<UserIcon size={12} color="1C1C1C" />}
            />
            <ButtonWithIcon
              className="w-7.5 sm:w-19.5 h-7.5 text-xs uppercase cursor-pointer flex flex-row-reverse  justify-center items-center gap-2 border border-gray-200 rounded-md [&>span]:hidden sm:[&>span]:flex hover:bg-gray-300 hover:border-gray-300 duration-300"
              text="Menu"
              icon={<MenuIcon size={20} color="1C1C1C" />}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
