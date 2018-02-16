import React, { Component } from "react";
import "./App.css";
import Products from "./components/products/products";
import Banner from "./components/header/banner";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
          <Banner />
        </header>
        <main>
        <Products />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;