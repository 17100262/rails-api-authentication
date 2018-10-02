import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system';
import Auth from '../modules/Auth';
import { Redirect,Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import MaterialSignIn from './Material/MaterialSignIn';


// const ThemeSignInForm = function(props){
//   return(
//     <div className="offset-md-3 col-md-6 offset-md-3">
//       <div className="featured-box featured-box-primary text-left mt-5">
//           <div className="box-content">
//               <h4 className="heading-primary text-uppercase mb-3">Sign In Form</h4>
//               <form id="frmSignIn" onSubmit={props.formSubmitHandler}>
//                   <div className="form-row">
//                       <div className="form-group col">
//                           <label>E-mail Address</label>
//                           <input type="text" name="email" className="form-control form-control-lg" />
//                       </div>
//                   </div>
//                   <div className="form-row">
//                       <div className="form-group col">
//                           <a className="float-right">(Lost Password?)</a>
//                           <label>Password</label>
//                           <input type="password" name="password" className="form-control form-control-lg" />
//                       </div>
//                   </div>
//                   <div className="form-row">
//                     <div className="form-group col-lg-6">
//                         <div className="form-check form-check-inline">
//                             <label className="form-check-label">
//                                 <input className="form-check-input" type="checkbox" id="rememberme" name="rememberme" /> Remember Me
//                             </label>
//                     </div>
//                   </div>
//                       <div className="form-group col-lg-6">
//                           {/* <input type="submit" value="Login" className="btn btn-primary float-right mb-5" data-loading-text="Loading..."> */}
//                           <button type="submit" className="btn btn-primary float-right mb-5" id="btnLogin">Login</button>
//                       </div>
//                   </div>
//               </form>
//           </div>
//       </div>
//     </div>
//   );
// }

const PortoSignIn = function(props){
  return(
    <section className="body-sign">
      <div className="center-sign">
        
        <div className="panel card-sign">
          <div className="card-title-sign mt-3">
            <h2 className="title font-weight-bold m-0 title-active">Log In</h2>
            <Link to="/signup">
            <h2 className="title font-weight-bold m-0"> Sign Up</h2>
            </Link>
          </div>
          <div className="card-body">
            <form onSubmit={props.formSubmitHandler}>
              <div className="form-group mb-3">
                <label>Email</label>
                <div className="input-group">
                  <input name="email" type="text" className="form-control form-control-lg" />
                  <span className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </span>
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="clearfix">
                  <label className="float-left">Password</label>
                  <a href="pages-recover-password.html" className="float-right">Lost Password?</a>
                </div>
                <div className="input-group">
                  <input name="password" type="password" className="form-control form-control-lg" />
                  <span className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-lock" />
                    </span>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8">
                  <div className="checkbox-custom checkbox-default">
                    <input id="RememberMe" name="rememberme" type="checkbox" />
                    <label htmlFor="RememberMe">Remember Me</label>
                  </div>
                </div>
                <div className="col-sm-4 text-right">
                  <button type="submit" className="btn btn-primary mt-2">Sign In</button>
                </div>
              </div>
              {/*
              <p className="text-center">Don't have an account yet? <Link to="/signup">Sign Up!</Link></p>
              */
              }
            </form>
          </div>
        </div>
      </div>
    </section>


  );
}


class SignInWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password: '',
      auth: Auth.isUserAuthenticated()
    };
    
    // this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    
  }
  
  componentDidMount(){
    this._notificationSystem = this.refs.notificationSystem;
    this._notificationSystem.addNotification({
      message: 'Please Sign in to Continue',
      level: 'success'
    });
    // this.props.history.push('/signup');
    
  }
  
  
  render() {
    const isAuthenticated = this.state.auth
    // console.log(isAuthenticated);
    if(isAuthenticated){
      return(
        <Redirect to='/profile'/>
      )

    } else {
      return(
        <React.Fragment>
        <NotificationSystem ref="notificationSystem" />
          {/* <SignIn formSubmitHandler = {this.props.signInSubmitHandler}/> */}
          <PortoSignIn formSubmitHandler = {this.props.signInSubmitHandler}/>
          {/* <MaterialSignIn /> */}
        </React.Fragment> 

      );
    }
  }
}
export default withRouter(SignInWidget);

