import React, { Component } from "react";
import { Navbar, Nav, NavItem, ButtonGroup, Button, Glyphicon } from "react-bootstrap";
import "./header.css";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            headerLinks: ["Home", "Store", "Lookbook", "About", "Contact"]
        };
    }

    render() {
        let links = this.state.headerLinks;
        return (
            <Navbar>
                
                <Navbar.Brand>
                    <a href="/home"><img src="images/logo.png" alt="Marple logo"></img></a>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="text-uppercase">
                    {links.map( (item, index) => 
                        <NavItem href={"/"+item} key={index}>{item}</NavItem>
                    )}
                    </Nav>
                    <Nav pullRight>
                        <ButtonGroup>
                            <Button bsSize="large">
                                <Glyphicon glyph="shopping-cart" />
                            </Button>
                        </ButtonGroup>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            // <nav className="navbar container">
            //     <div className="navbar-header">
            //         <a className="navbar-brand" href="home">
            //             <img src="images/logo.png" alt="Marple logo"></img>
            //         </a>
            //     </div>
            //     <div className="collapse navbar-collapse" id="myNavbar">
            //         <ul className="nav navbar-nav text-uppercase">
            //             {links.map((item, index) =>
            //              <li key={index}>
            //                 <a href={"/"+item}>{item}</a>
            //             </li>
            //             )}
            //         </ul>
            //         <form className="pull-right navbar-form navbar-left">
            //             <div className="input-group">
            //                 <div className="input-group-btn">
            //                     <button className="btn btn-default btn-lg" type="submit" aria-label="Go to cart">
            //                         <i className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></i>
            //                     </button>
            //                 </div>
            //             </div>
            //         </form>
            //     </div>
            // </nav>
        );
    }
}

export default Header;
