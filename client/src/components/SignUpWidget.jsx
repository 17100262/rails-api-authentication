import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const SignUpForm = function(props){
    return (
        <div className="offset-md-3 col-md-6 offset-md-3">
            <div className="featured-box featured-box-primary text-left mt-5">
                <div className="box-content">
                    <h4 className="heading-primary text-uppercase mb-3">Register An Account</h4>
                    <form  onSubmit={props.signUpSubmitHandler}>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>E-mail Address</label>
                                <input type="text" name="email" className="form-control form-control-lg"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Firstname</label>
                                <input type="text" name="firstname" className="form-control form-control-lg"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Lastname</label>
                                <input type="text" name="lastname" className="form-control form-control-lg"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-lg-6">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control form-control-lg"/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label>Re-enter Password</label>
                                <input type="password" name="password_confirmation" className="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <button type="submit" className="btn btn-primary float-right mb-5" id="btnLogin">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const PortoSignUpForm = function(props){
    return(
        
        <section className="section">
          <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6 mb-5 mb-lg-0">
              <div className="border rounded h-100 p-5">
                <span className="top-sub-title text-color-primary">DON'T HAVE AN ACCOUNT?</span>
                <h2 className="ont-weight-bold textt-4 mb-4">Sign Up</h2>
                <form onSubmit={props.signUpSubmitHandler}>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <label htmlFor="firstname">FIRST NAME</label>
                    <input type="text" name="firstname" className="form-control bg-light-5 rounded border-0 text-1" id="firstname" required />
                  </div>
                
                  <div className="form-group col-lg-6">
                    <label htmlFor="lastname">LAST NAME</label>
                    <input type="text" name="lastname" className="form-control bg-light-5 rounded border-0 text-1" id="lastname" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col mb-2">
                    <label htmlFor="email">EMAIL</label>
                    <input type="text" name="email" className="form-control bg-light-5 rounded border-0 text-1" id="email" required />
                  </div>
                </div>
                  
                  <div class="form-row mb-5">
					<div class="form-group col-lg-6">
						<label for="frmRegisterPassword">PASSWORD</label>
						<input type="password" value="" class="form-control bg-light-5 rounded border-0 text-1" name="password" id="frmRegisterPassword" required />
					</div>
					<div class="form-group col-lg-6">
						<label for="frmRegisterPassword2">CONFIRM PASSWORD</label>
						<input type="password" value="" class="form-control bg-light-5 rounded border-0 text-1" name="password_confirmation" id="frmRegisterPassword2" required />
					</div>
				</div>
                  
                  <div class="row align-items-center">
					<div class="col text-right">
						<button type="submit" class="btn btn-primary btn-rounded btn-v-3 btn-h-3 font-weight-bold">SIGN UP</button>
					</div>
				</div>
                  
                  <p className="text-center">Don't have an account yet? <Link to="/signin">Sign In!</Link></p>
                  
                  
                </form>
              </div>
            </div>
          </div>
          </div>
        </section>
        
        

    );
}

export default class SignUpWidget extends Component {
    // componentWillMount(){
        // console.log(this.props);
        // this.props.history.push('/signin');
    // }
    render() {
    return (
      
        // <SignUpForm signUpSubmitHandler={this.props.signUpSubmitHandler}  />
        <PortoSignUpForm signUpSubmitHandler={this.props.signUpSubmitHandler}/>
        
    );
  }
}

