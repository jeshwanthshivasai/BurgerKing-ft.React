import React, { Component } from 'react';

class FootMenuBar extends Component {
  render() {
    return (
      <>
        <div className="foot-navbar">
            <div className="nav-item">
                <i className="fas fa-home nav-icon"></i>
                <p>Home</p>
            </div>
            <div className="nav-item">
                <i className="fas fa-utensils nav-icon"></i>
                <p>Menu</p>
            </div>
            <div className="nav-item">
                <i className="fas fa-tags nav-icon"></i>
                <p>Offers</p>
            </div>
            <div className="nav-item">
                <i className="fas fa-crown nav-icon"></i>
                <p>Rewards</p>
            </div>
        </div>
      </>
    );
  }
}

export default FootMenuBar;
