import React, { useState } from 'react';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';

function Signup() {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return alert('Passwords do not match');
        }
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            // redirect to home page
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSignup}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6}/>
                </label>
                <label>
                    Confirm Password:
                    <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} required minLength={6} />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;