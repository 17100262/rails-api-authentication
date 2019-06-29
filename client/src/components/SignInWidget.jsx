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
    <section className="section">
      <div className="container">
      <div className="row">
        <div className="offset-lg-3 col-lg-6 mb-5 mb-lg-0">
          <div className="border rounded h-100 p-5">
            <span className="top-sub-title text-color-primary">ALREADY A MEMBER?</span>
            <h2 className="ont-weight-bold textt-4 mb-4">Sign In</h2>
            <form onSubmit={props.formSubmitHandler}>
            <div className="form-row">
              <div className="form-group col mb-2">
                <label htmlFor="frmSignInEmail">EMAIL</label>
                <input type="email" name="email" className="form-control bg-light-5 rounded border-0 text-1" id="frmSignInEmail" required />
              </div>
            </div>
              
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="frmSignInPassword">PASSWORD</label>
                  <input type="password" className="form-control bg-light-5 rounded border-0 text-1" name="password" id="frmSignInPassword" required />
                </div>
              </div>
              <div className="form-row mb-3">
                <div className="form-group col">
                  <div className="form-check checkbox-custom checkbox-custom-transparent checkbox-default">
                    <input className="form-check-input" id="RememberMe" name="rememberme" />
                    <label className="form-check-label" htmlFor="RememberMe">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="form-group col text-right">
                  <a href="/" className="forgot-pw d-block">Forgot password?</a>
                </div>
              </div>
              <div class="row align-items-center">
								<div class="col text-right">
									<button type="submit" class="btn btn-primary btn-rounded btn-v-3 btn-h-3 font-weight-bold">SIGN IN</button>
								</div>
							</div>
              
              <p className="text-center">Don't have an account yet? <Link to="/signup">Sign Up!</Link></p>
              

            </form>
          </div>
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

