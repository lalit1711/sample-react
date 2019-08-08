import React, { Component} from 'react';
import './App.css';
import ApiService from './ApiService';
import { CustomLogic } from "./customLogic";
import 'bootstrap/dist/css/bootstrap.css';

const _customLogic = new CustomLogic();
class App extends Component {
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
      <div class="row">
        {
          _conferenceNumber.map((val,index) => {
            return(
              <div class="col-md-3" style={_style.gridContainer} key={val.conference_id} >
                <div style={_style.gridItem}>
                  <div style={_style.card}>
                    <img src={_customLogic.removeExtra(val.imageURL, '"')}  style={_style.width} alt={val.confName}/>
                    <h1>{_customLogic.slice(val.confName , 20)}</h1>
                    <p style={_style.title}>{val.city}</p>
                    <p>{val.confStartDate}</p>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

const _style = {
  card: {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  margin: "auto",
  textAlign: "center",
  fontFamily: "arial",
},
title: {
  color: "grey",
  fontSize: "16px",
},
width:{
  width:"100%",
  height: 300
},
gridContainer: {
  display: 'grid',
  gridGap: '10px',
  padding: '10px'
},gridItem: {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  textAlign: 'center',
  padding: '20px',
  gridColumn: "1 / span 3",
  gridRow: 3
}
}

export default App;

