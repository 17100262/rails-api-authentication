import React, { Component } from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import Auth from '../../../modules/Auth';

const Table = function(props){
    return(
    <table className="table table-responsive-md table-bordered mb-0">
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(function(d){
                return(
                    <tr key={d["id"]}>
                        <td>{d["id"]}</td>
                        <td>{d["name"]}</td>
                        <td><Link to={`/categories/${d["id"]}/edit`}>Edit </Link>  </td>
                        <td><button  onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) props.deleteItem(d["id"],e) } }> Delete</button></td>
                    </tr>

                );
            })}
            
            
        </tbody>
    </table>
    );
}


export default class Category extends Component {
    constructor(props){
        
        super(props);
        this.state = {
          loading: false,
          categories: [],
          authorized: true,
        }
        this.deleteItem= this.deleteItem.bind(this);
        
    }
    deleteItem(category_id,e){
        e.preventDefault();
        console.log('Clicked on delete');
        console.log(category_id);

        this.setState({
            loading: true
        });

        fetch(`/api/categories/${category_id}`, {
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
                    },()=>{
                        this.componentDidMount();
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
   
    componentDidMount(){
        this._notificationSystem = this.refs.notificationSystem;
        this.setState({
          loading: true
        })
        fetch('/api/categories', {
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
            console.log(response)
            if(response.status >= 200 && response.status < 300){
                this.setState({
                    loading: false,
                    categories : response.categories
                })

            } else if(response.status >= 400)
                this.setState({
                    loading: false
            })
         }   
        );
    }
    
  
    render() {
        // console.log(this.state.auth)

        
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
        else{
            return (
                <React.Fragment>
                    <NotificationSystem ref="notificationSystem" />
                    <section className="content-body">
                        <Link to="/categories/new">Create New Category</Link>
                        
                        <Table
                        data={this.state.categories}
                        deleteItem = {this.deleteItem}
                    />
                    </section>
                </React.Fragment>
                
                
            );
            
        }


        
  }
}
