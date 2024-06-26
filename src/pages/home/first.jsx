import React, { useState } from 'react';
import './first.css';
import img1 from '../../images/newonline.png'
import img2 from '../../image/home1.png'
import img3 from '../../image/home2.png'
import img4 from '../../image/home2.webp'

const First = () => {
  // const [image, setImage] = useState(img3)
  // let images = [img1,img2,img3];
  // setInterval(() => {
  //   // let rnd = Math.floor(Math.random)*images.length;
  //   const rnd = Math.floor(Math.random() * images.length);
  //   setImage(images[rnd]);
  // }, 5000);

  return (
    <>  
      <div className="first_container">
        <div className="fleft">
        <h2>Your Ideas, Our Expertise</h2> 
        <p><span>You know what? </span>We turn your ideas into global online identities
          <br />
            <span>Discover ! </span> how we create digital solutions that resonate worldwide.</p>
        <a href="#services"><button>see services</button></a>
        </div>
        <div className="fright">
          <img src={img4} alt="" />
        </div>
      </div>
        
    </>
  );
};

export default First;