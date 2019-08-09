import React, { Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
export class App extends Component {
 
  render(){
    return(
      <this.props.children />
    );
  }
}

export default App;

