import React from "react";
import './Dropdownmenu.css';
function DropdownMenu(props){
    return(
        <div className="dropdown">
            { props.children }
        </div>
    );
}

export default DropdownMenu;