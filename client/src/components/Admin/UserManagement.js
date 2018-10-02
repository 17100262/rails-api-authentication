import React, { Component } from 'react';
import Auth from '../../modules/Auth';
import {Redirect} from 'react-router';
import NotificationSystem from 'react-notification-system';

const Table = function(props){
    
    return(
    <table className="table table-responsive-md table-bordered mb-0">
        <thead>
            <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Approved</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(function(d){
                return(
                    <tr key={d["id"]}>
                        <td>{d["id"]}</td>
                        <td>{d["email"]}</td>
                        <td>{d["firstname"]}</td>
                        <td>{d["lastname"]}</td>
                        <td>{d["is_approved"]}</td>
                        
                        {d["is_approved"]==="No" 
                        ? <td><button onClick={(e) => props.buttonHandler(d["id"],true,e)}>Approve user</button></td>
                        : <td><button onClick={(e) => props.buttonHandler(d["id"],false,e)}>Block user</button></td> 
                        }
                        
                        
                    </tr>

                );
            })}
            
            
        </tbody>
    </table>
    );
}


export default class UserManagement extends Component {
    constructor(props){
        
        super(props);
        this.state = {
          auth: Auth.isUserAuthenticated(),
          loading: false,
          users: [],
          authorized: true,
          send_approve: false
        }
        
        this.appoveUser = this.appoveUser.bind(this)
    }



    componentDidMount(){
        this._notificationSystem = this.refs.notificationSystem;
        this.setState({
          loading: true
        })
        fetch('api/user_management', {
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
                    users : response.users
                })

            } else if(response.status >= 400)
                this.setState({
                    loading: false,
                    authorized: false
            })
         }   
        );
    }
    appoveUser(user_id,approve,e){
        e.preventDefault();
        this.setState({loading: true})
        const formData = new FormData();
        formData.append('admin[user_id]',user_id);
        formData.append('admin[approved]',approve);
        
        
        fetch('api/approve_user', {
            method: "PUT",
            body:  formData,
            headers: {
              "Authorization": `Bearer ${Auth.getToken()}`
            }
            
          })
            .then(function(response) {
              // response.status     //=> number 100–599
              // response.statusText //=> String
              // response.headers    //=> Headers
              // response.url        //=> String

              if(response.status >=200 && response.status < 300){
                  return response.json();

              }else{
                  throw response.json();
              }
            }, function(error) {
              console.log(error.message); //=> String
            })
            .then(response => {              
              this._notificationSystem.addNotification({
                message: response.message,
                level: 'success'
              });
              this.setState({loading: false})
              this.componentDidMount();            

            })
            .catch(e => {
                // console.log(this.props);
                console.log(e);

                // e.then(err =>{
                //     this._notificationSystem.addNotification({
                //         message: err.message,
                //         level: 'error'
                //     });
                //     console.log(err);  
                // });
            });


    }
  
    render() {
        // console.log(this.state.auth)

        
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
                        data={this.state.users}
                        buttonHandler = {this.appoveUser}
                    />
                    </section>
                </React.Fragment>
                
                
            );
            
        }


        
  }
}
