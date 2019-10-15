import React, { Component } from 'react';
import { CustomLogic } from "./customLogic.directive.ts";
import { Link } from "react-router-dom";
const _customLogic = new CustomLogic(); 
export class Tile extends Component { 
  render(){
    return(
      <div className="col-md-4" style={_style.gridContainer} >
        <Link to={"/details/"+this.props._key}>
          <div style={_style.gridItem}>
            <div style={_style.card}>
              <img src={_customLogic.removeExtra(this.props.image, '"')}  style={_style.width} alt={this.props.name}/>
              <h1>{_customLogic.slice(this.props.name , 20)}</h1>
              <p style={_style.title}>{this.props.city}</p>
              <p>{this.props.date}</p>
              <div>
              </div>
            </div>
          </div>
        </Link>
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
  
export default Tile;