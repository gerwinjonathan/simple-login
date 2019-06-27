import React from 'react';
import '../login/LoginComponents.js';

export default class LoginLogin extends React.Component {
    render() {
        return (
            <div id="form" style={{height: '45%'}}>
                <div class="form-input">
                    <b>Username : </b><br />
                    <input type="text" class="form-control" id="username" placeholder="Input username."></input><br />
                </div>
                <div class="form-input">
                    <b>Password : </b><br />
                    <input type="password" class="form-control" id="password" placeholder="Input password."></input>
                </div>
                <div class="form-submit">
                    <input type="submit" value="Log In"></input>
                </div>
            </div>
        );
    }
}