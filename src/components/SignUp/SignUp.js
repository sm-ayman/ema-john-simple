import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import '../SignUp/signUp.css';

const SignUp = () => {
    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(email, password, confirmPassword);

        if (password.length < 6 ) {
            setError('Type at least 6 characters!!')
            return;
        }

        if (password != confirmPassword) {
            setError('Passwords did not match!!')
            return;
        }

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>console.error('error', error));
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='Your Email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='Password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='password' name='confirmPassword' placeholder='Enter Password Again' required />
                </div>
                <button className='btn-submit' type='submit'>Sign Up</button>
            </form> 
            <p>Already have an account? <Link className='link' to='/signup'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;