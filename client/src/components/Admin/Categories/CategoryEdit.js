import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system';
import Auth from '../.././../modules/Auth'

export const CategoryForm = (props) => {
  return (
    <section className="card">
        <header className="card-header">
        <div className="card-actions">
            <span className="card-action card-action-toggle" data-card-toggle ></span>
            <span className="card-action card-action-dismiss" data-card-dismiss ></span>
        </div>
        <h2 className="card-title">Category</h2>
        </header>
        <div className="card-body">
        <form className="form-horizontal form-bordered" onSubmit={props.formHandler}>
            <div className="form-group row">
                <label className="col-lg-3 control-label text-lg-right pt-2" htmlFor="inputDefault">Name</label>
                <div className="col-lg-6">
                    <input type="text" name="name" defaultValue={props.category_name} className="form-control" id="inputDefault" />
                </div>
                <input type="submit" />
            </div>
            
        </form>
        </div>
    </section>  
    );
}


export default class CategoryEdit extends Component {

    _isMounted = false;

    constructor(props){
        super(props);
        this.state={
            loading: false,
            category_name: ""
        }
        this.formSubmit = this.formSubmit.bind(this);
    }
    componentWillMount(){
        console.log(this.props)
        // this._notificationSystem = this.refs.notificationSystem;
        // if(!this._isMounted){
            this.setState({
                loading: true
            })
            fetch(`/api/categories/${this.props.match.params.id}`, {
                method: "GET",
            })
            .then(function(response) {
                // response.status     //=> number 100–599
                // response.statusText //=> String
                // response.headers    //=> Headers
                // response.url        //=> String

                // check response status
                
                return response.json();
            
                // return response.text()
            }, function(error) {
                console.log(error.message); //=> String
            })
            .then(response => {
                console.log(response);
                    if(response.status >= 200 && response.status < 300){
                        
                        
                            this.setState({
                                loading: false,
                                category_name : response.category.name
                            })

                        


                    } else if(response.status >= 400){
                        
                            this.setState({
                                loading: false,
                            })
                        
                    }  
                }
            );
        // }
    }
    componentDidMount(){
        this._notificationSystem = this.refs.notificationSystem;

    }
    formSubmit(e){
        e.preventDefault();
        console.log(e.target.name.value);
        // this._isMounted = true

        // this.setState({loading: true})
        const formData = new FormData();
        formData.append('category[name]',e.target.name.value);
        
        
        
        fetch(`/api/categories/${this.props.match.params.id}`, {
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
                    
                    this._notificationSystem.addNotification({
                        message: response.message,
                        level: 'success'
                      });
                    
                    
                    
                }else{
                    // console.log(response.message);
                    
                    this._notificationSystem.addNotification({
                        message: response.message,
                        level: 'error'
                    });
                    
                    
                }
            })
            .catch(e => {
                // console.log(this.props);
                console.log(e);
            });

    }



  render() {

    
        if(this.state.loading){
            return(
                <React.Fragment>
                    <NotificationSystem ref="notificationSystem" />
                    <div class="loading-overlay-showing">
                        <div class="bounce-loader">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                    </div>
                </React.Fragment>
            );

        } 
        else {
            return(
                <React.Fragment>
                    <NotificationSystem ref="notificationSystem" />
                    <section className="content-body">
                        <CategoryForm formHandler={this.formSubmit} category_name={this.state.category_name}/>            
                    </ section>
                </React.Fragment>
            );

        } 
      
  }
}
