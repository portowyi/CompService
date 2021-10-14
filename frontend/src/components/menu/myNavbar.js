import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Button, Container, Form, FormControl, Nav} from "react-bootstrap";

export default function MyNavbar(){
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#">Сервис</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#1">Клиенты</Nav.Link>
                    <Nav.Link href="#2">Товары</Nav.Link>
                    <Nav.Link href="#3">Заказы</Nav.Link>
                    <Nav.Link href="#4">Продажи</Nav.Link>
                    <Nav.Link href="#5">Остатки</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <Button style={{ marginLeft: "3px" }} variant="outline-info">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
};