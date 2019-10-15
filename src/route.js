import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import ConferenceDetails from "./confDetails";
import Conference from "./confrence";

export class Routes extends Component {
  render() {
    return (
      <Router basename={"/build"}>
        <div>
          <Route path="/" exact render={props => <Conference {...props} />}>
            <Route path="/" exact render={props => <Conference {...props} />} />
            <Route path="/conf/" render={props => <Conference {...props} />} />
            <Route
              path="/details/:id"
              render={props => <ConferenceDetails {...props} />}
            />
          </Route>
        </div>
      </Router>
    );
  }
}

export default Routes;
