import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Router,Switch ,Route,Redirect} from 'react-router-dom';
import SignUpWidget from './components/SignUpWidget';
import Home from './components/Home';
import SignInWidget from './components/SignInWidget';
import Auth from './modules/Auth'
import Profile from './components/Profile'
import Admin from './components/Admin/Admin'
import UserManagement from './components/Admin/UserManagement';
import NotificationSystem from 'react-notification-system';
import { createBrowserHistory } from 'history';
import MultistepForm from './components/MultistepForm';
import Category from './components/Admin/Categories/Category';
import CategoryEdit from './components/Admin/Categories/CategoryEdit';
import CategoryCreate from './components/Admin/Categories/CategoryCreate';
import CampaignCreate from './components/Campaigns/CampaignCreate';
import CampaignShow from './components/Campaigns/CampaignShow';
import CampaignEdit from './components/Campaigns/CampaignEdit';

import CamapaignAdmin from './components/Admin/Campaigns/CamapaignAdmin';
import ProfileEdit from './components/Profile/ProfileEdit';
const history = createBrowserHistory();
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
);

// const AdminLayout = props => (
//   <div className="inner-wrapper">
//       <Admin />
//       {props.children}
//   </div>
// )
const AdminLayout = function(props){
  if(Auth.isUserAuthenticated()){
    return(
      <div className="inner-wrapper">
        <Admin />
        {props.children}
    </div>
    )
  } else{
    return(
      <Redirect to='/signin' />
    );
  }
}


const MainLayout = props => (
  <div>

    {props.children}
  </div>
)

class App extends Component {

