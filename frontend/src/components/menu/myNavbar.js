import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container, Form, FormControl, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom";


export default function MyNavbar(){
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Сервис</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/customers">Клиенты</Nav.Link>
                    <Nav.Link as={NavLink} to="/goods">Товары</Nav.Link>
                    <Nav.Link as={NavLink} to="/orders">Заказы</Nav.Link>
                    <Nav.Link as={NavLink} to="/sales">Продажи</Nav.Link>
                    <Nav.Link as={NavLink} to="/balance">Остатки</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <Button style={{marginLeft: "3px"}} variant="outline-info">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
};