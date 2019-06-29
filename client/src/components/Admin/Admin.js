import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

{/*
const Sidebar = function(){
    return(
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
          <ul className="nav nav-pills flex-column">
            { <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin Home</Link>
            </li> }
            <li className="nav-item">
              <Link className="nav-link" to="/user_management">User Management</Link>
            </li>
            
          </ul>

          
          
        </nav>

    );

}
*/}
export const TableBody = function(props){
    return(
        <tbody>

            { props.rows.map(function(data_ele,j){
                return(<tr key={j}>
                    {props.cols.map(function(head_ele,i){
                        return(<td key={i}>{data_ele[head_ele]}</td>);

                    })
                    }
                </tr>);

            })

            }


        </tbody>
    );
}
export const TableHeader = function(props){
    return(
        <thead>
            <tr>
                {props.header.map(function(column,i){
                    return <th key={i}>{column} </th>
                })}
            </tr>

        </thead>


    );
}
export const Table = function(props){
    return (
        <table className="table table-striped">
            <TableHeader header={props.header} />
            <TableBody rows={props.data} cols={props.header} />

        </table>

    );

}

const Body = function(){
    return(

        <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
          <h1>Dashboard</h1>

          
          <h2>Section title</h2>
          <div class="table-responsive">
            <Table header={["id","email","number"]} data={
                [
                    {
                        "id":1,
                        "email": 1,
                        "number":1
                    },
                    {
                        "id":2,
                        "email":2,
                        "number":2
                    }

                ]
            } />
          </div>
        </main>

    );
}

const PortoSidebar= function(props){
    return(
        <aside id="sidebar-left" className="sidebar-left">
            <div className="sidebar-header">
                <div className="sidebar-title">
                Navigation
                </div>
                <div className="sidebar-toggle d-none d-md-block" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
                <i className="fas fa-bars" aria-label="Toggle sidebar" />
                </div>
            </div>
            <div className="nano">
                <div className="nano-content">
                <nav id="menu" className="nav-main" role="navigation">
                    <ul className="nav nav-main">
                        <li className="nav-active">
                            <Link className="nav-link" to="/user_management">
                            <i className="fas fa-home" aria-hidden="true" />
                            <span>User Management</span>
                            </Link>
                        </li>
                        <li className="nav-active">
                            <Link className="nav-link" to="/categories">
                            <i className="fas fa-home" aria-hidden="true" />
                            <span>Categories</span>
                            </Link>
                        </li>
                        <li className="nav-active">
                            <Link className="nav-link" to="/campaigns">
                            <i className="fas fa-home" aria-hidden="true" />
                            <span>Campaigns</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
            </aside>

    );

}
export default class Admin extends Component {
    constructor(props){
        super(props);
        
    }
    
  render() {
    return (
        <PortoSidebar />  
    );
  }
}
