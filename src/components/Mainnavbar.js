import React, {useContext, useState, useEffect} from 'react';
import '../App.css';
import './Mainnavbar.css';

import NavBar from "./Navbar";
import NavItem from "./Navitem";
import DropdownMenu from "./Dropdownmenu";
import DropdownItem from "./Dropdownitem";

import logoSmall from "../assets/logoEindOpdrachtV2.png";
import defaultImage from '../assets/profileImageJPG.jpg';

import mobileMenu from "../assets/mobileMenu.png";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function Mainnavbar() {
    const token = localStorage.getItem('token');

    const { logoutFunction, userDetails } = useContext(AuthContext);
    const accountID = userDetails.accountID;
    const userRole = userDetails.rolename;
    const [profileImage, SetProfileImage] = useState("");

    useEffect(()=> {
    async function fetchData(){
        const customConfig = {
            headers: {
                Authorization:`Bearer ${token}`,
            }
        };

        try {
            const result = await axios.get(`http://localhost:8081/accounts/${accountID}`, customConfig);
            console.log(result.data)
            SetProfileImage(result.data.profileImage)
        }catch (e){
            console.log(e)
        }
    }
    fetchData()
    },[])





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
                    {profileImage != null && <NavItem
                        icon={<img
                            src={`data:image/jpg;base64,${profileImage}`}
                            alt="profileImage"
                            className="profile-image"/>}
                    >
                        <DropdownMenu ClassName="dropdown-menu">
                        <DropdownItem
                            items="profile"
                            linkTo="/profile"/>
                            {userRole === 'ADMIN' &&
                            <DropdownItem
                                items="create admin"
                                linkTo="/create-admin"/>}
                        <DropdownItem
                            items="settings"
                            linkTo="/settings"/>
                        <button className="logout-button"
                                onClick={logoutFunction}>
                            <DropdownItem
                                items="logout"
                                linkTo="/"
                            />
                        </button>
                    </DropdownMenu>
                    </NavItem>}
                    {profileImage == null && <NavItem
                        icon={<img
                            src={defaultImage}
                            alt="profileImage"
                            className="profile-image"/>}
                    >
                        <DropdownMenu ClassName="dropdown-menu">
                            <DropdownItem
                                items="profile"
                                linkTo="/profile"/>
                            {userRole === 'ADMIN' &&
                                <DropdownItem
                                    items="create admin"
                                    linkTo="/create-admin"/>}
                            <DropdownItem
                                items="settings"
                                linkTo="/settings"/>
                            <button className="logout-button"
                                    onClick={logoutFunction}>
                            <DropdownItem
                                items="logout"
                                linkTo="/"
                                />
                            </button>
                        </DropdownMenu>
                </NavItem>}
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
                                items="profile"
                                linkTo="/profile"/>
                            <DropdownItem
                                items="settings"
                                linkTo="/settings"/>
                            {userRole === 'ADMIN' &&
                                <DropdownItem
                                    items="create admin"
                                    linkTo="/create-admin"/>}
                            <button className="logout-button"
                                    onClick={logoutFunction}>
                            <DropdownItem
                                items="logout"
                                linkTo="/"
                                />
                            </button>
                        </DropdownMenu>
                    </NavItem>
                </div>
            </NavBar>
        </>);
}

export default Mainnavbar;

