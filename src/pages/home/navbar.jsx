import React from 'react';
import './navbar.css';
import s1img from '../../image/service.webp';
import c1img from '../../image/message.webp';
import t1img from '../../image/tick.webp';
import h1img from '../../image/home.webp';
import l1img from '../../image/logo5.png'
const Navbar = () => {
  return (
    <>
    <nav className="nav_container">

    {/* <ul className='sidebar'>
        <li><img src={l1img} alt="" /></li>
        <a href="#services"><li><img src={s1img} alt="" /></li></a>
        <a href="#contact"><li><img src={c1img} alt="" /></li></a>
        <a href="#trustedBy"><li><img src={t1img} alt="" /></li></a>
        <a href="#home"><li><img src={h1img} alt="" /></li></a>
    </ul> */}
    <ul>
        <li><img src={l1img} alt="" /></li>
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