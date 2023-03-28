import React, { useContext } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import '../Login/login.css'

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => console.error('error', error));
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login Now!</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='Your Email' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='Your Password' required/>
                </div>
                <button className='btn-submit' type='submit'>Login</button>
            </form> 
            <p>New to ema-john? <Link className='link' to='/signup'>Create a New Account</Link></p> 
        </div> 
    );
};

export default Login;