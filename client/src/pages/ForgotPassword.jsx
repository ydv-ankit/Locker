import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ForgotPassword.css'

const ForgotPassword = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="box">
        <div className="center">
          Please write your query to <strong>Ankit Ydv</strong>
          <div className="mail">
            <a href="mailto:ankityadav11241@gmail.com">ankityadav11241@gmail.com</a>
          </div>
          <div className="mail">
            <a href="https://twitter.com/ydvtwts">Twiter ( ydvtwts )</a>
          </div>
          <div className="mail">
            <a href="https://linkedin.com/in/ydv-ankit">Linked In ( ydv-ankit )</a>
          </div>
        </div>
        <div className="details btn">
          <input type="button" value={"Back to Login"} onClick={()=> navigate('/')}/>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
