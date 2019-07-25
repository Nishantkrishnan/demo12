import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Banner from './Banner';
import Footer from './Footer';
import Cardcomp from './Cardcomp';
import Text from './Text';
//import Footer from './Footer';
function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */

    <div>

<div>
<Head />
</div>

<div>
<Banner />
</div>

<div>
<Cardcomp />
</div>

<div>
<Text />
</div>

<div>
<Footer />

    </div>



</div>
  );
}

export default App;
