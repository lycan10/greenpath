import React from 'react'
import './signup.css'


const Signup = () => {
  return (
    <div className='signup-container'>
      <div className='signup-form'>
      <h1>Sign Up</h1>
        <form>
          <label>Email</label>
          <input type='email' placeholder='Enter your email'></input>
          <label>Password</label>
          <input type='password' placeholder='Enter your password'></input>
          <button>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
