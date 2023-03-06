import React, { Component } from "react";
import "./App.css";
import Home from "./components-folder/Home";
import { Routes, Route } from "react-router";
import Aboutus from "./components-folder/Aboutus";
import Topstory from "./components-folder/ourStory";
import Quote from "./components-folder/quote";
import Dashboard from "./components-folder/dashboard";


class App extends Component {
  render() {
    return (
      <>
      
      <div>
        <main>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route> 
             <Route path="/home" element={<Home/>}></Route>
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/topstory" element={<Topstory/>}></Route>
            <Route path="/quote" element={<Quote/>}></Route>
            <Route path="/signin" element={<Dashboard/>}></Route>
            
          </Routes>
        </main>
      </div>
      </>
    );
  }
}

export default App;
