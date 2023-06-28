import React, { useState } from 'react'
import AuthLoader from './AuthLoader'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [error_email, setErroremail] = useState('')
  const [error_password, setErrorpassword] = useState('')

  const [emailid, setEmailid] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsloading] = useState(false)

  async function handleSignup(e) {
    e.preventDefault()

    setErroremail('')
    setErrorpassword('')

    const req = {
      email: emailid,
      password: password
    }
    setIsloading(true)

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      });
      const data = await response.json();

      if (response.ok) {
        document.cookie = "userToken=" + data.success;
        navigate('/data')
      } else {
        // Handle login error based on the response
        setErroremail(data.error.email)
        setErrorpassword(data.error.password)
      }
    } catch (error) {
      console.error('Error occurred while authenticating', error);
    }
    setIsloading(false)
  }
  
  if (isLoading) {
    return (
      <AuthLoader />
    )
  }

  return (
    <div className="container container-login">
      <div className="box">
        <div className="head">
          <span className='side'></span>
          <div>Log In</div>
          <span className='side'></span>
        </div>
        <div className="content">
          <div className='form'>
            <div className="details">
              <input
                type="email"
                value={emailid}
                onChange={(e) => setEmailid(e.target.value)}
                name='email'
                placeholder='Email ID'
                spellCheck="false"
                autoComplete='true' required />
            </div>
            <div className="error email">{error_email}</div>
            <div className="details">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name='password'
                placeholder='Password' required />
            </div>
            <div className="error password">{error_password}</div>
            <div className="details btn login">
              <input
                type="submit"
                value={"Login"} 
                onClick={handleSignup} />
            </div>
            <div className="details forgot-btn">
              <input className=' submit' type="submit" value={"Forgot Password"} />
            </div>
            <div className="details btn">
              <input type="button" value="Sign Up" onClick={()=>navigate('/signup')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login