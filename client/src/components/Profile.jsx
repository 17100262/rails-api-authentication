import React, { Component } from 'react'
import { Redirect,Link} from 'react-router-dom';
import Auth from '../modules/Auth';
import NotificationSystem from 'react-notification-system';
const ProfileComp = (item) => {
  
  return(
    <div className="container">
    <div className="col-md-12">
      <section className="card">
        
					<div className="card-body">
						<div className="thumb-info mb-3 text-center">
							<img src={item.profile.profile_picture_url} className="rounded img-fluid img-thumbnail" alt="" />
							<div className="thumb-info-title">
								<span className="thumb-info-inner">{item.profile.firstname} {item.profile.lastname}</span>
								<div className="small">{item.profile.email}</div>
								{/*<span className="thumb-info-type">CEO</span>*/}
							</div>
						</div>
          
						

						<hr className="dotted short"/>

						<h5 className="mb-2 mt-3">About</h5>
						<p className="text-2">{item.profile.biography}</p>

            <hr className="dotted short"/>

            <h5 className="mb-2 mt-3">Website</h5>
            <p className="text-2">{item.profile.website}</p>

            <hr className="dotted short"/>

            <h5 className="mb-2 mt-3">Location</h5>
            <p className="text-2">{item.profile.location}</p>

						<hr className="dotted short"/>
            <h5 className="mb-2 mt-3">User Campaigns</h5>
          <table className="table table-responsive-md table-bordered mb-0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Project Title</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody>
            
              {item.profile.user_campaigns.map(function(cmp){
                return(
                  <tr key={cmp.id}>
                    <td>{cmp.id}</td>
                    <td>{cmp.project_title}</td>
                    <td><Link to={`/campaigns/${cmp.id}`} className="btn btn-primary btn-sm"> Show</Link> </td>
                    <td><Link to={`/campaigns/${cmp.id}/edit`} className="btn btn-primary btn-sm"> Edit</Link> </td>
                    <td><button className="btn btn-danger btn-sm" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) item.deleteHandler(cmp.id,e) } }>Delete</button></td>
                  </tr>
                )

              })}
            </tbody>
          </table>
					{/*
					<div className="social-icons-list">
							<a rel="tooltip" data-placement="bottom" target="_blank" href="http://www.facebook.com" data-original-title="Facebook"><i className="fab fa-facebook-f"></i><span>Facebook</span></a>
							<a rel="tooltip" data-placement="bottom" href="http://www.twitter.com" data-original-title="Twitter"><i className="fab fa-twitter"></i><span>Twitter</span></a>
							<a rel="tooltip" data-placement="bottom" href="http://www.linkedin.com" data-original-title="Linkedin"><i className="fab fa-linkedin-in"></i><span>Linkedin</span></a>
						</div>
						*/}

					</div>
				</section>
				</div>
				</div>
        // <div className="container my-5">
        //   <table className="table table-responsive-md table-bordered mb-0 bg-white">
        //     {/* <thead> */}
        //     <tbody>
        //       <tr>
        //         <th>Firstname:</th>
        //         <td>{item.profile.firstname}</td>
        //       </tr>
        //       <tr>
        //         <th>Lastname:</th>
        //         <td>{item.profile.lastname}</td>
        //       </tr>
        //       <tr>
        //         <th>Email:</th>
        //         <td>{item.profile.email}</td>
        //       </tr>
        //     </tbody>
        //     {/* </thead> */}
        //   </table>
          

        // </div>
     
  );
}


export default class Profile extends Component {
  constructor(){
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
      loading: false,
      admin_check: false ,
      user_campaigns: [],
      profile: {}
    }
    this.deleteCampaign = this.deleteCampaign.bind(this);
  }
  deleteCampaign(campaign_id,e){
    e.preventDefault();
    // console.log(campaign_id);

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

  }
  componentWillMount(){
    // this._notificationSystem = this.refs.notificationSystem;
    this.setState({
      loading: true
    })
    fetch('api/profile', {
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
    // console.log(`this is email ${this.state.isAuthenticated}`)
    const isAuthenticated = this.state.auth
    const profileObj = this.state.profile
    // console.log(this.state.auth);

    if(this.state.loading){
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

    } else if(! this.state.auth){
      return(
        <Redirect to="/signin"/>
      );

    } else{
      return (
        <React.Fragment>
          <NotificationSystem ref="notificationSystem" />
            <ProfileComp deleteHandler={this.deleteCampaign} profile={profileObj}/>
        </React.Fragment>
      );
  }
  }
}
