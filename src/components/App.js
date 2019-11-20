import React from 'react';
import Navbar from './Navbar'
import './App.css';
import { Provider } from "react-redux";
// import SignRedux from "./SignRedux";
import { createStore } from "redux";
import reducer from "./redux/reducer";


const storeList = createStore(reducer);

export default class App extends React.Component{
  render(){
    return (
      <Provider store = {storeList}>
      <div className="App">
        <h3 className = "head">FREE Shipping Order above 250Rs.</h3>
        <Navbar/>
        {/* <SignRedux/> */}
      </div>
      </Provider>
    );
  }

}
 

