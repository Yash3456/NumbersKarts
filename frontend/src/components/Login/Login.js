import React from 'react'
import "./Login.css"
import baimage from "../../assests/login-page-women2.png";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaUser } from 'react-icons/fa';
import { FaLockOpen } from 'react-icons/fa';


const LoginPage = () => {
  return (
    <div className='loginmain'>
      <motion.div className="loginimage"
        initial={{x:'-7rem',y:'-7rem',opacity:'0'}}
        whileInView={{ x: 0,y:0, opacity: 1 }}
        transition={{
          duration: 4,
          type: "spring",
          bounce:0.7,
        }}
      >
        <img src={baimage} alt='login_image' className='log-image' />
      </motion.div>
      <motion.div className="loginform-container"
      initial={{x:'7rem',opacity:'0'}}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 4,
          type: "spring",
          
        }}
      >

        <div className='loginhead'>
          <span className='sign'>Sign In</span> <br />

          <p className='account'> New to NumberWala ? <a href="#" className='linktext'>Create an Account</a></p>
        </div>
        <form className='formcontent'>
          <label className='login-input'>
            <span className='input-image'><FaUser size="1.2rem" /></span>
            <input type="text" className='loginname' name="Name" placeholder='Type Your Username' required /></label>
          <label className='login-input'>
            <span className='input-image'><FaLockOpen size="1.2rem" /></span>
            <input type="password" className='pass' name="Password" placeholder='Enter Your Password' required />
          </label>

          <button className='button'> Sign In</button>
          <p className='lowertext orangeText'>Or Sign in with</p>
          <div className='loginicons '>
            <div className='google '>
              <FaGoogle size="1.6rem" color="orangered" />
              <span className='secondaryText'>Sign in with Google</span>
            </div>
            <div className='facebook'>
              <FaFacebook size="1.6rem" color="blue" />
              <span className='secondaryText'>Sign in with Facebook</span>
            </div>
          </div>
        </form>
      </motion.div>


    </div>
  )
}

export default LoginPage
