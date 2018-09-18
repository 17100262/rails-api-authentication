import React, { Component } from 'react'

export default class SignInWidget extends Component {
  constructor(){
    super();
    this.state = {date: new Date()};
    
    this.handleSingInSubmit = this.handleSingInSubmit.bind(this);
    
  }
  
  handleSingInSubmit(e,data){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });


    
    // const data = new FormData(e.target);
    // console.log(data);


  }
  
  render() {
    return (
      <div className="col-md-6 offset-md-3">
      <div className="card card-outline-secondary">
        <div className="card-header">
            <h3 className="mb-0">Login</h3>
        </div>
        <div className="card-body">
            <form className="form" onSubmit={(e) => this.handleSingInSubmit(e,{name: "maueez"})}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" />
                    
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" />
                    
                </div>
                
                <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
            </form>
        </div>
        </div>
        
    </div>
    )
  }
}
