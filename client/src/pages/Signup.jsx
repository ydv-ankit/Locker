import React, { useRef, useState } from 'react'
import AuthLoader from './AuthLoader'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const error_name = useRef('')
  const error_email = useRef('')
  const error_password = useRef('')

  const [uservalue, setUservalue] = useState('')
  const [emailvalue, setEmailvalue] = useState('')
  const [passwordvalue, setPasswordvalue] = useState('')

  const [isLoading, setIsloading] = useState(false)

  async function handleSignup(e) {
    e.preventDefault()

    error_name.current = ''
    error_email.current = ''
    error_password.current = ''

    const req = {
      "name": uservalue,
      "email": emailvalue,
      "password": passwordvalue
    }
    setIsloading(true)
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      });

      if (response.ok) {
        navigate('/')
      } else {
        // Handle signup error based on the response
        const error = await response.json();
        error_name.current = error.errors.name
        error_email.current = error.errors.email
        error_password.current = error.errors.password
      }
    } catch (error) {
      console.error('Error occurred while making the signup request', error);
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
          <div>Sign Up</div>
          <span className='side'></span>
        </div>
        <div className="content">
          <div className='form'>
            <div className="details">
              <input
                type="text"
                value={uservalue}
                onChange={(e) => setUservalue(e.target.value) }
                name='name'
                placeholder='Full Name'
                spellCheck="false"
                autoComplete='false' required />
            </div>
            <div className="error name-error">{error_name.current}</div>
            <div className="details">
              <input
                type="email"
                value={emailvalue}
                onChange={(e) => setEmailvalue(e.target.value) }
                name='email'
                placeholder='Email ID'
                spellCheck="false"
                autoComplete='true' required />
            </div>
            <div className="error email">{error_email.current}</div>
            <div className="details">
              <input
                type="password"
                value={passwordvalue}
                onChange={(e) => setPasswordvalue(e.target.value) }
                name='password'
                placeholder='Password' required />
            </div>
            <div className="error password">{error_password.current}</div>
            <div className="details btn">
              <input
                type="submit"
                value={"Sign Up"}
                className='submit' onClick={handleSignup} />
            </div>
            <div className="details btn">
              <input type="button" value="Login" onClick={() => navigate('/')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
