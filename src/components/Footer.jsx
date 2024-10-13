import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <>
        <div id='footer-container'>
            <div className='mob-img'>
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=900&q=80&fit=max&auto=format" alt='scan-mobile'></img>
            </div>
            <div  className='mob-img'>

                <h1 id='h1-content'>Save$$$<br></br>With offers on demand</h1>
                <img class='icon' src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg' alt='image'></img>
                <img class='icon' src='https://w7.pngwing.com/pngs/462/120/png-transparent-iphone-google-play-android-get-started-now-button-electronics-text-logo-thumbnail.png' alt='image'></img>
                <p id='p-content'>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
            </div>
        </div>
        <div id='footer2'>
            <span>TM & Copyright 2024 Burger King Company LLC. All Rights Reserved.</span>
            <a id='link'>Do Not Sell Or Share My Personal Information</a>
        </div>
       
        </>

    );
  }
}

export default Footer;
