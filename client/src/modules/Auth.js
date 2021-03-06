class Auth {
    static authenticateToken(token){
        sessionStorage.setItem('token',token);
    }
    static isUserAuthenticated(){
        return sessionStorage.getItem('token')!== null;
    }
    static deAuthenticateUser(){
        sessionStorage.removeItem('token');
    }
    static getToken(){
        return sessionStorage.getItem('token');
    }
}
export default Auth;