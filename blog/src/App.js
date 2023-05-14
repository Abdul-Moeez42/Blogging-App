import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JavaScript from "./components/JavaScript/JavaScript";

import Navigation from "./components/Navigation/Navigation"
import Posts from "./components/Posts/Posts";
import TwoColumns from "./components/Middle/Middle"; 
import BottomColumns from "./components/Bottom/Bottom"
import Second from "./components/Secondlast/Second";
import End from "./components/End/End"


const App = () => {
return (
	<div className="main-container">
    <Navigation/>
    <div className="container">
      <TwoColumns/>
    </div>
	<div className="main-heading">
  <h1 >
		Find the Best Blog Ever Written
	</h1>
  </div>
  
	<Posts />

  <div className='bg'>
  <Router>
      <Switch>
        <Route path="/" exact>
          <Posts />
        </Route>
        <Route path="/javascript">
          <JavaScript />
        </Route>
      </Switch>
    </Router>
  </div>
  <BottomColumns/>
  <Second/>
  <End/>
  	</div>
);
};

export default App;

