import React from "react";
import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props){
        super();

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'', password:''});
    }
     
    handChange = event =>{
        const { value, name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className ='sing-in'>
                <h2>I ALREADY HAVE AN ACCOUNT</h2>
                <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>

                <form onSubmit={this.handleSubmit}> 
                    <input 
                       name='email' 
                       type='email' 
                       value={this.state.email} 
                       required 
                       onChange={this.handleChange} />
                    <label>Email</label>
                    <input 
                       name='password' 
                       type='password' 
                       value={this.state.password} 
                       required 
                       onChange={this.handleChange} />
                    <label>Password</label>
                </form>
            </div>
        )
    }
}

export default SignIn;