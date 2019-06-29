import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Auth from '../modules/Auth';

// const LoginNavLinks = (() => {
//     return(
//     <React.Fragment>
//         <li className="nav-item">
//             <Link className="nav-link" to='/signin'>Sign In</Link>
//         </li>
//         <li className="nav-item">
//             <Link className="nav-link" to='/signup'>Sign Up</Link>
//         </li>
//     </React.Fragment>
//     );


// });

// const LogoutNavLinks = ((props) => {
    
//     return(
//     <li className="nav-item">
//         <Link className="nav-link" to='/home' onClick={props.logouthandler}>Sign Out</Link>
//     </li>
//     );


// });

const HeaderRight = function(props){
    // console.log(props.onClickLogOut);
    return(
            
    <li className="dropdown dropdown-mega dropdown-mega-signin signin logged ml-lg-3" id="headerAccount">
        <a className="dropdown-item pl-lg-4" href="/">Johndoe123</a>
        <ul className="dropdown-menu">
          <li>
            <div className="dropdown-mega-content py-2">
              <div className="row">
                <div className="col">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                    <Link role="menuitem" tabIndex={-1} to='/campaigns/new' className="nav-link border border-left-0 border-top-0 border-right-0" >Create Campaign</Link>
                </li>
                <li className="nav-item">
                    <Link role="menuitem" tabIndex={-1} to='/profile' className="nav-link" >My Profile</Link>
                </li>
                <li className="nav-item">
                    <Link role="menuitem" tabIndex={-1} to='/profile/edit' className="nav-link" >Edit Profile</Link>
                </li>
                <li className="nav-item">
                    <Link role="menuitem" tabIndex={-1} to='/' onClick={props.onClickLogOut} className="nav-link" >Log Out</Link>
                </li>
                

                </ul>
            </div>
            </div>
            </div>
        </li>
        </ul>
        </li>
    );

}

const ThemeHeader = function(props) {
    let showHeaderRight,campaignCreate
    if(props.auth){
        
        showHeaderRight = <HeaderRight onClickLogOut={props.logout}/>
        
    }
    else{
        campaignCreate = <React.Fragment>
        <li className="">
        <Link className="" to="/signin">Sign In</Link>
        </li>
        <li className="">
        <Link className="" to="/signup">Sign Up</Link>
        </li>
        </React.Fragment>

    }
    return(
      <header id="header" className="header-effect-shrink">
        <div className="header-body">
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column justify-content-start">
                <div className="header-logo">
                  <a href="/">
                    React App
                  </a>
                </div>
              </div>
              <div className="header-column justify-content-end">
                <div className="header-nav">
                  <div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">
                    <nav className="collapse">
                      <ul className="nav flex-column flex-lg-row" id="mainNav">
                        {campaignCreate}
                        {showHeaderRight}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>  
          </div>
        </div> 
      </div>
    </header>    
                            
        /*
        <header className="header">
            <div className="logo-container">
                <a href="/" className="logo">
                <img src="https://preview.oklerthemes.com/porto-admin/2.1.1/img/logo-default.png" width={75} height={35} alt="Porto Admin" /> </a>
                <div className="d-md-none toggle-sidebar-left" data-toggle-className="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
                    <i className="fas fa-bars" aria-label="Toggle sidebar" />
                </div>
            </div>
            <div className="header-right">
                {campaignCreate}
                

            </div>
            {showHeaderRight}            
        </header>
        */

    );
    
}

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth: Auth.isUserAuthenticated()
        }
        // this.handleLogOut = this.handleLogOut.bind(this);
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps) {
        // console.log(`componentwill recieve props ${nextProps.auth}`)
        // this.setState({auth:  nextProps.auth})
    }
    
    render() {
        const isAuthenticated = this.props.auth
        // console.log(this.props.logOutHandler)
        
        return(
            <ThemeHeader auth={isAuthenticated} logout={this.props.logOutHandler} />
        );
        
    }
}

// return (
            
            
//     <nav className="navbar navbar-expand-sm bg-light">
//     <ul className="navbar-nav">
//         <li className="nav-item">
//             <Link className="nav-link" to='/home'>Home</Link>
//         </li>
        
        
        
//             {isAuthenticated ? (
//                     <LogoutNavLinks logouthandler={this.props.logOutHandler} />
//             ) : (
//                     <LoginNavLinks />
//             )}
        
        
//     </ul>
//     </nav>

// )