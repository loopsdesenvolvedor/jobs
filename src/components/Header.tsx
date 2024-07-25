"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { BreakpointsSize, breakAt } from "@/styles/BreakPointsSize";

import logo from "../../public/jobs.svg";

import { IoMdMenu, IoIosSearch } from "react-icons/io";
import { FaBell, FaUserCircle } from "react-icons/fa";

import Form from "./Form";

const Root = styled.header`
  width: 100%;
  height: auto;
  border-bottom: 0.1rem solid rgba(51, 51, 51, 0.1);
`;
const Navbar = styled.nav`
  width: 100%;
  height: 6rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  ${breakAt(BreakpointsSize.lg)} {
    padding: 0 5rem;

    .logo {
      width: 27rem;
    }

    & img {
      width: 8.6rem;
      height: 2.8rem;
    }
  }
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
    cursor: pointer;
  }

  span {
    display: none;
  }

  .login {
    display: none;
  }

  ${breakAt(BreakpointsSize.lg)} {
    display: flex;

    .search {
      display: none;
    }

    span {
      display: inline-block;
    }

    .menu-toggle,
    .notification {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .login {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      border: 0.1rem solid #264fbc;
      background-color: #264fbc;
      padding: 0.5rem 0.9rem;
      border-radius: 0.4rem;
      font-size: 1.4rem;
      color: #fff;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }

    .menu-toggle {
      text-transform: uppercase;
      font-weight: 500;
    }

    .notification {
      border: 0.1rem solid rgba(51, 51, 51, 0.1);
      padding: 0.5rem 0.9rem;
      border-radius: 0.4rem;
      font-size: 1.4rem;
      transition: all 0.3s ease;

      svg {
        width: 1.2rem;
      }

      &:hover {
        border: 0.1rem solid #264fbc;
        background-color: #264fbc;
        color: #fff;
        svg {
          transition: all 0.3s ease;
          fill: #fff;
        }
      }
    }
  }
`;

export const SearchContainer = styled.div`
  display: none;
  ${breakAt(BreakpointsSize.lg)} {
    display: block;
    width: 100%;
    max-width: 45.4rem;
    height: auto;
    border: 0.1rem solid rgba(51, 51, 51, 0.3);
    border-radius: 0.4rem;
  }
`;

const Header = () => (
  <Root>
    <Navbar>
      <Link className="logo" href="/">
        <Image src={logo} alt="Logo Jobs" />
      </Link>

      <SearchContainer>
        <Form Icon={IoIosSearch} />
      </SearchContainer>

      <ButtonsNavContent>
        <button className="search">
          <IoIosSearch size={22} color="#264FBC" />
        </button>

        <button className="notification">
          <FaBell size={20} color="#264FBC" />
          <span>Alertas</span>
        </button>
        <Link className="login" href="/">
          <FaUserCircle size={12} color="#fff" />
          <span>Login</span>
        </Link>
        <button className="menu-toggle">
          <IoMdMenu size={30} color="#264FBC" />
          <span>Menu</span>
        </button>
      </ButtonsNavContent>
    </Navbar>
  </Root>
);

export default Header;
