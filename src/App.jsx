import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Body from './components/Body';
import Footer from './components/Footer';
import FootMenuBar from './components/FootMenuBar';
import data from './components/bk';
class App extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <>
        <Header />
        <Main />
        <div id='main'>
        {
            data.map(x=>{
                return(
                    <Body img={x.img} title={x.title} about={x.about}/>
                )
            })
        }
        </div>
        <Footer />
        <div>
        <FootMenuBar />
        </div>
      
      </>
    );
  }
}

export default App;
