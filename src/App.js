import logo from "./logo.svg";
import "./App.css";
import { connect, useSelector, useDispatch, shallowEqual } from "react-redux";
import { setName } from "./redux/actions/app.action";
import store from "./redux/store";
import React,{useState} from "react";
import Varient  from "./components'/Varient.js";


function App() {
  let initialState = {

  }

  return (
    <div className="App">
      <Varient></Varient>
      </div>
  );
}

export default App;
