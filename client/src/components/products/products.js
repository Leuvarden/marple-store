import React, {Component} from "react";
import "./products.css";

class Products extends Component {
    constructor() {
        super();
        this.state = {
            serverData: {
                "products": [{
                    "id": "",
                    "title": ""
                }]
            }
        };
    }

    componentDidMount() {
        fetch("/products")
            .then(res => res.json())
            .then(serverData => this.setState({
                serverData
            }));
    }

    render() {
        var productsArray = this.state.serverData.products;
        return ( 
            <div>
                <h2>Product menu</h2>
                <ul> 
                    {productsArray.map(customer =>
                        <li key = {customer.id}> {customer.title} </li>
                    )} 
                </ul> 
            </div>
        );
    }
}

export default Products;
