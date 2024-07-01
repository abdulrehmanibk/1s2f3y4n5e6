import React from 'react';
import './fourth.css';
import img4 from '../../image/trust1.webp';
// import img4 from '../../images/footer1.webp';
import img41 from '../../images/mail.png';
import img42 from '../../images/phone.png';
import img43 from '../../images/web-link.png';

const Fourth = () => {
  return (
    <>
    <div className='f4heading'>Get In Touch</div>
    <div className="fourth_container">
    <div className="fourth_left">
        <img src={img4} alt="" />
    </div>
    <div className="fourth_right">
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
    </div>
    </div>
    </>
  );
};

export default Fourth;