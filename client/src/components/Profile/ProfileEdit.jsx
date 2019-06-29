import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import Auth from '../../modules/Auth';
import {Redirect} from 'react-router';

const ProfileForm = function(props){
    return(
        <section className="card">
        <header className="card-header">
          {/* <div className="card-actions">
            <a href="/" className="card-action card-action-toggle" data-card-toggle />
            <a href="/" className="card-action card-action-dismiss" data-card-dismiss />
          </div> */}
          <h2 className="card-title">Profile Edit</h2>
        </header>
        <div className="card-body">
          <form className="form-horizontal form-bordered" onSubmit={props.formHandler}>
            <div className="form-group row">
              <label className="col-lg-3 control-label text-lg-right pt-2" htmlFor="inputDefault">Firstname</label>
              <div className="col-lg-6">
                <input type="text" className="form-control" name="firstname" defaultValue={props.profileObj.firstname} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 control-label text-lg-right pt-2" htmlFor="inputDisabled">Lastname</label>
              <div className="col-lg-6">
                <input className="form-control" name="lastname" type="text" defaultValue={props.profileObj.lastname} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 control-label text-lg-right pt-2" htmlFor="inputDisabled">Website</label>
              <div className="col-lg-6">
                <input className="form-control" name="website" defaultValue={props.profileObj.website}  type="text" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 control-label text-lg-right pt-2" htmlFor="inputDisabled">Location</label>
              <div className="col-lg-6">
                <input className="form-control" name="location" defaultValue={props.profileObj.location} type="text" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 control-label text-lg-right pt-2" htmlFor="inputDisabled">Biography</label>
              <div className="col-lg-6">
                <textarea className="form-control" name="biography" defaultValue={props.profileObj.biography}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 control-label text-lg-right pt-2" htmlFor="inputDisabled">Profile Picture</label>
              <div className="col-lg-6">
                <input className="form-control" type="file" name="profile_picture" />
              </div>
            </div>
            <div className="form-group row">
                <input type="submit"/>
            </div>

            
            
           
          </form>
        </div>
      </section>
      

    );
}

export default class ProfileEdit extends Component {

    constructor(props){
        super(props);
        this.state = {
            auth: Auth.isUserAuthenticated(),
            loading : false,
            profile: {}
        }
        this.profile_submit = this.profile_submit.bind(this);
    }
    profile_submit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[firstname]',e.target.firstname.value);
        formData.append('user[lastname]',e.target.lastname.value);
        formData.append('user[website]',e.target.website.value);
        formData.append('user[location]',e.target.location.value);
        formData.append('user[biography]',e.target.biography.value);

        if(e.target.profile_picture.files[0] !== undefined){
            formData.append('user[profile_picture]',e.target.profile_picture.files[0]);

        }
        
        
        this.setState({loading: true})
        fetch(`/api/update_profile`, {
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

              return response.json()
            }, function(error) {
              console.log(error.message); //=> String
            })
            .then(response => {              
                console.log(response.status);
                if(response.status >=200 && response.status < 300){
                    
                    this.setState({loading: false})
                    this._notificationSystem.addNotification({
                        message: response.message,
                        level: 'success'
                        
                    });
                    
                    
                    
                }else{
                    // console.log(response.message);
                    
                    this.setState({loading: false})
                    this._notificationSystem.addNotification({
                        message: response.message,
                        level: 'error'
                    });
                    

                    

                    
                    
                }
            })
            .catch(e => {
                // console.log(this.props);
                this.setState({
                    loading: false
                })
                console.log(e);
            });

    }



    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    }

    componentWillMount(){
        this.setState({
            loading: true
        })
          fetch('/api/profile', {
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
              
              return response.json();
            
              // return response.text()
            }, function(error) {
              console.log(error.message); //=> String
            })
            .then(response => {
              // console.log(response.token)
              
              console.log(response);
              this.setState({
                profile: response,
                loading: false
              });
              // NotificationManager.success('You have successfully logged in');
              
            });
    }
    
    render() {
        if(! this.state.auth){
            return(
                <Redirect to='/profile' />

            );
        } else if (this.state.loading) {
            
            return(
                <React.Fragment>
                    <NotificationSystem ref="notificationSystem" />
                    <div className="loading-overlay-showing">
                        <div className="bounce-loader">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </div>
                </React.Fragment>
            );

        } else {

            return(
                <React.Fragment>
                    <NotificationSystem ref="notificationSystem" />
                    <ProfileForm formHandler={this.profile_submit} profileObj = {this.state.profile}/>
                </React.Fragment>
            );

        }
    }
}
