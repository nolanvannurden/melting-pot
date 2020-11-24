import axios from 'axios';
import React, {Component} from 'react';



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
            this.props.history.push('/feed')
        } 
        catch(err){ 
                alert(err.response.request.response)
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
                alert(err.response.request.response)
        }
    }

    render(){
        const {email, password, username} = this.state;
        return(<div>
            {this.state.newUser ? 
            <div>
							<div>
								<img src="https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table.jpg" alt="various foods" height={500}/>
                <h3>Register</h3>
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
							<div>
								<img src="https://img.freepik.com/free-photo/top-view-fast-food-with-copy-space_23-2148273099.jpg?size=626&ext=jpg" alt="american food" height={500}/>
                <h3>Login</h3>
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
								</div>
            </div>}
            </div>
        )
    }
}


export default Auth