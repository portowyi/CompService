import React from "react";
import DropDownMenu from "./dropDownMenu";

export default function Navbar(){
    return(
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <a className="navbar-brand ms-2" href="#">CRM</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Клиенты</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Продажи</a>
                    </li>
                    <li>
                        <DropDownMenu name="Заказ-наряды" id="worksDropdown" elements={[
                            {ref: "#", name: "Все заказ-наряды"},
                            {ref: "#", name: "Заказ-наряды в работе"},
                            {ref: "#", name: "Добавить новый заказ-наряд"},
                        ]}/>
                    </li>
                </ul>
            </div>
        </nav>
    );
};