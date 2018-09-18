import React, { Component } from 'react'

export default class SignUpWidget extends Component {
  render() {
    return (
      
        <div className="col-md-6 offset-md-3">
          <div className="card card-outline-secondary">
            <div className="card-header">
                <h3 className="mb-0">Register</h3>
            </div>
            <div className="card-body">
                <form className="form" >
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
    )
  }
}
