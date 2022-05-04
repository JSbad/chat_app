import axios from 'axios';
import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onLogin = (loggedInUser) => {
        this.props.login(loggedInUser);
    }

    login = async () => {
        try {
            let response = await axios.get('api url + this.state.username');
            this.onLogin(response.data);
        } catch (err) {
            let el = document.querySelector('.invalid-comb');
            el.innerText = 'Invalid Username/Password';
        }
    }

    handleLogin = e => {
        this.setState({username: e.target.value,
                       password: e.target.value});
    }

    render () {
        return(
            <div className = 'background'>
                <div className = 'login-container'>
                    <form className ='login'>
                        <label>Login</label>
                        <input value={this.state.username} onChange={(e) => this.handleLogin(e)}
                        className = 'username' id = 'username' placeholder = 'Username' />
                        <input type = 'password' value={this.state.password} onChange={(e) => this.handleLogin(e)}
                        className = 'password' id = 'password' placeholder = 'Password'/>
                            
                        
                    </form>
                </div>
            </div>
        )
    }

}