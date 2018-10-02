import React, { Component } from 'react'
import Auth from '../../modules/Auth';
import {CampaignMainComponent} from './CampaignShowDummy';

const CampaignTable = function(props){
    return(
        <div className="container">              
            <div className="card">
            <div className="card-body">
            <center>
            <h2>
            Campaign {props.campaign.project_title}
            </h2>
            </center>
                <table className="table table-responsive-md table-bordered mb-0">
                    <tbody>
                    <tr>
                        <th>Category</th>
                        <td>{props.campaign.category_name}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{props.campaign.country}</td>
                    </tr>
                    <tr>
                        <th>Project Video</th>
                        <td>{props.campaign.project_video_url}</td>
                    </tr>
                    <tr>
                        <th>Project Image</th>
                        <td>{props.campaign.project_image_url}</td>
                    </tr>
                    <tr>
                        <th>Project Description</th>
                        <td>{props.campaign.project_description}</td>
                    </tr>
                    <tr>
                        <th>Risks And Challenges</th>
                        <td>{props.campaign.risk_and_challenge}</td>
                    </tr>
                    <tr>
                        <th>Project Title</th>
                        <td>{props.campaign.project_title}</td>
                    </tr>
                    <tr>
                        <th>Project Location</th>
                        <td>{props.campaign.project_location}</td>
                    </tr>
                    <tr>
                        <th>Funding Location</th>
                        <td>{props.campaign.funding_location}</td>
                    </tr>
                    <tr>
                        <th>Funding Goal</th>
                        <td>{props.campaign.funding_goal}</td>
                    </tr>
                    <tr>
                        <th>Campaign Rewards</th>
                        <td>
                            <ul className="pl-0">{props.campaign.campaign_rewards.map(function(reward){
                                return (

                                    <React.Fragment key={reward.id}>
                                        <li className="color-primary-i">
                                        
                                        <i className="mr-2 fas fa-folder"></i>
                                        {reward.title}</li>
                                        <ul>
                                        <li className="color-primary-i">
                                        
                                        <i className="mr-2 fas fa-folder"></i>
                                            Description:{reward.description}</li>
                                            <li className="color-primary-i">
                                        
                                        <i className="mr-2 fas fa-folder"></i>
                                        Pledge Amount:{reward.pledge_amount}</li>
                                        <li className="color-primary-i">
                                        
                                        <i className="mr-2 fas fa-folder"></i>
                                        Estimated Delivery:{reward.estimated_delivery}</li>
                                        </ul>
                                    </React.Fragment>
                                    
                                );
                            })}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Project FAQs</th>
                        <td>
                            <ul className="pl-0">{props.campaign.campaign_faqs.map(function(faq){
                                return (

                                    <React.Fragment key={faq.id}>
                                        <li className="color-primary-i">
                                        
                                        <i className="mr-2 fas fa-folder"></i>
                                        {faq.title}</li>
                                        <ul>
                                            <li className="color-primary-i">
                                        
                                        <i className="mr-2 fas fa-folder"></i>
                                        Description:{faq.description}</li>
                                        </ul>
                                    </React.Fragment>
                                );
                            })}
                            </ul>
                        </td>
                    </tr>
                    </tbody>

                </table>
                </div>
            </div>
        </div>
            

    );
}

export default class CampaignShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            campaign:{}
        }
    }
    componentWillMount(){
        this.setState({
            loading: true
        });

        fetch(`/api/campaigns/${this.props.match.params.id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${Auth.getToken()}`
            }
        })
        .then(function(response) {
            // response.status     //=> number 100–599
            // response.statusText //=> String
            // response.headers    //=> Headers
            // response.url        //=> String

            // check response status
            
            return response.json();
        
            // return response.text()
        }, function(error) {
            console.log(error.message); //=> String
        })
        .then(response => {
            console.log(response);
                if(response.status >= 200 && response.status < 300){
                    
                    
                        this.setState({
                            loading: false,
                            campaign : response.campaign
                        })
                        console.log(response.campaign)

                    


                } else if(response.status >= 400){
                    
                        this.setState({
                            loading: false,
                        })
                    
                }  
            }
        );

    }
    
    render() {
        if(this.state.loading){
            return(
                <div className="loading-overlay-showing">
                    <div className="bounce-loader">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>

            );

        } else {
            return (
                // <CampaignTable campaign={this.state.campaign} />
                <CampaignMainComponent campaign= {this.state.campaign} />
                
            )
        }
  }
}
