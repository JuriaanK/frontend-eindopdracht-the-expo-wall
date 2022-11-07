import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Navitem.css';


function NavItem(props){
    const [open, setOpen] = useState(false)
    return(
        <li
            className="nav-item"
            onClick={() => setOpen(!open)} >
                <Link to={props.linkTo}
                    className="icon-button"
                    style={{textDecoration: 'none'}}  >
                {props.icon}
                </Link>
            {open && props.children }
        </li>
    );
}

export default NavItem;