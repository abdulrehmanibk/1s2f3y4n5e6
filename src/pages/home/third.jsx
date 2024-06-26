import React from 'react';
import './third.css';
import img3 from '../../images/third.png';
import imgr from '../../images/cuser.png';
const Third = () => {
  return (
    <>
    <div className='theading'>Trusted by</div>
    <div className="tcontainer">
    <div className="tleft">
        <img src={img3} alt="" />
    </div>
    <div className="tright">
        <div className="allReviews">
        <div className="review" id='slide-1'>
            <div className="rimg">
            <img src={imgr} alt="" />
            <p> Abdul .R <br /> Senior Lead Developer.</p>
            </div>
            
            <p>Leading with code and compassion, In the world of zeros and ones, we build bridges between imagination and implementation.</p>
        </div>
        <div className="review" id='slide-2'>
            <div className="rimg">
            <img src={imgr} alt="" />
            <p>Ibrahim. k<br />Database Administrators (DBA).</p>
            </div>
            {/* <hr /> */}
            <p>The silent guardians of data integrity, With precision and prowess, we sculpt the digital landscapes.</p>
        </div>
        {/* <div className="review" id='slide-3'>
            <div className="rimg">
            <img src={imgr} alt="" />
            <p> Mike Rayan <br />Fixing Local AI(ML)</p>
            </div>
            <p>Fast and Efficient, Lorem ipsum dolor, adipisicing elit. Beatae, earum aspernatur sapiente libero rerum deleniti!</p>
        </div> */}
    </div>
    </div>
    </div>
    </>
  );
};

export default Third;