import React from 'react'

const Signup = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="head">
          <span className='side'></span>
          <div>Sign Up</div>
          <span className='side'></span>
        </div>
        <div className="content">
          <form>
            <div className="details">
              <input type="text" id="name" name='name' placeholder='Your Name' spellCheck="false" autoComplete='false'/>
            </div>
            <div className="error name">Error Name</div>
            <div className="details">
              <input type="email" id="email" name='email' placeholder='Email ID' spellCheck="false" autoComplete='true'/>
            </div>
            <div className="error email">Error Email ID</div>
            <div className="details">
              <input type="password" id="password" name='password' placeholder='Password'/>
            </div>
            <div className="error password">Error password</div>
            <div className="details btn">
              {/* <button>Sign Up</button> */}
              <input type="submit" value={"Sign Up"} className='submit'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
