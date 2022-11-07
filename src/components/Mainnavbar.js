import React, {useContext} from 'react';
import '../App.css';
import './Mainnavbar.css';

import NavBar from "./Navbar";
import NavItem from "./Navitem";
import DropdownMenu from "./Dropdownmenu";
import DropdownItem from "./Dropdownitem";

import logoSmall from "../assets/logoEindOpdrachtV2.png";
import searchButton from "../assets/searchButton.png";
import profileImage from "../assets/profileImage.png";
import mobileMenu from "../assets/mobileMenu.png";
import {AuthContext} from "../context/AuthContext";

function Mainnavbar(props) {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <>
            <NavBar className="main-navbar">
                <div className="left-side">
                    <NavItem
                        icon="main"
                        linkTo="/main"/>
                    <NavItem
                        icon="add"
                        linkTo="/add"/>
                </div>
                <img src={logoSmall} alt="logo-small" className="logo-small"/>
                <div className="right-side">
                    <NavItem
                        icon={<img src={searchButton} alt="searchButton" className="search-button"/>}
                        linkTo="/search"/>
                    <NavItem
                        icon={<img src={profileImage} alt="profileImage" className="profile-image"/>}>
                        <DropdownMenu ClassName="dropdown-menu">
                            <DropdownItem
                                items="profile"
                                linkTo="/profile"/>
                            <DropdownItem
                                items="settings"
                                linkTo="/settings"/>
                            <DropdownItem
                                items="logout"
                                linkTo="/"/>
                        </DropdownMenu>
                    </NavItem>
                </div>
                <div  className="main-navbar-mobile">
                    <NavItem
                        icon={<img src={mobileMenu} alt="mobile-menu" className="mobile-menu"/>}>
                        <DropdownMenu ClassName="dropdown-menu">
                            <DropdownItem
                                items="main"
                                linkTo="/main"/>
                            <DropdownItem
                                items="add"
                                linkTo="/add"/>
                            <DropdownItem
                                items="search"
                                linkTo="/search"/>
                            <DropdownItem
                                items="profile"
                                linkTo="/profile"/>
                            <DropdownItem
                                items="logout"
                                linkTo="/"/>
                        </DropdownMenu>
                    </NavItem>
                </div>
            </NavBar>
        </>);
}

export default Mainnavbar;

