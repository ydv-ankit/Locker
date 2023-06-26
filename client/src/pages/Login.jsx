import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <div className="container container-login">
      <div className="box">
        <div className="head">
          <span className='side'></span>
          <div>Login</div>
          <span className='side'></span>
        </div>
        <div className="content">
          <form>
            <div className="details">
              <input type="email" id="email" name='email' placeholder='Email ID' spellCheck="false" autoComplete='true' required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="error email">Error Email ID</div>
            <div className="details">
              <input type="password" id="password" name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="error password">Error password</div>
            <div className="details btn">
              <input type="submit" value={"Login"} className='submit' />
            </div>
            <div className="details forgot-btn">
              <input className=' submit' type="submit" value={"Forgot Password"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
