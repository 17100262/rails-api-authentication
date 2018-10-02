import React, { Component } from 'react';
import Auth from '../../../modules/Auth';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

const Table = function(props){
    
    return(
    <table className="table table-responsive-md table-bordered mb-0">
        <thead>
            <tr>
            <th>ID</th>
            <th>Project Title</th>
            <th>Created By</th>
            <th colSpan="2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(function(d){
                return(
                    <tr key={d["id"]}>
                        <td>{d["id"]}</td>
                        <td>{d["project_title"]}</td>
                        <td>{d["user_name"]}</td>
                        <td><Link to={`/campaigns/${d["id"]}`}> Show</Link></td>
                        <td><button onClick={(e)=>props.deleteHandler(d["id"],e)}>Delete</button></td>
                        
                    </tr>

                );
            })}
            
            
        </tbody>
    </table>
    );
}


export default class CamapaignAdmin extends Component {

    constructor(props){
        super(props);
        this.state = {
            auth: Auth.isUserAuthenticated(),
            loading: false,
            campaigns: [],
            authorized: true,
        }
        this.deleteCampaign = this.deleteCampaign.bind(this)
    }
    deleteCampaign(campaign_id,e){
        e.preventDefault();
        console.log(campaign_id);
    
        this.setState({
          loading: true
        });
    
        fetch(`/api/campaigns/${campaign_id}`, {
            method: "DELETE",
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
            console.log(response);
            
            return response.json();
        
            // return response.text()
        }, function(error) {
            console.log(error.message); //=> String
        })
        .then(response => {
            console.log(response);
                if(response.status >= 200 && response.status < 300){
                    
                    
                    this._notificationSystem.addNotification({
                        message: response.message,
                        level: 'success'
                    });
                    this.setState({
                        loading: false
                    },()=>{
                        this.componentDidMount();
                    })
    
                } else if(response.status >= 400){
    
                    let message;
                    if(response.message){
                      message = response.message;
                    } else if(response.error){
                      message = response.error
                    } else {
                      message = "Something went wrong"
                    }
    
    
    
                    this._notificationSystem.addNotification({
                        message: message,
                        level: 'error'
                    });
                    
                    this.setState({
                        loading: false,
                    })
                    
                }  
            }
        )
        .catch(e => {
          console.log(e);
        });
    
    }

    componentDidMount(){
        this._notificationSystem = this.refs.notificationSystem;
        this.setState({
            loading: true
        })
        fetch('api/campaigns', {
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
              
              if(response.status >= 200 && response.status < 300){
                  this.setState({
                      loading: false,
                      campaigns : response.campaigns
                  })
  
              } else if(response.status >= 400)
                  this.setState({
                      loading: false,
                      authorized: false
              })
           });
    }
  
  
    render() {
    
    if(this.state.loading){
        return(
            <React.Fragment>
                <NotificationSystem ref="notificationSystem" />
                <div class="loading-overlay-showing">
                    <div class="bounce-loader">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
                </div>
          </React.Fragment>
        );
    }
    else if (! this.state.auth){
        return(
        <Redirect to={{pathname: '/signin'}} />);
    }
    else if(!this.state.authorized){
        return(
            <Redirect to={{pathname: '/'}} />
        );
    }
    else{
        return (
            <React.Fragment>
                <NotificationSystem ref="notificationSystem" />
                <section className="content-body">
                    
                    <Table
                    data={this.state.campaigns}
                    deleteHandler={this.deleteCampaign}
                   
                />
                </section>
            </React.Fragment>
            
            
        );
        
    }



  }
}
