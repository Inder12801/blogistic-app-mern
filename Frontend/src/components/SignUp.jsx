import React, { useContext, useState } from 'react';
import BlogContext from '../context/BlogContext';

const SignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser } = useContext(BlogContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        if (firstname && lastname && email && password) {
            setUser({ "firstname": firstname, "lastname": lastname, "email": email, "password": password });
            console.log({ ...user });
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');

        } else {
            alert("Please fill all the fields");
        }
    };

    return (
        <div className='signUpDiv'>
            <form onSubmit={handleSubmit} className='signUpForm'>
                <span>Enter details</span>
                <div className='inputDiv'>
                    {/* <label htmlFor="firstname">First Name</label> */}
                    <input
                        type="text"
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder='First Name'
                    />
                </div>
                <div className='inputDiv'>
                    {/* <label htmlFor="lastname">Lsst Name</label> */}
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder='Last Name'
                    />
                </div>

                <div className='inputDiv'>
                    {/* <label htmlFor="email">Email</label> */}
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                    />
                </div>

                <div className='inputDiv'>
                    {/* <label htmlFor="password">Password</label> */}
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                    />
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
