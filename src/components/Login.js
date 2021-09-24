import React from 'react';
import './Login.css';
function Login() {
  return (
    <div className='login'>
      <img
        src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
        alt=''
      />

      <form>
        <input type='text' placeholder='Full name (required if registering)' />
        <input type='text' placeholder='Profile pic URL (optional)' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />

        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
