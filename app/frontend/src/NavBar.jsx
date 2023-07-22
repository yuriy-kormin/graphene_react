import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "./store/UserReducer";

const NavBar = () => {
    const user = useSelector(state =>state.user)
    const dispatch = useDispatch()

    return (
        <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Nav.Link href="/" active className="text-primary">Brand name</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Item className={"text-light"}>{user.is_login?user.username:""}</Nav.Item>
                        {user.is_login && (<Nav.Link onClick={() =>dispatch(logoutAction())}>logout</Nav.Link>)}
                    </Nav>
                </Navbar.Collapse>i
            </Container>
        </Navbar>
    );
};

export default NavBar;