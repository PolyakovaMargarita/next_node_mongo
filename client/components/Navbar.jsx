import React from 'react';
import styled from "styled-components"
import Link from "next/link";

const Nav = styled.nav`
  //height: 55px;
  background: #FEFEFE;
  padding: 17px 0;
`
const NavbarItem = styled.div`
  position: relative;
`
const Logo = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3260A1;
`
const AddPost = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  background: #67BFFF;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  width: 139px;
  height: 25px;
  left: 50%;
  top: 25px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: translate(-50%);
  :hover {
    box-shadow: 0px 0px 25px rgba(148, 174, 213, 1);
    transition: .3s all ease;
  }
`

const Navbar = () => {
    return (
        <Nav>
            <div className="container">
                <NavbarItem>
                    <Link href="/">
                        <Logo>NEXT | BLOG</Logo>
                    </Link>

                    <Link href="/add-post">
                        <AddPost>Добавить статью</AddPost>
                    </Link>
                </NavbarItem>
            </div>
        </Nav>
    );
};

export default Navbar;