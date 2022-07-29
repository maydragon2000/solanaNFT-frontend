import React from "react";
import { Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { FaDiscord, FaTwitter } from "react-icons/fa"
import "./style.css"

const Header = () => {
    return (
        <>
            <div className="header">
                <Navbar expand="lg" >
                    <div className="navlink-wrap">
                        <NavLink href="#roadmap" >ROADMAP</NavLink>
                        <NavLink href="#team" >TEAM</NavLink>
                        <div className="nav-center">
                            <NavbarBrand href="/">
                                <img alt="" src="/image/logo.svg" />
                            </NavbarBrand>
                            <NavLink href="">SOLANA MONKEY UNIVERSITY</NavLink>
                        </div>
                        <NavLink href="/campus" >CAMPUS</NavLink>
                        <NavLink href="#link" >LINKS</NavLink>
                    </div>
                </Navbar>
                <div className="headerbutton-wrap">
                    <div className="headerbutton">
                        <div className="headerbutton-inner">
                            <img alt="" src="/image/arrowright.svg" />
                            <NavLink href="" className="discord"><FaDiscord /></NavLink>
                            <button className="connect-wallet">CONNECT WALLET</button>
                            <NavLink href="" className="twitter"> <FaTwitter /></NavLink>
                            <img alt="" src="/image/arrowleft.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;