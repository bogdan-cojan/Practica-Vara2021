import React from "react";
import Nav from "./nav";
import Home from "./list";
import Clasament from "./clasament";
import PlayerStatus from "./playerStatus";
import Add from "./add";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/top" component={Clasament} />
        <Route path="/status/:id" component={PlayerStatus} />
        <Route path="/add" component={Add} />
      </Switch>
    </Router>
  );
}

export default App;