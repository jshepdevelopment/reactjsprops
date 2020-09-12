import React from 'react';
import logo from './logo.svg';
import './App.css';
import Classprops from "./Classprops";
import Functionprop from "./Functionprop";

function App() {

     return (
      <div>
        <Classprops name="Jason" place="Salt Lake City">
          <p>Child Component</p>
          </Classprops>
        <Classprops name="Billy" place="Olympia">
          <button>Button</button>
          </Classprops>
        <Classprops name="Bobby" place="Sacramento"/>
        <Functionprop name="Sally" place="Denver"/>{" "}
      </div>
    );

}

export default App;
