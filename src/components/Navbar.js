import React from "react";
import './Navbar.css';
function NavBar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {props.children}</ul>
        </nav>);
}

export default NavBar;