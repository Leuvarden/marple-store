import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                {this.drawFooterTop()}
                {this.drawFooterBottom()}
            </footer>
        );
    }

    drawFooterTop () {
        //TODO: change this hardcoded footer sometime
        return (
            <div className="footer-top">
                <div className="container">
                    <div className="row"> 
                        {this.drawLogo()}
                        {this.drawLatestWorks()}
                        {this.drawContacts()}
                        {this.drawSubscription()}
                    </div>
                </div>
            </div>
        )
    }

    drawLogo () {
        return (
            <div className="footer-col col-md-3">
                <h4 className="text-uppercase">Who we are</h4>
                <a href="#">
                    <img src="images/logo-white.png" alt="REEN"></img>
                </a>
                <p>
                    <small>
                        Magnis modipsae voloratati andigen daepeditem quiate re porem que aut labor. Laceaque eictemperum quiae sitiorem rest non restibusaes maio es dem tumquam.
                    </small>
                </p>
                <p>
                    <strong>
                        <a href="#">More about us </a>
                    </strong>
                </p>
            </div>
        );
    }

    drawLatestWorks () {
        return (
            <div className="footer-col col-md-3">
                <h4 className="text-uppercase">Latest works</h4>
                <p>
                    <small>
                        Magnis modipsae voloratati andigen daepeditem quiate re porem que aut labor. Laceaque eictemperum quiae sitiorem rest non restibusaes maio es dem tumquam.
                    </small>
                </p>
            </div>            
        );
    }

    drawContacts() {
        return (
            <div className="footer-col col-md-3">
                <h4 className="text-uppercase">Get in touch</h4>
                <p>
                    <small>
                        Doloreiur quia commolu ptatemp dolupta oreprerum tibusam eumenis et consent accullignis dentibea autem inisita.
                    </small>
                </p>
                <ol className="list-unstyled">
                    <li>
                        <span className="glyphicon glyphicon-map-marker"></span>
                        <span>84 Street, City, State 24813</span>
                    </li>
                    <li>
                        <span className="glyphicon glyphicon-phone"></span>
                        <span>+00 (123) 456 78 90</span>
                    </li>
                    <li>
                        <span className="glyphicon glyphicon-envelope"></span>
                        <span>info@reen.com</span>
                    </li>
                </ol>
            </div>
        );
    }

    drawSubscription() {
        return (
            <div className="footer-col col-md-3">
                <h4 className="text-uppercase">Want to receive updates?</h4>
                <p>
                    <small>
                        Conecus iure posae volor remped modis aut lor volor accabora incim resto explabo.
                    </small>
                </p>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your e-mail"></input>
                    <span className="input-group-btn">
                        <button className="btn btn-success text-uppercase">Subscribe</button>
                    </span>
                </div>
            </div>
        );    
    }

    drawFooterBottom () {
        return (
            <div className="footer-bottom">
                <div className="container">
                    <div className="col-md-12">
                        <p className="small">© 2014 REEN. All Rights Reserved</p>
                        <ul className="list-unstyled list-inline text-right">
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Lookbook</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
