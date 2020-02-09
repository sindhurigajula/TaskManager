import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Login from "../login/login";

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Task Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Login/>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}