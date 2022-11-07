import {Link} from "react-router-dom";
import React from "react";
import './Dropdownitem.css';

function DropdownItem(props) {
    return(
        <Link   to={props.linkTo}
                className="menu-item"
                style={{textDecoration: 'none'}}>
            {props.items}
        </Link>
    );
}

export default DropdownItem;