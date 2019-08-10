import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import App from './App';
import ConferenceDetails from './confDetails';
import Conference from './confrence';

export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={App} >
                        <Route path="/" exact component={Conference} />
                        <Route path="/conf/" component={Conference} />
                        <Route path="/details/:id" component={ConferenceDetails} />
                    </Route>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;