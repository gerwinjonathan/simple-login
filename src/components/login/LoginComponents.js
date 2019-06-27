import React from 'react';
import './LoginComponent.css';
import ReactIcon from '../../assets/png/React.png';
import LockIcon from '../../assets/png/lock.png';
import Register from '../register/RegisterComponent.js';
import LoginLogin from '../newlogin/Login.js';
import {Route, NavLink, BrowserRouter as Router, Switch} from 'react-router-dom';

export default class Login extends React.Component {
    constructor() {
        super();
        this.setState({
            'username' : '',
            'password' : ''
        });
    }

    render () {
        return(
            <Router>
            <div class="login-box scale-in-center">
            <div id="header-box">
                <img src={LockIcon} id="lock-logo" alt="logo"></img>
                <b id="plus"> + </b>
                <img src={ReactIcon} id="react-logo" alt="Logo"></img><br />
                <b>Simple Login with React</b><br />
            </div>
            <div id="content-box">
                    <nav>
                        <NavLink activeClassName="active" to="/"><div id="login">   
                            <b>Login</b>
                        </div></NavLink>

                        <NavLink to ="/register"><div id="register">
                            <b>Register</b>
                        </div></NavLink>
                    </nav>
            </div>
            <Switch>
                <Route exact path="/" component={LoginLogin} />
                <Route path="/register" component={Register} />
            </Switch>
        </div>
        </Router>
        );
    }
}