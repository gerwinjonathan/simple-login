import React from 'react';
import './RegisterComponent.css';
import {Route, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';

export default class Register extends React.Component {
    render() {
        return(
            <div id="form" style={{height: '62%'}}>
                <div class="form-input">
                    <b>Name : </b><br />
                    <input type="text" class="form-control" id="username" placeholder="Input username."></input><br />
                </div>
                <div class="form-input">
                    <b>Email : </b><br />
                    <input type="email" class="form-control" id="email" placeholder="Input email."></input><br />
                </div>
                <div class="form-input">
                    <b>Password : </b><br />
                    <input type="password" class="form-control" id="password" placeholder="Input password."></input>
                </div>
                <div class="form-input">
                    <b>Confirm Password : </b><br />
                    <input type="password" class="form-control" id="confirm-password" placeholder="Input confirm password."></input><br />
                </div>
                <div class="form-submit">
                    <input type="submit" value="Register"></input>
                </div>
            </div>
        );
    }
}