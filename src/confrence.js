import React, { Component} from 'react';
import './App.css';
import ApiService from './api.service.ts';
import Tile from './tile.js';
import { CustomLogic } from "./customLogic.directive.ts";
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
    _api.getDataFromApi("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences", 0)
      .subscribe(res => {
        if(res.status === 200) {
          this.setState({
            _conference: res.response.free,
            _orginalData: res.response.free
          })
        }
      });

  }

  filterConferences = (_keyText) => {
    const _customLogic = new CustomLogic();
    _customLogic.filterConferences(_keyText, this.state._orginalData).then(
      (fromResolve) => {
        this.setState({
          _conference: fromResolve
        })
      }
    )
  }

  render(){
    let _conferenceNumber = this.state._conference;
    if(!_conferenceNumber.length){
      return(
        <center><h2>Loading...</h2></center>
      )
    }
    return(
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-12">
            <input type="text" placeholder="search..." onChange ={((text) => {this.filterConferences(text.target.value)})} />
            <label>({this.state._conference.length})</label>
          </div>
        </div>
        <div className="row">
          {
            _conferenceNumber.map((val,index) => {
              return(
                <Tile name={val.confName} image={val.imageURL} date={val.confStartDate} city={val.city} _key={val.conference_id} key={val.conference_id}> </Tile>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Conference;

