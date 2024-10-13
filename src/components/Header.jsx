import React, { Component } from "react";
import "../styles/style.css"; // Import the external CSS file

class Header extends Component {
    render() {
        return (
            <header className="navbar">
                <div className="menu-icon">
                    <i className="fas fa-bars"></i>
                </div>
                <div className="logo">
                    <h1>BURGER KING</h1>
                </div>

                <div className="nav-right">
                    <div className="user-icon">
                        <i className="fas fa-user"></i>
                    </div>

                    <button className="view-cart">
                        <i className="fas fa-shopping-bag"></i> View Cart
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;
