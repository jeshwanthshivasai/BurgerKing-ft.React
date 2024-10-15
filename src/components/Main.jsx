import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
        <div id="main-container">
            <div id="content">
                 <h1>Start your BK<span><sup>®</sup></span>order.</h1>
                 <button id="btn1"><i class="fa-solid fa-bag-shopping"></i> Order Pickup</button>
                 <button id="btn2"><i class="fa-solid fa-motorcycle"></i> Order Delivery</button>
            </div>
            <div id="m-img">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/97876c636e357c965a26f603f0a10bf3dd0d3f29-800x450.png?w=1300&q=90&fit=max&auto=format" alt='#'/>
            </div>
        </div>

    );
  }
}

export default Main;
