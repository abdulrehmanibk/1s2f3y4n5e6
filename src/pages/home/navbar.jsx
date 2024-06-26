import React from 'react';
import './navbar.css';
import s1img from '../../image/service.png'
import c1img from '../../image/message.png'
import t1img from '../../image/tick.png'
import h1img from '../../image/home.png'
// import l1img from '../../image/ENYFS.png'
const Navbar = () => {
  return (
    <>
    <nav className="nav_container">
        <div className='nav_logo'>
            {/* <img src={l1img} alt="" /> */}
            <span>ENYFS</span>
            {/* <span>E</span>
            <span>N</span>
            <span>Y</span>
            <span>F</span>
            <span>S</span> */}
        </div>

    <ul>
        <a href="#services"><li><img src={s1img} alt="" /></li></a>
        <a href="#contact"><li><img src={c1img} alt="" /></li></a>
        <a href="#trustedBy"><li><img src={t1img} alt="" /></li></a>
        <a href="#home"><li><img src={h1img} alt="" /></li></a>
    </ul>
    </nav>
    </>
  );
};

export default Navbar;