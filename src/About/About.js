import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const About = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h4>About Us</h4>
            <p>{user.email}</p>
        </div>
    );
};

export default About;