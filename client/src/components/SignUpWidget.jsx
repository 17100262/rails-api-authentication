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
        <section className="body-sign">
            <div className="center-sign">
                <div className="panel card-sign">
                <div className="card-title-sign mt-3">
                    <Link to="/signin">
                    <h2 className="title font-weight-bold m-0"> Log In</h2>
                    </Link>
                    <h2 className="title font-weight-bold m-0 title-active">Sign Up</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={props.signUpSubmitHandler}>
                    <div className="form-group mb-3">
                        <label>First Name</label>
                        <input name="firstname" type="text" className="form-control form-control-lg" />
                    </div>
                    <div className="form-group mb-3">
                        <label>Last Name</label>
                        <input name="lastname" type="text" className="form-control form-control-lg" />
                    </div>
                    <div className="form-group mb-3">
                        <label>E-mail Address</label>
                        <input name="email" type="email" className="form-control form-control-lg" />
                    </div>
                    <div className="form-group mb-0">
                        <div className="row">
                        <div className="col-sm-6 mb-3">
                            <label>Password</label>
                            <input name="password" type="password" className="form-control form-control-lg" />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label>Password Confirmation</label>
                            <input name="password_confirmation" type="password" className="form-control form-control-lg" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*
                        <div className="col-sm-8">
                            <div className="checkbox-custom checkbox-default">
                                <input id="AgreeTerms" name="agreeterms" type="checkbox" />
                                <label htmlFor="AgreeTerms">I agree with <a href="#">terms of use</a></label>
                            </div>
                        </div>
                        */}
                        <div className="col-sm-12 text-right">
                        <button type="submit" className="btn btn-primary mt-2">Sign Up</button>
                        </div>
                    </div>
                    {/*
                    <p className="text-center">Already have an account? <Link to="/signin">Sign In!</Link></p>
                    */
                    }
                    </form>
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

{/* const OldSignUp = function (props) {
    return(
        <div className="col-md-6 offset-md-3">
            <div className="card card-outline-secondary">
                <div className="card-header">
                    <h3 className="mb-0">Register</h3>
                </div>
                <div className="card-body">
                    <form className="form" onSubmit={this.props.signUpSubmitHandler} >
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" name="firstname" />
                            
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" name="lastname" />
                            
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email" />
                            
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" />
                            
                        </div>
                        <div className="form-group">
                            <label>Password Confirmation</label>
                            <input type="password" name="password_confirmation" className="form-control" />
                            
                        </div>
                        
                        <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">Register</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
    
} */}