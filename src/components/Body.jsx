import React, { Component } from 'react';
import '../styles/style.css';

class Body extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        
         <div className="body-content">
          <img src={this.props.img} alt='#'/>
          <h2>{this.props.title}</h2>
          <p>{this.props.about}</p>
        </div>
       
    );
  }
}

export default Body;
