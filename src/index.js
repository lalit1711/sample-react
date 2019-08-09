import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConferenceDetails from './confDetails';
import Conference from './confrence';
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

class Root extends React.Component {
    render(){
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
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
