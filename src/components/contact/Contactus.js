import React, { useRef,useState } from 'react'
import "./Contact.css"
import imaged from "../../assests/contact.jpg"
import emailjs from "@emailjs/browser";
import email from "../../assests/OIP-removebg-preview.png";
import phone from "../../assests/phone-removebg-preview.png";


const ContactUS = () => {

  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
 

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
    })
}


const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();
  setButtonText("Sending...");
  emailjs.sendForm('service_yr115oq','template_taz1ovi',form.current,'K--Az9q41HmbSEqJv')
  .then((result) => {
    setButtonText("Sent");
    setTimeout(()=>{
      setButtonText("Send");
    },3000)
    setStatus({ succes: true}); 
}, (error) => {
  setStatus({ succes: false, message: 'Something went wrong, please try again later.'});});

  setFormDetails(formInitialDetails);
};

  return (
    <div className='mainbody'>
        <img src={imaged} alt="let's Connect" className='contactimage'/>
        <div className='lefthead'>
         <div className='c_1'><h2 className='c_head'>Connect With Us</h2>
         <hr width="20%" color='#fff'/></div>
         <div className='para'>
          <p>Lorem23vkdnknkdnbnknbknkdnvknknknbbbbbbbbbbbbbbbbb</p>
          <p>Lorem23vkdnknkdnbnknbknkdnvknknknbbbbbbbbbbbbbbbbb</p>
          <p>Lorem23vkdnknkdnbnknbknkdnvknknknbbbbbbbbbbbbbbbbb</p>
          <p>Lorem23vkdnknkdnbnknbknkdnvknknknbbbbbbbbbbbbbbbbb</p>
         </div>
         <div className='connect'>
         <div className='emailround'> <img src={email} alt='email' className='emails'/> <p className='paratext'>hellotext@gmail.com</p></div>
        <div className='phoneround'>  <img src={phone} alt="phone" className='phones'/> <p className='paratext'>+91 9345 3432 23</p></div>
         </div>
        </div>
      <div className='form'>  
    <form ref={form} onSubmit={sendEmail} className='formbody'>
      <h1>Contact Us</h1>
     <div className='input1'>
      <input type='text' className='name' placeholder='Name' value = {formDetails.name} name='user_name' onChange={(e) => onFormUpdate('name', e.target.value)} required/>
       <input type='email' className="email" placeholder='Email' value={formDetails.email} name='user_email' onChange={(e) => onFormUpdate('email', e.target.value)} required/>
       </div>  
       <div >
       <textarea cols={56} rows={8} className='message' placeholder='Message' value={formDetails.message} name='message' onChange={(e) => onFormUpdate('message', e.target.value)} required/>   
       </div>
       <button className='sending'>{buttonText}</button>  
       </form>
       </div>
    </div>
  )
}

export default ContactUS




// <div className='rightbody'>
//         <div className='contactheading'>
//            <span className='headingtext'>Let's Connect</span> 
//         </div>

//       <form ref={form} onSubmit={sendEmail} className='formbody'>
//       <div className='imput1'>
//      <input type='text' className='name' placeholder='Name' value = {formDetails.name} name='user_name' onChange={(e) => onFormUpdate('name', e.target.value)} required/>
//       <input type='email' className="email" placeholder='Email' value={formDetails.email} name='user_email' onChange={(e) => onFormUpdate('email', e.target.value)} required/>
//       </div>  
//       <div >
//       <textarea cols={23} className='message' placeholder='Message' value={formDetails.message} name='message' onChange={(e) => onFormUpdate('message', e.target.value)} required/>   
//       </div>
//       <button className='sending'>{buttonText}</button>  
//       </form>
//     </div>