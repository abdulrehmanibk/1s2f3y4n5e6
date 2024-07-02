import React from 'react';
import './fourth.css';
import img4 from '../../image/trust1.webp';
import img41 from '../../images/mail.png';
import img42 from '../../images/phone.png';
import img43 from '../../images/web-link.png';

import toast from 'react-hot-toast';

import { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';


const Fourth = () => {
    const [buttonText, setButtonText] = useState("Send");
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID , form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_ID,
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Message Sent Successfuly")
          setButtonText("Send");

        },
        (error) => {
          toast.error(error)
        },
      );
  };


  return (
    <>
    <div className='f4heading'>Get In Touch</div>
    <div className="fourth_container">
    <div className="fourth_left">
        <img src={img4} alt="" />
    </div>
    {/* <div className="fourth_right">
        <div className="contact">
            <img src={img41} alt="" />
            <p>abrm.ibk@gmail.com</p>
        </div>
        <div className="contact">
            <img src={img42} alt="" />
            <p>+92 314 5443143</p>
        </div>
        <h4>Associated with</h4>
        <h2>E-Tree Solutions</h2>
        <div className="contact">
            <img src={img41} alt="" />
            <p>info@etreesolutions.com</p>
        </div>
        <div className="contact">
            <img src={img42} alt="" />
            <p>(051) 6134521</p>
        </div>
        <div className="contact">
            <img src={img43} alt="" />
            <a href="https://www.etreesolutions.com/" target="_blank" rel="noopener noreferrer"><p>etreesolutions.com</p></a>
        </div>
    </div> */}
    <div className="fourth_right">
    <form ref={form} onSubmit={sendEmail}>
      <label className='label' htmlFor="user_name">Name</label>
      <input type="text" name="client_name" id='user_name' placeholder='Your Good Name' />

      <label className='label' htmlFor="user_email">Email</label>
      <input type="email" name="client_email"  id="user_email" placeholder='Contact Email'/>

      <label className='label' htmlFor="message">Message</label>
      <textarea name="message" id="message" placeholder='Describe Your Thoughts..'/>

      <input type="submit" value={buttonText} />
    </form>

    </div>
    </div>
    </>
  );
};

export default Fourth;