import React from "react";

export default function DropDownMenu(props){
    return(
        <div className="nav-item dropdown">
            <a href="" id={props.id} className="nav-link dropdown-toggle" role='button'
               data-bs-toggle='dropdown' aria-expanded='false'>{props.name}</a>
            <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
                {props.elements.map((element, index) => (
                    <li key={index}>
                        <a href={element.ref} className="dropdown-item">{element.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}