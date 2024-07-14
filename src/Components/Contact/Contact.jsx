/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  /*const [result, setResult] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    setResult('Form submitted successfully!'); // Set the result state based on the form submission result
  };*/
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4a95c39b-2b3c-4013-837b-480a7cae5932");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message<img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through the contact form or find our contact information below. 
            Your feedback, questions, and suggestions are important to us as we strive 
            to provide exceptional service to our college community.</p>
            <p> SOME OF COURSES:-
CHRISTOLOGY,
BIBLE DOCTRINE 
                                                    <li>NEW TESTAMENT THEOLOGY</li>  
                                                      <li>OLD TESTAMENT THEOLOGY</li>
                                                      <li>SOTERIOLOGY</li> 
                                                      <li>CHURCH ADIMINISTRATION </li>
                                                      <li>BIBLICAL LEADER SHIP </li>
                                                      <li>PNEUMATOLOGY</li>
                                                     <li> ESCHATOLOGY</li>
                                                      <li>COUNCILING  </li>        
</p>
        <ul>
          <li><img src={mail_icon} alt=""/>thewayofvictoryinternationalbi@gmail.com</li>
          <li><img src={phone_icon} alt=""/>+251-967-628-051/TEL:+251-913-468-589</li>
          <li><img src={location_icon} alt=""/>The way of victory, East Wollega
          <br/>Oromia, Ethiopia</li>
        </ul>
      </div>
        <div className="contact-col">
  <form onSubmit={onSubmit}>
    <div>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
    </div>
    <div>
      <label htmlFor="middleName">Middle Name</label>
      <input type="text" id="middleName" name="middleName" placeholder="Enter your middle name" />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
    </div>
<div>
<label htmlFor="program Name">Program Name</label>
<input type ="text" name='name' placeholder='Enter your program name'required/>
</div>
<div>
<label htmlFor="Address">Your Address</label>
<input type ="text" name='name' placeholder='Enter your address'required/>
</div>
<div>
<label  htmlFor="Email">Your email</label>
<input type ="email" name='email' placeholder='Enter your email'required/> 
</div>
<div>
<label  htmlFor="phone number">phone Number </label>
<input type="tel" name='phone'placeholder='Enter your mobile number'required/>
</div>
<label>Write your messages</label>
<textarea name ="message" id=""cols="49"rows="7"placeholder='Enter your message here'required></textarea>
<div>
  <label htmlFor="document">Upload Document</label>
  <input type="file" id="document" name="document" accept=".pdf,.doc,.docx" />
</div>
          <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
