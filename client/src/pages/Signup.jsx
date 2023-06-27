import React, { useState } from 'react'
import AuthLoader from './AuthLoader'

const Signup = () => {

  const [error_name, setErrorname] = useState('')
  const [error_email, setErroremail] = useState('')
  const [error_password, setErrorpassword] = useState('')

  const [userName, setUsername] = useState('')
  const [emailid, setEmailid] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsloading] = useState(false)

  async function handleSignup(e) {
    e.preventDefault()
    console.log()

    setErrorname('')
    setErroremail('')
    setErrorpassword('')

    const req = {
      name: userName,
      email: emailid,
      password: password
    }
    setIsloading(true)
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      });

      if (response.ok) {
        window.location.replace("/");
      } else {
        // Handle signup error based on the response
        const error = await response.json();
        setErrorname(error.errors.name)
        setErroremail(error.errors.email)
        setErrorpassword(error.errors.password)
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
          <form onSubmit={handleSignup}>
            <div className="details">
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                name='name'
                placeholder='Your Name'
                spellCheck="false"
                autoComplete='false' required />
            </div>
            <div className="error name-error">{error_name}</div>
            <div className="details">
              <input
                type="email"
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
                onChange={(e) => setPassword(e.target.value)}
                name='password'
                placeholder='Password' required />
            </div>
            <div className="error password">{error_password}</div>
            <div className="details btn">
              <input
                type="submit"
                value={"Sign Up"}
                className='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
