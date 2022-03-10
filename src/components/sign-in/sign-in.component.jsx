import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss'

export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }

    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]:value})
    }

    handleChanger
    render()
        {
            return(
                <div className='sign-in'>
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput handleChange={this.handleChange} label ='email' type="email" name='email' value={this.state.email} required />
        
                        <FormInput handleChange={this.handleChange}type="password" label ='password' name='password' value={this.state.password} required />
            
                        <input type="submit" value='Submit form'/>
                    </form>


                </div>
            )
        }
    
}