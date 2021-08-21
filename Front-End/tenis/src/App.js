import React from "react";
import Nav from "./components/nav";
import Home from "./components/list";
import Clasament from "./components/clasament";
import PlayerStatus from "./components/playerStatus";
import Add from "./components/add";
import EditPlayer from "./components/edit";

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
        <Route path="/edit/:id" component={EditPlayer} />
      </Switch>
    </Router>
  );
}

export default App;
