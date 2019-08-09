import React, { Component} from 'react';
import './App.css';
import ApiService from './api.service.ts';
import Tile from './tile.js';
import 'bootstrap/dist/css/bootstrap.css';
class Conference extends Component {
  constructor(props){ 
    super(props)
    this.state = {
      _conference: []
    }
  }
  componentDidMount = async () => {
    let _api = new ApiService();
    _api.getDataFormApi("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences")
      .then((fromResolve) => {
        this.setState({
          _conference: fromResolve
        });
    })

  }
  render(){
    let _conferenceNumber = this.state._conference;
    return(
      <div className="row">
        {
          _conferenceNumber.map((val,index) => {
            return(
              <Tile name={val.confName} image={val.imageURL} date={val.confStartDate} city={val.city} _key={val.conference_id} key={val.conference_id}> </Tile>
            )
          })
        }
      </div>
    );
  }
}

export default Conference;

