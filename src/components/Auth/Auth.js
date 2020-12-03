import axios from 'axios';
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import './Auth.css';
import {loginUser} from '../../redux/reducer';




class Auth extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            newUser: false
        }
    }

    toggleNewUser = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = async (e) => {
        e.preventDefault();
        const {email, password} = this.state
        try {
            const user = await axios.post('/auth/login', {email, password})
            this.props.loginUser(user.data)
            console.log(this.props)
            // bring in with router 
            this.props.history.push('/feed')
        } 
        catch(err){ 
                alert(err)
        }
    }

    register = async (e) => {
        e.preventDefault();
        const {email, password, username} = this.state
        try {
            const user = await axios.post('/auth/register', {email, username, password})
            this.props.loginUser(user.data)
            this.props.history.push('/feed')
        } 
        catch(err){ 
                alert(err)
        }
    }

    render(){
        const {email, password, username} = this.state;
        return(<div>
            {this.state.newUser ? 
            <div>
				<div className="register-background">
								
                <h3 className="login-styling">Register</h3>
                <form onSubmit={e => this.register(e)}>
                    <input 
                        name="email" 
                        value={email} 
                        placeholder="Email" 
                        onChange={ e => this.changeHandler(e)}
                    />
                    <input 
                        name="username" 
                        value={username} 
                        placeholder="username" 
                        onChange={ e => this.changeHandler(e)}
                    />
                    <input 
                        name="password" 
                        type="password"
                        value={password} 
                        placeholder="password" 
                        onChange={ e => this.changeHandler(e)}
                    />
                    <button>Submit</button>
                     </form>
                    <button onClick={this.toggleNewUser}>Already a user?</button>
				</div>
            </div>
            :
            <div>
				<div className="login-background">
                 <h3 className="login-styling">Login</h3>
                    <form onSubmit={e => this.login(e)}>
                        <input 
                            name="email" 
                            value={email} 
                            placeholder="Email" 
                            onChange={ e => this.changeHandler(e)}
                        />
                        <input 
                            name="password" 
                            type="password"
                            value={password} 
                            placeholder="password" 
                            onChange={ e => this.changeHandler(e)}
                        />
                    <button>Submit</button>
                    
                </form>
                <button onClick={this.toggleNewUser}>Want to join?</button>
                        <h4 className="letter-to-audience">This is a website created for the sharing of recipes with your closest friends and family. The whole idea is to help each other perfect their cooking skills/recipes. This site was intended to help you discover new recipes and learn new cooking techniques. </h4>
				</div>
                    <div className="flex-horizontal link">
                        <Link to="/feed" className="input-container-button">
                            Log in
                        </Link>
                    </div>      
                </div>}
            </div>
        )
    }
}


const mapDispatchToProps = {
    loginUser
};

const mapStateToProps = (reduxState) => {
    const {user, isLoggedIn} = reduxState;
    return{
        user,
        isLoggedIn
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Auth))