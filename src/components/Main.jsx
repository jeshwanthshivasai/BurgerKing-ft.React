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
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/ffd9f92b390420deffc4afb8af0e173ac1f8be32-800x450.png?w=900&q=90&fit=max&auto=format" alt='#'/>
            </div>
        </div>

    );
  }
}

export default Main;
