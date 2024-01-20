import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { addDoc, collection} from 'firebase/firestore';
import { db } from "./firebase";



const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");


  const handleSub = async (ele) => {
    try {
      ele.preventDefault();
      console.log("handleSub");

      const userObj1 = {
        username,
        password,
        email,
      }
      console.log("handleSub", userObj1);

      const docRef = await addDoc(collection(db,"signupper"),userObj1);
      console.log("docRef",docRef)
    } catch (error) {
      console.log(error, 'error')
    }
  }

  return (
    <>
      <div className="body2">
        <div className='wrapper'>
          <form onSubmit={handleSub}>
            <h1>Sign Up</h1>
            <div className="input-box">
              <input
              onChange={(e) => { setusername(e.target.value) }} 
              type="text" placeholder='Username' required />
            </div>
            <div className="input-box">
              <input
              onChange={(e) => { setpassword(e.target.value) }}
              type="Password" placeholder='Password' required />
            </div>
            <div className="input-box">
              <input
              onChange={(e) => { setemail(e.target.value) }}
              type="email" placeholder='Email' required />
            </div>
            <div className='forgot'>
              <p>Forgot the Password <a href="#">Forgot Password</a></p>
            </div>
            <div>
              <button type='submit' className='btn'><Link to="/">Sign up</Link></button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
