"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { BreakpointsSize, breakAt } from "@/styles/BreakPointsSize";

const Root = styled.header`
  width: 100%;
  height: auto;
`;
const Navbar = styled.nav`
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const Header = () => (
  <Root>
    <Navbar>
      <Link href="/">
        <Image src={`./jobs.svg`} alt="Logo Jobs" width={100} height={100} />
      </Link>
    </Navbar>
  </Root>
);

export default Header;
