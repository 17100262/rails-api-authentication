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
        <div className="header-right">
            
            <span className="separator" />
            <div id="userbox" className="userbox">
            <a href="2.1.1.html#" data-toggle="dropdown">
                <figure className="profile-picture">
                <img src="https://www.fandangofanshop.com/media/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/d/a/dave_minion_plush_14.jpg" alt="Joseph Doe" className="rounded-circle" data-lock-picture="/!logged-user.jpg" />
                </figure>
                <div className="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
                <span className="name">John Doe Junior</span>
                <span className="role">administrator</span>
                </div>
                <i className="fa custom-caret" />
            </a>
            <div className="dropdown-menu">
                <ul className="list-unstyled mb-2">
                <li className="divider" />
                
                <li>
                    <Link role="menuitem" tabIndex={-1} to='/campaigns/new' ><i className="fas fa-power-off" /> Create Campaign</Link>
                </li>
                <li>
                    <Link role="menuitem" tabIndex={-1} to="/profile"><i className="fas fa-user" /> My Profile</Link>
                </li>
                <li>
                    <Link role="menuitem" tabIndex={-1} to="/profile/edit"><i className="fas fa-user" /> Edit Profile</Link>
                </li>
                
                <li>
                    <Link role="menuitem" tabIndex={-1} to='/' onClick={props.onClickLogOut}><i className="fas fa-power-off" /> Logout</Link>
                </li>
                
                

                </ul>
            </div>
            </div>
        </div>
    );

}

const ThemeHeader = function(props) {
    let showHeaderRight,campaignCreate
    if(props.auth){
        
        showHeaderRight = <HeaderRight onClickLogOut={props.logout}/>
        
    }
    else{
        campaignCreate = <React.Fragment>
        <li className="nav-item">
        <Link className="nav-link" to="/signin">Sign In</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
        </React.Fragment>

    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
         <a href="/" className="navbar-brand">
          <img src="https://preview.oklerthemes.com/porto-admin/2.1.1/img/logo-default.png" width={75} height={35} /> 
         </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="navbar-collapse navbar-right collapse show" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                {campaignCreate}
            </ul>
          </div>
        {showHeaderRight}
        </nav>
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