import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system';
import Auth from '../.././../modules/Auth';
import {CategoryForm} from './CategoryEdit';

export default class CategoryCreate extends Component {
  constructor(props){
      super(props);
      this.state = {
        //   category_name: '',
          loading: false
      }
      this.formSubmit= this.formSubmit.bind(this);
  }
  componentDidMount(){
    this._notificationSystem = this.refs.notificationSystem;
  }
  formSubmit(e){
    e.preventDefault();
    console.log(e.target.name.value);
    const formData = new FormData();
    formData.append('category[name]',e.target.name.value);

    this.setState({
        loading: true
    })
    fetch(`/api/categories`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${Auth.getToken()}`
        },
        body: formData
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
                
                
                this._notificationSystem.addNotification({
                    message: response.message,
                    level: 'success'
                });
                this.setState({
                    loading: false
                })


                


            } else if(response.status >= 400){

                this._notificationSystem.addNotification({
                    message: response.message,
                    level: 'error'
                });
                
                this.setState({
                    loading: false,
                })
                
            }  
        }
    );

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
