import React, { Component } from 'react';
import { CustomLogic } from "./customLogic.directive.ts";

const _customLogic = new CustomLogic();

export class Tile extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            _name: props.name,
            _imageURL: props.image,
            _city: props.city,
            _date: props.date,
            _key: props._key
        }
    }
    render(){
        return(
            <div className="col-md-3" style={_style.gridContainer} key={this.state._key} >
                <div style={_style.gridItem}>
                  <div style={_style.card}>
                    <img src={_customLogic.removeExtra(this.state._imageURL, '"')}  style={_style.width} alt={this.state._name}/>
                    <h1>{_customLogic.slice(this.state._name , 20)}</h1>
                    <p style={_style.title}>{this.state._city}</p>
                    <p>{this.state._date}</p>
                    <div>
                    </div>
                  </div>
                </div>
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