  addNotification() {
    this.notificationDOMRef.current.addNotification({
      title: "Awesomeness",
      message: "Awesome Notifications!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }
  aaddNotification(event){ 
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Notification message',
      level: 'success'
    });
  }
 
  constructor(){
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
      loading : false
    }
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.aaddNotification = this.aaddNotification.bind(this);
  }
  handleLogOut(e){
    // fetch('')
    // e.preventDefault();
    console.log('you clicked log out');
    Auth.deAuthenticateUser();
    fetch('/api/sessions', {
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
          return response.json();
        
          // return response.text()
        }, function(error) {
          console.log(error.message); //=> String
        })
        .then(response => {
        //   console.log(Auth.isUserAuthenticated())
          
          this.setState({
            auth: Auth.isUserAuthenticated()
          },()=>{
            this._notificationSystem.addNotification({
              message: 'You have successfully logged out',
              level: 'success'
            });

            console.log('You have successfully logged out');
            
            
            
          })
          
        //   NotificationManager.success('You have successfully logged out');
          
        });
  }
  handleSignInSubmit(e){
    e.preventDefault();
    this.setState({
      email: e.target.email.value,
      password: e.target.password.value,
      loading: false

    },()=>{
      // console.log(this.state);
      fetch('api/sessions', {
      method: "POST",
      body: JSON.stringify({
        "session": {
          "email": this.state.email,
          "password": this.state.password 
        }
      }),

      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        // response.status     //=> number 100–599
        // response.statusText //=> String
        // response.headers    //=> Headers
        // response.url        //=> String
        
        if(response.status === 201){
          return response.json();

        }else{
          throw response.json();
        }
      
        // return response.text()
      }, function(error) {
        
        console.log(error.message); //=> String
        

      })
      .then(response => {
        // console.log(response.token)
        


        Auth.authenticateToken(response.authentication_token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          loading: false
        },function(){
          this._notificationSystem.addNotification({
            message: 'Login Successful',
            level: 'success'
          });
          console.log(this.props.history);

        });
        console.log(response);
        // NotificationManager.success('You have successfully logged in');
        
      })
      .catch(err => {
        err.then(e => {
          this._notificationSystem.addNotification({
            message: `${e.message}`,
            level: 'error'

          });
          // this.props.history.push('/signin')
          // console.log(this.props.history);
        });
      });
    

    });


  }
  handleSignUpSubmit(e){
    e.preventDefault();
    this.setState({
      email: e.target.email.value,
      password: e.target.password.value,
      password_confirmation: e.target.password_confirmation.value,
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value
    },()=>{
      // console.log(this.state);
      fetch('/api/registrations', {
      method: "POST",
      body: JSON.stringify({
        "registration": {
          "email": this.state.email,
          "password": this.state.password,
          "password_confirmation": this.state.password_confirmation,
          "firstname": this.state.firstname,
          "lastname": this.state.lastname 
        }
      }),

      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        // response.status     //=> number 100–599
        // response.statusText //=> String
        // response.headers    //=> Headers
        // response.url        //=> String
        const res = response.json();
        if(response.status === 201){
            return res;
        }else if(response.status >= 400){
          throw res;
        }
      }, function(error) {
        console.log(error.message); //=> String
      })
        .then(response => {
          console.log(response)
          Auth.authenticateToken(response.authentication_token);
          this.setState({
            auth: Auth.isUserAuthenticated()

          });
          this._notificationSystem.addNotification({
            message: 'Sign Up successful',
            level: 'success'

          });
          
          // console.log(response.status);
          // NotificationManager.success('You have successfully logged in');
          
        })
        .catch( e => {
          console.log(e);
          e.then(err => {
            console.log(err);
            this._notificationSystem.addNotification({
              message: `${err.errors}`,
              level: 'error'
  
            });
            console.log(this.props.history);
            // this.componentDidMount();
          });
        });
    });
  }
  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }



  render() {
    
    if(this.state.loading){
      return(
        <React.Fragment>
        <NotificationSystem ref="notificationSystem" />
        <img alt="" className="loader" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </React.Fragment>
      );

    } else{
        return (
          
          <div className="body">
            {/* <ReactNotification ref={this.notificationDOMRef} /> */}
            <NotificationSystem ref="notificationSystem" />
           
            
            <Router history={history}>
              <React.Fragment>
                <NavBar auth={this.state.auth} logOutHandler={this.handleLogOut}/>
                {/* <MaterialNavbar /> */}
                <Switch>
                  
                  <Route path="/" exact={true} component={Home}></Route>
                  <Route path="/multistep" exact={true} component={MultistepForm}></Route>
                  {/* <Route path="/profile" exact={true} component={Profile}></Route> */}
                  {/* <AppRoute exact path="/signin" layout={MainLayout} component={SignInWidget} /> */}
      
      
      
                  <Route path="/signin" exact={true} render={()=> (this.state.auth) 
                  ? <Redirect to='/profile' />   
                  : <SignInWidget signInSubmitHandler={this.handleSignInSubmit}/> }>
                  </Route>
                  
      
                  <Route path="/signup" exact={true} render={()=> (this.state.auth) 
                  ? <Redirect to='/profile' />   
                  : <SignUpWidget signUpSubmitHandler={this.handleSignUpSubmit} /> }>
                  </Route>
                  
                  <Route exact path="/campaigns/:id(\d+)" component={CampaignShow}/>
                  <Route exact path="/campaigns/:id(\d+)/edit" component={CampaignEdit}/>  
                  <Route path= "/campaigns/new" component={CampaignCreate} />
                  <Route exact path= "/profile/edit" component={ProfileEdit} />

                  <AppRoute exact path="/user_management" layout={AdminLayout} component={UserManagement}/>
                  <AppRoute exact path="/campaigns" layout={AdminLayout} component={CamapaignAdmin}/>

                  <AppRoute path="/categories/:id(\d+)/edit" layout={AdminLayout} component={CategoryEdit} />
                  <AppRoute exact path="/categories/new"  layout={AdminLayout} component={CategoryCreate} />
                  
                  
                  <AppRoute exact path="/categories" layout={AdminLayout} component={Category}  />
                  
                  
                  

                  <Route path="/profile" exact={true} component={Profile}  />
                  

                  <Route path="*" render={() => {
                    return (
                      <div className="inner-wrapper">
                        <section role="main" className="content-body">
                          Page Not Found
                        </section>
                      </div>
                      )
                  }} />
      
                </Switch>
                </React.Fragment>
            </Router>
          </div>
        );

    }

    

    
  }
}
export default App;
