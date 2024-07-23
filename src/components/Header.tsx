"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { BreakpointsSize, breakAt } from "@/styles/BreakPointsSize";

import logo from "../../public/jobs.svg";

import { IoMdMenu, IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";

const Root = styled.header`
  width: 100%;
  height: auto;
  border-bottom: 0.1rem solid rgba(51, 51, 51, 0.1);
`;
const Navbar = styled.nav`
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const ButtonsNavContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;

  button {
    background-color: transparent;
    border: none;
    padding: 0;
  }
`;

const Header = () => (
  <Root>
    <Navbar>
      <Link href="/">
        <Image src={logo} alt="Logo Jobs" />
      </Link>

      <ButtonsNavContent>
        <button>
          <IoIosSearch size={22} color="#264FBC" />
        </button>
        <button>
          <FaBell size={20} color="#264FBC" />
        </button>
        <button>
          <IoMdMenu size={30} color="#264FBC" />
        </button>
      </ButtonsNavContent>
    </Navbar>
  </Root>
);

export default Header;
