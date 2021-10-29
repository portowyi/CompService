import React from "react";
import {Container} from "react-bootstrap";
import AddCustomerForm from "../addCustomerComponent";

export default function Customers(){
    return (
        <div>
            <Container>
                <h1>Клиенты</h1>
            </Container>
            <p>
                Пока что здесь живет форма добавления клиента, <br/>
                дальше она будет открываться модально
            </p>
            <div className="m-4">
                <AddCustomerForm />
            </div>
        </div>
    )
}
