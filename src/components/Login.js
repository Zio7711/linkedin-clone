import React, { useState } from 'react';
import { auth } from '../firebase';
import './Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const register = () => {};

  const loginToApp = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login'>
      <img
        src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
        alt=''
      />

      <form>
        <input
          type='text'
          placeholder='Full name (required if registering)'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type='text' placeholder='Profile pic URL (optional)' />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{' '}
        <span className='login_register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
