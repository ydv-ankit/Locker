import React, { useState } from 'react'
import { getCookieValue, getPayload } from '../utils/getPayload'
import AuthLoader from './AuthLoader'
import { useNavigate } from 'react-router-dom'

const AddData = () => {
  const navigate = useNavigate();
  const cookie = getCookieValue('userToken')
  const userID = getPayload(cookie).userID

  const [site, setSite] = useState('')
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [other_details, setOtherDetails] = useState('')

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // errors
  const [siteError, setSiteError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const req = {
    userID,
    site,
    url,
    username,
    email,
    password,
    other_details
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const result = await fetch("http://localhost:8080/add", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
      })
      const data = await result.json();
      console.log(data)
      if (result.ok) {
        navigate('/data')
      } else {
        setSiteError(data.errors.site)
        setEmailError(data.errors.email)
        setPasswordError(data.errors.password)
      }
    }
    catch (err) {
      console.log(err)
      setError('Error Occured !! Cannot add data')
    }
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <AuthLoader />
    )
  }

  return (
    <div className="container">
      <div className="box">
        <div className="head">
          <div className="side"></div>
          <div>Add Data</div>
          <div className="side"></div>
        </div>
        <div className="details">
          <div>{error}</div>
        </div>
        <div className="details">
          <input
            type="text"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            placeholder='Site name'
            required />
        </div>
        <div className="error email">{siteError}</div>
        <div className="details">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='URL (if any)' />
        </div>
        <div className="error"></div>
        <div className="details">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username' />
        </div>
        <div className="error"></div>
        <div className="details">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email ID'
            required />
        </div>
        <div className="error email">{emailError}</div>
        <div className="details">
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required />
        </div>
        <div className="error email">{passwordError}</div>
        <div className="details">
          <input
            type="text"
            value={other_details}
            onChange={(e) => setOtherDetails(e.target.value)}
            placeholder='Other Details' />
        </div>
        <div className="details btn">
          <input
            type="submit"
            value={"Add"}
            onClick={handlesubmit} />
        </div>
      </div>
    </div>
  )
}

export default AddData
