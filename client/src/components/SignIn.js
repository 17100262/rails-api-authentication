import React from 'react'

export default (props) => {
  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-outline-secondary">
        <div className="card-header">
            <h3 className="mb-0">Login</h3>
        </div>
        <div className="card-body">
            <form className="form" onSubmit={props.formSubmitHandler}>
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
