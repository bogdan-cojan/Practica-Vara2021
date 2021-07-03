import React from "react";
import Nav from "./nav";
import Home from "./home";
import Clasament from "./clasament";
import PlayerStatus from "./playerStatus";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/top" component={Clasament} />
        <Route path="/status" component={PlayerStatus} />
      </Switch>
    </Router>
  );
}

export default App;
