import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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
                    <h2 className='title'>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput handleChange={this.handleChange} label ='email' type="email" name='email' value={this.state.email} required />
        
                        <FormInput handleChange={this.handleChange}type="password" label ='password' name='password' value={this.state.password} required />
                        <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                        </div>
                    </form>


                </div>
            )
        }
    
}