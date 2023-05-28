import React from 'react'
import "./Login.css"
import baimage from "../../assests/login_oage.png"
import {motion} from "framer-motion"
import google from "../../assests/imageback-removebg-preview.png"
import facebook from "../../assests/fb-logo-removebg-preview.png"

const LoginPage = () => {
  return (
    <motion.div className='loginmain'>
      <img src={baimage} alt='login image' className='loginimage'/>
      <div className='loginform'>
      <div className='loginhead'>
        <span className='sign'>Sign In</span> <br/>
        <p className='account'> New to NumberWala ? <a href="#"className='linktext'>Create an Account</a></p>
      </div>
        <form className='formcontent'>
          <label> <input type="text" className='loginname' name = "Name" placeholder='Type Your Username' required/></label>
          <label> <input type="password" className='pass' name = "Password" placeholder='Enter Your Password' required/></label>
          <button className='signin'> Sign In</button>
          <p className='lowertext'>Or Sign in with</p>  
          <div className='loginicons'>
            <div className='google'>
              <img src={google} className='logog' alt='googlelogo'/>
              <span >Sign in with Google</span>
            </div>
            <div className='facebook'>
            <img src={facebook} className='logog' alt='googlelogo'/>
              <span >Sign in with Facebook</span>
            </div>
          </div>      
          </form>
      </div>
    </motion.div>
  )
}

export default LoginPage
