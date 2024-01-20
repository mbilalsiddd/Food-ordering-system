import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from "./firebase";




const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");


  const handleSubmit = async (ele) => {
    try {
      ele.preventDefault();
      console.log("handleSubmit");

      const userObj = {
        username,
        password,
      }
      console.log("handleSubmit", userObj);

      const docRef = await addDoc(collection(db, "users"), userObj);
      console.log("docRef", docRef)
    } catch (error) {
      console.log(error, 'error')
    }
  }

  // console.log("username",username);
  // console.log("password",password);

  return (
    <div>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input onChange={(e) => { setusername(e.target.value) }} type="text" placeholder='Username' required />
          </div>
          <div className="input-box">
            <input
              onChange={(e) => { setpassword(e.target.value) }}
              type="Password" placeholder='Password' required />
          </div>
          <div className='forgot'>
            <p>Forgot the Password <a href="#">Forgot Password</a></p>
          </div>
          <div>
            <button type='submit' className='btn'><Link to='/Managingstore'>Login</Link></button>


          </div>
          <div className="register-link">
            <p>Don't have an account? <Link to="/Signup">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
