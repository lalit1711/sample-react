import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ApiService } from './api.service.ts';

const _apiService = new ApiService(); 
export class ConferenceDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            _conferenceData:[],
            isLoading: true
        }
    }
    componentDidMount = () => {
        _apiService.getDetailsOfParticularConference("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences", this.props.match.params.id)
            .then((fromResolve) => {
                this.setState({
                    _conferenceData: fromResolve,
                    isLoading: false
                })
            })
    }
    render(){
        if(this.state.isLoading){
            return(
                <center><h2>Loading...</h2></center>
            )
        }
        if(!this.state._conferenceData.length){
            return(
                <center><h2>Opps Conference Not Found</h2></center>
            )
        }
        return(
            <div>
                <Link to="/conf"><h2>Conferences</h2></Link>
                <div className="container">
                    <div className="row">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{this.state._conferenceData[0].conference_id}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{this.state._conferenceData[0].confName}</td>
                        </tr>
                        <tr>
                            <td>Entry</td>
                            <td>{this.state._conferenceData[0].entryType}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>{this.state._conferenceData[0].city}, {this.state._conferenceData[0].country}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{this.state._conferenceData[0].confStartDate}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
} ;

export default ConferenceDetails;