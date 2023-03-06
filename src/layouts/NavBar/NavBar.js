import React, { Component } from "react";
import Home from "../../pages/Home.js";
import Work from "../../pages/Work";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import NavLinks from "./NavLinks.js";
import "./style.css";

class NavBar extends Component {
  state = {
    currentPage: "Home",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePageView = (page) => {
    //Using ternary operator
    return this.state.currentPage === "Home" ? (
      <Home />
    ) : this.state.currentPage === "Work" ? (
      <Work />
    ) : this.state.currentPage === "About" ? (
      <About />
    ) : this.state.currentPage === "Contact" ? (
      <Contact />
    ) : null;
  };

  render() {
    return (
      <div>
        <NavLinks
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {/* This renders the page for the link clicked */}
        {this.handlePageView()}
      </div>
    );
  }
}

export default NavBar;
