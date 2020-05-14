import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./components/Home";
import ByGroup from "./components/ByGroup";
import ByType from "./components/ByType";

import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <Container fluid={true} className="declin__bg">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} />} />
            <Route
              path="/group"
              exact
              render={(props) => <ByGroup {...props} />}
            />
            <Route
              path="/type"
              exact
              render={(props) => <ByType {...props} />}
            />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
